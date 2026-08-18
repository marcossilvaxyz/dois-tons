-- =====================================================
-- dois tons - etapa 11
-- playlists colaborativas, reorganizacao e historico
-- execute uma vez no sql editor do supabase
-- =====================================================

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
        values (
            new.duo_id,
            new.id,
            auth.uid(),
            'created',
            jsonb_build_object('title',new.title)
        );
    elsif tg_op = 'UPDATE'
      and (old.title is distinct from new.title or old.description is distinct from new.description) then
        insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,details)
        values (
            new.duo_id,
            new.id,
            auth.uid(),
            'updated',
            jsonb_build_object('title',new.title)
        );
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
    select track.title
    into v_title
    from public.tracks as track
    where track.id = new.track_id;

    insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,track_id,details)
    values (
        new.duo_id,
        new.playlist_id,
        auth.uid(),
        'track_added',
        new.track_id,
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
    if not exists (
        select 1
        from public.playlists as playlist
        where playlist.id = old.playlist_id
    ) then
        return old;
    end if;

    select track.title
    into v_title
    from public.tracks as track
    where track.id = old.track_id;

    insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,track_id,details)
    values (
        old.duo_id,
        old.playlist_id,
        auth.uid(),
        'track_removed',
        old.track_id,
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

create or replace function public.move_playlist_track(
    p_playlist_id uuid,
    p_track_id uuid,
    p_direction text
)
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
    if v_duo_id is null then
        raise exception 'Você ainda não entrou na sala.';
    end if;

    if p_direction not in ('up','down') then
        raise exception 'Direção inválida.';
    end if;

    select item.*
    into v_current
    from public.playlist_tracks as item
    where item.playlist_id = p_playlist_id
      and item.track_id = p_track_id
      and item.duo_id = v_duo_id;

    if v_current.playlist_id is null then
        raise exception 'Música não encontrada nesta playlist.';
    end if;

    if p_direction = 'up' then
        select item.*
        into v_target
        from public.playlist_tracks as item
        where item.playlist_id = p_playlist_id
          and item.position < v_current.position
        order by item.position desc
        limit 1;
    else
        select item.*
        into v_target
        from public.playlist_tracks as item
        where item.playlist_id = p_playlist_id
          and item.position > v_current.position
        order by item.position asc
        limit 1;
    end if;

    if v_target.playlist_id is null then
        return false;
    end if;

    update public.playlist_tracks
    set position = case
        when track_id = v_current.track_id then v_target.position
        when track_id = v_target.track_id then v_current.position
        else position
    end
    where playlist_id = p_playlist_id
      and track_id in (v_current.track_id,v_target.track_id);

    update public.playlists
    set updated_at = now()
    where id = p_playlist_id;

    select track.title
    into v_title
    from public.tracks as track
    where track.id = p_track_id;

    insert into public.playlist_activity (duo_id,playlist_id,actor_id,action,track_id,details)
    values (
        v_duo_id,
        p_playlist_id,
        auth.uid(),
        'track_moved',
        p_track_id,
        jsonb_build_object(
            'track_title',coalesce(v_title,'Música'),
            'direction',p_direction
        )
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
