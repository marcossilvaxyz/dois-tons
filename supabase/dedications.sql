-- Dedicatórias músicais
-- Execute no SQL Editor depois do schema principal.

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

-- realtime para recebimento imediato das dedicatórias
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
