-- Reordenação direta das músicas de uma playlist.
-- Execute uma vez no SQL Editor em um projeto que já usa o schema atual.

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
