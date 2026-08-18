-- Atividades e notificações internas
-- Execute no SQL Editor depois do schema principal.

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

-- realtime somente para a central de atividades
-- o bloco e idempotente e evita erro se a tabela ja estiver publicada
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
