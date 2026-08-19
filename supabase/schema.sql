-- Estrutura principal do Dois Tons
-- Execute uma vez no SQL Editor.

-- extensões e schemas
create extension if not exists pgcrypto with schema extensions;

create schema if not exists private;

revoke all on schema private from public;

-- tabelas principais
create table if not exists public.duos (
    id uuid primary key default gen_random_uuid(),
    singleton boolean not null default true unique check (singleton),
    title text not null default 'Dois Tons' check (char_length(title) between 2 and 60),
    created_at timestamptz not null default now()
);

create table if not exists private.duo_secrets (
    duo_id uuid primary key references public.duos(id) on delete cascade,
    code_hash text not null,
    updated_at timestamptz not null default now()
);

create table if not exists public.duo_members (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    user_id uuid not null unique references auth.users(id) on delete cascade,
    display_name text not null check (char_length(display_name) between 2 and 24),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create unique index if not exists duo_members_name_unique
on public.duo_members (duo_id,lower(display_name));

create index if not exists duo_members_duo_id_index
on public.duo_members (duo_id);

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

-- preserva os perfis existentes e transforma o usuário atual em primeiro dispositivo
insert into public.duo_member_devices (duo_id,member_id,user_id)
select member.duo_id,member.id,member.user_id
from public.duo_members as member
on conflict (user_id) do nothing;

create table if not exists public.tracks (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    added_by uuid not null references auth.users(id) on delete restrict,
    title text not null check (char_length(title) between 1 and 80),
    artist text not null check (char_length(artist) between 1 and 80),
    album text not null default 'Adicionada ao Dois Tons' check (char_length(album) between 1 and 100),
    audio_path text,
    source_url text,
    cover_path text,
    cover_url text,
    duration_seconds integer not null default 0 check (duration_seconds >= 0),
    tags text[] not null default '{}',
    file_hash text,
    file_size bigint not null default 0 check (file_size >= 0),
    mime_type text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    constraint tracks_audio_source_check check (audio_path is not null or source_url is not null),
    constraint tracks_id_duo_unique unique (id,duo_id)
);

alter table public.tracks
add column if not exists file_hash text;

alter table public.tracks
add column if not exists file_size bigint not null default 0;

alter table public.tracks
add column if not exists mime_type text;

create index if not exists tracks_duo_id_created_at_index
on public.tracks (duo_id,created_at desc);

create unique index if not exists tracks_duo_file_hash_unique
on public.tracks (duo_id,file_hash)
where file_hash is not null and file_hash <> '';

create table if not exists public.favorites (
    track_id uuid primary key,
    duo_id uuid not null,
    added_by uuid not null references auth.users(id) on delete cascade,
    created_at timestamptz not null default now(),
    constraint favorites_track_duo_fk
        foreign key (track_id,duo_id)
        references public.tracks(id,duo_id)
        on delete cascade
);

create index if not exists favorites_duo_id_index
on public.favorites (duo_id);

create table if not exists public.shared_tracks (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null,
    track_id uuid not null,
    sender_id uuid not null references auth.users(id) on delete cascade,
    recipient_id uuid not null references auth.users(id) on delete cascade,
    created_at timestamptz not null default now(),
    constraint shared_tracks_track_duo_fk
        foreign key (track_id,duo_id)
        references public.tracks(id,duo_id)
        on delete cascade,
    constraint shared_tracks_people_check check (sender_id <> recipient_id),
    constraint shared_tracks_once_unique unique (track_id,recipient_id)
);

create index if not exists shared_tracks_duo_id_index
on public.shared_tracks (duo_id);

create index if not exists shared_tracks_recipient_id_index
on public.shared_tracks (recipient_id);

create table if not exists public.playlists (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    created_by uuid not null references auth.users(id) on delete restrict,
    title text not null check (char_length(title) between 1 and 60),
    description text not null default '' check (char_length(description) <= 160),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    constraint playlists_id_duo_unique unique (id,duo_id)
);

create index if not exists playlists_duo_id_index
on public.playlists (duo_id,updated_at desc);

create table if not exists public.playlist_tracks (
    playlist_id uuid not null,
    track_id uuid not null,
    duo_id uuid not null,
    added_by uuid not null references auth.users(id) on delete restrict,
    position integer not null default 0 check (position >= 0),
    created_at timestamptz not null default now(),
    primary key (playlist_id,track_id),
    constraint playlist_tracks_playlist_duo_fk
        foreign key (playlist_id,duo_id)
        references public.playlists(id,duo_id)
        on delete cascade,
    constraint playlist_tracks_track_duo_fk
        foreign key (track_id,duo_id)
        references public.tracks(id,duo_id)
        on delete cascade
);

create index if not exists playlist_tracks_duo_id_index
on public.playlist_tracks (duo_id);

create table if not exists public.jam_sessions (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    invite_code text not null unique,
    current_track_id uuid references public.tracks(id) on delete set null,
    is_playing boolean not null default false,
    position_seconds numeric(12,3) not null default 0 check (position_seconds >= 0),
    started_at timestamptz,
    revision bigint not null default 1,
    active boolean not null default true,
    created_by uuid not null references auth.users(id) on delete restrict,
    updated_by uuid not null references auth.users(id) on delete restrict,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create unique index if not exists jam_sessions_one_active_per_duo
on public.jam_sessions (duo_id)
where active;

create index if not exists jam_sessions_duo_id_index
on public.jam_sessions (duo_id,updated_at desc);

-- funções auxiliares privadas
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
        where current_device.user_id = (select auth.uid())
          and (
              exists (
                  select 1
                  from public.duo_members as owner_member
                  where owner_member.id = current_device.member_id
                    and owner_member.user_id = p_user_id
              )
              or exists (
                  select 1
                  from public.duo_member_devices as owner_device
                  where owner_device.member_id = current_device.member_id
                    and owner_device.user_id = p_user_id
              )
          )
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

create or replace function private.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

-- cada aparelho mantém uma identidade anônima vinculada ao perfil

-- configuração inicial
create or replace function private.configure_room(p_code text,p_title text default 'Dois Tons')
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid;
    v_code text := btrim(p_code);
begin
    if char_length(v_code) < 8 or char_length(v_code) > 64 then
        raise exception 'Use um código entre 8 e 64 caracteres.';
    end if;

    if char_length(btrim(p_title)) < 2 or char_length(btrim(p_title)) > 60 then
        raise exception 'Use um nome de sala entre 2 e 60 caracteres.';
    end if;

    perform pg_advisory_xact_lock(hashtext('dois-tons-configure-room'));

    select duo.id
    into v_duo_id
    from public.duos as duo
    where duo.singleton
    for update;

    if v_duo_id is null then
        insert into public.duos (title)
        values (btrim(p_title))
        returning id into v_duo_id;
    else
        update public.duos
        set title = btrim(p_title)
        where id = v_duo_id;
    end if;

    insert into private.duo_secrets (duo_id,code_hash,updated_at)
    values (
        v_duo_id,
        extensions.crypt(v_code,extensions.gen_salt('bf',11)),
        now()
    )
    on conflict (duo_id)
    do update set
        code_hash = excluded.code_hash,
        updated_at = excluded.updated_at;

    return v_duo_id;
end;
$$;

-- acesso por código compartilhado
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
    v_current_member_id uuid;
    v_requested_member_id uuid;
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
    into v_current_member_id
    from public.duo_member_devices as device
    where device.user_id = v_user_id
      and device.duo_id = v_duo_id
    for update;

    select member.id
    into v_requested_member_id
    from public.duo_members as member
    where member.duo_id = v_duo_id
      and lower(member.display_name) = lower(v_name)
    for update;

    -- se o perfil já existe, o cliente pode acessá-lo depois de validar o código.
    -- ao trocar de perfil, uma nova sessão anônima é criada para preservar a autoria histórica.
    if v_requested_member_id is not null then
        v_member_id := v_requested_member_id;

        if v_current_member_id is null then
            insert into public.duo_member_devices (duo_id,member_id,user_id)
            values (v_duo_id,v_member_id,v_user_id)
            on conflict (user_id)
            do update set
                duo_id = excluded.duo_id,
                member_id = excluded.member_id;
        elsif v_current_member_id <> v_member_id then
            -- cada perfil mantém uma identidade anônima estável para preservar autoria e permissões históricas
            raise exception 'DOIS_TONS_PROFILE_SWITCH_REQUIRES_NEW_SESSION';
        end if;
    else
        select count(*)::integer
        into v_member_count
        from public.duo_members as member
        where member.duo_id = v_duo_id;

        if v_current_member_id is not null then
            if v_member_count >= 2 then
                raise exception 'Os dois perfis já foram cadastrados. Use exatamente um dos nomes existentes.';
            end if;

            raise exception 'Este aparelho já está vinculado a um perfil. Um novo perfil deve ser criado em outro aparelho; para alternar, informe um nome já cadastrado.';
        end if;

        if v_member_count < 2 then
            insert into public.duo_members (duo_id,user_id,display_name)
            values (v_duo_id,v_user_id,v_name)
            returning id into v_member_id;

            insert into public.duo_member_devices (duo_id,member_id,user_id)
            values (v_duo_id,v_member_id,v_user_id)
            on conflict (user_id) do nothing;
        else
            raise exception 'Os dois perfis já foram cadastrados. Use exatamente um dos nomes existentes.';
        end if;
    end if;

    select member.display_name
    into v_name
    from public.duo_members as member
    where member.id = v_member_id;

    select count(*)::integer
    into v_member_count
    from public.duo_members as member
    where member.duo_id = v_duo_id;

    return query
    select v_duo_id,v_member_id,v_name,v_member_count;
end;
$$;

-- compartilhamento de músicas
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
        raise exception 'Nenhum perfil está ativo nesta sessão.';
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
        raise exception 'O outro perfil ainda não está disponível no Dois Tons.';
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

-- playlists compartilhadas
create or replace function public.add_track_to_playlist(p_playlist_id uuid,p_track_id uuid)
returns public.playlist_tracks
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_user_id uuid := auth.uid();
    v_duo_id uuid := private.current_duo_id();
    v_position integer;
    v_item public.playlist_tracks;
begin
    if v_duo_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    if not exists (
        select 1
        from public.playlists as playlist
        where playlist.id = p_playlist_id
          and playlist.duo_id = v_duo_id
    ) then
        raise exception 'Playlist não encontrada.';
    end if;

    if not exists (
        select 1
        from public.tracks as track
        where track.id = p_track_id
          and track.duo_id = v_duo_id
    ) then
        raise exception 'Música não encontrada.';
    end if;

    select coalesce(max(item.position),-1) + 1
    into v_position
    from public.playlist_tracks as item
    where item.playlist_id = p_playlist_id;

    insert into public.playlist_tracks (playlist_id,track_id,duo_id,added_by,position)
    values (p_playlist_id,p_track_id,v_duo_id,v_user_id,v_position)
    on conflict (playlist_id,track_id)
    do update set position = public.playlist_tracks.position
    returning * into v_item;

    update public.playlists
    set updated_at = now()
    where id = p_playlist_id;

    return v_item;
end;
$$;

-- Jam sincronizada
create or replace function public.server_time_ms()
returns bigint
language sql
volatile
set search_path = ''
as $$
    select floor(extract(epoch from clock_timestamp()) * 1000)::bigint;
$$;

create or replace function public.get_or_create_jam(
    p_track_id uuid default null,
    p_is_playing boolean default false,
    p_position_seconds numeric default 0
)
returns setof public.jam_sessions
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_user_id uuid := auth.uid();
    v_duo_id uuid := private.current_duo_id();
    v_jam_id uuid;
begin
    if v_duo_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    if p_track_id is not null and not exists (
        select 1
        from public.tracks as track
        where track.id = p_track_id
          and track.duo_id = v_duo_id
    ) then
        raise exception 'Música não encontrada nesta sala.';
    end if;

    perform pg_advisory_xact_lock(hashtext(v_duo_id::text));

    select jam.id
    into v_jam_id
    from public.jam_sessions as jam
    where jam.duo_id = v_duo_id
      and jam.active
    limit 1
    for update;

    if v_jam_id is null then
        insert into public.jam_sessions (
            duo_id,
            invite_code,
            current_track_id,
            is_playing,
            position_seconds,
            started_at,
            created_by,
            updated_by
        )
        values (
            v_duo_id,
            upper(substr(encode(extensions.gen_random_bytes(8),'hex'),1,6)),
            p_track_id,
            coalesce(p_is_playing,false) and p_track_id is not null,
            greatest(coalesce(p_position_seconds,0),0),
            case
                when coalesce(p_is_playing,false) and p_track_id is not null then clock_timestamp()
                else null
            end,
            v_user_id,
            v_user_id
        )
        returning id into v_jam_id;
    end if;

    return query
    select jam.*
    from public.jam_sessions as jam
    where jam.id = v_jam_id;
end;
$$;

create or replace function public.set_jam_state(
    p_jam_id uuid,
    p_track_id uuid,
    p_is_playing boolean,
    p_position_seconds numeric
)
returns setof public.jam_sessions
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_user_id uuid := auth.uid();
    v_duo_id uuid := private.current_duo_id();
begin
    if v_duo_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    if p_track_id is not null and not exists (
        select 1
        from public.tracks as track
        where track.id = p_track_id
          and track.duo_id = v_duo_id
    ) then
        raise exception 'Música não encontrada nesta sala.';
    end if;

    update public.jam_sessions as jam
    set current_track_id = p_track_id,
        is_playing = coalesce(p_is_playing,false) and p_track_id is not null,
        position_seconds = greatest(coalesce(p_position_seconds,0),0),
        started_at = case
            when coalesce(p_is_playing,false) and p_track_id is not null then clock_timestamp()
            else null
        end,
        revision = jam.revision + 1,
        updated_by = v_user_id,
        updated_at = clock_timestamp()
    where jam.id = p_jam_id
      and jam.duo_id = v_duo_id
      and jam.active;

    if not found then
        raise exception 'Esta Jam não está mais ativa.';
    end if;

    return query
    select jam.*
    from public.jam_sessions as jam
    where jam.id = p_jam_id;
end;
$$;

create or replace function public.end_jam(p_jam_id uuid)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid := private.current_duo_id();
begin
    update public.jam_sessions as jam
    set active = false,
        is_playing = false,
        started_at = null,
        revision = jam.revision + 1,
        updated_by = auth.uid(),
        updated_at = clock_timestamp()
    where jam.id = p_jam_id
      and jam.duo_id = v_duo_id
      and jam.active;

    return found;
end;
$$;

-- gatilhos de data de atualização
drop trigger if exists duo_members_set_updated_at on public.duo_members;
create trigger duo_members_set_updated_at
before update on public.duo_members
for each row execute function private.set_updated_at();

drop trigger if exists tracks_set_updated_at on public.tracks;
create trigger tracks_set_updated_at
before update on public.tracks
for each row execute function private.set_updated_at();

drop trigger if exists playlists_set_updated_at on public.playlists;
create trigger playlists_set_updated_at
before update on public.playlists
for each row execute function private.set_updated_at();

-- row level security
alter table public.duos enable row level security;
alter table public.duo_members enable row level security;
alter table public.duo_member_devices enable row level security;
alter table public.tracks enable row level security;
alter table public.favorites enable row level security;
alter table public.shared_tracks enable row level security;
alter table public.playlists enable row level security;
alter table public.playlist_tracks enable row level security;
alter table public.jam_sessions enable row level security;

drop policy if exists "members read their duo" on public.duos;
create policy "members read their duo"
on public.duos for select
to authenticated
using ((select private.is_duo_member(id)));

drop policy if exists "members read duo members" on public.duo_members;
create policy "members read duo members"
on public.duo_members for select
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members read duo devices" on public.duo_member_devices;
create policy "members read duo devices"
on public.duo_member_devices for select
to authenticated
using (
    user_id = (select auth.uid())
    or (select private.is_duo_member(duo_id))
);

drop policy if exists "members read tracks" on public.tracks;
create policy "members read tracks"
on public.tracks for select
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members add tracks" on public.tracks;
create policy "members add tracks"
on public.tracks for insert
to authenticated
with check (
    duo_id = (select private.current_duo_id())
    and added_by = (select auth.uid())
);

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

drop policy if exists "members read favorites" on public.favorites;
create policy "members read favorites"
on public.favorites for select
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members add favorites" on public.favorites;
create policy "members add favorites"
on public.favorites for insert
to authenticated
with check (
    duo_id = (select private.current_duo_id())
    and added_by = (select auth.uid())
);

drop policy if exists "members remove favorites" on public.favorites;
create policy "members remove favorites"
on public.favorites for delete
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members read shared tracks" on public.shared_tracks;
create policy "members read shared tracks"
on public.shared_tracks for select
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members read playlists" on public.playlists;
create policy "members read playlists"
on public.playlists for select
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members create playlists" on public.playlists;
create policy "members create playlists"
on public.playlists for insert
to authenticated
with check (
    duo_id = (select private.current_duo_id())
    and created_by = (select auth.uid())
);

drop policy if exists "members update playlists" on public.playlists;
create policy "members update playlists"
on public.playlists for update
to authenticated
using ((select private.is_duo_member(duo_id)))
with check ((select private.is_duo_member(duo_id)));

drop policy if exists "members delete playlists" on public.playlists;
create policy "members delete playlists"
on public.playlists for delete
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members read playlist tracks" on public.playlist_tracks;
create policy "members read playlist tracks"
on public.playlist_tracks for select
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members remove playlist tracks" on public.playlist_tracks;
create policy "members remove playlist tracks"
on public.playlist_tracks for delete
to authenticated
using ((select private.is_duo_member(duo_id)));

drop policy if exists "members read jams" on public.jam_sessions;
create policy "members read jams"
on public.jam_sessions for select
to authenticated
using ((select private.is_duo_member(duo_id)));

-- privilégios da api
revoke all on table
    public.duos,
    public.duo_members,
    public.duo_member_devices,
    public.tracks,
    public.favorites,
    public.shared_tracks,
    public.playlists,
    public.playlist_tracks,
    public.jam_sessions
from anon,authenticated;

grant select on public.duos,public.duo_members,public.duo_member_devices to authenticated;
grant select,insert,update,delete on public.tracks to authenticated;
grant select,insert,delete on public.favorites to authenticated;
grant select on public.shared_tracks to authenticated;
grant select,insert,update,delete on public.playlists to authenticated;
grant select,delete on public.playlist_tracks to authenticated;
grant select on public.jam_sessions to authenticated;

revoke all on function private.configure_room(text,text) from public,anon,authenticated;

revoke all on function public.access_duo(text,text) from public,anon;
revoke all on function public.share_track(uuid) from public,anon;
revoke all on function public.add_track_to_playlist(uuid,uuid) from public,anon;
revoke all on function public.server_time_ms() from public,anon;
revoke all on function public.get_or_create_jam(uuid,boolean,numeric) from public,anon;
revoke all on function public.set_jam_state(uuid,uuid,boolean,numeric) from public,anon;
revoke all on function public.end_jam(uuid) from public,anon;

grant execute on function public.access_duo(text,text) to authenticated;
grant execute on function public.share_track(uuid) to authenticated;
grant execute on function public.add_track_to_playlist(uuid,uuid) to authenticated;
grant execute on function public.server_time_ms() to authenticated;
grant execute on function public.get_or_create_jam(uuid,boolean,numeric) to authenticated;
grant execute on function public.set_jam_state(uuid,uuid,boolean,numeric) to authenticated;
grant execute on function public.end_jam(uuid) to authenticated;

grant usage on schema private to authenticated;
grant execute on function private.current_member_id() to authenticated;
grant execute on function private.current_duo_id() to authenticated;
grant execute on function private.is_current_member_identity(uuid) to authenticated;
grant execute on function private.is_duo_member(uuid) to authenticated;
grant execute on function private.can_access_storage_path(text) to authenticated;

-- bucket privado para áudios e capas
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values (
    'media',
    'media',
    false,
    104857600,
    array[
        'audio/mpeg',
        'audio/mp4',
        'audio/aac',
        'audio/x-m4a',
        'audio/wav',
        'audio/wave',
        'audio/x-wav',
        'audio/ogg',
        'audio/flac',
        'audio/x-flac',
        'video/mp4',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/heic',
        'image/heif'
    ]
)
on conflict (id)
do update set
    public = false,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "members read media" on storage.objects;
create policy "members read media"
on storage.objects for select
to authenticated
using (
    bucket_id = 'media'
    and (select private.can_access_storage_path(name))
);

drop policy if exists "members upload media" on storage.objects;
create policy "members upload media"
on storage.objects for insert
to authenticated
with check (
    bucket_id = 'media'
    and (select private.can_access_storage_path(name))
);

drop policy if exists "members delete media" on storage.objects;
create policy "members delete media"
on storage.objects for delete
to authenticated
using (
    bucket_id = 'media'
    and (select private.can_access_storage_path(name))
);

-- realtime para biblioteca e Jam
do $$
declare
    table_name text;
begin
    foreach table_name in array array[
        'tracks',
        'duo_members',
        'favorites',
        'shared_tracks',
        'playlists',
        'playlist_tracks',
        'jam_sessions'
    ]
    loop
        if not exists (
            select 1
            from pg_publication_tables
            where pubname = 'supabase_realtime'
              and schemaname = 'public'
              and tablename = table_name
        ) then
            execute format('alter publication supabase_realtime add table public.%I',table_name);
        end if;
    end loop;
end;
$$;

-- Depois do schema, configure o código da sala uma vez:
-- select private.configure_room('seu-codigo-com-8-ou-mais','Dois Tons');

-- Playlists e histórico

create table if not exists public.playlist_activity (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    playlist_id uuid not null references public.playlists(id) on delete cascade,
    actor_id uuid references auth.users(id) on delete set null,
    action text not null check (action in ('created','updated','track_added','track_removed','track_moved')),
    track_id uuid references public.tracks(id) on delete set null,
    details jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now()
);

create index if not exists playlist_activity_playlist_created_index
on public.playlist_activity (playlist_id,created_at desc);

create index if not exists playlist_activity_duo_id_index
on public.playlist_activity (duo_id,created_at desc);

create or replace function private.log_playlist_change()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    if tg_op = 'INSERT' then
        insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,details)
        values (new.duo_id,new.id,auth.uid(),'created',jsonb_build_object('title',new.title));
    elsif tg_op = 'UPDATE'
      and (old.title is distinct from new.title or old.description is distinct from new.description) then
        insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,details)
        values (new.duo_id,new.id,auth.uid(),'updated',jsonb_build_object('title',new.title));
    end if;

    return new;
end;
$$;

create or replace function private.log_playlist_track_insert()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_title text;
begin
    select track.title into v_title from public.tracks as track where track.id = new.track_id;

    insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,track_id,details)
    values (
        new.duo_id,new.playlist_id,auth.uid(),'track_added',new.track_id,
        jsonb_build_object('track_title',coalesce(v_title,'Música'))
    );

    return new;
end;
$$;

create or replace function private.log_playlist_track_delete()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_title text;
begin
    if not exists (select 1 from public.playlists as playlist where playlist.id = old.playlist_id) then
        return old;
    end if;

    select track.title into v_title from public.tracks as track where track.id = old.track_id;

    insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,track_id,details)
    values (
        old.duo_id,old.playlist_id,auth.uid(),'track_removed',old.track_id,
        jsonb_build_object('track_title',coalesce(v_title,'Música'))
    );

    return old;
end;
$$;

drop trigger if exists playlist_activity_on_playlist_change on public.playlists;
create trigger playlist_activity_on_playlist_change
after insert or update on public.playlists
for each row execute function private.log_playlist_change();

drop trigger if exists playlist_activity_on_track_insert on public.playlist_tracks;
create trigger playlist_activity_on_track_insert
after insert on public.playlist_tracks
for each row execute function private.log_playlist_track_insert();

drop trigger if exists playlist_activity_on_track_delete on public.playlist_tracks;
create trigger playlist_activity_on_track_delete
after delete on public.playlist_tracks
for each row execute function private.log_playlist_track_delete();

create or replace function public.move_playlist_track(p_playlist_id uuid,p_track_id uuid,p_direction text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid := private.current_duo_id();
    v_current public.playlist_tracks;
    v_target public.playlist_tracks;
    v_title text;
begin
    if v_duo_id is null then raise exception 'Nenhum perfil está ativo nesta sessão.'; end if;
    if p_direction not in ('up','down') then raise exception 'Direção inválida.'; end if;

    select item.* into v_current
    from public.playlist_tracks as item
    where item.playlist_id = p_playlist_id and item.track_id = p_track_id and item.duo_id = v_duo_id;

    if v_current.playlist_id is null then raise exception 'Música não encontrada nesta playlist.'; end if;

    if p_direction = 'up' then
        select item.* into v_target
        from public.playlist_tracks as item
        where item.playlist_id = p_playlist_id and item.position < v_current.position
        order by item.position desc limit 1;
    else
        select item.* into v_target
        from public.playlist_tracks as item
        where item.playlist_id = p_playlist_id and item.position > v_current.position
        order by item.position asc limit 1;
    end if;

    if v_target.playlist_id is null then return false; end if;

    update public.playlist_tracks
    set position = case
        when track_id = v_current.track_id then v_target.position
        when track_id = v_target.track_id then v_current.position
        else position
    end
    where playlist_id = p_playlist_id and track_id in (v_current.track_id,v_target.track_id);

    update public.playlists set updated_at = now() where id = p_playlist_id;
    select track.title into v_title from public.tracks as track where track.id = p_track_id;

    insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,track_id,details)
    values (
        v_duo_id,p_playlist_id,auth.uid(),'track_moved',p_track_id,
        jsonb_build_object('track_title',coalesce(v_title,'Música'),'direction',p_direction)
    );

    return true;
end;
$$;

alter table public.playlist_activity enable row level security;

drop policy if exists "members read playlist activity" on public.playlist_activity;
create policy "members read playlist activity"
on public.playlist_activity for select
to authenticated
using ((select private.is_duo_member(duo_id)));

revoke all on public.playlist_activity from anon,authenticated;
grant select on public.playlist_activity to authenticated;
revoke all on function public.move_playlist_track(uuid,uuid,text) from public,anon;
grant execute on function public.move_playlist_track(uuid,uuid,text) to authenticated;
-- Histórico de reprodução e estatísticas

create table if not exists public.listening_history (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    member_id uuid not null references public.duo_members(id) on delete cascade,
    track_id uuid not null references public.tracks(id) on delete cascade,
    session_id uuid not null,
    listened_seconds integer not null default 0 check (listened_seconds >= 0),
    completed boolean not null default false,
    started_at timestamptz not null default now(),
    last_listened_at timestamptz not null default now(),
    constraint listening_history_member_session_unique unique (member_id,session_id)
);

create index if not exists listening_history_duo_date_index
on public.listening_history (duo_id,last_listened_at desc);

create index if not exists listening_history_member_date_index
on public.listening_history (member_id,last_listened_at desc);

create index if not exists listening_history_track_index
on public.listening_history (track_id);

create or replace function public.record_listening_progress(
    p_track_id uuid,
    p_session_id uuid,
    p_listened_seconds integer,
    p_completed boolean default false
)
returns public.listening_history
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid := private.current_duo_id();
    v_member_id uuid := private.current_member_id();
    v_duration integer := 0;
    v_seconds integer := greatest(0,coalesce(p_listened_seconds,0));
    v_result public.listening_history;
begin
    if v_duo_id is null or v_member_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    select greatest(0,ceil(coalesce(track.duration_seconds,0)))::integer
    into v_duration
    from public.tracks as track
    where track.id = p_track_id
      and track.duo_id = v_duo_id;

    if not found then
        raise exception 'Música não encontrada nesta sala.';
    end if;

    if v_duration > 0 then
        v_seconds := least(v_seconds,v_duration);
    else
        v_seconds := least(v_seconds,86400);
    end if;

    insert into public.listening_history (
        duo_id,
        member_id,
        track_id,
        session_id,
        listened_seconds,
        completed,
        started_at,
        last_listened_at
    )
    values (
        v_duo_id,
        v_member_id,
        p_track_id,
        p_session_id,
        v_seconds,
        coalesce(p_completed,false),
        now(),
        now()
    )
    on conflict (member_id,session_id)
    do update set
        listened_seconds = greatest(public.listening_history.listened_seconds,excluded.listened_seconds),
        completed = public.listening_history.completed or excluded.completed,
        last_listened_at = now()
    where public.listening_history.track_id = excluded.track_id
    returning * into v_result;

    return v_result;
end;
$$;

alter table public.listening_history enable row level security;

drop policy if exists "members read listening history" on public.listening_history;
create policy "members read listening history"
on public.listening_history for select
to authenticated
using ((select private.is_duo_member(duo_id)));

revoke all on public.listening_history from anon,authenticated;
grant select on public.listening_history to authenticated;

revoke all on function public.record_listening_progress(uuid,uuid,integer,boolean) from public,anon;
grant execute on function public.record_listening_progress(uuid,uuid,integer,boolean) to authenticated;

-- Atividades e notificações

create table if not exists public.activity_notifications (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    recipient_member_id uuid not null references public.duo_members(id) on delete cascade,
    actor_member_id uuid references public.duo_members(id) on delete set null,
    event_type text not null check (event_type in ('track_added','track_shared','playlist_activity','jam_started','jam_ended')),
    source_key text not null,
    track_id uuid references public.tracks(id) on delete set null,
    playlist_id uuid references public.playlists(id) on delete set null,
    jam_id uuid references public.jam_sessions(id) on delete set null,
    details jsonb not null default '{}'::jsonb,
    read_at timestamptz,
    created_at timestamptz not null default now(),
    constraint activity_notifications_recipient_source_unique unique (recipient_member_id,source_key)
);

create index if not exists activity_notifications_recipient_date_index
on public.activity_notifications (recipient_member_id,created_at desc);

create index if not exists activity_notifications_recipient_unread_index
on public.activity_notifications (recipient_member_id,created_at desc)
where read_at is null;

create index if not exists activity_notifications_duo_date_index
on public.activity_notifications (duo_id,created_at desc);

create or replace function private.member_id_for_user(p_user_id uuid)
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
    select coalesce(
        (
            select member.id
            from public.duo_members as member
            where member.user_id = p_user_id
            limit 1
        ),
        (
            select device.member_id
            from public.duo_member_devices as device
            where device.user_id = p_user_id
            limit 1
        )
    );
$$;

create or replace function private.create_duo_activity(
    p_duo_id uuid,
    p_actor_member_id uuid,
    p_event_type text,
    p_source_key text,
    p_track_id uuid default null,
    p_playlist_id uuid default null,
    p_jam_id uuid default null,
    p_details jsonb default '{}'::jsonb
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
    if p_duo_id is null or p_actor_member_id is null or coalesce(p_source_key,'') = '' then
        return;
    end if;

    insert into public.activity_notifications (
        duo_id,
        recipient_member_id,
        actor_member_id,
        event_type,
        source_key,
        track_id,
        playlist_id,
        jam_id,
        details
    )
    select
        p_duo_id,
        member.id,
        p_actor_member_id,
        p_event_type,
        p_source_key,
        p_track_id,
        p_playlist_id,
        p_jam_id,
        coalesce(p_details,'{}'::jsonb)
    from public.duo_members as member
    where member.duo_id = p_duo_id
      and member.id <> p_actor_member_id
    on conflict (recipient_member_id,source_key) do nothing;
end;
$$;

create or replace function private.log_track_activity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_actor_member_id uuid := private.member_id_for_user(new.added_by);
    v_recipient public.duo_members%rowtype;
    v_existing_id uuid;
    v_existing_count integer;
begin
    if v_actor_member_id is null then
        return new;
    end if;

    for v_recipient in
        select member.*
        from public.duo_members as member
        where member.duo_id = new.duo_id
          and member.id <> v_actor_member_id
    loop
        select notification.id,
               greatest(1,coalesce((notification.details ->> 'count')::integer,1))
        into v_existing_id,v_existing_count
        from public.activity_notifications as notification
        where notification.recipient_member_id = v_recipient.id
          and notification.actor_member_id = v_actor_member_id
          and notification.event_type = 'track_added'
          and notification.read_at is null
          and notification.created_at >= now() - interval '90 seconds'
        order by notification.created_at desc
        limit 1
        for update;

        if v_existing_id is not null then
            update public.activity_notifications
            set track_id = new.id,
                details = jsonb_build_object(
                    'title',new.title,
                    'track_title',new.title,
                    'artist',new.artist,
                    'count',v_existing_count + 1
                ),
                created_at = now()
            where id = v_existing_id;
        else
            insert into public.activity_notifications (
                duo_id,
                recipient_member_id,
                actor_member_id,
                event_type,
                source_key,
                track_id,
                details
            )
            values (
                new.duo_id,
                v_recipient.id,
                v_actor_member_id,
                'track_added',
                'track-added:' || new.id::text,
                new.id,
                jsonb_build_object(
                    'title',new.title,
                    'track_title',new.title,
                    'artist',new.artist,
                    'count',1
                )
            )
            on conflict (recipient_member_id,source_key) do nothing;
        end if;
    end loop;

    return new;
end;
$$;

create or replace function private.log_shared_track_activity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_actor_member_id uuid := private.member_id_for_user(new.sender_id);
    v_title text;
    v_artist text;
begin
    select track.title,track.artist
    into v_title,v_artist
    from public.tracks as track
    where track.id = new.track_id;

    perform private.create_duo_activity(
        new.duo_id,
        v_actor_member_id,
        'track_shared',
        'track-shared:' || new.id::text,
        new.track_id,
        null,
        null,
        jsonb_build_object(
            'title',coalesce(v_title,'Música'),
            'track_title',coalesce(v_title,'Música'),
            'artist',coalesce(v_artist,'')
        )
    );

    return new;
end;
$$;

create or replace function private.log_playlist_notification_activity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_actor_member_id uuid := private.member_id_for_user(new.actor_id);
    v_playlist_title text;
begin
    select playlist.title
    into v_playlist_title
    from public.playlists as playlist
    where playlist.id = new.playlist_id;

    perform private.create_duo_activity(
        new.duo_id,
        v_actor_member_id,
        'playlist_activity',
        'playlist-activity:' || new.id::text,
        new.track_id,
        new.playlist_id,
        null,
        coalesce(new.details,'{}'::jsonb) || jsonb_build_object(
            'action',new.action,
            'playlist_title',coalesce(v_playlist_title,new.details ->> 'title','Playlist')
        )
    );

    return new;
end;
$$;

create or replace function private.log_jam_notification_activity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_actor_member_id uuid;
    v_track_title text;
begin
    if tg_op = 'INSERT' then
        v_actor_member_id := private.member_id_for_user(new.created_by);

        if new.current_track_id is not null then
            select track.title into v_track_title
            from public.tracks as track
            where track.id = new.current_track_id;
        end if;

        perform private.create_duo_activity(
            new.duo_id,
            v_actor_member_id,
            'jam_started',
            'jam-started:' || new.id::text,
            new.current_track_id,
            null,
            new.id,
            jsonb_build_object(
                'invite_code',new.invite_code,
                'track_title',coalesce(v_track_title,'')
            )
        );
    elsif old.active and not new.active then
        v_actor_member_id := private.member_id_for_user(new.updated_by);

        perform private.create_duo_activity(
            new.duo_id,
            v_actor_member_id,
            'jam_ended',
            'jam-ended:' || new.id::text,
            new.current_track_id,
            null,
            new.id,
            jsonb_build_object('invite_code',new.invite_code)
        );
    end if;

    return new;
end;
$$;

create or replace function public.mark_activity_notifications(p_notification_id uuid default null)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid := private.current_duo_id();
    v_member_id uuid := private.current_member_id();
    v_updated integer := 0;
begin
    if v_duo_id is null or v_member_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    update public.activity_notifications as notification
    set read_at = coalesce(notification.read_at,now())
    where notification.duo_id = v_duo_id
      and notification.recipient_member_id = v_member_id
      and notification.read_at is null
      and (p_notification_id is null or notification.id = p_notification_id);

    get diagnostics v_updated = row_count;

    return v_updated;
end;
$$;

drop trigger if exists activity_on_track_insert on public.tracks;
create trigger activity_on_track_insert
after insert on public.tracks
for each row execute function private.log_track_activity();

drop trigger if exists activity_on_shared_track_insert on public.shared_tracks;
create trigger activity_on_shared_track_insert
after insert on public.shared_tracks
for each row execute function private.log_shared_track_activity();

drop trigger if exists activity_on_playlist_activity_insert on public.playlist_activity;
create trigger activity_on_playlist_activity_insert
after insert on public.playlist_activity
for each row execute function private.log_playlist_notification_activity();

drop trigger if exists activity_on_jam_change on public.jam_sessions;
create trigger activity_on_jam_change
after insert or update on public.jam_sessions
for each row execute function private.log_jam_notification_activity();

alter table public.activity_notifications enable row level security;

drop policy if exists "members read own activity notifications" on public.activity_notifications;
create policy "members read own activity notifications"
on public.activity_notifications for select
to authenticated
using (
    duo_id = (select private.current_duo_id())
    and recipient_member_id = (select private.current_member_id())
);

revoke all on public.activity_notifications from anon,authenticated;
grant select on public.activity_notifications to authenticated;

revoke all on function public.mark_activity_notifications(uuid) from public,anon;
grant execute on function public.mark_activity_notifications(uuid) to authenticated;

-- realtime das atividades; evita erro se a tabela já estiver publicada
do $$
begin
    if exists (
        select 1
        from pg_publication
        where pubname = 'supabase_realtime'
    ) and not exists (
        select 1
        from pg_publication_tables
        where pubname = 'supabase_realtime'
          and schemaname = 'public'
          and tablename = 'activity_notifications'
    ) then
        alter publication supabase_realtime add table public.activity_notifications;
    end if;
end;
$$;

-- Dedicatórias

create table if not exists public.music_dedications (
    id uuid primary key default gen_random_uuid(),
    duo_id uuid not null references public.duos(id) on delete cascade,
    sender_member_id uuid not null references public.duo_members(id) on delete cascade,
    recipient_member_id uuid not null references public.duo_members(id) on delete cascade,
    track_id uuid references public.tracks(id) on delete set null,
    track_title text not null,
    track_artist text not null default '',
    track_album text not null default '',
    message text not null check (char_length(message) between 1 and 500),
    read_at timestamptz,
    created_at timestamptz not null default now(),
    constraint music_dedications_different_members check (sender_member_id <> recipient_member_id)
);

create index if not exists music_dedications_duo_date_index
on public.music_dedications (duo_id,created_at desc);

create index if not exists music_dedications_recipient_date_index
on public.music_dedications (recipient_member_id,created_at desc);

create index if not exists music_dedications_recipient_unread_index
on public.music_dedications (recipient_member_id,created_at desc)
where read_at is null;

create or replace function public.send_music_dedication(
    p_track_id uuid,
    p_message text
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid := private.current_duo_id();
    v_sender_member_id uuid := private.current_member_id();
    v_recipient_member_id uuid;
    v_track public.tracks%rowtype;
    v_message text := btrim(coalesce(p_message,''));
    v_dedication_id uuid;
begin
    if v_duo_id is null or v_sender_member_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    if char_length(v_message) < 1 then
        raise exception 'Escreva um recado antes de enviar.';
    end if;

    if char_length(v_message) > 500 then
        raise exception 'O recado pode ter no máximo 500 caracteres.';
    end if;

    select member.id
    into v_recipient_member_id
    from public.duo_members as member
    where member.duo_id = v_duo_id
      and member.id <> v_sender_member_id
    order by member.created_at
    limit 1;

    if v_recipient_member_id is null then
        raise exception 'O outro perfil ainda precisa entrar.';
    end if;

    select track.*
    into v_track
    from public.tracks as track
    where track.id = p_track_id
      and track.duo_id = v_duo_id;

    if v_track.id is null then
        raise exception 'Esta música não pertence à sala.';
    end if;

    insert into public.music_dedications (
        duo_id,
        sender_member_id,
        recipient_member_id,
        track_id,
        track_title,
        track_artist,
        track_album,
        message
    )
    values (
        v_duo_id,
        v_sender_member_id,
        v_recipient_member_id,
        v_track.id,
        v_track.title,
        coalesce(v_track.artist,''),
        coalesce(v_track.album,''),
        v_message
    )
    returning id into v_dedication_id;

    return v_dedication_id;
end;
$$;

create or replace function public.mark_music_dedications(p_dedication_id uuid default null)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid := private.current_duo_id();
    v_member_id uuid := private.current_member_id();
    v_updated integer := 0;
begin
    if v_duo_id is null or v_member_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    update public.music_dedications as dedication
    set read_at = coalesce(dedication.read_at,now())
    where dedication.duo_id = v_duo_id
      and dedication.recipient_member_id = v_member_id
      and dedication.read_at is null
      and (p_dedication_id is null or dedication.id = p_dedication_id);

    get diagnostics v_updated = row_count;

    return v_updated;
end;
$$;

-- inclui dedicatórias na central de atividades
alter table if exists public.activity_notifications
    drop constraint if exists activity_notifications_event_type_check;

alter table if exists public.activity_notifications
    add constraint activity_notifications_event_type_check
    check (event_type in ('track_added','track_shared','playlist_activity','jam_started','jam_ended','dedication_received'));

create or replace function private.log_music_dedication_activity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    if to_regclass('public.activity_notifications') is null then
        return new;
    end if;

    insert into public.activity_notifications (
        duo_id,
        recipient_member_id,
        actor_member_id,
        event_type,
        source_key,
        track_id,
        details
    )
    values (
        new.duo_id,
        new.recipient_member_id,
        new.sender_member_id,
        'dedication_received',
        'dedication:' || new.id::text,
        new.track_id,
        jsonb_build_object(
            'dedication_id',new.id,
            'track_title',new.track_title,
            'artist',new.track_artist,
            'message_preview',left(new.message,90)
        )
    )
    on conflict (recipient_member_id,source_key) do nothing;

    return new;
end;
$$;

drop trigger if exists activity_on_music_dedication_insert on public.music_dedications;
create trigger activity_on_music_dedication_insert
after insert on public.music_dedications
for each row execute function private.log_music_dedication_activity();

alter table public.music_dedications enable row level security;

drop policy if exists "members read own music dedications" on public.music_dedications;
create policy "members read own music dedications"
on public.music_dedications for select
to authenticated
using (
    duo_id = (select private.current_duo_id())
    and (
        sender_member_id = (select private.current_member_id())
        or recipient_member_id = (select private.current_member_id())
    )
);

revoke all on public.music_dedications from anon,authenticated;
grant select on public.music_dedications to authenticated;

revoke all on function public.send_music_dedication(uuid,text) from public,anon;
grant execute on function public.send_music_dedication(uuid,text) to authenticated;

revoke all on function public.mark_music_dedications(uuid) from public,anon;
grant execute on function public.mark_music_dedications(uuid) to authenticated;

-- realtime das dedicatórias
do $$
begin
    if exists (
        select 1
        from pg_publication
        where pubname = 'supabase_realtime'
    ) and not exists (
        select 1
        from pg_publication_tables
        where pubname = 'supabase_realtime'
          and schemaname = 'public'
          and tablename = 'music_dedications'
    ) then
        alter publication supabase_realtime add table public.music_dedications;
    end if;
end;
$$;

-- Reordenação por posição
create or replace function public.reorder_playlist_track(
    p_playlist_id uuid,
    p_track_id uuid,
    p_target_position integer
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
    v_duo_id uuid := private.current_duo_id();
    v_current_position integer;
    v_last_position integer;
    v_target_position integer;
    v_title text;
begin
    if v_duo_id is null then
        raise exception 'Nenhum perfil está ativo nesta sessão.';
    end if;

    if p_target_position is null or p_target_position < 0 then
        raise exception 'Posição inválida.';
    end if;

    if not exists (
        select 1
        from public.playlists as playlist
        where playlist.id = p_playlist_id
          and playlist.duo_id = v_duo_id
    ) then
        raise exception 'Playlist não encontrada.';
    end if;

    perform 1
    from public.playlist_tracks as item
    where item.playlist_id = p_playlist_id
      and item.duo_id = v_duo_id
    for update;

    select item.position
    into v_current_position
    from public.playlist_tracks as item
    where item.playlist_id = p_playlist_id
      and item.track_id = p_track_id
      and item.duo_id = v_duo_id;

    if v_current_position is null then
        raise exception 'Música não encontrada nesta playlist.';
    end if;

    select coalesce(max(item.position),0)
    into v_last_position
    from public.playlist_tracks as item
    where item.playlist_id = p_playlist_id
      and item.duo_id = v_duo_id;

    v_target_position := least(p_target_position,v_last_position);

    if v_target_position = v_current_position then
        return false;
    end if;

    if v_target_position < v_current_position then
        update public.playlist_tracks
        set position = case
            when track_id = p_track_id then v_target_position
            else position + 1
        end
        where playlist_id = p_playlist_id
          and duo_id = v_duo_id
          and (
              track_id = p_track_id
              or position between v_target_position and v_current_position - 1
          );
    else
        update public.playlist_tracks
        set position = case
            when track_id = p_track_id then v_target_position
            else position - 1
        end
        where playlist_id = p_playlist_id
          and duo_id = v_duo_id
          and (
              track_id = p_track_id
              or position between v_current_position + 1 and v_target_position
          );
    end if;

    update public.playlists
    set updated_at = now()
    where id = p_playlist_id
      and duo_id = v_duo_id;

    select track.title
    into v_title
    from public.tracks as track
    where track.id = p_track_id
      and track.duo_id = v_duo_id;

    insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,track_id,details)
    values (
        v_duo_id,
        p_playlist_id,
        auth.uid(),
        'track_moved',
        p_track_id,
        jsonb_build_object(
            'track_title',coalesce(v_title,'Música'),
            'from_position',v_current_position,
            'to_position',v_target_position
        )
    );

    return true;
end;
$$;

revoke all on function public.reorder_playlist_track(uuid,uuid,integer) from public,anon;
grant execute on function public.reorder_playlist_track(uuid,uuid,integer) to authenticated;
