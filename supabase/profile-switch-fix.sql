-- =====================================================
-- dois tons - correcao para alternar perfis no aparelho
-- execute uma vez no sql editor do supabase
-- =====================================================

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

    -- um perfil existente pode ser usado neste mesmo aparelho
    -- depois que o codigo compartilhado foi validado
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
            update public.duo_member_devices
            set member_id = v_member_id,
                duo_id = v_duo_id
            where user_id = v_user_id;
        end if;
    else
        select count(*)::integer
        into v_member_count
        from public.duo_members as member
        where member.duo_id = v_duo_id;

        if v_current_member_id is not null then
            if v_member_count >= 2 then
                raise exception 'A sala já possui duas pessoas. Use exatamente um dos nomes já cadastrados.';
            end if;

            raise exception 'Este aparelho já está vinculado a um perfil. Para criar a segunda pessoa, use outro aparelho; para alternar, informe o nome já cadastrado.';
        end if;

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

grant execute on function public.access_duo(text,text) to authenticated;
