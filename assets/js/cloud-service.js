// ======================================================
// dois tons - servico de nuvem
// integracao com auth, banco, storage e realtime
// ======================================================

window.DoisTonsCloud = (() => {
    // estado
    let client = null
    let currentUser = null
    let currentMember = null
    let currentDuoId = ""
    let libraryChannel = null
    let jamChannel = null
    let jamAvailabilityChannel = null
    let serverOffset = 0

    const signedUrlCache = new Map()

    // configuracao
    function getConfig() {
        return window.DOIS_TONS_CONFIG || {}
    }

    function isConfigured() {
        const config = getConfig()
        const validUrl = /^https:\/\/.+\.supabase\.co$/i.test(config.supabaseUrl || "")
        const validKey = Boolean(config.supabaseKey) && !config.supabaseKey.includes("COLE_AQUI")

        return validUrl && validKey
    }

    function requireClient() {
        if (!client) throw new Error("A conexão com o Supabase ainda não foi iniciada.")

        return client
    }

    function requireMembership() {
        if (!currentUser || !currentDuoId) throw new Error("Entre na sala antes de continuar.")
    }

    function unwrap(result) {
        if (result.error) throw result.error

        return result.data
    }

    function loadSupabaseLibrary() {
        if (window.supabase?.createClient) return Promise.resolve()

        return new Promise((resolve,reject) => {
            const existingScript = document.querySelector("[data-supabase-library]")

            if (existingScript) {
                existingScript.addEventListener("load",resolve,{once:true})
                existingScript.addEventListener("error",() => reject(new Error("Não foi possível carregar a biblioteca do Supabase.")),{once:true})
                return
            }

            const script = document.createElement("script")

            script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"
            script.crossOrigin = "anonymous"
            script.dataset.supabaseLibrary = "true"
            script.addEventListener("load",resolve,{once:true})
            script.addEventListener("error",() => reject(new Error("Não foi possível carregar a biblioteca do Supabase.")),{once:true})
            document.head.append(script)
        })
    }

    function firstRow(data) {
        if (Array.isArray(data)) return data[0] || null

        return data || null
    }

    // autenticacao
    async function initialize() {
        if (!isConfigured()) return {configured:false}

        await loadSupabaseLibrary()

        if (!window.supabase?.createClient) {
            throw new Error("Não foi possível carregar a biblioteca do Supabase.")
        }

        if (!client) {
            const config = getConfig()

            client = window.supabase.createClient(config.supabaseUrl,config.supabaseKey,{
                auth:{
                    persistSession:true,
                    autoRefreshToken:true,
                    detectSessionInUrl:false
                }
            })
        }

        const sessionResult = await client.auth.getSession()
        const session = unwrap(sessionResult)?.session

        if (session?.user) {
            currentUser = session.user
        } else {
            const signInResult = await client.auth.signInAnonymously()
            currentUser = unwrap(signInResult)?.user || null
        }

        if (!currentUser) throw new Error("Não foi possível criar a sessão deste aparelho.")

        await synchronizeServerClock()

        return {configured:true,user:currentUser}
    }

    async function restoreProfile() {
        requireClient()

        if (!currentUser) return null

        const deviceResult = await client
            .from("duo_member_devices")
            .select("member_id,duo_id")
            .eq("user_id",currentUser.id)
            .maybeSingle()
        const device = unwrap(deviceResult)

        if (!device) return null

        const memberResult = await client
            .from("duo_members")
            .select("id,duo_id,user_id,display_name,created_at")
            .eq("id",device.member_id)
            .maybeSingle()
        const member = unwrap(memberResult)

        if (!member) return null

        currentMember = member
        currentDuoId = member.duo_id

        return mapProfile(member)
    }

    async function accessDuo(code,name) {
        requireClient()

        const result = await client.rpc("access_duo",{
            p_code:code,
            p_display_name:name
        })
        const access = firstRow(unwrap(result))

        if (!access) throw new Error("Não foi possível abrir a sala.")

        currentDuoId = access.duo_id
        currentMember = {
            id:access.member_id,
            duo_id:access.duo_id,
            user_id:currentUser.id,
            display_name:access.display_name
        }

        return {
            ...mapProfile(currentMember),
            memberCount:Number(access.member_count || 1)
        }
    }

    function mapProfile(member) {
        return {
            name:member.display_name,
            memberId:member.id,
            duoId:member.duo_id,
            userId:currentUser?.id || member.user_id,
            mode:"cloud"
        }
    }

    async function getMembers() {
        requireMembership()

        const result = await client
            .from("duo_members")
            .select("id,user_id,display_name,created_at")
            .eq("duo_id",currentDuoId)
            .order("created_at",{ascending:true})

        return unwrap(result) || []
    }

    // arquivos privados
    async function createPrivateUrl(path) {
        if (!path) return ""

        const cached = signedUrlCache.get(path)

        if (cached && cached.expiresAt > Date.now() + 60000) return cached.url

        const result = await client.storage.from("media").createSignedUrl(path,3600)
        const data = unwrap(result)
        const url = data?.signedUrl || ""

        if (url) {
            signedUrlCache.set(path,{
                url,
                expiresAt:Date.now() + 3300000
            })
        }

        return url
    }

    function getSafeFileName(file) {
        const extension = file.name.includes(".")
            ? file.name.split(".").at(-1).toLocaleLowerCase("pt-BR")
            : "bin"
        const baseName = file.name
            .replace(/\.[^/.]+$/g,"")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g,"")
            .replace(/[^a-zA-Z0-9]+/g,"-")
            .replace(/^-|-$/g,"")
            .slice(0,48)
            .toLocaleLowerCase("pt-BR") || "arquivo"

        return `${baseName}.${extension.replace(/[^a-z0-9]/g,"") || "bin"}`
    }

    function createStoragePath(folder,file) {
        const fileId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`

        return `${currentDuoId}/${folder}/${fileId}-${getSafeFileName(file)}`
    }

    function getUploadContentType(file) {
        const extension = file.name.includes(".")
            ? file.name.split(".").at(-1).toLocaleLowerCase("pt-BR")
            : ""
        const mimeTypes = {
            mp3:"audio/mpeg",
            m4a:"audio/mp4",
            mp4:"audio/mp4",
            aac:"audio/aac",
            wav:"audio/wav",
            ogg:"audio/ogg",
            oga:"audio/ogg",
            flac:"audio/flac"
        }

        return mimeTypes[extension] || file.type || undefined
    }

    async function uploadFile(path,file) {
        const result = await client.storage.from("media").upload(path,file,{
            cacheControl:"3600",
            contentType:getUploadContentType(file),
            upsert:false
        })

        unwrap(result)
    }

    async function removeFiles(paths) {
        const validPaths = paths.filter(Boolean)

        if (!validPaths.length) return

        await client.storage.from("media").remove(validPaths)
    }

    // biblioteca
    function isMissingCatalogColumn(error) {
        const message = String(error?.message || "").toLocaleLowerCase("pt-BR")

        return ["42703","PGRST204"].includes(error?.code)
            || message.includes("file_hash")
            || message.includes("file_size")
            || message.includes("mime_type")
    }

    async function loadTrackRows() {
        const baseColumns = "id,duo_id,added_by,title,artist,album,audio_path,source_url,cover_path,cover_url,duration_seconds,tags,created_at"
        let result = await client
            .from("tracks")
            .select(`${baseColumns},file_hash,file_size,mime_type`)
            .eq("duo_id",currentDuoId)
            .order("created_at",{ascending:false})

        if (result.error && isMissingCatalogColumn(result.error)) {
            result = await client
                .from("tracks")
                .select(baseColumns)
                .eq("duo_id",currentDuoId)
                .order("created_at",{ascending:false})
        }

        return result
    }

    async function loadTracks() {
        requireMembership()

        const [trackResult,favoriteResult,shareResult,memberResult,deviceResult] = await Promise.all([
            loadTrackRows(),
            client
                .from("favorites")
                .select("track_id")
                .eq("duo_id",currentDuoId),
            client
                .from("shared_tracks")
                .select("track_id,sender_id,recipient_id,created_at")
                .eq("duo_id",currentDuoId),
            client
                .from("duo_members")
                .select("id,user_id,display_name")
                .eq("duo_id",currentDuoId),
            client
                .from("duo_member_devices")
                .select("member_id,user_id")
                .eq("duo_id",currentDuoId)
        ])
        const trackRows = unwrap(trackResult) || []
        const favoriteRows = unwrap(favoriteResult) || []
        const shareRows = unwrap(shareResult) || []
        const memberRows = unwrap(memberResult) || []
        const deviceRows = unwrap(deviceResult) || []
        const favoriteIds = new Set(favoriteRows.map(item => item.track_id))
        const memberById = new Map(memberRows.map(member => [member.id,member]))
        const memberNames = new Map(memberRows.map(member => [member.user_id,member.display_name]))
        const currentMemberUsers = new Set()

        deviceRows.forEach(device => {
            const member = memberById.get(device.member_id)

            if (!member) return

            memberNames.set(device.user_id,member.display_name)

            if (device.member_id === currentMember?.id) currentMemberUsers.add(device.user_id)
        })

        const shareByTrack = new Map(shareRows.map(item => [item.track_id,item]))

        return Promise.all(trackRows.map(async (row,index) => {
            const share = shareByTrack.get(row.id)
            const sharedBy = share
                ? currentMemberUsers.has(share.sender_id)
                    ? "Enviada por você"
                    : memberNames.get(share.sender_id) || "Sua pessoa"
                : ""
            const [audioUrl,coverUrl] = await Promise.all([
                row.source_url ? Promise.resolve(row.source_url) : createPrivateUrl(row.audio_path),
                row.cover_url ? Promise.resolve(row.cover_url) : createPrivateUrl(row.cover_path)
            ])

            return {
                id:row.id,
                title:row.title,
                artist:row.artist,
                album:row.album,
                cover:"",
                coverImage:coverUrl,
                duration:Number(row.duration_seconds || 0),
                favorite:favoriteIds.has(row.id),
                sharedBy,
                tags:[...(row.tags || []),sharedBy ? "compartilhada" : ""].filter(Boolean),
                source:audioUrl,
                audioPath:row.audio_path || "",
                coverPath:row.cover_path || "",
                addedBy:row.added_by,
                fileHash:row.file_hash || "",
                fileSize:Number(row.file_size || 0),
                mimeType:row.mime_type || "",
                cloud:true,
                coverIndex:index
            }
        }))
    }

    async function insertTrack(trackData) {
        let result = await client
            .from("tracks")
            .insert(trackData)
            .select("id")
            .single()

        if (result.error && isMissingCatalogColumn(result.error)) {
            const legacyTrackData = {...trackData}

            delete legacyTrackData.file_hash
            delete legacyTrackData.file_size
            delete legacyTrackData.mime_type

            result = await client
                .from("tracks")
                .insert(legacyTrackData)
                .select("id")
                .single()
        }

        return unwrap(result)
    }

    async function uploadTrack({audioFile,coverFile,title,artist,album,duration,tags,fileHash,fileSize,mimeType}) {
        requireMembership()

        const audioPath = createStoragePath("audio",audioFile)
        const coverPath = coverFile ? createStoragePath("covers",coverFile) : ""
        const uploadedPaths = []

        try {
            await uploadFile(audioPath,audioFile)
            uploadedPaths.push(audioPath)

            if (coverFile) {
                await uploadFile(coverPath,coverFile)
                uploadedPaths.push(coverPath)
            }

            return await insertTrack({
                duo_id:currentDuoId,
                added_by:currentUser.id,
                title,
                artist,
                album:album || "Adicionada ao Dois Tons",
                audio_path:audioPath,
                cover_path:coverPath || null,
                duration_seconds:Math.max(0,Math.round(duration || 0)),
                tags:tags || [],
                file_hash:fileHash || null,
                file_size:Math.max(0,Math.round(fileSize || audioFile.size || 0)),
                mime_type:mimeType || getUploadContentType(audioFile) || null
            })
        } catch (error) {
            await removeFiles(uploadedPaths)

            if (error?.code === "23505") {
                const duplicateError = new Error("Esta música já existe na biblioteca.")

                duplicateError.code = error.code
                throw duplicateError
            }

            throw error
        }
    }

    async function setFavorite(trackId,favorite) {
        requireMembership()

        if (favorite) {
            const result = await client
                .from("favorites")
                .insert({
                    track_id:trackId,
                    duo_id:currentDuoId,
                    added_by:currentUser.id
                })

            unwrap(result)
            return
        }

        const result = await client
            .from("favorites")
            .delete()
            .eq("track_id",trackId)
            .eq("duo_id",currentDuoId)

        unwrap(result)
    }

    async function shareTrack(trackId) {
        requireMembership()

        return unwrap(await client.rpc("share_track",{p_track_id:trackId}))
    }

    async function updateTrackDuration(trackId,duration) {
        if (!Number.isFinite(duration) || duration <= 0) return

        const result = await client
            .from("tracks")
            .update({duration_seconds:Math.round(duration)})
            .eq("id",trackId)
            .eq("added_by",currentUser.id)

        if (result.error && result.error.code !== "PGRST116") throw result.error
    }

    // playlists
    async function loadPlaylists() {
        requireMembership()

        const [playlistResult,itemResult] = await Promise.all([
            client
                .from("playlists")
                .select("id,title,description,created_by,created_at,updated_at")
                .eq("duo_id",currentDuoId)
                .order("updated_at",{ascending:false}),
            client
                .from("playlist_tracks")
                .select("playlist_id,track_id,position")
                .eq("duo_id",currentDuoId)
                .order("position",{ascending:true})
        ])
        const playlists = unwrap(playlistResult) || []
        const items = unwrap(itemResult) || []

        return playlists.map(playlist => ({
            ...playlist,
            trackIds:items
                .filter(item => item.playlist_id === playlist.id)
                .map(item => item.track_id)
        }))
    }

    async function createPlaylist(title,description = "") {
        requireMembership()

        const result = await client
            .from("playlists")
            .insert({
                duo_id:currentDuoId,
                created_by:currentUser.id,
                title,
                description
            })
            .select("id,title,description,created_by,created_at,updated_at")
            .single()

        return unwrap(result)
    }

    async function addTrackToPlaylist(playlistId,trackId) {
        requireMembership()

        return unwrap(await client.rpc("add_track_to_playlist",{
            p_playlist_id:playlistId,
            p_track_id:trackId
        }))
    }

    async function removeTrackFromPlaylist(playlistId,trackId) {
        requireMembership()

        const result = await client
            .from("playlist_tracks")
            .delete()
            .eq("playlist_id",playlistId)
            .eq("track_id",trackId)

        unwrap(result)
    }

    // realtime da biblioteca
    function subscribeLibrary(onChange) {
        requireMembership()
        unsubscribeLibrary()

        const tables = ["duo_members","tracks","favorites","shared_tracks","playlists","playlist_tracks"]

        libraryChannel = client.channel(`library-${currentDuoId}`)

        tables.forEach(table => {
            libraryChannel.on("postgres_changes",{
                event:"*",
                schema:"public",
                table,
                filter:`duo_id=eq.${currentDuoId}`
            },onChange)
        })

        libraryChannel.subscribe()

        return libraryChannel
    }

    function unsubscribeLibrary() {
        if (!client || !libraryChannel) return

        client.removeChannel(libraryChannel)
        libraryChannel = null
    }

    // jam
    async function synchronizeServerClock() {
        if (!client) return 0

        const startedAt = Date.now()
        const result = await client.rpc("server_time_ms")
        const endedAt = Date.now()

        if (result.error) return serverOffset

        const midpoint = startedAt + ((endedAt - startedAt) / 2)
        serverOffset = Number(result.data) - midpoint

        return serverOffset
    }

    async function getActiveJam() {
        requireMembership()

        const result = await client
            .from("jam_sessions")
            .select("*")
            .eq("duo_id",currentDuoId)
            .eq("active",true)
            .maybeSingle()

        return unwrap(result)
    }

    async function getJam(jamId) {
        requireMembership()

        const result = await client
            .from("jam_sessions")
            .select("*")
            .eq("id",jamId)
            .maybeSingle()

        return unwrap(result)
    }

    async function getOrCreateJam(trackId,isPlaying,position) {
        requireMembership()

        const result = await client.rpc("get_or_create_jam",{
            p_track_id:trackId || null,
            p_is_playing:Boolean(isPlaying),
            p_position_seconds:Number(position || 0)
        })

        return firstRow(unwrap(result))
    }

    async function setJamState(jamId,trackId,isPlaying,position) {
        requireMembership()

        const result = await client.rpc("set_jam_state",{
            p_jam_id:jamId,
            p_track_id:trackId || null,
            p_is_playing:Boolean(isPlaying),
            p_position_seconds:Number(position || 0)
        })

        return firstRow(unwrap(result))
    }

    async function endJam(jamId) {
        requireMembership()

        return unwrap(await client.rpc("end_jam",{p_jam_id:jamId}))
    }

    function getExpectedJamPosition(jam) {
        const basePosition = Number(jam?.position_seconds || 0)

        if (!jam?.is_playing || !jam.started_at) return basePosition

        const serverNow = Date.now() + serverOffset
        const elapsed = Math.max(0,(serverNow - new Date(jam.started_at).getTime()) / 1000)

        return basePosition + elapsed
    }

    function subscribeJam(jamId,onChange) {
        requireMembership()
        unsubscribeJam()

        jamChannel = client
            .channel(`jam-${jamId}`)
            .on("postgres_changes",{
                event:"UPDATE",
                schema:"public",
                table:"jam_sessions",
                filter:`id=eq.${jamId}`
            },payload => onChange(payload.new))
            .subscribe()

        return jamChannel
    }

    function subscribeJamAvailability(onChange) {
        requireMembership()

        if (jamAvailabilityChannel) client.removeChannel(jamAvailabilityChannel)

        jamAvailabilityChannel = client
            .channel(`jam-room-${currentDuoId}`)
            .on("postgres_changes",{
                event:"*",
                schema:"public",
                table:"jam_sessions",
                filter:`duo_id=eq.${currentDuoId}`
            },payload => onChange(payload.new || payload.old))
            .subscribe()

        return jamAvailabilityChannel
    }

    function unsubscribeJam() {
        if (!client || !jamChannel) return

        client.removeChannel(jamChannel)
        jamChannel = null
    }

    function disconnectRealtime() {
        unsubscribeLibrary()
        unsubscribeJam()

        if (client && jamAvailabilityChannel) client.removeChannel(jamAvailabilityChannel)

        jamAvailabilityChannel = null
    }

    function getUserId() {
        return currentUser?.id || ""
    }

    function getDuoId() {
        return currentDuoId
    }

    return {
        accessDuo,
        addTrackToPlaylist,
        createPlaylist,
        disconnectRealtime,
        endJam,
        getActiveJam,
        getDuoId,
        getExpectedJamPosition,
        getJam,
        getMembers,
        getOrCreateJam,
        getUserId,
        initialize,
        isConfigured,
        loadPlaylists,
        loadTracks,
        removeTrackFromPlaylist,
        restoreProfile,
        setFavorite,
        setJamState,
        shareTrack,
        subscribeJam,
        subscribeJamAvailability,
        subscribeLibrary,
        synchronizeServerClock,
        unsubscribeJam,
        updateTrackDuration,
        uploadTrack
    }
})()
