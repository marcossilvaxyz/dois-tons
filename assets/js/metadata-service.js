window.DoisTonsMetadata = (() => {
    // endpoints e limites
    const musicBrainzBaseUrl = "https://musicbrainz.org/ws/2"
    const coverArtBaseUrl = "https://coverartarchive.org"
    const minimumRequestInterval = 1100
    const searchLimit = 5
    const searchCache = new Map()

    let lastRequestAt = 0
    let requestQueue = Promise.resolve()

    function normalizeText(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g,"")
            .toLocaleLowerCase("pt-BR")
            .replace(/[^\p{L}\p{N}]+/gu," ")
            .replace(/\s+/g," ")
            .trim()
    }

    function isGenericValue(value) {
        const normalized = normalizeText(value)

        return !normalized
            || [
                "musica sem titulo",
                "artista desconhecido",
                "album desconhecido",
                "adicionada pelo meu perfil",
                "adicionada ao dois tons"
            ].includes(normalized)
    }

    function escapeQueryValue(value) {
        return String(value || "")
            .replaceAll("\\","\\\\")
            .replaceAll('"','\\"')
            .trim()
    }

    function wait(milliseconds) {
        return new Promise(resolve => setTimeout(resolve,milliseconds))
    }

    function scheduleMusicBrainzRequest(callback) {
        const queuedRequest = requestQueue.then(async () => {
            const elapsed = Date.now() - lastRequestAt
            const remaining = Math.max(0,minimumRequestInterval - elapsed)

            if (remaining) await wait(remaining)

            lastRequestAt = Date.now()
            return callback()
        })

        requestQueue = queuedRequest.catch(() => {})

        return queuedRequest
    }

    function getArtistName(recording) {
        const credits = Array.isArray(recording?.["artist-credit"])
            ? recording["artist-credit"]
            : []

        return credits
            .map(credit => {
                const name = credit?.name || credit?.artist?.name || ""

                return name ? `${name}${credit?.joinphrase || ""}` : ""
            })
            .filter(Boolean)
            .join("")
            .trim()
    }

    function getRelease(recording,album) {
        const releases = Array.isArray(recording?.releases) ? recording.releases : []

        if (!releases.length) return null

        const normalizedAlbum = normalizeText(album)

        if (normalizedAlbum && !isGenericValue(album)) {
            const exactRelease = releases.find(release => normalizeText(release?.title) === normalizedAlbum)

            if (exactRelease) return exactRelease
        }

        return releases.find(release => release?.status === "Official") || releases[0]
    }

    function getSimilarity(firstValue,secondValue) {
        const first = normalizeText(firstValue)
        const second = normalizeText(secondValue)

        if (!first || !second) return 0
        if (first === second) return 1
        if (first.includes(second) || second.includes(first)) return 0.84

        const firstWords = new Set(first.split(" ").filter(Boolean))
        const secondWords = new Set(second.split(" ").filter(Boolean))
        const sharedWords = [...firstWords].filter(word => secondWords.has(word)).length
        const totalWords = new Set([...firstWords,...secondWords]).size

        return totalWords ? sharedWords / totalWords : 0
    }

    function getRecordingConfidence(recording,{title,artist,album,duration}) {
        const serviceScore = Math.max(0,Math.min(100,Number(recording?.score || 0))) / 100
        const recordingArtist = getArtistName(recording)
        const release = getRelease(recording,album)
        const titleScore = getSimilarity(title,recording?.title)
        const artistScore = artist && !isGenericValue(artist)
            ? getSimilarity(artist,recordingArtist)
            : 0.5
        const albumScore = album && !isGenericValue(album) && release?.title
            ? getSimilarity(album,release.title)
            : 0.5
        const sourceDuration = Number(duration || 0)
        const resultDuration = Number(recording?.length || 0) / 1000
        let durationScore = 0.5

        if (sourceDuration > 0 && resultDuration > 0) {
            const difference = Math.abs(sourceDuration - resultDuration)

            durationScore = difference <= 2
                ? 1
                : difference <= 5
                    ? 0.9
                    : difference <= 12
                        ? 0.65
                        : difference <= 25
                            ? 0.35
                            : 0
        }

        return serviceScore * 0.25
            + titleScore * 0.3
            + artistScore * 0.25
            + albumScore * 0.08
            + durationScore * 0.12
    }

    function buildSearchQuery({title,artist,album}) {
        const queryParts = [`recording:"${escapeQueryValue(title)}"`]

        if (artist && !isGenericValue(artist)) queryParts.push(`artist:"${escapeQueryValue(artist)}"`)
        if (album && !isGenericValue(album)) queryParts.push(`release:"${escapeQueryValue(album)}"`)

        return queryParts.join(" AND ")
    }

    function getCoverSources(recording,release) {
        const releaseGroupId = release?.["release-group"]?.id
        const sources = []

        if (release?.id) sources.push(`${coverArtBaseUrl}/release/${encodeURIComponent(release.id)}/front-500`)
        if (releaseGroupId) sources.push(`${coverArtBaseUrl}/release-group/${encodeURIComponent(releaseGroupId)}/front-500`)

        return sources
    }

    async function searchTrack({title,artist = "",album = "",duration = 0} = {}) {
        const cleanTitle = String(title || "").trim()
        const cleanArtist = String(artist || "").trim()
        const cleanAlbum = String(album || "").trim()

        if (cleanTitle.length < 2) return null

        const cacheKey = [
            normalizeText(cleanTitle),
            normalizeText(cleanArtist),
            normalizeText(cleanAlbum),
            Math.round(Number(duration || 0) / 5) * 5
        ].join("|")

        if (searchCache.has(cacheKey)) return searchCache.get(cacheKey)

        const request = async () => {
            const query = buildSearchQuery({title:cleanTitle,artist:cleanArtist,album:cleanAlbum})
            const requestUrl = new URL(`${musicBrainzBaseUrl}/recording/`)

            requestUrl.searchParams.set("query",query)
            requestUrl.searchParams.set("fmt","json")
            requestUrl.searchParams.set("limit",String(searchLimit))

            const response = await fetch(requestUrl,{headers:{Accept:"application/json"},cache:"no-store"})

            if (!response.ok) throw new Error(`MusicBrainz respondeu com HTTP ${response.status}.`)

            const data = await response.json()
            const recordings = Array.isArray(data?.recordings) ? data.recordings : []

            if (!recordings.length) return null

            const candidates = recordings
                .map(recording => ({
                    recording,
                    confidence:getRecordingConfidence(recording,{
                        title:cleanTitle,
                        artist:cleanArtist,
                        album:cleanAlbum,
                        duration
                    })
                }))
                .sort((first,second) => second.confidence - first.confidence)
            const selected = candidates[0]

            if (!selected || selected.confidence < 0.67) return null

            const recording = selected.recording
            const release = getRelease(recording,cleanAlbum)
            const result = {
                title:String(recording?.title || cleanTitle).trim(),
                artist:getArtistName(recording) || cleanArtist,
                album:String(release?.title || cleanAlbum || "").trim(),
                duration:Number(recording?.length || 0) / 1000 || Number(duration || 0),
                confidence:selected.confidence,
                musicBrainzId:recording?.id || "",
                releaseId:release?.id || "",
                coverSources:getCoverSources(recording,release),
                source:"MusicBrainz"
            }

            return result
        }
        const result = await scheduleMusicBrainzRequest(request)

        searchCache.set(cacheKey,result)

        return result
    }

    function getCoverExtension(mimeType) {
        const type = String(mimeType || "").toLocaleLowerCase("pt-BR")

        if (type.includes("png")) return "png"
        if (type.includes("webp")) return "webp"
        if (type.includes("gif")) return "gif"

        return "jpg"
    }

    function sanitizeFileName(value) {
        return String(value || "capa")
            .replace(/[\\/:*?"<>|]+/g," ")
            .replace(/\s+/g," ")
            .trim()
            .slice(0,80) || "capa"
    }

    async function downloadCover(result,{maximumSize = 10 * 1024 * 1024} = {}) {
        const sources = Array.isArray(result?.coverSources) ? result.coverSources : []

        for (const source of sources) {
            try {
                const response = await fetch(source,{cache:"no-store"})

                if (!response.ok) continue

                const blob = await response.blob()

                if (!blob.type.startsWith("image/") || !blob.size || blob.size > maximumSize) continue

                const extension = getCoverExtension(blob.type)
                const fileName = `${sanitizeFileName(result.album || result.title)}-capa.${extension}`

                return new File([blob],fileName,{type:blob.type || "image/jpeg"})
            } catch (error) {
                continue
            }
        }

        return null
    }

    return {
        searchTrack,
        downloadCover,
        isGenericValue
    }
})()
