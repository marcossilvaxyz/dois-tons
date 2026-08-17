-- =====================================================
-- dois tons - correcao de acesso em varios dispositivos
-- execute uma vez no sql editor do supabase
-- =====================================================

-- dispositivos autorizados para cada perfil
create table if not exists public.duo_member_devices (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    member_id uuid not null references public.duo_members(id) on delete cascade,
    user_id uuid not null unique references auth.users(id) on delete cascade,
    created_at timestamptz not null default now(),
    constraint duo_member_devices_member_user_unique unique (member_id,user_id)
);

create index if not exists duo_member_devices_duo_id_index
on public.duo_member_devices (duo_id);

create index if not exists duo_member_devices_member_id_index
on public.duo_member_devices (member_id);

-- preserva os perfis atuais e registra a identidade atual como primeiro dispositivo
insert into public.duo_member_devices (duo_id,member_id,user_id)
select member.duo_id,member.id,member.user_id
from public.duo_members as member
on conflict (user_id) do nothing;

-- identifica o perfil logico a partir da sessao anonima deste aparelho
create or replace function private.current_member_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
    select device.member_id
    from public.duo_member_devices as device
    where device.user_id = (select auth.uid())
    limit 1;
$$;

create or replace function private.current_duo_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
    select device.duo_id
    from public.duo_member_devices as device
    where device.user_id = (select auth.uid())
    limit 1;
$$;

create or replace function private.is_duo_member(p_duo_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
    select exists (
        select 1
        from public.duo_member_devices as device
        where device.duo_id = p_duo_id
          and device.user_id = (select auth.uid())
    );
$$;

create or replace function private.is_current_member_identity(p_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
    select exists (
        select 1
        from public.duo_member_devices as current_device
        join public.duo_member_devices as owner_device
          on owner_device.member_id = current_device.member_id
        where current_device.user_id = (select auth.uid())
          and owner_device.user_id = p_user_id
    );
$$;

create or replace function private.can_access_storage_path(p_name text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
    select exists (
        select 1
        from public.duo_member_devices as device
        where device.duo_id::text = split_part(p_name,'/',1)
          and device.user_id = (select auth.uid())
    );
$$;

-- o mesmo nome agora vincula um novo dispositivo ao perfil existente
create or replace function public.access_duo(p_code text,p_display_name text)
returns table (
    duo_id uuid,
    member_id uuid,
    display_name text,
    member_count integer
)
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_user_id uuid := auth.uid();
    v_duo_id uuid;
    v_member_id uuid;
    v_name text := btrim(p_display_name);
    v_code text := btrim(p_code);
    v_hash text;
    v_member_count integer;
begin
    if v_user_id is null then
        raise exception 'Sessão inválida. Atualize a página e tente novamente.';
    end if;

    if char_length(v_name) < 2 or char_length(v_name) > 24 then
        raise exception 'Use um nome entre 2 e 24 caracteres.';
    end if;

    if char_length(v_code) < 8 or char_length(v_code) > 64 then
        raise exception 'O código precisa ter entre 8 e 64 caracteres.';
    end if;

    perform pg_advisory_xact_lock(hashtext('dois-tons-access-room'));

    select duo.id,secret.code_hash
    into v_duo_id,v_hash
    from public.duos as duo
    join private.duo_secrets as secret on secret.duo_id = duo.id
    where duo.singleton
    for update of duo;

    if v_duo_id is null then
        raise exception 'A sala ainda não foi configurada no Supabase.';
    end if;

    if extensions.crypt(v_code,v_hash) <> v_hash then
        raise exception 'Código secreto incorreto.';
    end if;

    select device.member_id
    into v_member_id
    from public.duo_member_devices as device
    where device.user_id = v_user_id
      and device.duo_id = v_duo_id
    for update;

    if v_member_id is not null then
        if not exists (
            select 1
            from public.duo_members as member
            where member.id = v_member_id
              and lower(member.display_name) = lower(v_name)
        ) then
            raise exception 'Este aparelho já está vinculado a outro perfil.';
        end if;
    else
        select member.id
        into v_member_id
        from public.duo_members as member
        where member.duo_id = v_duo_id
          and lower(member.display_name) = lower(v_name)
        for update;

        if v_member_id is not null then
            insert into public.duo_member_devices (duo_id,member_id,user_id)
            values (v_duo_id,v_member_id,v_user_id)
            on conflict (user_id) do nothing;
        else
            select count(*)::integer
            into v_member_count
            from public.duo_members as member
            where member.duo_id = v_duo_id;

            if v_member_count < 2 then
                insert into public.duo_members (duo_id,user_id,display_name)
                values (v_duo_id,v_user_id,v_name)
                returning id into v_member_id;

                insert into public.duo_member_devices (duo_id,member_id,user_id)
                values (v_duo_id,v_member_id,v_user_id)
                on conflict (user_id) do nothing;
            else
                raise exception 'A sala já possui duas pessoas. Use exatamente um dos nomes já cadastrados.';
            end if;
        end if;
    end if;

    select count(*)::integer
    into v_member_count
    from public.duo_members as member
    where member.duo_id = v_duo_id;

    return query
    select v_duo_id,v_member_id,v_name,v_member_count;
end;
$$;

-- compartilhamento usa o perfil logico, nao apenas o auth.uid deste aparelho
create or replace function public.share_track(p_track_id uuid)
returns public.shared_tracks
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_user_id uuid := auth.uid();
    v_duo_id uuid := private.current_duo_id();
    v_member_id uuid := private.current_member_id();
    v_recipient_id uuid;
    v_share public.shared_tracks;
begin
    if v_duo_id is null then
        raise exception 'Você ainda não entrou na sala.';
    end if;

    if not exists (
        select 1
        from public.tracks as track
        where track.id = p_track_id
          and track.duo_id = v_duo_id
    ) then
        raise exception 'Música não encontrada nesta sala.';
    end if;

    select member.user_id
    into v_recipient_id
    from public.duo_members as member
    where member.duo_id = v_duo_id
      and member.id <> v_member_id
    limit 1;

    if v_recipient_id is null then
        raise exception 'A outra pessoa ainda não entrou na sala.';
    end if;

    insert into public.shared_tracks (duo_id,track_id,sender_id,recipient_id)
    values (v_duo_id,p_track_id,v_user_id,v_recipient_id)
    on conflict (track_id,recipient_id)
    do update set
        sender_id = excluded.sender_id,
        created_at = now()
    returning * into v_share;

    return v_share;
end;
$$;

-- permissoes para consultar os dispositivos do proprio duo
alter table public.duo_member_devices enable row level security;

drop policy if exists "members read duo devices" on public.duo_member_devices;
create policy "members read duo devices"
on public.duo_member_devices for select
to authenticated
using (
    user_id = (select auth.uid())
    or (select private.is_duo_member(duo_id))
);

-- o mesmo perfil pode administrar uma musica criada em qualquer um de seus aparelhos
drop policy if exists "owners update tracks" on public.tracks;
create policy "owners update tracks"
on public.tracks for update
to authenticated
using ((select private.is_current_member_identity(added_by)))
with check (
    duo_id = (select private.current_duo_id())
    and (select private.is_current_member_identity(added_by))
);

drop policy if exists "owners delete tracks" on public.tracks;
create policy "owners delete tracks"
on public.tracks for delete
to authenticated
using ((select private.is_current_member_identity(added_by)));

revoke all on table public.duo_member_devices from anon,authenticated;
grant select on public.duo_member_devices to authenticated;

grant usage on schema private to authenticated;
grant execute on function private.current_member_id() to authenticated;
grant execute on function private.current_duo_id() to authenticated;
grant execute on function private.is_duo_member(uuid) to authenticated;
grant execute on function private.is_current_member_identity(uuid) to authenticated;
grant execute on function private.can_access_storage_path(text) to authenticated;

grant execute on function public.access_duo(text,text) to authenticated;
grant execute on function public.share_track(uuid) to authenticated;
