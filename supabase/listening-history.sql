-- Histórico de reprodução e estatísticas
-- Execute no SQL Editor depois do schema principal.

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
