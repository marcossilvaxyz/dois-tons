// ======================================================
// dois tons - offline service
// downloads privados salvos somente neste aparelho
// ======================================================

window.DoisTonsOffline = (() => {
    // configuracoes
    const databaseName = "dois-tons-offline"
    const databaseVersion = 2
    const downloadStoreName = "downloads"
    const snapshotStoreName = "snapshots"
    let databasePromise = null

    function createDownloadKey(duoId,trackId) {
        return `${duoId}:${trackId}`
    }

    function openDatabase() {
        if (databasePromise) return databasePromise

        databasePromise = new Promise((resolve,reject) => {
            const request = indexedDB.open(databaseName,databaseVersion)

            request.addEventListener("upgradeneeded",() => {
                const database = request.result

                if (!database.objectStoreNames.contains(downloadStoreName)) {
                    const store = database.createObjectStore(downloadStoreName,{keyPath:"key"})

                    store.createIndex("duoId","duoId",{unique:false})
                    store.createIndex("trackId","trackId",{unique:false})
                    store.createIndex("downloadedAt","downloadedAt",{unique:false})
                }

                if (!database.objectStoreNames.contains(snapshotStoreName)) {
                    database.createObjectStore(snapshotStoreName,{keyPath:"duoId"})
                }
            })

            request.addEventListener("success",() => resolve(request.result),{once:true})
            request.addEventListener("error",() => reject(request.error || new Error("Não foi possível abrir o armazenamento offline.")),{once:true})
        })

        return databasePromise
    }

    async function runTransaction(storeName,mode,callback) {
        const database = await openDatabase()

        return new Promise((resolve,reject) => {
            const transaction = database.transaction(storeName,mode)
            const store = transaction.objectStore(storeName)
            let result

            try {
                result = callback(store,transaction)
            } catch (error) {
                reject(error)
                return
            }

            transaction.addEventListener("complete",() => resolve(result),{once:true})
            transaction.addEventListener("abort",() => reject(transaction.error || new Error("A operação offline foi cancelada.")),{once:true})
            transaction.addEventListener("error",() => reject(transaction.error || new Error("Não foi possível concluir a operação offline.")),{once:true})
        })
    }

    async function initialize() {
        if (!("indexedDB" in window)) {
            return {supported:false,persistent:false}
        }

        await openDatabase()

        let persistent = false

        try {
            if (navigator.storage?.persisted) persistent = await navigator.storage.persisted()
            if (!persistent && navigator.storage?.persist) persistent = await navigator.storage.persist()
        } catch (error) {
            persistent = false
        }

        return {supported:true,persistent}
    }

    async function getDownloads(duoId) {
        if (!duoId) return []

        const database = await openDatabase()

        return new Promise((resolve,reject) => {
            const transaction = database.transaction(downloadStoreName,"readonly")
            const store = transaction.objectStore(downloadStoreName)
            const index = store.index("duoId")
            const request = index.getAll(duoId)

            request.addEventListener("success",() => {
                const downloads = request.result || []

                downloads.sort((first,second) => Number(second.downloadedAt || 0) - Number(first.downloadedAt || 0))
                resolve(downloads)
            },{once:true})
            request.addEventListener("error",() => reject(request.error || new Error("Não foi possível ler os downloads.")),{once:true})
        })
    }

    async function getDownload(duoId,trackId) {
        if (!duoId || !trackId) return null

        const database = await openDatabase()

        return new Promise((resolve,reject) => {
            const transaction = database.transaction(downloadStoreName,"readonly")
            const request = transaction.objectStore(downloadStoreName).get(createDownloadKey(duoId,trackId))

            request.addEventListener("success",() => resolve(request.result || null),{once:true})
            request.addEventListener("error",() => reject(request.error || new Error("Não foi possível ler o download.")),{once:true})
        })
    }

    async function saveDownload({duoId,track,audioBlob,coverBlob = null}) {
        if (!duoId || !track?.id || !(audioBlob instanceof Blob)) {
            throw new Error("Dados inválidos para salvar a música offline.")
        }

        const record = {
            key:createDownloadKey(duoId,track.id),
            duoId,
            trackId:track.id,
            title:track.title || "Sem título",
            artist:track.artist || "Artista desconhecido",
            album:track.album || "Adicionada ao Dois Tons",
            duration:Number(track.duration || 0),
            favorite:Boolean(track.favorite),
            sharedBy:track.sharedBy || "",
            tags:Array.isArray(track.tags) ? track.tags : [],
            addedBy:track.addedBy || "",
            addedByMemberId:track.addedByMemberId || "",
            addedByName:track.addedByName || "",
            createdAt:track.createdAt || "",
            coverPath:track.coverPath || "",
            audioBlob,
            coverBlob:coverBlob instanceof Blob ? coverBlob : null,
            mimeType:audioBlob.type || track.mimeType || "audio/mpeg",
            fileSize:Number(audioBlob.size || track.fileSize || 0),
            downloadedAt:Date.now()
        }

        await runTransaction(downloadStoreName,"readwrite",store => store.put(record))

        return record
    }

    async function removeDownload(duoId,trackId) {
        if (!duoId || !trackId) return

        await runTransaction(downloadStoreName,"readwrite",store => store.delete(createDownloadKey(duoId,trackId)))
    }


    async function updateDownloadMetadata({duoId,track,coverBlob}) {
        if (!duoId || !track?.id) return null

        const record = await getDownload(duoId,track.id)

        if (!record) return null

        const coverChanged = coverBlob !== undefined
        const updatedRecord = {
            ...record,
            title:track.title || record.title || "Sem título",
            artist:track.artist || record.artist || "Artista desconhecido",
            album:track.album || record.album || "Álbum desconhecido",
            favorite:Boolean(track.favorite),
            sharedBy:track.sharedBy || "",
            tags:Array.isArray(track.tags) ? track.tags : record.tags || [],
            coverPath:track.coverPath ?? record.coverPath ?? "",
            coverBlob:coverChanged
                ? coverBlob instanceof Blob ? coverBlob : null
                : record.coverBlob,
            downloadedAt:Date.now()
        }

        await runTransaction(downloadStoreName,"readwrite",store => store.put(updatedRecord))

        return updatedRecord
    }

    async function clearDownloads(duoId) {
        const downloads = await getDownloads(duoId)

        if (!downloads.length) return 0

        await runTransaction(downloadStoreName,"readwrite",store => {
            downloads.forEach(download => store.delete(download.key))
        })

        return downloads.length
    }


    async function saveSnapshot({duoId,tracks = [],playlists = [],members = []}) {
        if (!duoId) return

        const snapshot = {
            duoId,
            tracks:Array.isArray(tracks) ? tracks : [],
            playlists:Array.isArray(playlists) ? playlists : [],
            members:Array.isArray(members) ? members : [],
            updatedAt:Date.now()
        }

        await runTransaction(snapshotStoreName,"readwrite",store => store.put(snapshot))
    }

    async function getSnapshot(duoId) {
        if (!duoId) return null

        const database = await openDatabase()

        return new Promise((resolve,reject) => {
            const transaction = database.transaction(snapshotStoreName,"readonly")
            const request = transaction.objectStore(snapshotStoreName).get(duoId)

            request.addEventListener("success",() => resolve(request.result || null),{once:true})
            request.addEventListener("error",() => reject(request.error || new Error("Não foi possível ler a biblioteca offline.")),{once:true})
        })
    }

    async function getUsage(duoId) {
        const downloads = await getDownloads(duoId)
        const used = downloads.reduce((total,download) => {
            return total
                + Number(download.audioBlob?.size || download.fileSize || 0)
                + Number(download.coverBlob?.size || 0)
        },0)
        let quota = 0
        let browserUsage = 0

        try {
            if (navigator.storage?.estimate) {
                const estimate = await navigator.storage.estimate()

                quota = Number(estimate.quota || 0)
                browserUsage = Number(estimate.usage || 0)
            }
        } catch (error) {
            quota = 0
            browserUsage = 0
        }

        return {
            count:downloads.length,
            used,
            quota,
            browserUsage
        }
    }

    return {
        clearDownloads,
        getDownload,
        getDownloads,
        getSnapshot,
        getUsage,
        initialize,
        removeDownload,
        saveDownload,
        updateDownloadMetadata,
        saveSnapshot
    }
})()
