window.DoisTonsCloud = (() => {
    // estado
    let client = null
    let currentUser = null
    let currentMember = null
    let currentDuoId = ""
    let libraryChannel = null
    let jamChannel = null
    let jamAvailabilityChannel = null
    let listeningChannel = null
    let activityChannel = null
    let dedicationChannel = null
    let serverOffset = 0

    const signedUrlCache = new Map()

    // cliente
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

    // sessão
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

    async function createFreshAnonymousIdentity() {
        requireClient()

        const signOutResult = await client.auth.signOut()
        if (signOutResult.error) throw signOutResult.error

        currentUser = null
        currentMember = null
        currentDuoId = null

        const signInResult = await client.auth.signInAnonymously()
        currentUser = unwrap(signInResult)?.user || null

        if (!currentUser) throw new Error("Não foi possível criar uma nova sessão para alternar o perfil.")

        return currentUser
    }

    async function requestDuoAccess(code,name) {
        const result = await client.rpc("access_duo",{
            p_code:code,
            p_display_name:name
        })

        return firstRow(unwrap(result))
    }

    async function accessDuo(code,name,{allowIdentityRefresh = true} = {}) {
        requireClient()

        let access

        try {
            access = await requestDuoAccess(code,name)
        } catch (error) {
            const needsFreshIdentity = String(error?.message || "").includes("DOIS_TONS_PROFILE_SWITCH_REQUIRES_NEW_SESSION")

            if (!allowIdentityRefresh || !needsFreshIdentity) throw error

            await createFreshAnonymousIdentity()
            access = await requestDuoAccess(code,name)
        }

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

    // storage
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

        const result = await client.storage.from("media").remove(validPaths)

        unwrap(result)
        validPaths.forEach(path => signedUrlCache.delete(path))
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
        const memberIdsByUser = new Map(memberRows.map(member => [member.user_id,member.id]))
        const currentMemberUsers = new Set(
            memberRows
                .filter(member => member.id === currentMember?.id)
                .map(member => member.user_id)
        )

        deviceRows.forEach(device => {
            const member = memberById.get(device.member_id)

            if (!member) return

            if (!memberNames.has(device.user_id)) memberNames.set(device.user_id,member.display_name)
            if (!memberIdsByUser.has(device.user_id)) memberIdsByUser.set(device.user_id,device.member_id)

            if (device.member_id === currentMember?.id) currentMemberUsers.add(device.user_id)
        })

        const shareByTrack = new Map(shareRows.map(item => [item.track_id,item]))

        return Promise.all(trackRows.map(async (row,index) => {
            const share = shareByTrack.get(row.id)
            const sharedBy = share
                ? currentMemberUsers.has(share.sender_id)
                    ? `Enviada por ${currentMember?.display_name || "meu perfil"}`
                    : memberNames.get(share.sender_id) || "Outro perfil"
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
                addedByMemberId:memberIdsByUser.get(row.added_by) || "",
                addedByName:memberNames.get(row.added_by) || "",
                createdAt:row.created_at || "",
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
            .eq("duo_id",currentDuoId)

        if (result.error && result.error.code !== "PGRST116") throw result.error
    }

    async function updateTrack(trackId,{title,artist,album,coverFile = null,removeCover = false}) {
        requireMembership()

        const currentResult = await client
            .from("tracks")
            .select("id,cover_path,cover_url")
            .eq("id",trackId)
            .eq("duo_id",currentDuoId)
            .maybeSingle()
        const currentTrack = unwrap(currentResult)

        if (!currentTrack) throw new Error("Esta música não foi encontrada na biblioteca.")

        const nextCoverPath = coverFile ? createStoragePath("covers",coverFile) : ""
        const uploadedPaths = []

        try {
            if (coverFile) {
                await uploadFile(nextCoverPath,coverFile)
                uploadedPaths.push(nextCoverPath)
            }

            const changes = {
                title:String(title || "").trim(),
                artist:String(artist || "").trim(),
                album:String(album || "").trim() || "Álbum desconhecido"
            }

            if (coverFile) {
                changes.cover_path = nextCoverPath
                changes.cover_url = null
            } else if (removeCover) {
                changes.cover_path = null
                changes.cover_url = null
            }

            const updateResult = await client
                .from("tracks")
                .update(changes)
                .eq("id",trackId)
                .eq("duo_id",currentDuoId)
                .select("id")
                .maybeSingle()
            const updatedTrack = unwrap(updateResult)

            if (!updatedTrack) {
                throw new Error("Somente quem adicionou esta música pode editá-la.")
            }

            if ((coverFile || removeCover) && currentTrack.cover_path && currentTrack.cover_path !== nextCoverPath) {
                try {
                    await removeFiles([currentTrack.cover_path])
                } catch (error) {
                    console.warn("Não foi possível remover a capa anterior.",error)
                }
            }

            return updatedTrack
        } catch (error) {
            if (uploadedPaths.length) {
                try {
                    await removeFiles(uploadedPaths)
                } catch (cleanupError) {
                    console.warn("Não foi possível limpar a nova capa após a falha.",cleanupError)
                }
            }

            throw error
        }
    }

    async function deleteTrack(trackId) {
        requireMembership()

        const currentResult = await client
            .from("tracks")
            .select("id,audio_path,cover_path")
            .eq("id",trackId)
            .eq("duo_id",currentDuoId)
            .maybeSingle()
        const currentTrack = unwrap(currentResult)

        if (!currentTrack) throw new Error("Esta música não foi encontrada na biblioteca.")

        const deleteResult = await client
            .from("tracks")
            .delete()
            .eq("id",trackId)
            .eq("duo_id",currentDuoId)
            .select("id")
            .maybeSingle()
        const deletedTrack = unwrap(deleteResult)

        if (!deletedTrack) {
            throw new Error("Somente quem adicionou esta música pode excluí-la.")
        }

        try {
            await removeFiles([currentTrack.audio_path,currentTrack.cover_path])
        } catch (error) {
            console.warn("A música foi excluída, mas alguns arquivos antigos não puderam ser removidos do Storage.",error)
        }

        return deletedTrack
    }

    // playlists
    async function loadPlaylists() {
        requireMembership()

        const [playlistResult,itemResult,memberResult,deviceResult] = await Promise.all([
            client
                .from("playlists")
                .select("id,title,description,created_by,created_at,updated_at")
                .eq("duo_id",currentDuoId)
                .order("updated_at",{ascending:false}),
            client
                .from("playlist_tracks")
                .select("playlist_id,track_id,position,added_by,created_at")
                .eq("duo_id",currentDuoId)
                .order("position",{ascending:true}),
            client
                .from("duo_members")
                .select("id,user_id,display_name")
                .eq("duo_id",currentDuoId),
            client
                .from("duo_member_devices")
                .select("member_id,user_id")
                .eq("duo_id",currentDuoId)
        ])
        const playlistRows = unwrap(playlistResult) || []
        const items = unwrap(itemResult) || []
        const members = unwrap(memberResult) || []
        const devices = unwrap(deviceResult) || []
        const memberById = new Map(members.map(member => [member.id,member]))
        const memberNames = new Map(members.map(member => [member.user_id,member.display_name]))

        devices.forEach(device => {
            const member = memberById.get(device.member_id)

            if (member && !memberNames.has(device.user_id)) memberNames.set(device.user_id,member.display_name)
        })

        return playlistRows.map(playlist => {
            const playlistItems = items
                .filter(item => item.playlist_id === playlist.id)
                .map(item => ({
                    trackId:item.track_id,
                    position:Number(item.position || 0),
                    addedBy:item.added_by || "",
                    addedByName:memberNames.get(item.added_by) || "Outro perfil",
                    createdAt:item.created_at || ""
                }))

            return {
                ...playlist,
                createdByName:memberNames.get(playlist.created_by) || "nós",
                items:playlistItems,
                trackIds:playlistItems.map(item => item.trackId)
            }
        })
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

    async function updatePlaylist(playlistId,{title,description = ""}) {
        requireMembership()

        const result = await client
            .from("playlists")
            .update({title,description})
            .eq("id",playlistId)
            .eq("duo_id",currentDuoId)
            .select("id,title,description,created_by,created_at,updated_at")
            .single()

        return unwrap(result)
    }

    async function deletePlaylist(playlistId) {
        requireMembership()

        const result = await client
            .from("playlists")
            .delete()
            .eq("id",playlistId)
            .eq("duo_id",currentDuoId)

        unwrap(result)
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

        unwrap(await client
            .from("playlists")
            .update({updated_at:new Date().toISOString()})
            .eq("id",playlistId)
            .eq("duo_id",currentDuoId))
    }

    async function movePlaylistTrack(playlistId,trackId,direction) {
        requireMembership()

        return unwrap(await client.rpc("move_playlist_track",{
            p_playlist_id:playlistId,
            p_track_id:trackId,
            p_direction:direction
        }))
    }

    async function reorderPlaylistTrack(playlistId,trackId,targetPosition) {
        requireMembership()

        return unwrap(await client.rpc("reorder_playlist_track",{
            p_playlist_id:playlistId,
            p_track_id:trackId,
            p_target_position:targetPosition
        }))
    }

    async function loadPlaylistActivity(playlistId) {
        requireMembership()

        const [activityResult,memberResult,deviceResult] = await Promise.all([
            client
                .from("playlist_activity")
                .select("id,playlist_id,actor_id,action,track_id,details,created_at")
                .eq("duo_id",currentDuoId)
                .eq("playlist_id",playlistId)
                .order("created_at",{ascending:false})
                .limit(20),
            client
                .from("duo_members")
                .select("id,user_id,display_name")
                .eq("duo_id",currentDuoId),
            client
                .from("duo_member_devices")
                .select("member_id,user_id")
                .eq("duo_id",currentDuoId)
        ])
        const rows = unwrap(activityResult) || []
        const members = unwrap(memberResult) || []
        const devices = unwrap(deviceResult) || []
        const memberById = new Map(members.map(member => [member.id,member]))
        const memberNames = new Map(members.map(member => [member.user_id,member.display_name]))

        devices.forEach(device => {
            const member = memberById.get(device.member_id)

            if (member && !memberNames.has(device.user_id)) memberNames.set(device.user_id,member.display_name)
        })

        return rows.map(row => ({
            ...row,
            actorName:memberNames.get(row.actor_id) || "Outro perfil"
        }))
    }

    // realtime
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


    // histórico
    async function loadListeningHistory(limit = 5000) {
        requireMembership()

        const safeLimit = Math.max(1,Math.min(Number(limit || 5000),10000))
        const pageSize = Math.min(750,safeLimit)
        const historyRows = []
        const memberResult = await client
            .from("duo_members")
            .select("id,display_name")
            .eq("duo_id",currentDuoId)
        const members = unwrap(memberResult) || []

        while (historyRows.length < safeLimit) {
            const start = historyRows.length
            const end = Math.min(start + pageSize,safeLimit) - 1
            const historyResult = await client
                .from("listening_history")
                .select("id,member_id,track_id,session_id,listened_seconds,completed,started_at,last_listened_at")
                .eq("duo_id",currentDuoId)
                .order("last_listened_at",{ascending:false})
                .range(start,end)
            const page = unwrap(historyResult) || []

            historyRows.push(...page)

            if (page.length < end - start + 1) break
        }

        const memberNames = new Map(members.map(member => [member.id,member.display_name]))

        return historyRows.map(item => ({
            ...item,
            listenedSeconds:Number(item.listened_seconds || 0),
            memberName:memberNames.get(item.member_id) || "Outro perfil"
        }))
    }

    async function recordListeningProgress(trackId,sessionId,listenedSeconds,completed = false) {
        requireMembership()

        return unwrap(await client.rpc("record_listening_progress",{
            p_track_id:trackId,
            p_session_id:sessionId,
            p_listened_seconds:Math.max(0,Math.round(Number(listenedSeconds || 0))),
            p_completed:Boolean(completed)
        }))
    }

    function subscribeListeningHistory(onChange) {
        requireMembership()

        if (listeningChannel) client.removeChannel(listeningChannel)

        listeningChannel = client
            .channel(`listening-${currentDuoId}`)
            .on("postgres_changes",{
                event:"*",
                schema:"public",
                table:"listening_history",
                filter:`duo_id=eq.${currentDuoId}`
            },onChange)
            .subscribe()

        return listeningChannel
    }

    function unsubscribeListeningHistory() {
        if (!client || !listeningChannel) return

        client.removeChannel(listeningChannel)
        listeningChannel = null
    }

    // atividades
    async function loadActivityNotifications(limit = 100) {
        requireMembership()

        const safeLimit = Math.max(1,Math.min(Number(limit || 100),200))
        const [activityResult,memberResult] = await Promise.all([
            client
                .from("activity_notifications")
                .select("id,recipient_member_id,actor_member_id,event_type,track_id,playlist_id,jam_id,details,read_at,created_at")
                .eq("duo_id",currentDuoId)
                .eq("recipient_member_id",currentMember.id)
                .order("created_at",{ascending:false})
                .limit(safeLimit),
            client
                .from("duo_members")
                .select("id,display_name")
                .eq("duo_id",currentDuoId)
        ])
        const rows = unwrap(activityResult) || []
        const members = unwrap(memberResult) || []
        const memberNames = new Map(members.map(member => [member.id,member.display_name]))

        return rows.map(item => ({
            ...item,
            actorName:memberNames.get(item.actor_member_id) || "Outro perfil",
            read:Boolean(item.read_at)
        }))
    }

    async function markActivityNotifications(notificationId = null) {
        requireMembership()

        return unwrap(await client.rpc("mark_activity_notifications",{
            p_notification_id:notificationId || null
        }))
    }

    function subscribeActivity(onChange) {
        requireMembership()

        if (activityChannel) client.removeChannel(activityChannel)

        activityChannel = client
            .channel(`activity-${currentMember.id}`)
            .on("postgres_changes",{
                event:"*",
                schema:"public",
                table:"activity_notifications",
                filter:`recipient_member_id=eq.${currentMember.id}`
            },onChange)
            .subscribe()

        return activityChannel
    }

    function unsubscribeActivity() {
        if (!client || !activityChannel) return

        client.removeChannel(activityChannel)
        activityChannel = null
    }

    // dedicatórias
    async function loadMusicDedications(limit = 500) {
        requireMembership()

        const safeLimit = Math.max(1,Math.min(Number(limit || 500),1000))
        const [dedicationResult,memberResult] = await Promise.all([
            client
                .from("music_dedications")
                .select("id,duo_id,sender_member_id,recipient_member_id,track_id,track_title,track_artist,track_album,message,read_at,created_at")
                .eq("duo_id",currentDuoId)
                .order("created_at",{ascending:false})
                .limit(safeLimit),
            client
                .from("duo_members")
                .select("id,display_name")
                .eq("duo_id",currentDuoId)
        ])
        const rows = unwrap(dedicationResult) || []
        const members = unwrap(memberResult) || []
        const memberNames = new Map(members.map(member => [member.id,member.display_name]))

        return rows.map(item => ({
            ...item,
            senderName:memberNames.get(item.sender_member_id) || "Outro perfil",
            recipientName:memberNames.get(item.recipient_member_id) || "Outro perfil",
            received:item.recipient_member_id === currentMember.id,
            sent:item.sender_member_id === currentMember.id,
            read:Boolean(item.read_at)
        }))
    }

    async function sendMusicDedication(trackId,message) {
        requireMembership()

        return unwrap(await client.rpc("send_music_dedication",{
            p_track_id:trackId,
            p_message:String(message || "").trim()
        }))
    }

    async function markMusicDedications(dedicationId = null) {
        requireMembership()

        return unwrap(await client.rpc("mark_music_dedications",{
            p_dedication_id:dedicationId || null
        }))
    }

    function subscribeDedications(onChange) {
        requireMembership()

        if (dedicationChannel) client.removeChannel(dedicationChannel)

        dedicationChannel = client
            .channel(`dedications-${currentDuoId}`)
            .on("postgres_changes",{
                event:"*",
                schema:"public",
                table:"music_dedications",
                filter:`duo_id=eq.${currentDuoId}`
            },onChange)
            .subscribe()

        return dedicationChannel
    }

    function unsubscribeDedications() {
        if (!client || !dedicationChannel) return

        client.removeChannel(dedicationChannel)
        dedicationChannel = null
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
        unsubscribeListeningHistory()
        unsubscribeActivity()
        unsubscribeDedications()

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
        createPrivateUrl,
        deletePlaylist,
        deleteTrack,
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
        loadActivityNotifications,
        loadListeningHistory,
        loadMusicDedications,
        loadPlaylistActivity,
        loadPlaylists,
        loadTracks,
        markActivityNotifications,
        markMusicDedications,
        movePlaylistTrack,
        reorderPlaylistTrack,
        recordListeningProgress,
        removeTrackFromPlaylist,
        restoreProfile,
        setFavorite,
        setJamState,
        shareTrack,
        sendMusicDedication,
        subscribeActivity,
        subscribeDedications,
        subscribeJam,
        subscribeJamAvailability,
        subscribeLibrary,
        subscribeListeningHistory,
        synchronizeServerClock,
        unsubscribeActivity,
        unsubscribeDedications,
        unsubscribeJam,
        unsubscribeListeningHistory,
        updatePlaylist,
        updateTrack,
        updateTrackDuration,
        uploadTrack
    }
})()
