// ======================================================
// dois tons - script
// pwa musical privada para duas pessoas
// ======================================================

// elementos
const accessScreen = document.getElementById("access-screen")
const accessForm = document.getElementById("access-form")
const accessButton = accessForm?.querySelector(".access-button")
const accessNote = document.getElementById("access-note")
const displayNameInput = document.getElementById("display-name")
const accessCodeInput = document.getElementById("access-code")
const nameMessage = document.getElementById("name-message")
const codeMessage = document.getElementById("code-message")
const appShell = document.getElementById("app-shell")
const appHeader = document.querySelector(".app-header")
const greetingTitle = document.getElementById("greeting-title")
const connectionDot = document.getElementById("connection-dot")
const profileButton = document.getElementById("profile-button")
const profileInitials = document.getElementById("profile-initials")
const profileModalInitials = document.getElementById("profile-modal-initials")
const profileName = document.getElementById("profile-name")
const profileConnection = document.getElementById("profile-connection")
const uploadButton = document.getElementById("upload-button")
const navigationButtons = document.querySelectorAll("[data-navigation]")
const appViews = document.querySelectorAll(".app-view")
const openViewButtons = document.querySelectorAll("[data-open-view]")
const openUploadButtons = document.querySelectorAll("[data-open-upload]")
const openCatalogButtons = document.querySelectorAll("[data-open-catalog]")
const favoritesGrid = document.getElementById("favorites-grid")
const sharedTrackList = document.getElementById("shared-track-list")
const searchInput = document.getElementById("search-input")
const clearSearchButton = document.getElementById("clear-search")
const searchIntroduction = document.getElementById("search-introduction")
const searchResults = document.getElementById("search-results")
const suggestionButtons = document.querySelectorAll("[data-search-suggestion]")
const filterButtons = document.querySelectorAll("[data-filter]")
const libraryCount = document.getElementById("library-count")
const offlineStorageSummary = document.getElementById("offline-storage-summary")
const libraryTrackList = document.getElementById("library-track-list")
const downloadLibraryButton = document.getElementById("download-library")
const playLibraryButton = document.getElementById("play-library")
const libraryModeButtons = document.querySelectorAll("[data-library-mode]")
const libraryToolbar = document.getElementById("library-toolbar")
const librarySearchInput = document.getElementById("library-search-input")
const librarySortSelect = document.getElementById("library-sort")
const libraryOwnerSelect = document.getElementById("library-owner-filter")
const libraryCollectionGrid = document.getElementById("library-collection-grid")
const librarySummaryActions = document.getElementById("library-summary-actions")
const playlistSection = document.getElementById("playlist-section")
const playlistGrid = document.getElementById("playlist-grid")
const playlistContext = document.getElementById("playlist-context")
const activePlaylistTitle = document.getElementById("active-playlist-title")
const clearPlaylistFilterButton = document.getElementById("clear-playlist-filter")
const createPlaylistButton = document.getElementById("create-playlist-button")
const libraryEntityContext = document.getElementById("library-entity-context")
const libraryEntityType = document.getElementById("library-entity-type")
const libraryEntityTitle = document.getElementById("library-entity-title")
const libraryEntitySubtitle = document.getElementById("library-entity-subtitle")
const clearLibraryEntityButton = document.getElementById("clear-library-entity")
const miniPlayer = document.getElementById("mini-player")
const openPlayerButton = document.getElementById("open-player")
const miniCover = document.getElementById("mini-cover")
const miniTitle = document.getElementById("mini-title")
const miniArtist = document.getElementById("mini-artist")
const miniPlayButton = document.getElementById("mini-play-button")
const miniProgress = document.getElementById("mini-progress")
const playerSheet = document.getElementById("player-sheet")
const playerArtwork = document.getElementById("player-artwork")
const playerTitle = document.getElementById("player-title")
const playerArtist = document.getElementById("player-artist")
const favoriteButton = document.getElementById("favorite-button")
const trackProgress = document.getElementById("track-progress")
const currentTime = document.getElementById("current-time")
const durationTime = document.getElementById("duration-time")
const previousButton = document.getElementById("previous-button")
const mainPlayButton = document.getElementById("main-play-button")
const nextButton = document.getElementById("next-button")
const shuffleButton = document.getElementById("shuffle-button")
const repeatButton = document.getElementById("repeat-button")
const openQueueButton = document.getElementById("open-queue-button")
const queueSheet = document.getElementById("queue-sheet")
const queueContextLabel = document.getElementById("queue-context-label")
const queueCurrentTrack = document.getElementById("queue-current-track")
const queueList = document.getElementById("queue-list")
const queueCount = document.getElementById("queue-count")
const clearQueueButton = document.getElementById("clear-queue-button")
const saveQueuePlaylistButton = document.getElementById("save-queue-playlist-button")
const sendCurrentTrackButton = document.getElementById("send-current-track")
const addCurrentToPlaylistButton = document.getElementById("add-current-to-playlist")
const downloadCurrentTrackButton = document.getElementById("download-current-track")
const downloadCurrentTrackLabel = document.getElementById("download-current-track-label")
const manageCurrentTrackButton = document.getElementById("manage-current-track")
const audioPlayer = document.getElementById("audio-player")
const createJamButton = document.getElementById("create-jam-button")
const copyJamCodeButton = document.getElementById("copy-jam-code")
const jamRoom = document.getElementById("jam-room")
const jamRoomTitle = document.getElementById("jam-room-title")
const jamRoomDescription = document.getElementById("jam-room-description")
const jamPersonOne = document.getElementById("jam-person-one")
const jamPersonTwo = document.getElementById("jam-person-two")
const uploadModal = document.getElementById("upload-modal")
const uploadForm = document.getElementById("upload-form")
const uploadSubmitButton = document.getElementById("upload-submit-button")
const uploadInformation = document.getElementById("upload-information")
const audioFileInput = document.getElementById("audio-file")
const audioFileDrop = document.getElementById("audio-file-drop")
const audioFileTitle = document.getElementById("audio-file-title")
const trackTitleInput = document.getElementById("track-title")
const trackArtistInput = document.getElementById("track-artist")
const coverFileInput = document.getElementById("cover-file")
const coverPreview = document.getElementById("cover-preview")
const trackManagerModal = document.getElementById("track-manager-modal")
const trackManagerForm = document.getElementById("track-manager-form")
const trackManagerCover = document.getElementById("track-manager-cover")
const trackManagerSummaryTitle = document.getElementById("track-manager-summary-title")
const trackManagerSummaryArtist = document.getElementById("track-manager-summary-artist")
const trackManagerOwner = document.getElementById("track-manager-owner")
const trackManagerTitleInput = document.getElementById("track-manager-title-input")
const trackManagerArtistInput = document.getElementById("track-manager-artist-input")
const trackManagerAlbumInput = document.getElementById("track-manager-album-input")
const trackManagerCoverInput = document.getElementById("track-manager-cover-file")
const trackManagerCoverPreview = document.getElementById("track-manager-cover-preview")
const trackManagerRemoveCoverButton = document.getElementById("track-manager-remove-cover")
const trackManagerInformation = document.getElementById("track-manager-information")
const trackManagerSubmitButton = document.getElementById("track-manager-submit-button")
const trackDeleteButton = document.getElementById("track-delete-button")
const trackDeleteConfirmation = document.getElementById("track-delete-confirmation")
const trackDeleteCancelButton = document.getElementById("track-delete-cancel")
const trackDeleteConfirmButton = document.getElementById("track-delete-confirm")
const catalogModal = document.getElementById("catalog-modal")
const catalogModalCard = catalogModal?.querySelector(".catalog-modal-card")
const catalogFileInput = document.getElementById("catalog-files")
const catalogFolderInput = document.getElementById("catalog-folder")
const catalogProgressTitle = document.getElementById("catalog-progress-title")
const catalogProgressDescription = document.getElementById("catalog-progress-description")
const catalogProgressValue = document.getElementById("catalog-progress-value")
const catalogProgressTrack = document.getElementById("catalog-progress-track")
const catalogProgressBar = document.getElementById("catalog-progress-bar")
const catalogSummary = document.getElementById("catalog-summary")
const catalogList = document.getElementById("catalog-list")
const catalogClearButton = document.getElementById("catalog-clear-button")
const catalogCancelButton = document.getElementById("catalog-cancel-button")
const catalogImportButton = document.getElementById("catalog-import-button")
const playlistModal = document.getElementById("playlist-modal")
const playlistPicker = document.getElementById("playlist-picker")
const playlistForm = document.getElementById("playlist-form")
const playlistTitleInput = document.getElementById("playlist-title")
const playlistSubmitButton = document.getElementById("playlist-submit-button")
const profileModal = document.getElementById("profile-modal")
const installModal = document.getElementById("install-modal")
const installAppButton = document.getElementById("install-app-button")
const installOptionTitle = document.getElementById("install-option-title")
const installOptionDescription = document.getElementById("install-option-description")
const installPlatformLabel = document.getElementById("install-platform-label")
const installSteps = document.getElementById("install-steps")
const downloadsOptionButton = document.getElementById("downloads-option-button")
const downloadsOptionDescription = document.getElementById("downloads-option-description")
const themeToggleButton = document.getElementById("theme-toggle-button")
const themeOptionIcon = document.getElementById("theme-option-icon")
const themeOptionTitle = document.getElementById("theme-option-title")
const themeOptionDescription = document.getElementById("theme-option-description")
const themeColorMeta = document.querySelector('meta[name="theme-color"]')
const appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')
const logoutButton = document.getElementById("logout-button")
const modalCloseButtons = document.querySelectorAll("[data-close-modal]")
const sheetCloseButtons = document.querySelectorAll("[data-close-sheet]")
const toast = document.getElementById("toast")
const toastMessage = document.getElementById("toast-message")

// configuracoes
const cloud = window.DoisTonsCloud
const offline = window.DoisTonsOffline
const profileStorageKey = "dois-tons-profile"
const accessStorageKey = "dois-tons-preview-access"
const logoutStorageKey = "dois-tons-logged-out"
const themeStorageKey = "dois-tons-theme"
const playbackStorageKey = "dois-tons-playback"
const offlineProfileStorageKey = "dois-tons-offline-profile"
const availableCoverClasses = ["cover-rose","cover-sea","cover-sun","cover-plum","cover-forest"]
const metadataLibraryUrl = "https://cdn.jsdelivr.net/npm/jsmediatags@3.9.7/dist/jsmediatags.min.js"
const supportedAudioExtensions = ["mp3","m4a","mp4","aac","wav","ogg","oga","flac"]
const maximumAudioFileSize = 100 * 1024 * 1024
const maximumCoverFileSize = 10 * 1024 * 1024

const demoTracks = [
    {
        id:"entrelinhas",
        title:"Entrelinhas",
        artist:"Céu de Outono",
        album:"Cartas ao Vento",
        cover:"cover-rose",
        coverImage:"",
        duration:226,
        favorite:true,
        sharedBy:"Sua pessoa",
        tags:["outono","calma","compartilhada"],
        source:""
    },
    {
        id:"luz-de-agosto",
        title:"Luz de Agosto",
        artist:"Horizonte",
        album:"Dias Dourados",
        cover:"cover-sun",
        coverImage:"",
        duration:198,
        favorite:true,
        sharedBy:"",
        tags:["outono","dourado","calma"],
        source:""
    },
    {
        id:"mare-baixa",
        title:"Maré Baixa",
        artist:"Azul Sereno",
        album:"O Mar Dentro de Nós",
        cover:"cover-sea",
        coverImage:"",
        duration:241,
        favorite:true,
        sharedBy:"Sua pessoa",
        tags:["mar","calma","compartilhada"],
        source:""
    },
    {
        id:"depois-da-chuva",
        title:"Depois da Chuva",
        artist:"Aurora Sul",
        album:"Cores no Céu",
        cover:"cover-plum",
        coverImage:"",
        duration:214,
        favorite:false,
        sharedBy:"",
        tags:["chuva","noite","aurora"],
        source:""
    },
    {
        id:"folhas-ao-vento",
        title:"Folhas ao Vento",
        artist:"Bosque Lento",
        album:"Caminhos",
        cover:"cover-forest",
        coverImage:"",
        duration:233,
        favorite:false,
        sharedBy:"Sua pessoa",
        tags:["outono","calma","compartilhada"],
        source:""
    }
]

// estados
let tracks = [...demoTracks]
let playlists = []
let currentTrackId = tracks[0].id
let playbackQueue = tracks.map(track => track.id)
let playbackQueueIndex = 0
let playbackContext = {type:"library",label:"Biblioteca"}
let shuffleEnabled = false
let repeatMode = "off"
let playbackStateRestored = false
let playbackSaveTimeout = null
let lastPlaybackProgressSave = 0
let pendingPlaylistQueueIds = []
let activeLibraryFilter = "all"
let activeLibraryMode = "songs"
let activeLibraryEntity = null
let librarySortMode = "recent"
let libraryOwnerFilter = "all"
let activePlaylistId = ""
let currentProfile = null
let duoMembers = []
let cloudMode = false
let cloudReady = false
let offlineReady = false
let offlineLaunch = false
let offlineDownloads = new Map()
let offlineObjectUrls = new Map()
let downloadOperations = new Set()
let isPlaying = false
let jamActive = false
let jamSession = null
let jamInviteCode = ""
let applyingRemoteJamState = false
let jamSyncInterval = null
let toastTimeout = null
let cloudRefreshTimeout = null
let seekPublishTimeout = null
let deferredInstallPrompt = null
let selectedCoverImage = ""
let managedTrackId = ""
let managedCoverRemoved = false
let managedCoverPreviewUrl = ""
let pendingPlaylistTrackId = ""
let metadataLibraryPromise = null
let catalogItems = []
let catalogAnalyzing = false
let catalogImporting = false
let catalogCancelRequested = false
let serviceWorkerRegistration = null
let serviceWorkerReloading = false
let pendingServiceWorkerReload = false
let lastMediaSessionPositionUpdate = 0
let lastForegroundRefresh = 0

// tema
function getStoredTheme() {
    return localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light"
}

function updateThemeInterface(theme) {
    const darkTheme = theme === "dark"

    themeToggleButton?.setAttribute("aria-pressed",String(darkTheme))

    if (themeOptionIcon) themeOptionIcon.setAttribute("href",darkTheme ? "#icon-sun" : "#icon-moon")
    if (themeOptionTitle) themeOptionTitle.textContent = darkTheme ? "Tema claro" : "Tema escuro"
    if (themeOptionDescription) themeOptionDescription.textContent = darkTheme ? "Voltar ao tema original" : "Usar Preto Elegante"
}

function applyTheme(theme,{persist = true} = {}) {
    const nextTheme = theme === "dark" ? "dark" : "light"

    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    themeColorMeta?.setAttribute("content",nextTheme === "dark" ? "#0b0b0a" : "#f4e8d7")
    appleStatusBarMeta?.setAttribute("content",nextTheme === "dark" ? "black-translucent" : "default")

    if (persist) localStorage.setItem(themeStorageKey,nextTheme)

    updateThemeInterface(nextTheme)
}

function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"

    applyTheme(nextTheme)
    showToast(nextTheme === "dark" ? "Tema Preto Elegante ativado." : "Tema claro ativado.")
}

applyTheme(getStoredTheme(),{persist:false})

// experiencia ios e pwa
function getRuntimePlatform() {
    const userAgent = navigator.userAgent || ""
    const iOS = /iPhone|iPad|iPod/i.test(userAgent)
        || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    const safari = /Safari/i.test(userAgent) && !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(userAgent)

    return {
        iOS,
        safari,
        standalone:isStandaloneMode()
    }
}

function updateRuntimeInterface() {
    const runtime = getRuntimePlatform()

    document.documentElement.classList.toggle("ios-device",runtime.iOS)
    document.documentElement.classList.toggle("standalone-mode",runtime.standalone)

    if (installAppButton) installAppButton.disabled = runtime.standalone
    if (installOptionTitle) installOptionTitle.textContent = runtime.standalone ? "Aplicativo instalado" : "Instalar aplicativo"
    if (installOptionDescription) {
        installOptionDescription.textContent = runtime.standalone
            ? "Aberto pela Tela de Início"
            : runtime.iOS
                ? "Adicionar à Tela de Início"
                : "Instalar neste dispositivo"
    }

    if (!installPlatformLabel || !installSteps) return

    if (runtime.iOS) {
        installPlatformLabel.textContent = "Aplicativo para iPhone"
        installSteps.innerHTML = runtime.safari
            ? `
                <li><span>1</span><p>Toque no botão <strong>Compartilhar</strong> do Safari.</p></li>
                <li><span>2</span><p>Escolha <strong>Adicionar à Tela de Início</strong>.</p></li>
                <li><span>3</span><p>Deixe <strong>Abrir como App</strong> ativado, se a opção aparecer.</p></li>
                <li><span>4</span><p>Toque em <strong>Adicionar</strong> e abra o Dois Tons pelo novo ícone.</p></li>
            `
            : `
                <li><span>1</span><p>Abra o endereço do Dois Tons no <strong>Safari</strong> para uma instalação mais previsível.</p></li>
                <li><span>2</span><p>Toque em <strong>Compartilhar</strong>.</p></li>
                <li><span>3</span><p>Escolha <strong>Adicionar à Tela de Início</strong>.</p></li>
                <li><span>4</span><p>Confirme e abra o aplicativo pelo ícone criado.</p></li>
            `
        return
    }

    installPlatformLabel.textContent = "Aplicativo da web"
    installSteps.innerHTML = `
        <li><span>1</span><p>Use a opção <strong>Instalar</strong> do navegador.</p></li>
        <li><span>2</span><p>Confirme a instalação quando o navegador solicitar.</p></li>
        <li><span>3</span><p>Abra o Dois Tons pelo atalho criado no sistema.</p></li>
        <li><span>4</span><p>Os downloads offline continuam vinculados somente a este dispositivo.</p></li>
    `
}

function updateMediaSessionPosition(force = false) {
    if (!("mediaSession" in navigator) || typeof navigator.mediaSession.setPositionState !== "function") return

    const now = Date.now()

    if (!force && now - lastMediaSessionPositionUpdate < 900) return

    const duration = Number.isFinite(audioPlayer.duration) ? audioPlayer.duration : Number(getCurrentTrack()?.duration || 0)
    const position = Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0

    if (!Number.isFinite(duration) || duration <= 0) return

    try {
        navigator.mediaSession.setPositionState({
            duration,
            playbackRate:Number.isFinite(audioPlayer.playbackRate) && audioPlayer.playbackRate > 0 ? audioPlayer.playbackRate : 1,
            position:Math.min(Math.max(position,0),duration)
        })
        lastMediaSessionPositionUpdate = now
    } catch (error) {
        return
    }
}

function configureSheetGestures() {
    document.querySelectorAll(".bottom-sheet .sheet-header").forEach(header => {
        const sheet = header.closest(".bottom-sheet")
        const content = header.closest(".sheet-content")

        if (!sheet || !content || header.dataset.gestureReady === "true") return

        header.dataset.gestureReady = "true"
        let startY = 0
        let currentY = 0
        let startedAt = 0
        let pointerId = null
        let dragging = false

        const reset = () => {
            content.style.removeProperty("transition")
            content.style.removeProperty("transform")
            pointerId = null
            dragging = false
        }

        const finish = event => {
            if (pointerId === null || event.pointerId !== pointerId) return

            const distance = Math.max(0,currentY - startY)
            const elapsed = Math.max(1,performance.now() - startedAt)
            const velocity = distance / elapsed
            const shouldClose = distance > 92 || (distance > 42 && velocity > 0.55)

            if (shouldClose) {
                const sheetName = sheet.id.replace(/-sheet$/,"")
                content.style.transition = "transform 180ms ease-out"
                content.style.transform = "translateY(100%)"
                setTimeout(() => {
                    closeSheet(sheetName)
                    reset()
                },160)
            } else {
                content.style.transition = "transform 180ms ease-out"
                content.style.transform = "translateY(0)"
                setTimeout(reset,180)
            }
        }

        header.addEventListener("pointerdown",event => {
            if (event.pointerType === "mouse" && event.button !== 0) return
            if (event.target.closest("button") && event.pointerType === "mouse") return

            startY = event.clientY
            currentY = event.clientY
            startedAt = performance.now()
            pointerId = event.pointerId
            dragging = true
            content.style.transition = "none"

            try {
                header.setPointerCapture(event.pointerId)
            } catch (error) {
                return
            }
        })

        header.addEventListener("pointermove",event => {
            if (!dragging || event.pointerId !== pointerId) return

            currentY = event.clientY
            const distance = Math.max(0,currentY - startY)

            if (distance <= 0) return

            content.style.transform = `translateY(${Math.min(distance,240)}px)`
        })

        header.addEventListener("pointerup",finish)
        header.addEventListener("pointercancel",reset)
    })
}

async function refreshAfterForeground() {
    if (document.visibilityState !== "visible") return

    const now = Date.now()

    updateRuntimeInterface()
    updateConnectionInterface()
    updateMediaSession(getCurrentTrack())
    updateMediaSessionPosition(true)

    if (serviceWorkerRegistration && now - lastForegroundRefresh > 30000) {
        serviceWorkerRegistration.update().catch(() => {})
    }

    if (cloudMode && navigator.onLine) {
        if (!cloudReady) {
            await restoreCloudConnection()
        } else if (currentProfile && now - lastForegroundRefresh > 15000) {
            scheduleCloudRefresh()
        }
    }

    lastForegroundRefresh = now
}

// utilitarios
function escapeHTML(value) {
    const temporaryElement = document.createElement("div")
    temporaryElement.textContent = String(value ?? "")

    return temporaryElement.innerHTML
}

function escapeAttribute(value) {
    return escapeHTML(value).replaceAll("`","&#96;")
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00"

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2,"0")

    return `${minutes}:${remainingSeconds}`
}

function formatFileSize(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "0 MB"

    const megabytes = bytes / (1024 * 1024)

    return `${megabytes < 10 ? megabytes.toFixed(1) : Math.round(megabytes)} MB`
}

function limitText(value,maximumLength,fallback = "") {
    const text = String(value || "").replace(/\s+/g," ").trim()

    return (text || fallback).slice(0,maximumLength)
}

function normalizeCatalogText(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .toLocaleLowerCase("pt-BR")
        .replace(/[^a-z0-9]+/g," ")
        .trim()
}

function createCatalogSignature({title,artist,album,duration}) {
    return [
        normalizeCatalogText(title),
        normalizeCatalogText(artist),
        normalizeCatalogText(album),
        Math.max(0,Math.round(Number(duration || 0)))
    ].join("|")
}

function createCatalogLooseSignature({title,artist,duration}) {
    return [
        normalizeCatalogText(title),
        normalizeCatalogText(artist),
        Math.max(0,Math.round(Number(duration || 0)))
    ].join("|")
}

function getFileExtension(fileName) {
    return String(fileName || "").split(".").at(-1)?.toLocaleLowerCase("pt-BR") || ""
}

function getAudioMimeType(file) {
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
    const extension = getFileExtension(file?.name)

    return mimeTypes[extension] || file?.type || "audio/mpeg"
}

// downloads offline
function saveOfflineProfile(profile) {
    if (!profile?.name || !profile?.duoId) return

    localStorage.setItem(offlineProfileStorageKey,JSON.stringify({
        name:profile.name,
        memberId:profile.memberId || "",
        duoId:profile.duoId,
        userId:profile.userId || "",
        mode:"cloud"
    }))
}

function loadOfflineProfile() {
    try {
        const profile = JSON.parse(localStorage.getItem(offlineProfileStorageKey) || "null")

        if (!profile?.name || !profile?.duoId) return null

        return profile
    } catch (error) {
        return null
    }
}

function getOfflineObjectUrls(record) {
    const cached = offlineObjectUrls.get(record.trackId)

    if (cached?.downloadedAt === record.downloadedAt) return cached

    if (cached) {
        if (cached.audioUrl) URL.revokeObjectURL(cached.audioUrl)
        if (cached.coverUrl) URL.revokeObjectURL(cached.coverUrl)
    }

    const objectUrls = {
        downloadedAt:record.downloadedAt,
        audioUrl:URL.createObjectURL(record.audioBlob),
        coverUrl:record.coverBlob ? URL.createObjectURL(record.coverBlob) : ""
    }

    offlineObjectUrls.set(record.trackId,objectUrls)

    return objectUrls
}

function releaseOfflineObjectUrls() {
    offlineObjectUrls.forEach(objectUrls => {
        if (objectUrls.audioUrl) URL.revokeObjectURL(objectUrls.audioUrl)
        if (objectUrls.coverUrl) URL.revokeObjectURL(objectUrls.coverUrl)
    })

    offlineObjectUrls.clear()
}

function releaseOfflineTrackObjectUrls(trackId) {
    const objectUrls = offlineObjectUrls.get(trackId)

    if (!objectUrls) return

    if (objectUrls.audioUrl) URL.revokeObjectURL(objectUrls.audioUrl)
    if (objectUrls.coverUrl) URL.revokeObjectURL(objectUrls.coverUrl)
    offlineObjectUrls.delete(trackId)
}

function createOfflineTrack(record,index = 0) {
    const objectUrls = getOfflineObjectUrls(record)

    return {
        id:record.trackId,
        title:record.title,
        artist:record.artist,
        album:record.album,
        cover:getCoverClass(record,index),
        coverImage:objectUrls.coverUrl,
        duration:Number(record.duration || 0),
        favorite:Boolean(record.favorite),
        sharedBy:record.sharedBy || "",
        tags:Array.isArray(record.tags) ? record.tags : [],
        addedBy:record.addedBy || "",
        addedByMemberId:record.addedByMemberId || "",
        addedByName:record.addedByName || "",
        createdAt:record.createdAt || "",
        source:objectUrls.audioUrl,
        cloudSource:"",
        cloudCoverImage:"",
        fileSize:Number(record.fileSize || record.audioBlob?.size || 0),
        mimeType:record.mimeType || record.audioBlob?.type || "audio/mpeg",
        downloaded:true,
        offline:true,
        cloud:false,
        coverIndex:index
    }
}

async function updateOfflineStorageInterface() {
    if (!offlineReady || !currentProfile?.duoId) return

    try {
        const usage = await offline.getUsage(currentProfile.duoId)
        const countLabel = usage.count === 1 ? "1 música" : `${usage.count} músicas`
        const sizeLabel = formatFileSize(usage.used)

        if (downloadsOptionDescription) {
            downloadsOptionDescription.textContent = usage.count
                ? `${countLabel} · ${sizeLabel} neste aparelho`
                : "Nenhuma música salva neste aparelho"
        }

        if (offlineStorageSummary) {
            offlineStorageSummary.textContent = usage.count ? `${sizeLabel} usados neste aparelho` : "Nenhum download salvo"
        }
    } catch (error) {
        if (downloadsOptionDescription) downloadsOptionDescription.textContent = "Armazenamento offline indisponível"
    }
}

async function synchronizeOfflineTracks() {
    if (!offlineReady || !currentProfile?.duoId) return

    let records = await offline.getDownloads(currentProfile.duoId)

    if (navigator.onLine) {
        const cloudTrackIds = new Set(tracks.map(track => track.id))
        const orphanDownloads = records.filter(record => !cloudTrackIds.has(record.trackId))

        if (orphanDownloads.length) {
            await Promise.all(orphanDownloads.map(async record => {
                try {
                    await offline.removeDownload(currentProfile.duoId,record.trackId)
                    releaseOfflineTrackObjectUrls(record.trackId)
                } catch (error) {
                    console.warn("Não foi possível remover um download de uma música excluída.",error)
                }
            }))

            records = records.filter(record => cloudTrackIds.has(record.trackId))
        }
    }

    offlineDownloads = new Map(records.map(record => [record.trackId,record]))

    if (navigator.onLine && offline?.updateDownloadMetadata) {
        for (const track of tracks) {
            const record = offlineDownloads.get(track.id)

            if (!record) continue

            const cloudCoverPath = track.coverPath || ""
            const coverPathChanged = record.coverPath !== undefined && record.coverPath !== cloudCoverPath
            const metadataChanged = record.title !== track.title
                || record.artist !== track.artist
                || record.album !== track.album
                || record.coverPath === undefined

            if (!coverPathChanged && !metadataChanged) continue

            let coverBlob

            if (coverPathChanged) {
                coverBlob = null

                if (cloudCoverPath && (track.cloudCoverImage || track.coverImage)) {
                    try {
                        coverBlob = await fetchOfflineBlob(track.cloudCoverImage || track.coverImage)
                    } catch (error) {
                        coverBlob = null
                    }
                }
            }

            try {
                const updatedRecord = await offline.updateDownloadMetadata({
                    duoId:currentProfile.duoId,
                    track,
                    coverBlob
                })

                if (updatedRecord) {
                    releaseOfflineTrackObjectUrls(track.id)
                    offlineDownloads.set(track.id,updatedRecord)
                }
            } catch (error) {
                console.warn("Não foi possível sincronizar os metadados da cópia offline.",error)
            }
        }
    }

    tracks = tracks.map((track,index) => {
        const record = offlineDownloads.get(track.id)
        const cloudSource = track.cloudSource || (track.offline ? "" : track.source)
        const cloudCoverImage = track.cloudCoverImage ?? (track.offline ? "" : track.coverImage)

        if (!record) {
            return {
                ...track,
                source:cloudSource,
                coverImage:cloudCoverImage,
                cloudSource,
                cloudCoverImage,
                downloaded:false,
                offline:false
            }
        }

        const objectUrls = getOfflineObjectUrls(record)

        return {
            ...track,
            source:objectUrls.audioUrl,
            coverImage:objectUrls.coverUrl || cloudCoverImage,
            cloudSource,
            cloudCoverImage,
            downloaded:true,
            offline:true,
            offlineSize:Number(record.fileSize || record.audioBlob?.size || 0),
            mimeType:record.mimeType || track.mimeType || "audio/mpeg"
        }
    })

    await updateOfflineStorageInterface()
}

async function saveOfflineLibrarySnapshot(sourceTracks,sourcePlaylists,sourceMembers) {
    if (!offlineReady || !currentProfile?.duoId) return

    const snapshotTracks = sourceTracks.map(track => ({
        id:track.id,
        title:track.title,
        artist:track.artist,
        album:track.album,
        duration:Number(track.duration || 0),
        favorite:Boolean(track.favorite),
        sharedBy:track.sharedBy || "",
        tags:Array.isArray(track.tags) ? track.tags : [],
        addedBy:track.addedBy || "",
        addedByMemberId:track.addedByMemberId || "",
        addedByName:track.addedByName || "",
        createdAt:track.createdAt || "",
        fileSize:Number(track.fileSize || 0),
        mimeType:track.mimeType || ""
    }))
    const snapshotPlaylists = sourcePlaylists.map(playlist => ({
        id:playlist.id,
        title:playlist.title,
        description:playlist.description || "",
        trackIds:Array.isArray(playlist.trackIds) ? playlist.trackIds : []
    }))
    const snapshotMembers = sourceMembers.map(member => ({
        id:member.id,
        display_name:member.display_name || ""
    }))

    try {
        await offline.saveSnapshot({
            duoId:currentProfile.duoId,
            tracks:snapshotTracks,
            playlists:snapshotPlaylists,
            members:snapshotMembers
        })
    } catch (error) {
        return
    }
}

async function loadOfflineApplicationData() {
    if (!offlineReady || !currentProfile?.duoId) return false

    const previousTrackId = currentTrackId
    const [records,snapshot] = await Promise.all([
        offline.getDownloads(currentProfile.duoId),
        offline.getSnapshot(currentProfile.duoId)
    ])
    const downloadedIds = new Set(records.map(record => record.trackId))
    const snapshotTracks = Array.isArray(snapshot?.tracks) ? snapshot.tracks : []
    const snapshotTrackIds = new Set(snapshotTracks.map(track => track.id))
    const currentRemoved = Boolean(previousTrackId && !snapshotTrackIds.has(previousTrackId) && !downloadedIds.has(previousTrackId))
    const currentUnavailableOffline = Boolean(previousTrackId && !navigator.onLine && !downloadedIds.has(previousTrackId))

    if (currentRemoved || currentUnavailableOffline) {
        audioPlayer.pause()
        audioPlayer.removeAttribute("src")
        audioPlayer.dataset.trackId = ""
        audioPlayer.dataset.source = ""
        audioPlayer.load()
        isPlaying = false
    }

    offlineDownloads = new Map(records.map(record => [record.trackId,record]))
    tracks = snapshotTracks.map((track,index) => ({
        ...track,
        cover:getCoverClass(track,index),
        coverImage:"",
        source:"",
        cloudSource:"",
        cloudCoverImage:"",
        downloaded:false,
        offline:false,
        cloud:false,
        coverIndex:index
    }))

    records.forEach((record,index) => {
        const trackIndex = tracks.findIndex(track => track.id === record.trackId)

        if (trackIndex >= 0) {
            const objectUrls = getOfflineObjectUrls(record)

            tracks[trackIndex] = {
                ...tracks[trackIndex],
                source:objectUrls.audioUrl,
                coverImage:objectUrls.coverUrl,
                fileSize:Number(record.fileSize || record.audioBlob?.size || tracks[trackIndex].fileSize || 0),
                mimeType:record.mimeType || tracks[trackIndex].mimeType || "audio/mpeg",
                downloaded:true,
                offline:true
            }
        } else {
            tracks.push(createOfflineTrack(record,tracks.length + index))
        }
    })

    playlists = Array.isArray(snapshot?.playlists) ? snapshot.playlists : []
    duoMembers = Array.isArray(snapshot?.members) && snapshot.members.length
        ? snapshot.members
        : [{
            id:currentProfile.memberId || "offline-member",
            display_name:currentProfile.name
        }]
    jamSession = null
    jamInviteCode = ""
    jamActive = false
    offlineLaunch = true
    currentTrackId = tracks.some(track => track.id === previousTrackId && track.downloaded)
        ? previousTrackId
        : tracks.find(track => track.downloaded)?.id || tracks[0]?.id || ""

    if (!playbackStateRestored) {
        restorePlaybackState()
    } else if (tracks.length) {
        normalizePlaybackQueue()
    } else {
        playbackQueue = []
        playbackQueueIndex = -1
        pauseTrack({syncJam:false})
    }

    updateProfileInterface()
    renderApplicationData()
    updatePlayerInterface()
    updateJamInterface()
    await updateOfflineStorageInterface()

    return true
}

async function fetchOfflineBlob(url) {
    if (!url) throw new Error("O arquivo desta música não está disponível para download.")

    const response = await fetch(url,{cache:"no-store"})

    if (!response.ok) throw new Error("Não foi possível baixar o arquivo de áudio.")

    return response.blob()
}

async function hasOfflineStorageCapacity(requiredBytes) {
    if (!offlineReady || !currentProfile?.duoId || !Number.isFinite(requiredBytes) || requiredBytes <= 0) return true

    try {
        const usage = await offline.getUsage(currentProfile.duoId)

        if (!usage.quota) return true

        const availableBytes = Math.max(0,usage.quota - usage.browserUsage)
        const safetyMargin = Math.max(5 * 1024 * 1024,requiredBytes * 0.08)

        return availableBytes >= requiredBytes + safetyMargin
    } catch (error) {
        return true
    }
}

async function downloadTrackToDevice(trackId,{silent = false,refresh = true} = {}) {
    const track = tracks.find(item => item.id === trackId)

    if (!track || track.downloaded || downloadOperations.has(trackId)) return Boolean(track?.downloaded)

    if (!offlineReady) {
        if (!silent) showToast("Este navegador não oferece armazenamento offline para o Dois Tons.","warning")
        return false
    }

    if (!cloudReady || !navigator.onLine) {
        if (!silent) showToast("Conecte-se à internet para baixar esta música.","warning")
        return false
    }

    if (!(await hasOfflineStorageCapacity(Number(track.fileSize || 0)))) {
        if (!silent) showToast("Não há espaço suficiente neste aparelho para baixar esta música.","warning")
        return false
    }

    let source = track.cloudSource || track.source

    if (track.audioPath && cloud?.createPrivateUrl) {
        try {
            source = await cloud.createPrivateUrl(track.audioPath)
        } catch (error) {
            source = track.cloudSource || track.source
        }
    }

    if (!source || source.startsWith("blob:")) {
        if (!silent) showToast("O arquivo original desta música não está disponível.","warning")
        return false
    }

    downloadOperations.add(trackId)

    if (refresh) {
        renderApplicationData()
        updatePlayerInterface()
    }

    try {
        const audioBlob = await fetchOfflineBlob(source)
        let coverBlob = null
        let coverSource = track.cloudCoverImage || track.coverImage

        if (track.coverPath && cloud?.createPrivateUrl) {
            try {
                coverSource = await cloud.createPrivateUrl(track.coverPath)
            } catch (error) {
                coverSource = track.cloudCoverImage || track.coverImage
            }
        }

        if (coverSource && !coverSource.startsWith("blob:")) {
            try {
                coverBlob = await fetchOfflineBlob(coverSource)
            } catch (error) {
                coverBlob = null
            }
        }

        await offline.saveDownload({
            duoId:currentProfile.duoId,
            track,
            audioBlob,
            coverBlob
        })

        if (refresh) {
            await synchronizeOfflineTracks()
            normalizePlaybackQueue()
            renderApplicationData()
            updatePlayerInterface()
        }

        if (!silent) showToast(`${track.title} está disponível offline neste aparelho.`)

        return true
    } catch (error) {
        if (!silent) showToast(getErrorMessage(error,"Não foi possível baixar esta música."),"warning")

        return false
    } finally {
        downloadOperations.delete(trackId)

        if (refresh) {
            renderApplicationData()
            updatePlayerInterface()
        }
    }
}

async function removeTrackDownload(trackId,{silent = false} = {}) {
    const track = tracks.find(item => item.id === trackId)

    if (!track?.downloaded || !currentProfile?.duoId) return

    try {
        await offline.removeDownload(currentProfile.duoId,trackId)

        if (offlineLaunch && !cloudReady) {
            await loadOfflineApplicationData()
        } else {
            await synchronizeOfflineTracks()
            normalizePlaybackQueue()
            renderApplicationData()
            updatePlayerInterface()
        }

        if (!silent) showToast(`${track.title} foi removida dos downloads deste aparelho.`)
    } catch (error) {
        if (!silent) showToast(getErrorMessage(error,"Não foi possível remover o download."),"warning")
    }
}

async function toggleTrackDownload(trackId) {
    const track = tracks.find(item => item.id === trackId)

    if (!track) return

    if (!track.downloaded) {
        await downloadTrackToDevice(trackId)
        return
    }

    const shouldRemove = window.confirm(`Remover “${track.title}” dos downloads deste aparelho?`)

    if (shouldRemove) await removeTrackDownload(trackId)
}

async function downloadVisibleCollection() {
    const visibleTracks = getFilteredLibraryTracks().filter(track => !track.downloaded && (track.cloudSource || track.source))

    if (!visibleTracks.length) {
        showToast("Todas as músicas desta coleção já estão disponíveis offline.")
        return
    }

    if (!cloudReady || !navigator.onLine) {
        showToast("Conecte-se à internet para baixar esta coleção.","warning")
        return
    }

    const estimatedSize = visibleTracks.reduce((total,track) => total + Number(track.fileSize || 0),0)
    const sizeText = estimatedSize ? ` Aproximadamente ${formatFileSize(estimatedSize)}.` : ""
    const shouldDownload = window.confirm(`Baixar ${visibleTracks.length === 1 ? "1 música" : `${visibleTracks.length} músicas`} para este aparelho?${sizeText}`)

    if (!shouldDownload) return

    setButtonLoading(downloadLibraryButton,true,"0%")

    let completed = 0
    let downloaded = 0

    try {
        for (const track of visibleTracks) {
            const success = await downloadTrackToDevice(track.id,{silent:true,refresh:false})

            completed += 1
            if (success) downloaded += 1

            const label = downloadLibraryButton?.querySelector("span")
            if (label) label.textContent = `${Math.round((completed / visibleTracks.length) * 100)}%`
        }

        await synchronizeOfflineTracks()
        normalizePlaybackQueue()
        renderApplicationData()
        updatePlayerInterface()

        showToast(downloaded
            ? `${downloaded === 1 ? "1 música baixada" : `${downloaded} músicas baixadas`} para este aparelho.`
            : "Nenhuma música nova foi baixada.",downloaded ? "success" : "warning")
    } finally {
        setButtonLoading(downloadLibraryButton,false)
    }
}

function openDownloadsLibrary() {
    closeModal("profile")
    activePlaylistId = ""
    activeLibraryEntity = null
    activeLibraryMode = "downloads"
    activeLibraryFilter = "downloads"
    openView("library")
    renderPlaylists()
    updateLibraryFilters()
    renderLibrary()
}

function getCurrentTrack() {
    return tracks.find(track => track.id === currentTrackId) || tracks[0]
}

function getPlayableTracks(sourceTracks = tracks) {
    return sourceTracks.filter(track => {
        if (!track?.source) return false
        if (!cloudMode || navigator.onLine) return true

        return Boolean(track.downloaded)
    })
}

function getPlaybackContextTracks(context = playbackContext) {
    if (!context) return tracks

    if (context.type === "playlist") {
        const playlist = playlists.find(item => item.id === context.id)

        return playlist
            ? playlist.trackIds.map(trackId => tracks.find(track => track.id === trackId)).filter(Boolean)
            : tracks
    }

    if (context.type === "collection") {
        return Array.isArray(context.trackIds)
            ? context.trackIds.map(trackId => tracks.find(track => track.id === trackId)).filter(Boolean)
            : tracks
    }

    if (context.type === "favorites") return tracks.filter(track => track.favorite)
    if (context.type === "shared") return tracks.filter(track => track.sharedBy)
    if (context.type === "downloads") return tracks.filter(track => track.downloaded)

    if (context.type === "search") {
        const query = String(context.query || "").trim().toLocaleLowerCase("pt-BR")

        return query
            ? tracks.filter(track => getTrackSearchText(track).includes(query))
            : tracks
    }

    return tracks
}

function getLibraryPlaybackContext() {
    const visibleTracks = getFilteredLibraryTracks()
    const label = activePlaylistId
        ? playlists.find(item => item.id === activePlaylistId)?.title || "Playlist"
        : activeLibraryEntity?.title || getLibraryModeLabel()

    return {
        type:"collection",
        label,
        trackIds:visibleTracks.map(track => track.id)
    }
}

function getPlaybackContextFromElement(element) {
    if (element.closest("#favorites-grid")) return {type:"favorites",label:"Favoritas"}
    if (element.closest("#shared-track-list")) return {type:"shared",label:"Compartilhadas"}

    if (element.closest("#search-results")) {
        return {
            type:"search",
            label:"Resultados da busca",
            query:searchInput.value
        }
    }

    if (element.closest("#library-track-list")) return getLibraryPlaybackContext()

    return {type:"library",label:"Biblioteca"}
}

function shuffleTrackIds(trackIds) {
    const shuffled = [...trackIds]

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        ;[shuffled[index],shuffled[randomIndex]] = [shuffled[randomIndex],shuffled[index]]
    }

    return shuffled
}

function buildPlaybackQueue(trackId = currentTrackId,context = playbackContext) {
    const contextTracks = getPlayableTracks(getPlaybackContextTracks(context))
    const currentTrack = tracks.find(track => track.id === trackId)
    const currentPlayable = Boolean(currentTrack && getPlayableTracks([currentTrack]).length)
    let queueIds = contextTracks.map(track => track.id)

    if (currentPlayable && !queueIds.includes(currentTrack.id)) queueIds.unshift(currentTrack.id)

    if (!queueIds.length) {
        playbackQueue = []
        playbackQueueIndex = -1
        renderQueue()
        return
    }

    if (shuffleEnabled) {
        if (queueIds.includes(trackId)) {
            const remainingIds = queueIds.filter(id => id !== trackId)

            playbackQueue = [trackId,...shuffleTrackIds(remainingIds)].filter(Boolean)
            playbackQueueIndex = 0
        } else {
            playbackQueue = shuffleTrackIds(queueIds)
            playbackQueueIndex = -1
        }
    } else {
        playbackQueue = queueIds
        playbackQueueIndex = playbackQueue.indexOf(trackId)
    }

    playbackContext = context || {type:"library",label:"Biblioteca"}
    renderQueue()
    schedulePlaybackStateSave()
}

function normalizePlaybackQueue() {
    const playableIds = new Set(getPlayableTracks().map(track => track.id))

    playbackQueue = playbackQueue.filter(trackId => playableIds.has(trackId))

    if (!playableIds.has(currentTrackId)) {
        playbackQueueIndex = -1
        renderQueue()
        return
    }

    if (!playbackQueue.includes(currentTrackId)) {
        buildPlaybackQueue(currentTrackId,playbackContext)
        return
    }

    playbackQueueIndex = playbackQueue.indexOf(currentTrackId)
    renderQueue()
}

function schedulePlaybackStateSave() {
    clearTimeout(playbackSaveTimeout)
    playbackSaveTimeout = setTimeout(savePlaybackState,180)
}

function savePlaybackState() {
    if (!currentProfile || !playbackStateRestored) return

    const state = {
        currentTrackId,
        currentTime:Number.isFinite(audioPlayer?.currentTime) ? audioPlayer.currentTime : 0,
        playbackQueue,
        playbackQueueIndex,
        playbackContext,
        shuffleEnabled,
        repeatMode
    }

    localStorage.setItem(playbackStorageKey,JSON.stringify(state))
}

function restorePlaybackState() {
    if (playbackStateRestored || !tracks.length) return

    playbackStateRestored = true

    try {
        const savedState = JSON.parse(localStorage.getItem(playbackStorageKey) || "null")

        if (!savedState) {
            buildPlaybackQueue(currentTrackId,{type:"library",label:"Biblioteca"})
            updatePlaybackModeInterface()
            return
        }

        shuffleEnabled = Boolean(savedState.shuffleEnabled)
        repeatMode = ["off","all","one"].includes(savedState.repeatMode) ? savedState.repeatMode : "off"
        playbackContext = savedState.playbackContext || {type:"library",label:"Biblioteca"}

        const savedTrack = tracks.find(track => track.id === savedState.currentTrackId)
        const savedTrackAvailable = Boolean(savedTrack && (!cloudMode || navigator.onLine || savedTrack.downloaded))

        if (savedTrackAvailable) currentTrackId = savedState.currentTrackId

        const playableIds = new Set(getPlayableTracks().map(track => track.id))
        const storedQueue = Array.isArray(savedState.playbackQueue)
            ? savedState.playbackQueue.filter(trackId => playableIds.has(trackId))
            : []

        playbackQueue = storedQueue.includes(currentTrackId) ? storedQueue : []

        if (!playbackQueue.length) {
            buildPlaybackQueue(currentTrackId,playbackContext)
        } else {
            playbackQueueIndex = playbackQueue.indexOf(currentTrackId)
        }

        const track = getCurrentTrack()

        if (track?.source && Number(savedState.currentTime) > 0 && prepareAudioTrack(track)) {
            const restorePosition = () => {
                const duration = Number.isFinite(audioPlayer.duration) ? audioPlayer.duration : track.duration || 0
                audioPlayer.currentTime = duration
                    ? Math.min(Number(savedState.currentTime),Math.max(0,duration - 0.1))
                    : Number(savedState.currentTime)
                updateProgressInterface()
            }

            if (audioPlayer.readyState >= 1) {
                restorePosition()
            } else {
                audioPlayer.addEventListener("loadedmetadata",restorePosition,{once:true})
            }
        }
    } catch (error) {
        buildPlaybackQueue(currentTrackId,{type:"library",label:"Biblioteca"})
    }

    updatePlaybackModeInterface()
    renderQueue()
}

function getInitials(name) {
    const parts = name.trim().split(/\s+/).filter(Boolean)

    if (!parts.length) return "DT"
    if (parts.length === 1) return parts[0].slice(0,2).toUpperCase()

    return `${parts[0][0]}${parts.at(-1)[0]}`.toUpperCase()
}

function createId(prefix = "item") {
    if (crypto.randomUUID) return crypto.randomUUID()

    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function getCoverClass(track,index = 0) {
    if (track?.cover) return track.cover

    const seed = String(track?.id || index)
        .split("")
        .reduce((total,character) => total + character.charCodeAt(0),0)

    return availableCoverClasses[seed % availableCoverClasses.length]
}

function getCoverStyle(track) {
    if (!track.coverImage) return ""

    return `style="background-image:url('${escapeAttribute(track.coverImage)}');background-position:center;background-size:cover"`
}

function getTrackSearchText(track) {
    return [track.title,track.artist,track.album,...track.tags].join(" ").toLocaleLowerCase("pt-BR")
}

function getErrorMessage(error,fallback = "Não foi possível concluir esta ação.") {
    const message = String(error?.message || "").replace(/^.*?:\s*/,"").trim()

    return message || fallback
}

function setButtonLoading(button,loading,loadingLabel = "Aguarde...") {
    if (!button) return

    const label = button.querySelector("span")

    if (loading) {
        button.dataset.originalLabel = label?.textContent || ""
        if (label) label.textContent = loadingLabel
    } else if (label && button.dataset.originalLabel) {
        label.textContent = button.dataset.originalLabel
    }

    button.classList.toggle("loading",loading)
    button.disabled = loading
}

function showToast(message,type = "success") {
    clearTimeout(toastTimeout)

    toastMessage.textContent = message
    toast.classList.toggle("warning",type === "warning")
    toast.classList.add("show")

    toastTimeout = setTimeout(() => {
        toast.classList.remove("show")
    },3800)
}

function setOverlayState() {
    const hasOpenModal = document.querySelector(".modal.open,.bottom-sheet.open")
    document.body.classList.toggle("overlay-open",Boolean(hasOpenModal))
}

function updateConnectionInterface() {
    const online = cloudMode && cloudReady && navigator.onLine

    connectionDot?.classList.toggle("online",online)
    connectionDot?.setAttribute("aria-label",online ? "Nuvem conectada" : "Nuvem desconectada")

    if (profileConnection) {
        profileConnection.textContent = cloudMode
            ? online
                ? "Nuvem privada conectada"
                : offlineLaunch
                    ? "Modo offline · downloads deste aparelho"
                    : "Nuvem temporariamente offline"
            : "Modo de demonstração neste aparelho"
    }
}

// perfil e acesso
function validateAccessForm() {
    const name = displayNameInput.value.trim()
    const code = accessCodeInput.value.trim()
    const nameGroup = displayNameInput.closest(".form-group")
    const codeGroup = accessCodeInput.closest(".form-group")
    let valid = true

    nameGroup.classList.remove("invalid")
    codeGroup.classList.remove("invalid")
    nameMessage.textContent = ""
    codeMessage.textContent = ""

    if (name.length < 2) {
        nameGroup.classList.add("invalid")
        nameMessage.textContent = "Digite um nome com pelo menos duas letras."
        valid = false
    }

    if (code.length < 8) {
        codeGroup.classList.add("invalid")
        codeMessage.textContent = "O código precisa ter pelo menos oito caracteres."
        valid = false
    }

    return valid
}

function savePreviewProfile(name) {
    currentProfile = {name:name.trim(),mode:"preview"}

    localStorage.setItem(profileStorageKey,JSON.stringify(currentProfile))
    localStorage.setItem(accessStorageKey,"true")
}

function loadPreviewProfile() {
    const hasAccess = localStorage.getItem(accessStorageKey) === "true"
    const savedProfile = localStorage.getItem(profileStorageKey)

    if (!hasAccess || !savedProfile) return null

    try {
        const profile = JSON.parse(savedProfile)

        if (!profile?.name) return null

        return profile
    } catch (error) {
        return null
    }
}

function getGreeting() {
    const hour = new Date().getHours()

    if (hour < 12) return "Música para esta manhã."
    if (hour < 18) return "Música para esta tarde."

    return "Música para esta noite."
}

function updateProfileInterface() {
    if (!currentProfile) return

    const initials = getInitials(currentProfile.name)
    const partner = duoMembers.find(member => member.id !== currentProfile.memberId)

    greetingTitle.textContent = getGreeting()
    profileInitials.textContent = initials
    profileModalInitials.textContent = initials
    profileName.textContent = currentProfile.name
    jamPersonOne.textContent = initials.slice(0,1)
    jamPersonTwo.textContent = partner ? getInitials(partner.display_name).slice(0,1) : "2"
    updateConnectionInterface()
}

function openApplication(profile) {
    currentProfile = profile
    if (cloudMode && profile?.duoId) saveOfflineProfile(profile)
    accessScreen.hidden = true
    appShell.hidden = false

    updateProfileInterface()
    renderApplicationData()

    if (!cloudMode) restorePlaybackState()

    updatePlayerInterface()
}

function closeApplication() {
    pauseTrack({syncJam:false})
    closeAllOverlays()
    clearCatalogQueue()
    stopJamSynchronization()
    cloud?.disconnectRealtime()
    releaseOfflineObjectUrls()
    offlineDownloads.clear()
    offlineLaunch = false
    localStorage.removeItem(profileStorageKey)
    localStorage.removeItem(accessStorageKey)
    localStorage.removeItem(offlineProfileStorageKey)
    localStorage.setItem(logoutStorageKey,"true")
    currentProfile = null
    duoMembers = []
    jamSession = null
    jamActive = false
    playlists = []
    tracks = cloudMode ? [] : [...demoTracks]
    currentTrackId = tracks[0]?.id || ""
    playbackQueue = tracks.map(track => track.id)
    playbackQueueIndex = 0
    playbackContext = {type:"library",label:"Biblioteca"}
    activeLibraryFilter = "all"
    activeLibraryMode = "songs"
    activeLibraryEntity = null
    librarySortMode = "recent"
    libraryOwnerFilter = "all"
    activePlaylistId = ""
    playbackStateRestored = false
    localStorage.removeItem(playbackStorageKey)
    appShell.hidden = true
    accessScreen.hidden = false
    accessCodeInput.value = ""
    displayNameInput.focus()
    updateJamInterface()
}

async function handleAccessSubmit(event) {
    event.preventDefault()

    if (!validateAccessForm()) return

    if (!cloudMode) {
        savePreviewProfile(displayNameInput.value)
        localStorage.removeItem(logoutStorageKey)
        openApplication(currentProfile)
        showToast("Modo de demonstração aberto somente neste aparelho.","warning")
        return
    }

    if (!cloudReady) {
        showToast("A nuvem ainda não está disponível. Confira a configuração.","warning")
        return
    }

    setButtonLoading(accessButton,true,"Entrando...")

    try {
        const profile = await cloud.accessDuo(accessCodeInput.value,displayNameInput.value)

        localStorage.removeItem(logoutStorageKey)
        openApplication(profile)
        await loadCloudApplicationData()
        configureCloudSubscriptions()
        showToast(profile.memberCount === 1
            ? "Sala aberta. Falta apenas a segunda pessoa entrar."
            : "Vocês dois estão conectados ao Dois Tons.")
    } catch (error) {
        codeMessage.textContent = getErrorMessage(error,"Código incorreto ou sala indisponível.")
        accessCodeInput.closest(".form-group").classList.add("invalid")
    } finally {
        setButtonLoading(accessButton,false)
    }
}

accessForm?.addEventListener("submit",handleAccessSubmit)

displayNameInput?.addEventListener("input",() => {
    displayNameInput.closest(".form-group").classList.remove("invalid")
    nameMessage.textContent = ""
})

accessCodeInput?.addEventListener("input",() => {
    accessCodeInput.closest(".form-group").classList.remove("invalid")
    codeMessage.textContent = ""
})

// dados da nuvem
async function loadCloudApplicationData() {
    if (!cloudMode || !cloudReady || !currentProfile) return

    const previousTrackId = currentTrackId
    const [cloudTracks,cloudPlaylists,members,activeJam] = await Promise.all([
        cloud.loadTracks(),
        cloud.loadPlaylists(),
        cloud.getMembers(),
        cloud.getActiveJam()
    ])
    const previousTrackRemoved = Boolean(previousTrackId && !cloudTracks.some(track => track.id === previousTrackId))

    if (previousTrackRemoved) {
        pauseTrack({syncJam:false})
        audioPlayer.removeAttribute("src")
        audioPlayer.dataset.trackId = ""
        audioPlayer.dataset.source = ""
        audioPlayer.load()
    }

    tracks = cloudTracks.map((track,index) => ({
        ...track,
        cover:getCoverClass(track,index),
        cloudSource:track.source,
        cloudCoverImage:track.coverImage,
        downloaded:false,
        offline:false
    }))
    offlineLaunch = false
    await synchronizeOfflineTracks()
    playlists = cloudPlaylists
    duoMembers = members
    await saveOfflineLibrarySnapshot(tracks,playlists,duoMembers)
    currentTrackId = tracks.some(track => track.id === previousTrackId)
        ? previousTrackId
        : tracks[0]?.id || ""
    jamSession = activeJam
    jamInviteCode = activeJam?.invite_code || ""

    if (jamActive && !jamSession?.active) deactivateLocalJam()

    if (!playbackStateRestored) {
        restorePlaybackState()
    } else {
        normalizePlaybackQueue()
    }

    updateProfileInterface()
    renderApplicationData()
    updatePlayerInterface()
    updateJamInterface()
}

function scheduleCloudRefresh() {
    if (catalogImporting) return

    clearTimeout(cloudRefreshTimeout)

    cloudRefreshTimeout = setTimeout(async () => {
        try {
            await loadCloudApplicationData()
        } catch (error) {
            showToast("A biblioteca será atualizada quando a conexão voltar.","warning")
        }
    },450)
}

function configureCloudSubscriptions() {
    if (!cloudMode || !currentProfile) return

    cloud.subscribeLibrary(scheduleCloudRefresh)
    cloud.subscribeJamAvailability(handleJamAvailabilityChange)
}

function handleJamAvailabilityChange(remoteJam) {
    if (!remoteJam) return

    if (!remoteJam.active) {
        if (jamSession?.id === remoteJam.id) {
            const wasActive = jamActive

            if (wasActive) pauseTrack({syncJam:false})
            deactivateLocalJam()
            if (wasActive && remoteJam.updated_by !== cloud.getUserId()) {
                showToast("A outra pessoa encerrou a Jam.")
            }
        }
        return
    }

    jamSession = remoteJam
    jamInviteCode = remoteJam.invite_code || ""
    updateJamInterface()
}

// navegacao
function openView(viewName) {
    const selectedView = document.querySelector(`[data-view="${viewName}"]`)

    if (!selectedView) return

    appViews.forEach(view => {
        view.classList.toggle("active",view === selectedView)
    })

    navigationButtons.forEach(button => {
        const active = button.dataset.navigation === viewName
        button.classList.toggle("active",active)

        if (active) {
            button.setAttribute("aria-current","page")
        } else {
            button.removeAttribute("aria-current")
        }
    })

    window.scrollTo({top:0,behavior:"smooth"})
}

navigationButtons.forEach(button => {
    button.addEventListener("click",() => openView(button.dataset.navigation))
})

openViewButtons.forEach(button => {
    button.addEventListener("click",() => {
        openView(button.dataset.openView)

        if (button.dataset.closeSheet) closeSheet(button.dataset.closeSheet)
    })
})

document.querySelectorAll("[data-library-filter]").forEach(button => {
    button.addEventListener("click",() => {
        const filter = button.dataset.libraryFilter

        activePlaylistId = ""
        activeLibraryEntity = null
        activeLibraryMode = filter === "favorites"
            ? "favorites"
            : filter === "downloads"
                ? "downloads"
                : "songs"
        activeLibraryFilter = filter
        openView("library")
        updateLibraryFilters()
        renderLibrary()
    })
})

window.addEventListener("scroll",() => {
    appHeader?.classList.toggle("scrolled",window.scrollY > 8)
})

// renderizacao
function createAlbumCard(track,index) {
    return `
        <button type="button" class="album-card" data-track-id="${escapeAttribute(track.id)}">
            <span class="album-card-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
            <strong>${escapeHTML(track.title)}</strong>
            <small>${escapeHTML(track.artist)}</small>
        </button>
    `
}

function canManageTrack(track) {
    if (!track) return false
    if (!cloudMode) return true
    if (!currentProfile) return false

    if (track.addedByMemberId) return track.addedByMemberId === currentProfile.memberId

    return Boolean(track.addedBy && track.addedBy === currentProfile.userId)
}

function createTrackItem(track,index) {
    const currentClass = track.id === currentTrackId ? "current" : ""
    const downloading = downloadOperations.has(track.id)
    const sharingLabel = track.sharedBy
        ? `<span><svg aria-hidden="true"><use href="#icon-send"></use></svg>${escapeHTML(track.sharedBy)}</span>`
        : `<span>${formatTime(track.duration)}</span>`
    const offlineLabel = track.downloaded
        ? `<span class="track-offline-label" title="Disponível offline"><svg aria-hidden="true"><use href="#icon-download"></use></svg></span>`
        : ""

    return `
        <div class="track-item-row ${currentClass}">
            <button type="button" class="track-item ${currentClass}" data-track-id="${escapeAttribute(track.id)}">
                <span class="track-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
                <span class="track-information">
                    <strong>${escapeHTML(track.title)}</strong>
                    <span>${escapeHTML(track.artist)} · ${escapeHTML(track.album)}</span>
                </span>
                <span class="track-meta">${offlineLabel}${sharingLabel}</span>
            </button>
            <span class="track-item-actions">
                <button
                    type="button"
                    class="track-download-button ${track.downloaded ? "downloaded" : ""} ${downloading ? "downloading" : ""}"
                    data-download-track="${escapeAttribute(track.id)}"
                    aria-label="${track.downloaded ? "Remover download de" : "Baixar"} ${escapeAttribute(track.title)}"
                    ${downloading || (!track.downloaded && (!cloudReady || !navigator.onLine)) ? "disabled" : ""}
                >
                    <svg aria-hidden="true"><use href="#${track.downloaded ? "icon-check" : "icon-download"}"></use></svg>
                </button>
                <button type="button" class="track-queue-button" data-add-to-queue="${escapeAttribute(track.id)}" aria-label="Adicionar ${escapeAttribute(track.title)} à fila">
                    <svg aria-hidden="true"><use href="#icon-queue"></use></svg>
                </button>
                <button
                    type="button"
                    class="track-manage-button"
                    data-manage-track="${escapeAttribute(track.id)}"
                    aria-label="Gerenciar ${escapeAttribute(track.title)}"
                    ${canManageTrack(track) && (!cloudMode || cloudReady && navigator.onLine) ? "" : "disabled"}
                >
                    <svg aria-hidden="true"><use href="#icon-more"></use></svg>
                </button>
            </span>
        </div>
    `
}

function createEmptyState(title,description,icon = "icon-search") {
    return `
        <div class="empty-state">
            <div>
                <svg aria-hidden="true"><use href="#${icon}"></use></svg>
                <strong>${escapeHTML(title)}</strong>
                <p>${escapeHTML(description)}</p>
            </div>
        </div>
    `
}

function renderHome() {
    const favoriteTracks = tracks.filter(track => track.favorite).slice(0,4)
    const sharedTracks = tracks.filter(track => track.sharedBy).slice(0,3)

    favoritesGrid.innerHTML = favoriteTracks.length
        ? favoriteTracks.map(createAlbumCard).join("")
        : createEmptyState("Nenhuma favorita","Marque as músicas que fazem parte dos momentos de vocês.","icon-heart")

    sharedTrackList.innerHTML = sharedTracks.length
        ? sharedTracks.map(createTrackItem).join("")
        : createEmptyState("Nada por aqui","As músicas enviadas entre vocês aparecerão nesta seção.","icon-send")
}

function getLibraryModeLabel(mode = activeLibraryMode) {
    const labels = {
        songs:"Músicas",
        albums:"Álbuns",
        artists:"Artistas",
        playlists:"Playlists",
        favorites:"Favoritos",
        downloads:"Downloads"
    }

    if (activeLibraryFilter === "shared" && mode === "songs") return "Compartilhadas"

    return labels[mode] || "Biblioteca"
}

function normalizeCollectionLabel(value,fallback) {
    const normalized = String(value || "").trim()

    return normalized || fallback
}

function getArtistKey(track) {
    return normalizeCollectionLabel(track.artist,"Artista desconhecido").toLocaleLowerCase("pt-BR")
}

function getAlbumKey(track) {
    const artist = normalizeCollectionLabel(track.artist,"Artista desconhecido").toLocaleLowerCase("pt-BR")
    const album = normalizeCollectionLabel(track.album,"Sem álbum").toLocaleLowerCase("pt-BR")

    return `${artist}::${album}`
}

function matchesLibraryOwner(track) {
    if (libraryOwnerFilter === "all" || !cloudMode) return true

    const belongsToCurrentMember = track.addedByMemberId
        ? track.addedByMemberId === currentProfile?.memberId
        : Boolean(track.addedBy && track.addedBy === currentProfile?.userId)

    if (libraryOwnerFilter === "me") return belongsToCurrentMember

    return Boolean(track.addedByMemberId || track.addedBy) && !belongsToCurrentMember
}

function getLibrarySearchQuery() {
    return String(librarySearchInput?.value || "").trim().toLocaleLowerCase("pt-BR")
}

function sortLibraryTracks(sourceTracks) {
    const indexedTracks = sourceTracks.map((track,index) => ({track,index}))
    const compareText = (first,second) => String(first || "").localeCompare(String(second || ""),"pt-BR",{sensitivity:"base"})

    indexedTracks.sort((firstItem,secondItem) => {
        const first = firstItem.track
        const second = secondItem.track
        let comparison = 0

        if (librarySortMode === "title") comparison = compareText(first.title,second.title)
        if (librarySortMode === "artist") comparison = compareText(first.artist,second.artist) || compareText(first.title,second.title)
        if (librarySortMode === "album") comparison = compareText(first.album,second.album) || compareText(first.title,second.title)
        if (librarySortMode === "duration") comparison = Number(first.duration || 0) - Number(second.duration || 0)

        if (librarySortMode === "recent" || librarySortMode === "oldest") {
            const firstDate = Date.parse(first.createdAt || "") || 0
            const secondDate = Date.parse(second.createdAt || "") || 0

            if (firstDate || secondDate) {
                comparison = librarySortMode === "recent"
                    ? secondDate - firstDate
                    : firstDate - secondDate
            }
        }

        return comparison || firstItem.index - secondItem.index
    })

    return indexedTracks.map(item => item.track)
}

function applyLibraryTrackFilters(sourceTracks,{includeSearch = true,includeSort = true} = {}) {
    const query = getLibrarySearchQuery()
    let filteredTracks = sourceTracks.filter(matchesLibraryOwner)

    if (includeSearch && query) {
        filteredTracks = filteredTracks.filter(track => getTrackSearchText(track).includes(query))
    }

    return includeSort ? sortLibraryTracks(filteredTracks) : filteredTracks
}

function getAlbumGroups(sourceTracks = tracks) {
    const groups = new Map()

    sourceTracks.forEach(track => {
        const key = getAlbumKey(track)
        const album = normalizeCollectionLabel(track.album,"Sem álbum")
        const artist = normalizeCollectionLabel(track.artist,"Artista desconhecido")

        if (!groups.has(key)) {
            groups.set(key,{key,album,artist,tracks:[],representative:track})
        }

        groups.get(key).tracks.push(track)
    })

    return [...groups.values()].sort((first,second) => first.album.localeCompare(second.album,"pt-BR",{sensitivity:"base"}))
}

function getArtistGroups(sourceTracks = tracks) {
    const groups = new Map()

    sourceTracks.forEach(track => {
        const key = getArtistKey(track)
        const artist = normalizeCollectionLabel(track.artist,"Artista desconhecido")

        if (!groups.has(key)) {
            groups.set(key,{key,artist,tracks:[],representative:track,albums:new Set()})
        }

        const group = groups.get(key)
        group.tracks.push(track)
        group.albums.add(normalizeCollectionLabel(track.album,"Sem álbum"))
    })

    return [...groups.values()].sort((first,second) => first.artist.localeCompare(second.artist,"pt-BR",{sensitivity:"base"}))
}

function getVisibleAlbumGroups() {
    return getAlbumGroups(applyLibraryTrackFilters(tracks,{includeSearch:true,includeSort:false}))
}

function getVisibleArtistGroups() {
    return getArtistGroups(applyLibraryTrackFilters(tracks,{includeSearch:true,includeSort:false}))
}

function createLibraryCollectionCard(group,index,type) {
    const track = group.representative
    const count = group.tracks.length
    const countLabel = count === 1 ? "1 música" : `${count} músicas`
    const subtitle = type === "album"
        ? `${group.artist} · ${countLabel}`
        : `${countLabel} · ${group.albums.size === 1 ? "1 álbum" : `${group.albums.size} álbuns`}`
    const title = type === "album" ? group.album : group.artist

    return `
        <button
            type="button"
            class="library-collection-card"
            data-library-entity-type="${type}"
            data-library-entity-key="${escapeAttribute(encodeURIComponent(group.key))}"
        >
            <span class="library-collection-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}>
                <span class="library-collection-badge">
                    <svg aria-hidden="true"><use href="#${type === "album" ? "icon-library" : "icon-users"}"></use></svg>
                </span>
            </span>
            <span class="library-collection-information">
                <strong>${escapeHTML(title)}</strong>
                <small>${escapeHTML(subtitle)}</small>
            </span>
        </button>
    `
}

function createPlaylistCard(playlist,index) {
    const playlistTracks = playlist.trackIds.map(trackId => tracks.find(track => track.id === trackId)).filter(Boolean)
    const count = playlistTracks.length
    const label = count === 1 ? "1 música" : `${count} músicas`
    const artworkTracks = playlistTracks.slice(0,4)
    const artwork = artworkTracks.length
        ? artworkTracks.map((track,coverIndex) => `
            <span class="playlist-artwork-tile ${escapeAttribute(getCoverClass(track,coverIndex))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
        `).join("")
        : `<span class="playlist-artwork-empty"><svg aria-hidden="true"><use href="#icon-playlist"></use></svg></span>`

    return `
        <button type="button" class="playlist-card ${playlist.id === activePlaylistId ? "active" : ""}" data-playlist-id="${escapeAttribute(playlist.id)}">
            <span class="playlist-card-artwork">${artwork}</span>
            <span class="playlist-card-information">
                <strong>${escapeHTML(playlist.title)}</strong>
                <small>${label}</small>
            </span>
        </button>
    `
}

function renderPlaylists() {
    const query = activeLibraryMode === "playlists" && !activePlaylistId ? getLibrarySearchQuery() : ""
    const visiblePlaylists = query
        ? playlists.filter(playlist => `${playlist.title} ${playlist.description || ""}`.toLocaleLowerCase("pt-BR").includes(query))
        : playlists

    playlistGrid.innerHTML = visiblePlaylists.length
        ? visiblePlaylists.map(createPlaylistCard).join("")
        : playlists.length
            ? createEmptyState("Nenhuma playlist encontrada","Tente outro nome para encontrar uma playlist.","icon-search")
            : `
                <button type="button" class="playlist-card-create" data-create-playlist>
                    <svg aria-hidden="true"><use href="#icon-plus"></use></svg>
                    <span>Criar a primeira playlist</span>
                </button>
            `

    const selectedPlaylist = playlists.find(playlist => playlist.id === activePlaylistId)

    playlistContext.hidden = !selectedPlaylist
    activePlaylistTitle.textContent = selectedPlaylist?.title || ""
}

function getFilteredLibraryTracks() {
    let sourceTracks = tracks

    if (activePlaylistId) {
        const playlist = playlists.find(item => item.id === activePlaylistId)

        sourceTracks = playlist
            ? playlist.trackIds.map(trackId => tracks.find(track => track.id === trackId)).filter(Boolean)
            : []
    } else if (activeLibraryEntity?.type === "album") {
        sourceTracks = tracks.filter(track => getAlbumKey(track) === activeLibraryEntity.key)
    } else if (activeLibraryEntity?.type === "artist") {
        sourceTracks = tracks.filter(track => getArtistKey(track) === activeLibraryEntity.key)
    } else if (activeLibraryMode === "favorites" || activeLibraryFilter === "favorites") {
        sourceTracks = tracks.filter(track => track.favorite)
    } else if (activeLibraryMode === "downloads" || activeLibraryFilter === "downloads") {
        sourceTracks = tracks.filter(track => track.downloaded)
    } else if (activeLibraryFilter === "shared") {
        sourceTracks = tracks.filter(track => track.sharedBy)
    }

    return applyLibraryTrackFilters(sourceTracks)
}

function updateLibraryFilters() {
    libraryModeButtons.forEach(button => {
        const active = button.dataset.libraryMode === activeLibraryMode
        button.classList.toggle("active",active)

        if (active) {
            button.setAttribute("aria-current","page")
        } else {
            button.removeAttribute("aria-current")
        }
    })

    filterButtons.forEach(button => {
        const active = !activePlaylistId && button.dataset.filter === activeLibraryFilter
        button.classList.toggle("active",active)
        button.setAttribute("aria-selected",String(active))
    })
}

function updateLibraryEntityContext() {
    if (!activeLibraryEntity) {
        libraryEntityContext.hidden = true
        return
    }

    const groups = activeLibraryEntity.type === "album" ? getAlbumGroups(tracks) : getArtistGroups(tracks)
    const group = groups.find(item => item.key === activeLibraryEntity.key)

    if (!group) {
        activeLibraryEntity = null
        libraryEntityContext.hidden = true
        return
    }

    const countLabel = group.tracks.length === 1 ? "1 música" : `${group.tracks.length} músicas`

    activeLibraryEntity.title = activeLibraryEntity.type === "album" ? group.album : group.artist
    libraryEntityType.textContent = activeLibraryEntity.type === "album" ? "Álbum selecionado" : "Artista selecionado"
    libraryEntityTitle.textContent = activeLibraryEntity.title
    libraryEntitySubtitle.textContent = activeLibraryEntity.type === "album"
        ? `${group.artist} · ${countLabel}`
        : `${countLabel} · ${group.albums.size === 1 ? "1 álbum" : `${group.albums.size} álbuns`}`
    libraryEntityContext.hidden = false
}

function renderLibraryCollections() {
    if (activeLibraryMode === "albums" && !activeLibraryEntity) {
        const groups = getVisibleAlbumGroups()

        libraryCollectionGrid.innerHTML = groups.length
            ? groups.map((group,index) => createLibraryCollectionCard(group,index,"album")).join("")
            : createEmptyState("Nenhum álbum encontrado","Os álbuns são criados automaticamente a partir das músicas do catálogo.","icon-library")
        libraryCollectionGrid.hidden = false
        return groups.length
    }

    if (activeLibraryMode === "artists" && !activeLibraryEntity) {
        const groups = getVisibleArtistGroups()

        libraryCollectionGrid.innerHTML = groups.length
            ? groups.map((group,index) => createLibraryCollectionCard(group,index,"artist")).join("")
            : createEmptyState("Nenhum artista encontrado","Os artistas são organizados automaticamente a partir do catálogo.","icon-users")
        libraryCollectionGrid.hidden = false
        return groups.length
    }

    libraryCollectionGrid.hidden = true
    libraryCollectionGrid.innerHTML = ""

    return 0
}

function renderLibrary() {
    const collectionRoot = !activePlaylistId && !activeLibraryEntity && ["albums","artists","playlists"].includes(activeLibraryMode)
    const playlistsRoot = collectionRoot && activeLibraryMode === "playlists"
    const downloadsMode = !activePlaylistId && !activeLibraryEntity && activeLibraryMode === "downloads"
    const filteredTracks = collectionRoot ? [] : getFilteredLibraryTracks()
    const sortField = librarySortSelect?.closest(".library-select-field")
    const ownerField = libraryOwnerSelect?.closest(".library-select-field")

    updateLibraryFilters()
    updateLibraryEntityContext()
    renderPlaylists()

    playlistSection.hidden = !playlistsRoot
    libraryTrackList.hidden = collectionRoot
    librarySummaryActions.hidden = collectionRoot
    libraryToolbar.hidden = false

    if (librarySearchInput) {
        librarySearchInput.placeholder = activeLibraryMode === "albums"
            ? "Filtrar álbuns"
            : activeLibraryMode === "artists"
                ? "Filtrar artistas"
                : activeLibraryMode === "playlists"
                    ? "Filtrar playlists"
                    : "Filtrar músicas"
    }

    if (sortField) sortField.hidden = collectionRoot
    if (ownerField) {
        ownerField.hidden = playlistsRoot
        libraryOwnerSelect.disabled = !cloudMode
    }

    if (collectionRoot) {
        let count = 0

        if (activeLibraryMode === "albums" || activeLibraryMode === "artists") {
            count = renderLibraryCollections()
        } else {
            libraryCollectionGrid.hidden = true
            count = getLibrarySearchQuery()
                ? playlists.filter(playlist => `${playlist.title} ${playlist.description || ""}`.toLocaleLowerCase("pt-BR").includes(getLibrarySearchQuery())).length
                : playlists.length
        }

        libraryCount.textContent = activeLibraryMode === "albums"
            ? count === 1 ? "1 álbum" : `${count} álbuns`
            : activeLibraryMode === "artists"
                ? count === 1 ? "1 artista" : `${count} artistas`
                : count === 1 ? "1 playlist" : `${count} playlists`
        offlineStorageSummary.hidden = true
        downloadLibraryButton.hidden = true
        playLibraryButton.hidden = true
        return
    }

    libraryCollectionGrid.hidden = true
    playLibraryButton.hidden = false
    downloadLibraryButton.hidden = downloadsMode
    offlineStorageSummary.hidden = !downloadsMode

    const label = filteredTracks.length === 1 ? "1 música" : `${filteredTracks.length} músicas`
    const entityLabel = activeLibraryEntity?.title || playlists.find(item => item.id === activePlaylistId)?.title || getLibraryModeLabel()

    libraryCount.textContent = activeLibraryFilter === "shared" && activeLibraryMode === "songs"
        ? `${label} · Compartilhadas`
        : label
    playLibraryButton.disabled = !filteredTracks.some(track => track.source)
    playLibraryButton.setAttribute("aria-label",`Reproduzir ${entityLabel}`)
    downloadLibraryButton.disabled = !cloudReady || !navigator.onLine || !filteredTracks.some(track => !track.downloaded && (track.cloudSource || track.source))
    libraryTrackList.innerHTML = filteredTracks.length
        ? filteredTracks.map(createTrackItem).join("")
        : createEmptyState(
            downloadsMode ? "Nenhum download" : activePlaylistId ? "Playlist vazia" : activeLibraryEntity ? "Nenhuma música nesta coleção" : "Nenhuma música encontrada",
            downloadsMode
                ? "Baixe uma música da biblioteca para ouvi-la mesmo sem internet."
                : activePlaylistId
                    ? "Abra uma música e use o botão Playlist para adicioná-la."
                    : activeLibraryEntity
                        ? "Tente remover os filtros ou importar outras músicas."
                        : "Escolha outro filtro ou adicione uma música à biblioteca.",
            downloadsMode ? "icon-download" : activePlaylistId ? "icon-playlist" : "icon-search"
        )
}

function renderSearch(query = "") {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR")

    clearSearchButton.hidden = !normalizedQuery
    searchIntroduction.hidden = Boolean(normalizedQuery)

    if (!normalizedQuery) {
        searchResults.innerHTML = ""
        return
    }

    const matchingTracks = tracks.filter(track => getTrackSearchText(track).includes(normalizedQuery))
    const resultsLabel = matchingTracks.length === 1 ? "1 resultado" : `${matchingTracks.length} resultados`

    searchResults.innerHTML = matchingTracks.length
        ? `<p class="results-label">${resultsLabel}</p><div class="track-list">${matchingTracks.map(createTrackItem).join("")}</div>`
        : createEmptyState("Nenhum resultado","Tente buscar outro título, artista, álbum ou momento.")
}

function renderApplicationData() {
    renderHome()
    renderPlaylists()
    updateLibraryFilters()
    renderLibrary()
    renderSearch(searchInput.value)
    renderPlaylistPicker()
    renderQueue()
}

document.addEventListener("click",event => {
    const downloadButton = event.target.closest("[data-download-track]")

    if (downloadButton) {
        toggleTrackDownload(downloadButton.dataset.downloadTrack)
        return
    }

    const queueButton = event.target.closest("[data-add-to-queue]")

    if (queueButton) {
        addTrackToQueue(queueButton.dataset.addToQueue)
        return
    }

    const manageButton = event.target.closest("[data-manage-track]")

    if (manageButton) {
        openTrackManager(manageButton.dataset.manageTrack)
        return
    }

    const trackButton = event.target.closest("[data-track-id]")

    if (trackButton) {
        selectTrack(trackButton.dataset.trackId,true,{context:getPlaybackContextFromElement(trackButton)})
        return
    }

    const collectionButton = event.target.closest("[data-library-entity-type]")

    if (collectionButton) {
        activePlaylistId = ""
        activeLibraryEntity = {
            type:collectionButton.dataset.libraryEntityType,
            key:decodeURIComponent(collectionButton.dataset.libraryEntityKey || "")
        }
        renderLibrary()
        return
    }

    const playlistButton = event.target.closest("[data-playlist-id]")

    if (playlistButton) {
        activeLibraryEntity = null
        activeLibraryMode = "playlists"
        activeLibraryFilter = "all"
        activePlaylistId = playlistButton.dataset.playlistId
        openView("library")
        renderPlaylists()
        updateLibraryFilters()
        renderLibrary()
        return
    }

    if (event.target.closest("[data-create-playlist]")) openPlaylistModal("")
})

libraryModeButtons.forEach(button => {
    button.addEventListener("click",() => {
        const mode = button.dataset.libraryMode

        activePlaylistId = ""
        activeLibraryEntity = null
        activeLibraryMode = mode
        activeLibraryFilter = mode === "favorites"
            ? "favorites"
            : mode === "downloads"
                ? "downloads"
                : "all"

        if (librarySearchInput) librarySearchInput.value = ""

        renderLibrary()
    })
})

filterButtons.forEach(button => {
    button.addEventListener("click",() => {
        activePlaylistId = ""
        activeLibraryEntity = null
        activeLibraryMode = "songs"
        activeLibraryFilter = button.dataset.filter
        renderPlaylists()
        updateLibraryFilters()
        renderLibrary()
    })
})

clearPlaylistFilterButton?.addEventListener("click",() => {
    activePlaylistId = ""
    activeLibraryEntity = null
    activeLibraryMode = "playlists"
    activeLibraryFilter = "all"
    renderPlaylists()
    updateLibraryFilters()
    renderLibrary()
})

clearLibraryEntityButton?.addEventListener("click",() => {
    activeLibraryEntity = null
    renderLibrary()
})

librarySearchInput?.addEventListener("input",() => {
    renderPlaylists()
    renderLibrary()
})

librarySortSelect?.addEventListener("change",() => {
    librarySortMode = librarySortSelect.value
    renderLibrary()
})

libraryOwnerSelect?.addEventListener("change",() => {
    libraryOwnerFilter = libraryOwnerSelect.value
    renderLibrary()
})

searchInput?.addEventListener("input",() => renderSearch(searchInput.value))

clearSearchButton?.addEventListener("click",() => {
    searchInput.value = ""
    renderSearch("")
    searchInput.focus()
})

suggestionButtons.forEach(button => {
    button.addEventListener("click",() => {
        searchInput.value = button.dataset.searchSuggestion
        renderSearch(searchInput.value)
        searchInput.focus()
    })
})

// player
function createQueueTrack(track,index,{current = false,locked = false} = {}) {
    if (!track) return ""

    const queueControls = current
        ? `<span class="queue-playing-indicator"><span></span><span></span><span></span></span>`
        : locked
            ? `<span class="queue-locked-label">Jam</span>`
            : `
            <span class="queue-item-actions">
                <button type="button" data-queue-move="up" data-queue-index="${index}" aria-label="Mover para cima">
                    <svg aria-hidden="true"><use href="#icon-up"></use></svg>
                </button>
                <button type="button" data-queue-move="down" data-queue-index="${index}" aria-label="Mover para baixo">
                    <svg aria-hidden="true"><use href="#icon-down"></use></svg>
                </button>
                <button type="button" data-queue-remove="${index}" aria-label="Remover da fila">
                    <svg aria-hidden="true"><use href="#icon-close"></use></svg>
                </button>
            </span>
        `

    return `
        <article class="queue-item ${current ? "current" : ""}" data-queue-track-id="${escapeAttribute(track.id)}">
            <button type="button" class="queue-item-main" ${current ? "disabled" : `data-queue-select="${index}"`}>
                <span class="queue-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
                <span class="queue-item-information">
                    <strong>${escapeHTML(track.title)}</strong>
                    <span>${escapeHTML(track.artist)}</span>
                </span>
            </button>
            ${queueControls}
        </article>
    `
}

function renderQueue() {
    if (!queueCurrentTrack || !queueList) return

    const currentTrack = getCurrentTrack()
    const activeQueue = jamActive ? getJamSequence() : playbackQueue
    const activeQueueIndex = jamActive ? activeQueue.indexOf(currentTrackId) : playbackQueueIndex
    const upcomingIds = activeQueue.slice(Math.max(0,activeQueueIndex + 1))
    const upcomingTracks = upcomingIds
        .map(trackId => tracks.find(track => track.id === trackId))
        .filter(Boolean)

    queueContextLabel.textContent = jamActive ? "Jam sincronizada" : playbackContext?.label || "Biblioteca"
    queueCurrentTrack.innerHTML = currentTrack
        ? createQueueTrack(currentTrack,activeQueueIndex,{current:true,locked:jamActive})
        : createEmptyState("Nenhuma música","Escolha uma música para iniciar a fila.","icon-queue")
    queueCount.textContent = upcomingTracks.length === 1 ? "1 música" : `${upcomingTracks.length} músicas`
    queueList.innerHTML = upcomingTracks.length
        ? upcomingTracks.map((track,index) => createQueueTrack(track,activeQueueIndex + 1 + index,{locked:jamActive})).join("")
        : createEmptyState("Fim da fila","Adicione músicas ou escolha outra coleção para continuar ouvindo.","icon-queue")

    clearQueueButton.disabled = jamActive || !upcomingTracks.length
    saveQueuePlaylistButton.disabled = jamActive || (!currentTrack && !upcomingTracks.length)
}

function updatePlaybackModeInterface() {
    shuffleButton?.classList.toggle("active",shuffleEnabled)
    shuffleButton?.setAttribute("aria-pressed",String(shuffleEnabled))
    shuffleButton?.setAttribute("aria-label",shuffleEnabled ? "Desativar modo aleatório" : "Ativar modo aleatório")

    const repeatLabels = {
        off:"Ativar repetição da fila",
        all:"Repetir somente esta música",
        one:"Desativar repetição"
    }

    shuffleButton.disabled = jamActive
    repeatButton.disabled = jamActive

    repeatButton?.classList.toggle("active",repeatMode !== "off")
    repeatButton?.classList.toggle("repeat-one",repeatMode === "one")
    repeatButton?.setAttribute("aria-pressed",String(repeatMode !== "off"))
    repeatButton?.setAttribute("data-repeat-mode",repeatMode)
    repeatButton?.setAttribute("aria-label",repeatLabels[repeatMode])
}

function toggleShuffle() {
    if (jamActive) {
        showToast("Durante uma Jam, a ordem permanece igual nos dois aparelhos.","warning")
        return
    }

    shuffleEnabled = !shuffleEnabled
    buildPlaybackQueue(currentTrackId,playbackContext)
    updatePlaybackModeInterface()
    showToast(shuffleEnabled ? "Modo aleatório ativado." : "Modo aleatório desativado.")
}

function cycleRepeatMode() {
    if (jamActive) {
        showToast("Durante uma Jam, a repetição fica sincronizada pela sequência padrão.","warning")
        return
    }

    repeatMode = repeatMode === "off" ? "all" : repeatMode === "all" ? "one" : "off"
    updatePlaybackModeInterface()
    schedulePlaybackStateSave()

    const labels = {
        off:"Repetição desativada.",
        all:"Repetir fila ativado.",
        one:"Repetir música ativado."
    }

    showToast(labels[repeatMode])
}

function addTrackToQueue(trackId) {
    const track = tracks.find(item => item.id === trackId)

    if (jamActive) {
        showToast("A fila não pode ser alterada durante uma Jam.","warning")
        return
    }

    if (!track?.source) {
        showToast("Esta música ainda não possui um arquivo disponível.","warning")
        return
    }

    if (!playbackQueue.includes(currentTrackId)) buildPlaybackQueue(currentTrackId,playbackContext)

    if (playbackQueue.includes(trackId)) {
        showToast(`${track.title} já está na fila.`,"warning")
        return
    }

    playbackQueue.push(trackId)
    renderQueue()
    schedulePlaybackStateSave()
    showToast(`${track.title} foi adicionada ao fim da fila.`)
}

function clearUpcomingQueue() {
    if (jamActive) return
    if (playbackQueueIndex < 0) return

    playbackQueue = playbackQueue.slice(0,playbackQueueIndex + 1)
    renderQueue()
    schedulePlaybackStateSave()
    showToast("Músicas a seguir removidas da fila.")
}

function moveQueueTrack(queueIndex,direction) {
    if (jamActive) return

    const targetIndex = direction === "up" ? queueIndex - 1 : queueIndex + 1
    const firstUpcomingIndex = playbackQueueIndex + 1

    if (queueIndex < firstUpcomingIndex || targetIndex < firstUpcomingIndex || targetIndex >= playbackQueue.length) return

    ;[playbackQueue[queueIndex],playbackQueue[targetIndex]] = [playbackQueue[targetIndex],playbackQueue[queueIndex]]
    renderQueue()
    schedulePlaybackStateSave()
}

function removeQueueTrack(queueIndex) {
    if (jamActive) return
    if (queueIndex <= playbackQueueIndex || queueIndex >= playbackQueue.length) return

    playbackQueue.splice(queueIndex,1)
    renderQueue()
    schedulePlaybackStateSave()
}

function selectQueueTrack(queueIndex) {
    const trackId = playbackQueue[queueIndex]

    if (!trackId) return

    closeSheet("queue")
    selectTrack(trackId,true,{preserveQueue:true,queueIndex})
}

function setCoverElement(element,track) {
    availableCoverClasses.forEach(coverClass => element.classList.remove(coverClass))
    element.classList.remove("custom-cover")
    element.style.removeProperty("background-image")
    element.style.removeProperty("background-position")
    element.style.removeProperty("background-size")

    if (track.coverImage) {
        element.classList.add("custom-cover")
        element.style.backgroundImage = `url("${track.coverImage}")`
        element.style.backgroundPosition = "center"
        element.style.backgroundSize = "cover"
        return
    }

    element.classList.add(getCoverClass(track))
}

function updateMediaSession(track) {
    if (!("mediaSession" in navigator) || !("MediaMetadata" in window) || !track) return

    const metadata = {
        title:track.title,
        artist:track.artist,
        album:track.album || "Dois Tons",
        artwork:track.coverImage
            ? [{src:track.coverImage,sizes:"512x512"}]
            : [{src:"assets/icons/icon-512.png",sizes:"512x512",type:"image/png"}]
    }

    try {
        navigator.mediaSession.metadata = new MediaMetadata(metadata)
        navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused"
        updateMediaSessionPosition(true)
    } catch (error) {
        return
    }
}

function updatePlayerInterface() {
    const track = getCurrentTrack()

    miniPlayer.hidden = !track

    if (!track) {
        closeSheet("player")
        return
    }

    miniTitle.textContent = track.title
    miniArtist.textContent = track.artist
    playerTitle.textContent = track.title
    playerArtist.textContent = track.artist
    favoriteButton.classList.toggle("active",track.favorite)
    favoriteButton.setAttribute("aria-pressed",String(track.favorite))
    favoriteButton.setAttribute("aria-label",track.favorite ? "Remover dos favoritos" : "Adicionar aos favoritos")
    miniPlayer.classList.toggle("playing",isPlaying)
    mainPlayButton.classList.toggle("playing",isPlaying)
    miniPlayButton.setAttribute("aria-label",isPlaying ? "Pausar" : "Reproduzir")
    mainPlayButton.setAttribute("aria-label",isPlaying ? "Pausar" : "Reproduzir")

    if (downloadCurrentTrackButton) {
        const downloading = downloadOperations.has(track.id)

        downloadCurrentTrackButton.classList.toggle("active",Boolean(track.downloaded))
        downloadCurrentTrackButton.classList.toggle("downloading",downloading)
        downloadCurrentTrackButton.disabled = downloading || (!track.downloaded && (!cloudReady || !navigator.onLine))
        downloadCurrentTrackButton.setAttribute("aria-label",track.downloaded ? "Remover download desta música" : "Baixar música")
        if (downloadCurrentTrackLabel) downloadCurrentTrackLabel.textContent = downloading ? "Baixando" : track.downloaded ? "Baixada" : "Baixar"
    }

    if (manageCurrentTrackButton) {
        const manageable = canManageTrack(track)
        const unavailable = cloudMode && (!cloudReady || !navigator.onLine)

        manageCurrentTrackButton.disabled = !manageable || unavailable
        manageCurrentTrackButton.setAttribute("aria-label",manageable ? `Gerenciar ${track.title}` : "Somente quem adicionou esta música pode gerenciá-la")
    }

    setCoverElement(miniCover,track)
    setCoverElement(playerArtwork,track)
    updateProgressInterface()
    updateMediaSession(track)
    updatePlaybackModeInterface()
    renderQueue()
    renderHome()
    renderLibrary()
}

function updateProgressInterface() {
    const track = getCurrentTrack()
    const duration = Number.isFinite(audioPlayer.duration) ? audioPlayer.duration : track?.duration || 0
    const position = Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0
    const progress = duration ? Math.min((position / duration) * 100,100) : 0

    trackProgress.value = String(progress)
    trackProgress.style.setProperty("--range-progress",`${progress}%`)
    miniProgress.style.setProperty("--player-progress",`${progress}%`)
    currentTime.textContent = formatTime(position)
    durationTime.textContent = formatTime(duration)
    updateMediaSessionPosition()
}

function prepareAudioTrack(track) {
    if (!track?.source) return false

    const sameTrack = audioPlayer.dataset.trackId === track.id
    const sourceChanged = audioPlayer.dataset.source !== track.source

    if (!sameTrack || sourceChanged) {
        const restorePosition = sameTrack && Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0

        audioPlayer.src = track.source
        audioPlayer.dataset.trackId = track.id
        audioPlayer.dataset.source = track.source
        audioPlayer.load()

        if (restorePosition > 0) {
            audioPlayer.addEventListener("loadedmetadata",() => {
                const duration = Number.isFinite(audioPlayer.duration) ? audioPlayer.duration : track.duration || 0

                audioPlayer.currentTime = duration
                    ? Math.min(restorePosition,Math.max(0,duration - 0.1))
                    : restorePosition
                updateProgressInterface()
            },{once:true})
        }
    }

    return true
}

async function playTrack(options = {}) {
    const track = getCurrentTrack()
    const syncJam = options.syncJam !== false

    if (cloudMode && !navigator.onLine && track && !track.downloaded) {
        isPlaying = false
        updatePlayerInterface()
        showToast("Esta música ainda não foi baixada neste aparelho.","warning")
        return false
    }

    if (!prepareAudioTrack(track)) {
        isPlaying = false
        updatePlayerInterface()
        showToast(cloudMode
            ? "Adicione uma música à biblioteca para reproduzir."
            : "Adicione um arquivo de áudio para testar a reprodução.","warning")
        return false
    }

    try {
        await audioPlayer.play()
        isPlaying = true
        updatePlayerInterface()
        schedulePlaybackStateSave()

        if (syncJam) await publishJamState()

        return true
    } catch (error) {
        isPlaying = false
        updatePlayerInterface()

        if (!options.silent) showToast("Toque em reproduzir para liberar o áudio neste aparelho.","warning")

        return false
    }
}

function pauseTrack(options = {}) {
    const syncJam = options.syncJam !== false

    audioPlayer.pause()
    isPlaying = false
    updatePlayerInterface()
    schedulePlaybackStateSave()

    if (syncJam) publishJamState()
}

function togglePlayback() {
    if (isPlaying) {
        pauseTrack()
        return
    }

    playTrack()
}

async function selectTrack(trackId,shouldPlay = false,options = {}) {
    const selectedTrack = tracks.find(track => track.id === trackId)

    if (!selectedTrack) return

    if (options.context) {
        playbackContext = options.context
        buildPlaybackQueue(trackId,playbackContext)
    } else if (options.preserveQueue && Number.isInteger(options.queueIndex)) {
        playbackQueueIndex = options.queueIndex
    } else if (!playbackQueue.includes(trackId)) {
        buildPlaybackQueue(trackId,playbackContext)
    } else {
        playbackQueueIndex = playbackQueue.indexOf(trackId)
    }

    const changedTrack = selectedTrack.id !== currentTrackId
    currentTrackId = selectedTrack.id

    if (changedTrack) {
        audioPlayer.pause()
        audioPlayer.removeAttribute("src")
        audioPlayer.dataset.trackId = ""
        audioPlayer.dataset.source = ""
        audioPlayer.load()
        isPlaying = false
    }

    updatePlayerInterface()
    schedulePlaybackStateSave()

    if (shouldPlay) {
        await playTrack(options)
    } else if (options.syncJam) {
        await publishJamState()
    }
}

function getJamSequence() {
    return getPlayableTracks().map(track => track.id)
}

function changeTrack(direction,options = {}) {
    const automatic = options.automatic === true

    if (automatic && repeatMode === "one" && !jamActive) {
        audioPlayer.currentTime = 0
        playTrack()
        return
    }

    if (direction < 0 && !automatic && Number.isFinite(audioPlayer.currentTime) && audioPlayer.currentTime > 3) {
        audioPlayer.currentTime = 0
        updateProgressInterface()
        publishJamState()
        schedulePlaybackStateSave()
        return
    }

    const activeQueue = jamActive ? getJamSequence() : playbackQueue
    const currentIndex = activeQueue.indexOf(currentTrackId)

    if (!activeQueue.length) {
        buildPlaybackQueue(currentTrackId,playbackContext)
        return
    }

    if (currentIndex < 0 && !jamActive) {
        const fallbackIndex = direction > 0 ? 0 : activeQueue.length - 1

        selectTrack(activeQueue[fallbackIndex],true,{preserveQueue:true,queueIndex:fallbackIndex})
        return
    }

    if (currentIndex < 0) {
        buildPlaybackQueue(currentTrackId,playbackContext)
        return
    }

    let nextIndex = currentIndex + direction

    if (nextIndex < 0 || nextIndex >= activeQueue.length) {
        const canWrap = jamActive || repeatMode === "all"

        if (!canWrap) {
            if (automatic) {
                isPlaying = false
                updatePlayerInterface()
                schedulePlaybackStateSave()
            } else {
                showToast(direction > 0 ? "Fim da fila." : "Você está no início da fila.","warning")
            }
            return
        }

        nextIndex = direction > 0 ? 0 : activeQueue.length - 1
    }

    const nextTrackId = activeQueue[nextIndex]

    if (jamActive) {
        playbackContext = {type:"library",label:"Jam sincronizada"}
        playbackQueue = activeQueue
        playbackQueueIndex = nextIndex
    }

    selectTrack(nextTrackId,true,{preserveQueue:true,queueIndex:nextIndex})
}

async function toggleFavorite() {
    const track = getCurrentTrack()

    if (!track) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para alterar as favoritas compartilhadas.","warning")
        return
    }

    const previousFavorite = track.favorite
    track.favorite = !track.favorite
    updatePlayerInterface()

    if (cloudMode) {
        try {
            await cloud.setFavorite(track.id,track.favorite)
        } catch (error) {
            track.favorite = previousFavorite
            updatePlayerInterface()
            showToast(getErrorMessage(error,"Não foi possível alterar a favorita."),"warning")
            return
        }
    }

    showToast(track.favorite ? "Música adicionada às favoritas de vocês." : "Música removida das favoritas.")
}

async function sendCurrentTrack() {
    const track = getCurrentTrack()

    if (!track) return

    if (!cloudMode) {
        track.sharedBy = track.sharedBy || "Enviada por você"
        renderApplicationData()
        showToast("Envio simulado neste aparelho.","warning")
        return
    }

    if (!cloudReady || !navigator.onLine) {
        showToast("Conecte-se à internet para enviar esta música.","warning")
        return
    }

    try {
        await cloud.shareTrack(track.id)
        await loadCloudApplicationData()
        showToast("Música enviada para a outra pessoa.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível enviar a música."),"warning")
    }
}

miniPlayButton?.addEventListener("click",togglePlayback)
mainPlayButton?.addEventListener("click",togglePlayback)
previousButton?.addEventListener("click",() => changeTrack(-1))
nextButton?.addEventListener("click",() => changeTrack(1))
shuffleButton?.addEventListener("click",toggleShuffle)
repeatButton?.addEventListener("click",cycleRepeatMode)
favoriteButton?.addEventListener("click",toggleFavorite)
sendCurrentTrackButton?.addEventListener("click",sendCurrentTrack)
downloadCurrentTrackButton?.addEventListener("click",() => toggleTrackDownload(currentTrackId))
addCurrentToPlaylistButton?.addEventListener("click",() => {
    closeSheet("player")
    openPlaylistModal(currentTrackId)
})

downloadLibraryButton?.addEventListener("click",downloadVisibleCollection)

playLibraryButton?.addEventListener("click",() => {
    const playableTrack = getFilteredLibraryTracks().find(track => track.source)

    if (!playableTrack) {
        showToast("Adicione uma música para reproduzir a biblioteca.","warning")
        return
    }

    selectTrack(playableTrack.id,true,{context:getLibraryPlaybackContext()})
})

trackProgress?.addEventListener("input",() => {
    const duration = audioPlayer.duration

    trackProgress.style.setProperty("--range-progress",`${trackProgress.value}%`)

    if (!Number.isFinite(duration)) return

    audioPlayer.currentTime = (Number(trackProgress.value) / 100) * duration
    updateProgressInterface()
})

trackProgress?.addEventListener("change",() => {
    clearTimeout(seekPublishTimeout)
    seekPublishTimeout = setTimeout(publishJamState,120)
})

audioPlayer?.addEventListener("play",() => {
    isPlaying = true
    updatePlayerInterface()
    updateMediaSessionPosition(true)
})

audioPlayer?.addEventListener("pause",() => {
    isPlaying = false
    updatePlayerInterface()
    updateMediaSessionPosition(true)

    if (pendingServiceWorkerReload && document.visibilityState === "visible") {
        pendingServiceWorkerReload = false
        showToast("Atualização pronta. Ela será aplicada ao reabrir o Dois Tons.")
    }
})

audioPlayer?.addEventListener("timeupdate",() => {
    updateProgressInterface()

    if (Date.now() - lastPlaybackProgressSave > 4000) {
        lastPlaybackProgressSave = Date.now()
        schedulePlaybackStateSave()
    }
})

audioPlayer?.addEventListener("loadedmetadata",() => {
    const track = getCurrentTrack()

    if (track && Number.isFinite(audioPlayer.duration)) {
        track.duration = audioPlayer.duration

        if (cloudMode && cloudReady && navigator.onLine && track.cloud) {
            cloud.updateTrackDuration(track.id,audioPlayer.duration).catch(() => {})
        }
    }

    updateProgressInterface()
    updateMediaSessionPosition(true)
    renderApplicationData()
})

audioPlayer?.addEventListener("durationchange",() => updateMediaSessionPosition(true))
audioPlayer?.addEventListener("ratechange",() => updateMediaSessionPosition(true))

audioPlayer?.addEventListener("ended",() => changeTrack(1,{automatic:true}))

// gerenciamento das musicas
function resetTrackManager() {
    if (managedCoverPreviewUrl) URL.revokeObjectURL(managedCoverPreviewUrl)

    managedTrackId = ""
    managedCoverRemoved = false
    managedCoverPreviewUrl = ""
    trackManagerForm?.reset()

    if (trackDeleteConfirmation) trackDeleteConfirmation.hidden = true
    if (trackDeleteButton) trackDeleteButton.hidden = false
}

function getTrackOwnerLabel(track) {
    if (!cloudMode) return "Música desta demonstração"
    if (canManageTrack(track)) return "Adicionada por você"

    return track.addedByName ? `Adicionada por ${track.addedByName}` : "Adicionada pela outra pessoa"
}

function updateTrackManagerCoverPreview(track) {
    if (!trackManagerCoverPreview || !track) return

    if (managedCoverPreviewUrl) {
        setCoverElement(trackManagerCoverPreview,{...track,coverImage:managedCoverPreviewUrl})
        return
    }

    if (managedCoverRemoved) {
        setCoverElement(trackManagerCoverPreview,{...track,coverImage:""})
        return
    }

    setCoverElement(trackManagerCoverPreview,track)
}

function openTrackManager(trackId) {
    const track = tracks.find(item => item.id === trackId)

    if (!track) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para gerenciar esta música.","warning")
        return
    }

    if (!canManageTrack(track)) {
        showToast(`${getTrackOwnerLabel(track)}. Somente esse perfil pode editar ou excluir a música.`,"warning")
        return
    }

    resetTrackManager()
    managedTrackId = track.id
    trackManagerTitleInput.value = track.title || ""
    trackManagerArtistInput.value = track.artist || ""
    trackManagerAlbumInput.value = track.album || ""
    trackManagerSummaryTitle.textContent = track.title || "Música"
    trackManagerSummaryArtist.textContent = track.artist || "Artista desconhecido"
    trackManagerOwner.textContent = getTrackOwnerLabel(track)
    trackManagerInformation.textContent = cloudMode
        ? "Título, artista, álbum e capa serão sincronizados nos aparelhos conectados."
        : "As alterações desta demonstração permanecem somente nesta página."

    setCoverElement(trackManagerCover,track)
    updateTrackManagerCoverPreview(track)

    const hasCover = Boolean(track.coverPath || track.cloudCoverImage || track.coverImage)

    trackManagerRemoveCoverButton.disabled = !hasCover
    trackDeleteButton.disabled = jamActive
    if (jamActive) trackManagerInformation.textContent = "Durante uma Jam você pode editar os dados, mas a exclusão fica bloqueada até a Jam terminar."

    openModal("track-manager")
}

function handleTrackManagerCoverSelection() {
    const track = tracks.find(item => item.id === managedTrackId)
    const file = trackManagerCoverInput.files[0]

    if (!track) return

    if (managedCoverPreviewUrl) {
        URL.revokeObjectURL(managedCoverPreviewUrl)
        managedCoverPreviewUrl = ""
    }

    if (!file) {
        managedCoverRemoved = false
        updateTrackManagerCoverPreview(track)
        return
    }

    if (!file.type.startsWith("image/")) {
        trackManagerCoverInput.value = ""
        showToast("Escolha um arquivo de imagem para a capa.","warning")
        return
    }

    if (file.size > maximumCoverFileSize) {
        trackManagerCoverInput.value = ""
        showToast("A imagem da capa deve ter no máximo 10 MB.","warning")
        return
    }

    managedCoverRemoved = false
    managedCoverPreviewUrl = URL.createObjectURL(file)
    trackManagerRemoveCoverButton.disabled = false
    updateTrackManagerCoverPreview(track)
}

function markTrackCoverForRemoval() {
    const track = tracks.find(item => item.id === managedTrackId)

    if (!track) return

    if (managedCoverPreviewUrl) {
        URL.revokeObjectURL(managedCoverPreviewUrl)
        managedCoverPreviewUrl = ""
    }

    trackManagerCoverInput.value = ""
    managedCoverRemoved = true
    trackManagerRemoveCoverButton.disabled = true
    updateTrackManagerCoverPreview(track)
    showToast("A capa será removida quando você salvar as alterações.")
}

async function updateDownloadedTrackAfterEdit(track,changes,coverFile) {
    if (!offlineReady || !track?.downloaded || !currentProfile?.duoId || !offline?.updateDownloadMetadata) return

    const updatedTrack = {
        ...track,
        title:changes.title,
        artist:changes.artist,
        album:changes.album
    }
    const coverBlob = coverFile || (managedCoverRemoved ? null : undefined)

    try {
        await offline.updateDownloadMetadata({
            duoId:currentProfile.duoId,
            track:updatedTrack,
            coverBlob
        })
        releaseOfflineTrackObjectUrls(track.id)
    } catch (error) {
        console.warn("Não foi possível atualizar a cópia offline desta música.",error)
    }
}

async function handleTrackManagerSubmit(event) {
    event.preventDefault()

    const track = tracks.find(item => item.id === managedTrackId)

    if (!track) return

    const changes = {
        title:trackManagerTitleInput.value.trim(),
        artist:trackManagerArtistInput.value.trim(),
        album:trackManagerAlbumInput.value.trim() || "Álbum desconhecido"
    }
    const coverFile = trackManagerCoverInput.files[0] || null

    if (!changes.title || !changes.artist) {
        showToast("Preencha pelo menos o título e o artista.","warning")
        return
    }

    if (coverFile && (!coverFile.type.startsWith("image/") || coverFile.size > maximumCoverFileSize)) {
        showToast("Escolha uma capa válida de até 10 MB.","warning")
        return
    }

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para salvar as alterações.","warning")
        return
    }

    if (!canManageTrack(track)) {
        showToast("Somente quem adicionou esta música pode editá-la.","warning")
        return
    }

    setButtonLoading(trackManagerSubmitButton,true,"Salvando...")

    try {
        if (cloudMode) {
            await cloud.updateTrack(track.id,{
                ...changes,
                coverFile,
                removeCover:managedCoverRemoved
            })
            await updateDownloadedTrackAfterEdit(track,changes,coverFile)

            if (activeLibraryEntity?.type === "album" && getAlbumKey({...track,...changes}) !== activeLibraryEntity.key) activeLibraryEntity = null
            if (activeLibraryEntity?.type === "artist" && getArtistKey({...track,...changes}) !== activeLibraryEntity.key) activeLibraryEntity = null

            closeModal("track-manager")
            await loadCloudApplicationData()
            showToast("Informações da música atualizadas nos dois aparelhos.")
            return
        }

        track.title = changes.title
        track.artist = changes.artist
        track.album = changes.album

        if (coverFile) {
            track.coverImage = URL.createObjectURL(coverFile)
        } else if (managedCoverRemoved) {
            track.coverImage = ""
        }

        closeModal("track-manager")
        renderApplicationData()
        updatePlayerInterface()
        showToast("Música atualizada nesta demonstração.","warning")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível atualizar a música."),"warning")
    } finally {
        setButtonLoading(trackManagerSubmitButton,false)
    }
}

function openTrackDeleteConfirmation() {
    if (jamActive) {
        showToast("Encerre a Jam antes de excluir uma música.","warning")
        return
    }

    trackDeleteButton.hidden = true
    trackDeleteConfirmation.hidden = false
}

function closeTrackDeleteConfirmation() {
    trackDeleteConfirmation.hidden = true
    trackDeleteButton.hidden = false
}

function clearDeletedTrackPlayback(trackId) {
    if (currentTrackId !== trackId) return

    pauseTrack({syncJam:false})
    audioPlayer.removeAttribute("src")
    audioPlayer.dataset.trackId = ""
    audioPlayer.dataset.source = ""
    audioPlayer.load()
}

function removeDemoTrack(trackId) {
    clearDeletedTrackPlayback(trackId)
    tracks = tracks.filter(track => track.id !== trackId)
    playlists = playlists.map(playlist => ({
        ...playlist,
        trackIds:playlist.trackIds.filter(id => id !== trackId)
    }))
    playbackQueue = playbackQueue.filter(id => id !== trackId)

    if (currentTrackId === trackId) currentTrackId = tracks[0]?.id || ""

    if (currentTrackId) {
        buildPlaybackQueue(currentTrackId,{type:"library",label:"Biblioteca"})
    } else {
        playbackQueue = []
        playbackQueueIndex = -1
    }
}

async function confirmTrackDeletion() {
    const track = tracks.find(item => item.id === managedTrackId)

    if (!track) return

    if (jamActive) {
        showToast("Encerre a Jam antes de excluir uma música.","warning")
        return
    }

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para excluir a música.","warning")
        return
    }

    if (!canManageTrack(track)) {
        showToast("Somente quem adicionou esta música pode excluí-la.","warning")
        return
    }

    const originalLabel = trackDeleteConfirmButton.textContent

    trackDeleteConfirmButton.disabled = true
    trackDeleteConfirmButton.textContent = "Excluindo..."

    try {
        if (cloudMode) {
            clearDeletedTrackPlayback(track.id)
            await cloud.deleteTrack(track.id)

            if (offlineReady && currentProfile?.duoId) {
                try {
                    await offline.removeDownload(currentProfile.duoId,track.id)
                    releaseOfflineTrackObjectUrls(track.id)
                    offlineDownloads.delete(track.id)
                } catch (error) {
                    console.warn("Não foi possível remover a cópia offline da música excluída.",error)
                }
            }

            activeLibraryEntity = null
            closeModal("track-manager")
            await loadCloudApplicationData()
            showToast("Música excluída da biblioteca.")
            return
        }

        removeDemoTrack(track.id)
        closeModal("track-manager")
        renderApplicationData()
        updatePlayerInterface()
        showToast("Música removida desta demonstração.","warning")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível excluir a música."),"warning")
    } finally {
        trackDeleteConfirmButton.disabled = false
        trackDeleteConfirmButton.textContent = originalLabel
    }
}

trackManagerCoverInput?.addEventListener("change",handleTrackManagerCoverSelection)
trackManagerRemoveCoverButton?.addEventListener("click",markTrackCoverForRemoval)
trackManagerForm?.addEventListener("submit",handleTrackManagerSubmit)
trackDeleteButton?.addEventListener("click",openTrackDeleteConfirmation)
trackDeleteCancelButton?.addEventListener("click",closeTrackDeleteConfirmation)
trackDeleteConfirmButton?.addEventListener("click",confirmTrackDeletion)

// paineis e modais
function getSheet(name) {
    const sheetMap = {
        player:playerSheet,
        queue:queueSheet
    }

    return sheetMap[name]
}

function openSheet(name) {
    const sheet = getSheet(name)

    if (!sheet || !getCurrentTrack()) return

    if (name === "queue") renderQueue()

    sheet.classList.add("open")
    sheet.setAttribute("aria-hidden","false")
    setOverlayState()
}

function closeSheet(name) {
    const sheet = getSheet(name)

    if (!sheet) return

    sheet.classList.remove("open")
    sheet.setAttribute("aria-hidden","true")
    setOverlayState()
}

function getModal(name) {
    const modalMap = {
        upload:uploadModal,
        "track-manager":trackManagerModal,
        catalog:catalogModal,
        playlist:playlistModal,
        profile:profileModal,
        install:installModal
    }

    return modalMap[name]
}

function openModal(name) {
    const modal = getModal(name)

    if (!modal) return

    modal.classList.add("open")
    modal.setAttribute("aria-hidden","false")
    setOverlayState()
}

function closeModal(name) {
    const modal = getModal(name)

    if (!modal) return
    if (name === "catalog" && catalogImporting) {
        showToast("Aguarde o envio atual ou use Parar importação.","warning")
        return
    }

    if (name === "track-manager") resetTrackManager()

    modal.classList.remove("open")
    modal.setAttribute("aria-hidden","true")
    setOverlayState()
}

function closeAllOverlays() {
    document.querySelectorAll(".modal.open").forEach(modal => {
        if (modal === catalogModal && catalogImporting) return

        modal.classList.remove("open")
        modal.setAttribute("aria-hidden","true")
    })

    document.querySelectorAll(".bottom-sheet.open").forEach(sheet => {
        sheet.classList.remove("open")
        sheet.setAttribute("aria-hidden","true")
    })

    resetTrackManager()
    setOverlayState()
}

openPlayerButton?.addEventListener("click",() => openSheet("player"))
openQueueButton?.addEventListener("click",() => {
    closeSheet("player")
    openSheet("queue")
})
manageCurrentTrackButton?.addEventListener("click",() => {
    closeSheet("player")
    openTrackManager(currentTrackId)
})
clearQueueButton?.addEventListener("click",clearUpcomingQueue)
saveQueuePlaylistButton?.addEventListener("click",() => {
    pendingPlaylistQueueIds = playbackQueue.slice(Math.max(0,playbackQueueIndex))

    if (!pendingPlaylistQueueIds.length) {
        showToast("Não há músicas na fila para salvar.","warning")
        return
    }

    closeSheet("queue")
    openPlaylistModal("",pendingPlaylistQueueIds)
})
uploadButton?.addEventListener("click",() => openModal("upload"))
profileButton?.addEventListener("click",() => openModal("profile"))

openUploadButtons.forEach(button => {
    button.addEventListener("click",() => openModal("upload"))
})

openCatalogButtons.forEach(button => {
    button.addEventListener("click",() => {
        if (!cloudMode || !cloudReady) {
            showToast("Conecte o aplicativo ao Supabase antes de importar o catálogo.","warning")
            return
        }

        closeModal("upload")
        renderCatalogQueue()
        openModal("catalog")
    })
})

sheetCloseButtons.forEach(button => {
    button.addEventListener("click",() => closeSheet(button.dataset.closeSheet))
})

modalCloseButtons.forEach(button => {
    button.addEventListener("click",() => closeModal(button.dataset.closeModal))
})

queueList?.addEventListener("click",event => {
    const selectButton = event.target.closest("[data-queue-select]")
    const moveButton = event.target.closest("[data-queue-move]")
    const removeButton = event.target.closest("[data-queue-remove]")

    if (selectButton) {
        selectQueueTrack(Number(selectButton.dataset.queueSelect))
        return
    }

    if (moveButton) {
        moveQueueTrack(Number(moveButton.dataset.queueIndex),moveButton.dataset.queueMove)
        return
    }

    if (removeButton) removeQueueTrack(Number(removeButton.dataset.queueRemove))
})

document.addEventListener("keydown",event => {
    if (event.key !== "Escape") return

    closeAllOverlays()
})

// upload
function getFileTitle(fileName) {
    return fileName.replace(/\.[^/.]+$/,"").replaceAll(/[_-]+/g," ").trim()
}

function resetUploadForm() {
    uploadForm.reset()
    selectedCoverImage = ""
    audioFileDrop.classList.remove("has-file")
    audioFileTitle.textContent = "Escolher arquivo de áudio"
    coverPreview.classList.remove("has-image")
    coverPreview.style.removeProperty("background-image")
}

function handleAudioFileSelection() {
    const file = audioFileInput.files[0]

    if (!file) {
        audioFileDrop.classList.remove("has-file")
        audioFileTitle.textContent = "Escolher arquivo de áudio"
        return
    }

    audioFileDrop.classList.add("has-file")
    audioFileTitle.textContent = file.name

    if (!trackTitleInput.value.trim()) trackTitleInput.value = getFileTitle(file.name)
}

function handleCoverFileSelection() {
    const file = coverFileInput.files[0]

    if (!file) {
        selectedCoverImage = ""
        coverPreview.style.removeProperty("background-image")
        return
    }

    const reader = new FileReader()

    reader.addEventListener("load",() => {
        selectedCoverImage = String(reader.result)
        coverPreview.classList.add("has-image")
        coverPreview.style.backgroundImage = `url("${selectedCoverImage}")`
    })

    reader.readAsDataURL(file)
}

function getAudioDuration(file) {
    return new Promise(resolve => {
        const previewAudio = document.createElement("audio")
        const objectUrl = URL.createObjectURL(file)
        const finish = duration => {
            URL.revokeObjectURL(objectUrl)
            resolve(Number.isFinite(duration) ? duration : 0)
        }

        previewAudio.preload = "metadata"
        previewAudio.addEventListener("loadedmetadata",() => finish(previewAudio.duration),{once:true})
        previewAudio.addEventListener("error",() => finish(0),{once:true})
        previewAudio.src = objectUrl
    })
}

function loadMetadataLibrary() {
    if (window.jsmediatags?.read) return Promise.resolve(window.jsmediatags)
    if (metadataLibraryPromise) return metadataLibraryPromise

    metadataLibraryPromise = new Promise((resolve,reject) => {
        const existingScript = document.querySelector("[data-metadata-library]")
        const handleLoad = () => window.jsmediatags?.read
            ? resolve(window.jsmediatags)
            : reject(new Error("A leitura automática de informações não ficou disponível."))

        if (existingScript) {
            existingScript.addEventListener("load",handleLoad,{once:true})
            existingScript.addEventListener("error",() => reject(new Error("Não foi possível carregar o leitor de informações.")),{once:true})
            return
        }

        const script = document.createElement("script")

        script.src = metadataLibraryUrl
        script.crossOrigin = "anonymous"
        script.dataset.metadataLibrary = "true"
        script.addEventListener("load",handleLoad,{once:true})
        script.addEventListener("error",() => reject(new Error("Não foi possível carregar o leitor de informações.")),{once:true})
        document.head.append(script)
    })

    return metadataLibraryPromise
}

async function readEmbeddedMetadata(file) {
    try {
        const metadataLibrary = await loadMetadataLibrary()

        return new Promise(resolve => {
            metadataLibrary.read(file,{
                onSuccess:result => resolve(result?.tags || {}),
                onError:() => resolve({})
            })
        })
    } catch (error) {
        return {}
    }
}

function createEmbeddedCoverFile(picture,audioFile) {
    if (!picture?.data?.length) return null

    const format = String(picture.format || "image/jpeg").toLocaleLowerCase("pt-BR")
    const mimeType = format.includes("png")
        ? "image/png"
        : format.includes("gif")
            ? "image/gif"
            : format.includes("webp")
                ? "image/webp"
                : "image/jpeg"
    const extension = mimeType.split("/")[1].replace("jpeg","jpg")
    const bytes = picture.data instanceof Uint8Array
        ? picture.data
        : new Uint8Array(picture.data)

    if (bytes.byteLength > maximumCoverFileSize) return null

    return new File([bytes],`${getFileTitle(audioFile.name)}-capa.${extension}`,{type:mimeType})
}

async function createFileFingerprint(file) {
    if (!window.crypto?.subtle) {
        return `arquivo:${file.size}:${file.lastModified}:${normalizeCatalogText(file.name)}`
    }

    const fileBuffer = await file.arrayBuffer()
    const hashBuffer = await window.crypto.subtle.digest("SHA-256",fileBuffer)
    const hashBytes = Array.from(new Uint8Array(hashBuffer))

    return `sha256:${hashBytes.map(byte => byte.toString(16).padStart(2,"0")).join("")}`
}

function getFileNameMetadata(file) {
    const rawFileTitle = file.name
        .replace(/\.[^/.]+$/,"")
        .replaceAll("_"," ")
        .trim()
    const fileTitle = getFileTitle(file.name)
    const titleParts = rawFileTitle.split(/\s+-\s+/).map(part => part.trim()).filter(Boolean)
    const pathParts = String(file.webkitRelativePath || "").split("/").filter(Boolean)
    const albumFolder = pathParts.length >= 3 ? pathParts.at(-2) : ""
    const artistFolder = pathParts.length >= 4 ? pathParts.at(-3) : ""

    if (titleParts.length >= 2) {
        return {
            title:titleParts.slice(1).join(" - "),
            artist:titleParts[0],
            album:albumFolder
        }
    }

    return {
        title:fileTitle,
        artist:artistFolder,
        album:albumFolder
    }
}

function getMetadataGenres(value) {
    const genres = Array.isArray(value) ? value : value ? [value] : []

    return genres
        .flatMap(genre => String(genre).split(/[;,/]/))
        .map(genre => normalizeCatalogText(genre))
        .filter(Boolean)
        .slice(0,5)
}

function isSupportedAudioFile(file) {
    const extension = getFileExtension(file.name)

    return file.type.startsWith("audio/") || supportedAudioExtensions.includes(extension)
}

function getCatalogSelectionKey(file) {
    return [
        file.webkitRelativePath || file.name,
        file.size,
        file.lastModified
    ].join("|")
}

function getCatalogStatusLabel(item) {
    const labels = {
        queued:"Na fila",
        analyzing:"Analisando",
        ready:"Pronta",
        duplicate:"Já existe",
        invalid:item.message || "Arquivo inválido",
        uploading:"Enviando",
        imported:"Importada",
        failed:item.message || "Falha no envio"
    }

    return labels[item.status] || "Na fila"
}

function updateCatalogProgress(title,description,current,total) {
    const percentage = total > 0 ? Math.round((current / total) * 100) : 0

    catalogProgressTitle.textContent = title
    catalogProgressDescription.textContent = description
    catalogProgressValue.textContent = `${percentage}%`
    catalogProgressTrack.setAttribute("aria-valuenow",String(percentage))
    catalogProgressBar.style.setProperty("--catalog-progress",`${percentage}%`)
}

function renderCatalogQueue() {
    if (!catalogList) return

    const readyItems = catalogItems.filter(item => item.status === "ready")
    const failedItems = catalogItems.filter(item => item.status === "failed")
    const duplicateItems = catalogItems.filter(item => item.status === "duplicate")
    const importedItems = catalogItems.filter(item => item.status === "imported")
    const invalidItems = catalogItems.filter(item => item.status === "invalid")
    const importableItems = [...readyItems,...failedItems]

    catalogSummary.hidden = catalogItems.length === 0
    catalogSummary.innerHTML = catalogItems.length
        ? `
            <span>${catalogItems.length} selecionadas</span>
            <span class="ready">${readyItems.length} prontas</span>
            ${importedItems.length ? `<span class="ready">${importedItems.length} importadas</span>` : ""}
            ${duplicateItems.length ? `<span class="duplicate">${duplicateItems.length} repetidas</span>` : ""}
            ${invalidItems.length || failedItems.length ? `<span class="error">${invalidItems.length + failedItems.length} com erro</span>` : ""}
        `
        : ""

    catalogList.innerHTML = catalogItems.length
        ? catalogItems.map(item => {
            const coverStyle = item.coverUrl
                ? `style="background-image:url('${escapeAttribute(item.coverUrl)}')"`
                : ""
            const information = item.artist
                ? `${escapeHTML(item.artist)} · ${escapeHTML(item.album)}`
                : escapeHTML(item.file.name)
            const details = [
                item.duration ? formatTime(item.duration) : "",
                formatFileSize(item.file.size),
                item.coverFile ? "capa encontrada" : ""
            ].filter(Boolean).join(" · ")

            return `
                <article class="catalog-item ${escapeAttribute(item.status)}" data-catalog-id="${escapeAttribute(item.id)}">
                    <span class="catalog-item-cover" ${coverStyle}>
                        ${item.coverUrl ? "" : '<svg aria-hidden="true"><use href="#icon-music"></use></svg>'}
                    </span>
                    <span class="catalog-item-information">
                        <strong>${escapeHTML(item.title || getFileTitle(item.file.name))}</strong>
                        <span>${information}</span>
                        <small>${escapeHTML(details)}</small>
                    </span>
                    <span class="catalog-item-status">${escapeHTML(getCatalogStatusLabel(item))}</span>
                    <button
                        type="button"
                        class="catalog-remove-button"
                        data-remove-catalog="${escapeAttribute(item.id)}"
                        aria-label="Remover ${escapeAttribute(item.title || item.file.name)} da lista"
                        ${catalogAnalyzing || catalogImporting ? "disabled" : ""}
                    >
                        <svg aria-hidden="true"><use href="#icon-close"></use></svg>
                    </button>
                </article>
            `
        }).join("")
        : '<p class="catalog-empty-state">As músicas analisadas aparecerão aqui com título, artista, álbum, duração e capa.</p>'

    const importLabel = failedItems.length && !readyItems.length
        ? `Tentar novamente (${failedItems.length})`
        : `Importar ${importableItems.length || ""} ${importableItems.length === 1 ? "música" : "músicas"}`.replace(/\s+/g," ").trim()

    catalogClearButton.disabled = !catalogItems.length || catalogAnalyzing || catalogImporting
    catalogCancelButton.hidden = !catalogImporting
    catalogImportButton.disabled = !importableItems.length || catalogAnalyzing || catalogImporting
    catalogImportButton.classList.toggle("loading",catalogImporting)
    catalogImportButton.querySelector("span").textContent = catalogImporting ? "Importando catálogo..." : importLabel
    catalogModalCard.classList.toggle("analyzing",catalogAnalyzing)
    catalogModalCard.classList.toggle("importing",catalogImporting)
}

function releaseCatalogItem(item) {
    if (item?.coverUrl) URL.revokeObjectURL(item.coverUrl)
}

function clearCatalogQueue() {
    if (catalogAnalyzing || catalogImporting) return

    catalogItems.forEach(releaseCatalogItem)
    catalogItems = []
    catalogFileInput.value = ""
    catalogFolderInput.value = ""
    updateCatalogProgress(
        "Nenhuma música selecionada",
        "Você pode adicionar novos arquivos à lista antes de importar.",
        0,
        0
    )
    renderCatalogQueue()
}

function removeCatalogItem(itemId) {
    if (catalogAnalyzing || catalogImporting) return

    const selectedItem = catalogItems.find(item => item.id === itemId)

    releaseCatalogItem(selectedItem)
    catalogItems = catalogItems.filter(item => item.id !== itemId)
    renderCatalogQueue()

    if (!catalogItems.length) {
        updateCatalogProgress(
            "Nenhuma música selecionada",
            "Você pode adicionar novos arquivos à lista antes de importar.",
            0,
            0
        )
    }
}

async function analyzeCatalogFiles(fileList) {
    if (catalogAnalyzing || catalogImporting) return

    const selectedKeys = new Set(catalogItems.map(item => item.selectionKey))
    const selectedFiles = Array.from(fileList || [])
        .filter(isSupportedAudioFile)
        .filter(file => !selectedKeys.has(getCatalogSelectionKey(file)))

    catalogFileInput.value = ""
    catalogFolderInput.value = ""

    if (!selectedFiles.length) {
        showToast("Nenhum arquivo de áudio novo foi encontrado.","warning")
        return
    }

    const newItems = selectedFiles.map(file => ({
        id:createId("catalog"),
        selectionKey:getCatalogSelectionKey(file),
        file,
        title:getFileTitle(file.name),
        artist:"",
        album:"",
        duration:0,
        genres:[],
        fileHash:"",
        signature:"",
        coverFile:null,
        coverUrl:"",
        status:"queued",
        message:""
    }))
    const knownHashes = new Set([
        ...tracks.map(track => track.fileHash).filter(Boolean),
        ...catalogItems.map(item => item.fileHash).filter(Boolean)
    ])
    const knownSignatures = new Set([
        ...tracks.map(createCatalogSignature),
        ...catalogItems
            .filter(item => item.signature && item.status !== "duplicate")
            .map(item => item.signature)
    ])
    const knownLooseSignatures = new Set([
        ...tracks.map(createCatalogLooseSignature),
        ...catalogItems
            .filter(item => item.signature && item.status !== "duplicate")
            .map(createCatalogLooseSignature)
    ])

    catalogItems.push(...newItems)
    catalogAnalyzing = true
    renderCatalogQueue()

    for (let index = 0; index < newItems.length; index += 1) {
        const item = newItems[index]

        item.status = "analyzing"
        updateCatalogProgress(
            `Analisando ${index + 1} de ${newItems.length}`,
            item.file.name,
            index,
            newItems.length
        )
        renderCatalogQueue()

        if (item.file.size > maximumAudioFileSize) {
            item.status = "invalid"
            item.message = "Maior que 100 MB"
            continue
        }

        try {
            const fileMetadata = getFileNameMetadata(item.file)
            const [embeddedMetadata,duration] = await Promise.all([
                readEmbeddedMetadata(item.file),
                getAudioDuration(item.file)
            ])
            const fileHash = await createFileFingerprint(item.file)
            const title = limitText(embeddedMetadata.title,80,fileMetadata.title || "Música sem título")
            const artist = limitText(embeddedMetadata.artist,80,fileMetadata.artist || "Artista desconhecido")
            const album = limitText(embeddedMetadata.album,100,fileMetadata.album || "Álbum desconhecido")
            const coverFile = createEmbeddedCoverFile(embeddedMetadata.picture,item.file)
            const signature = createCatalogSignature({title,artist,album,duration})
            const looseSignature = createCatalogLooseSignature({title,artist,duration})
            const hasReliableMetadata = Boolean(embeddedMetadata.title && embeddedMetadata.artist)
            const duplicate = knownHashes.has(fileHash)
                || hasReliableMetadata && (knownSignatures.has(signature) || knownLooseSignatures.has(looseSignature))

            item.title = title
            item.artist = artist
            item.album = album
            item.duration = duration
            item.genres = getMetadataGenres(embeddedMetadata.genre)
            item.fileHash = fileHash
            item.signature = signature
            item.coverFile = coverFile
            item.coverUrl = coverFile ? URL.createObjectURL(coverFile) : ""
            item.status = duplicate ? "duplicate" : "ready"
            item.message = duplicate ? "Esta música já está na biblioteca" : ""

            if (!duplicate) {
                knownHashes.add(fileHash)
                if (hasReliableMetadata) {
                    knownSignatures.add(signature)
                    knownLooseSignatures.add(looseSignature)
                }
            }
        } catch (error) {
            item.status = "invalid"
            item.message = getErrorMessage(error,"Não foi possível analisar")
        }

        updateCatalogProgress(
            `Analisando ${index + 1} de ${newItems.length}`,
            item.file.name,
            index + 1,
            newItems.length
        )
        renderCatalogQueue()
    }

    catalogAnalyzing = false

    const readyCount = catalogItems.filter(item => item.status === "ready").length
    const duplicateCount = catalogItems.filter(item => item.status === "duplicate").length

    updateCatalogProgress(
        readyCount ? `${readyCount} ${readyCount === 1 ? "música pronta" : "músicas prontas"}` : "Nenhuma música nova encontrada",
        duplicateCount
            ? `${duplicateCount} ${duplicateCount === 1 ? "duplicata será ignorada" : "duplicatas serão ignoradas"}. Confira a lista antes de importar.`
            : "Confira a lista e inicie o envio para a nuvem.",
        newItems.length,
        newItems.length
    )
    renderCatalogQueue()
}

function isCatalogDuplicateError(error) {
    const message = String(error?.message || "").toLocaleLowerCase("pt-BR")

    return error?.code === "23505" || message.includes("já existe na biblioteca") || message.includes("duplicate")
}

async function importCatalog() {
    if (catalogAnalyzing || catalogImporting) return

    const importableItems = catalogItems.filter(item => ["ready","failed"].includes(item.status))

    if (!importableItems.length) return

    catalogImporting = true
    catalogCancelRequested = false
    renderCatalogQueue()

    let completedItems = 0
    let importedItems = 0
    let duplicateItems = 0

    for (const item of importableItems) {
        if (catalogCancelRequested) break

        item.status = "uploading"
        item.message = ""
        updateCatalogProgress(
            `Enviando ${completedItems + 1} de ${importableItems.length}`,
            `${item.title} · ${item.artist}`,
            completedItems,
            importableItems.length
        )
        renderCatalogQueue()

        try {
            await cloud.uploadTrack({
                audioFile:item.file,
                coverFile:item.coverFile,
                title:item.title,
                artist:item.artist,
                album:item.album,
                duration:item.duration,
                tags:[
                    "catalogo",
                    normalizeCatalogText(item.title),
                    normalizeCatalogText(item.artist),
                    normalizeCatalogText(item.album),
                    ...item.genres
                ].filter(Boolean),
                fileHash:item.fileHash,
                fileSize:item.file.size,
                mimeType:getAudioMimeType(item.file)
            })

            item.status = "imported"
            importedItems += 1
        } catch (error) {
            if (isCatalogDuplicateError(error)) {
                item.status = "duplicate"
                item.message = "Esta música já está na biblioteca"
                duplicateItems += 1
            } else {
                item.status = "failed"
                item.message = getErrorMessage(error,"Não foi possível enviar")
            }
        }

        completedItems += 1
        updateCatalogProgress(
            `Enviando ${completedItems} de ${importableItems.length}`,
            item.status === "imported" ? `${item.title} foi adicionada.` : getCatalogStatusLabel(item),
            completedItems,
            importableItems.length
        )
        renderCatalogQueue()
    }

    catalogImporting = false
    renderCatalogQueue()

    try {
        await loadCloudApplicationData()
    } catch (error) {
        showToast("As músicas foram enviadas, mas a atualização da tela falhou.","warning")
    }

    const remainingItems = catalogItems.filter(item => ["ready","failed"].includes(item.status)).length

    if (catalogCancelRequested) {
        updateCatalogProgress(
            "Importação interrompida",
            `${importedItems} ${importedItems === 1 ? "música foi salva" : "músicas foram salvas"}. Você pode continuar quando quiser.`,
            completedItems,
            importableItems.length
        )
        showToast("A importação foi interrompida sem remover as músicas já salvas.","warning")
    } else {
        updateCatalogProgress(
            remainingItems ? "Importação concluída com pendências" : "Catálogo importado",
            `${importedItems} ${importedItems === 1 ? "música adicionada" : "músicas adicionadas"}${duplicateItems ? ` e ${duplicateItems} repetidas ignoradas` : ""}.`,
            importableItems.length,
            importableItems.length
        )
        showToast(importedItems
            ? `${importedItems} ${importedItems === 1 ? "música foi adicionada" : "músicas foram adicionadas"} à biblioteca.`
            : "Nenhuma música nova foi adicionada.",
        importedItems ? "success" : "warning")
    }

    catalogCancelRequested = false
    renderCatalogQueue()
}

async function handleUploadSubmit(event) {
    event.preventDefault()

    const audioFile = audioFileInput.files[0]
    const coverFile = coverFileInput.files[0]
    const title = trackTitleInput.value.trim()
    const artist = trackArtistInput.value.trim()

    if (!audioFile || !title || !artist) {
        showToast("Escolha o áudio e preencha título e artista.","warning")
        return
    }

    if (audioFile.size > maximumAudioFileSize) {
        showToast("O arquivo de áudio deve ter no máximo 100 MB.","warning")
        return
    }

    if (coverFile && coverFile.size > maximumCoverFileSize) {
        showToast("A imagem da capa deve ter no máximo 10 MB.","warning")
        return
    }

    if (!cloudMode) {
        const track = {
            id:createId("track"),
            title,
            artist,
            album:"Adicionada por você",
            cover:selectedCoverImage ? "" : availableCoverClasses[tracks.length % availableCoverClasses.length],
            coverImage:selectedCoverImage,
            duration:0,
            favorite:false,
            sharedBy:"",
            tags:["adicionada","local",title.toLocaleLowerCase("pt-BR"),artist.toLocaleLowerCase("pt-BR")],
            source:URL.createObjectURL(audioFile)
        }

        tracks.unshift(track)
        currentTrackId = track.id
        buildPlaybackQueue(track.id,{type:"library",label:"Biblioteca"})
        renderApplicationData()
        updatePlayerInterface()
        closeModal("upload")
        resetUploadForm()
        playTrack()
        showToast("Música adicionada somente durante este teste.","warning")
        return
    }

    setButtonLoading(uploadSubmitButton,true,"Enviando para a nuvem...")

    try {
        const [duration,fileHash] = await Promise.all([
            getAudioDuration(audioFile),
            createFileFingerprint(audioFile)
        ])

        if (tracks.some(track => track.fileHash && track.fileHash === fileHash)) {
            throw new Error("Esta música já existe na biblioteca.")
        }

        const createdTrack = await cloud.uploadTrack({
            audioFile,
            coverFile,
            title,
            artist,
            album:"Adicionada por você",
            duration,
            tags:["adicionada",title.toLocaleLowerCase("pt-BR"),artist.toLocaleLowerCase("pt-BR")],
            fileHash,
            fileSize:audioFile.size,
            mimeType:getAudioMimeType(audioFile)
        })

        closeModal("upload")
        resetUploadForm()
        await loadCloudApplicationData()
        await selectTrack(createdTrack.id,true)
        showToast("Música salva na nuvem dos dois.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível enviar o arquivo."),"warning")
    } finally {
        setButtonLoading(uploadSubmitButton,false)
    }
}

audioFileInput?.addEventListener("change",handleAudioFileSelection)
coverFileInput?.addEventListener("change",handleCoverFileSelection)
uploadForm?.addEventListener("submit",handleUploadSubmit)

catalogFileInput?.addEventListener("change",event => analyzeCatalogFiles(event.target.files))
catalogFolderInput?.addEventListener("change",event => analyzeCatalogFiles(event.target.files))
catalogClearButton?.addEventListener("click",clearCatalogQueue)
catalogCancelButton?.addEventListener("click",() => {
    catalogCancelRequested = true
    catalogCancelButton.disabled = true
    catalogCancelButton.textContent = "Parando após esta música..."
})
catalogImportButton?.addEventListener("click",async () => {
    catalogCancelButton.disabled = false
    catalogCancelButton.textContent = "Parar importação"
    await importCatalog()
})
catalogList?.addEventListener("click",event => {
    const removeButton = event.target.closest("[data-remove-catalog]")

    if (!removeButton) return

    removeCatalogItem(removeButton.dataset.removeCatalog)
})

window.addEventListener("beforeunload",event => {
    if (!catalogImporting) return

    event.preventDefault()
    event.returnValue = ""
})

// playlists
function openPlaylistModal(trackId = "",queueIds = []) {
    pendingPlaylistTrackId = trackId
    pendingPlaylistQueueIds = Array.isArray(queueIds) ? queueIds.filter(Boolean) : []
    renderPlaylistPicker()
    openModal("playlist")
}

function renderPlaylistPicker() {
    if (!playlistPicker) return

    if (pendingPlaylistQueueIds.length) {
        const count = pendingPlaylistQueueIds.length

        playlistPicker.innerHTML = `
            <p class="playlist-picker-empty">A fila atual tem ${count === 1 ? "1 música" : `${count} músicas`}. Dê um nome abaixo para salvá-la como uma nova playlist compartilhada.</p>
        `
        return
    }

    if (!playlists.length) {
        const automaticMessage = pendingPlaylistTrackId
            ? " e a música atual será adicionada automaticamente"
            : pendingPlaylistQueueIds.length
                ? " e a fila atual será salva nela"
                : ""

        playlistPicker.innerHTML = `
            <p class="playlist-picker-empty">Ainda não há playlists. Crie uma abaixo${automaticMessage}.</p>
        `
        return
    }

    playlistPicker.innerHTML = playlists.map(playlist => {
        const hasTrack = Boolean(pendingPlaylistTrackId && playlist.trackIds.includes(pendingPlaylistTrackId))
        const count = playlist.trackIds.length

        return `
            <button type="button" class="playlist-picker-button" data-toggle-playlist-track="${escapeAttribute(playlist.id)}" ${pendingPlaylistTrackId ? "" : "disabled"}>
                <span><svg aria-hidden="true"><use href="#icon-playlist"></use></svg></span>
                <span>
                    <strong>${escapeHTML(playlist.title)}</strong>
                    <small>${count === 1 ? "1 música" : `${count} músicas`}</small>
                </span>
                <small>${pendingPlaylistTrackId ? hasTrack ? "Remover" : "Adicionar" : "Compartilhada"}</small>
            </button>
        `
    }).join("")
}

async function handlePlaylistSubmit(event) {
    event.preventDefault()

    const title = playlistTitleInput.value.trim()

    if (!title) {
        showToast("Digite um nome para a playlist.","warning")
        return
    }

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para criar uma playlist compartilhada.","warning")
        return
    }

    setButtonLoading(playlistSubmitButton,true,"Criando...")

    try {
        const queuedTrackIds = pendingPlaylistQueueIds.filter((trackId,index,array) => array.indexOf(trackId) === index)

        if (cloudMode) {
            const playlist = await cloud.createPlaylist(title)

            if (pendingPlaylistTrackId) await cloud.addTrackToPlaylist(playlist.id,pendingPlaylistTrackId)

            for (const trackId of queuedTrackIds) {
                await cloud.addTrackToPlaylist(playlist.id,trackId)
            }

            await loadCloudApplicationData()
        } else {
            playlists.unshift({
                id:createId("playlist"),
                title,
                description:"",
                trackIds:pendingPlaylistTrackId ? [pendingPlaylistTrackId] : queuedTrackIds
            })
            renderApplicationData()
        }

        const createdFromQueue = queuedTrackIds.length > 0

        playlistForm.reset()
        pendingPlaylistQueueIds = []
        renderPlaylistPicker()
        showToast(pendingPlaylistTrackId
            ? "Playlist criada com a música atual."
            : createdFromQueue
                ? "Fila salva como playlist."
                : "Playlist criada para vocês.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível criar a playlist."),"warning")
    } finally {
        setButtonLoading(playlistSubmitButton,false)
    }
}

async function toggleTrackInPlaylist(playlistId) {
    if (!pendingPlaylistTrackId) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para alterar uma playlist compartilhada.","warning")
        return
    }

    const playlist = playlists.find(item => item.id === playlistId)

    if (!playlist) return

    const hasTrack = playlist.trackIds.includes(pendingPlaylistTrackId)

    try {
        if (cloudMode) {
            if (hasTrack) {
                await cloud.removeTrackFromPlaylist(playlistId,pendingPlaylistTrackId)
            } else {
                await cloud.addTrackToPlaylist(playlistId,pendingPlaylistTrackId)
            }

            await loadCloudApplicationData()
        } else if (hasTrack) {
            playlist.trackIds = playlist.trackIds.filter(trackId => trackId !== pendingPlaylistTrackId)
        } else {
            playlist.trackIds.push(pendingPlaylistTrackId)
        }

        renderApplicationData()
        showToast(hasTrack ? "Música removida da playlist." : "Música adicionada à playlist.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível alterar a playlist."),"warning")
    }
}

createPlaylistButton?.addEventListener("click",() => openPlaylistModal(""))
playlistForm?.addEventListener("submit",handlePlaylistSubmit)

playlistPicker?.addEventListener("click",event => {
    const button = event.target.closest("[data-toggle-playlist-track]")

    if (!button) return

    toggleTrackInPlaylist(button.dataset.togglePlaylistTrack)
})

// jam
function generateJamCode() {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    let code = ""

    for (let index = 0; index < 6; index += 1) {
        code += characters[Math.floor(Math.random() * characters.length)]
    }

    return code
}

function updateJamInterface() {
    const availableJam = Boolean(jamSession?.active)
    const jamOffline = cloudMode && (!cloudReady || !navigator.onLine)

    updatePlaybackModeInterface()
    renderQueue()

    jamRoom.classList.toggle("active",jamActive)
    copyJamCodeButton.hidden = !availableJam || jamOffline
    createJamButton.disabled = jamOffline

    if (jamActive) {
        jamRoomTitle.textContent = "Vocês estão na mesma batida."
        jamRoomDescription.textContent = cloudMode
            ? `Jam ${jamInviteCode}. Reproduzir, pausar, trocar ou avançar atualiza os dois aparelhos.`
            : `Convite ${jamInviteCode}. Esta Jam é apenas uma demonstração local.`
        createJamButton.innerHTML = '<svg aria-hidden="true"><use href="#icon-close"></use></svg><span>Encerrar Jam</span>'
        return
    }

    if (availableJam) {
        jamRoomTitle.textContent = "Uma Jam está esperando por você."
        jamRoomDescription.textContent = `Sala ${jamSession.invite_code}. Entre para acompanhar a música no mesmo instante.`
        createJamButton.innerHTML = '<svg aria-hidden="true"><use href="#icon-users"></use></svg><span>Entrar na Jam</span>'
        return
    }

    if (jamOffline) {
        jamRoomTitle.textContent = "A Jam precisa de internet."
        jamRoomDescription.textContent = "As músicas baixadas continuam funcionando offline. Reconecte-se para sincronizar os dois aparelhos."
        createJamButton.innerHTML = '<svg aria-hidden="true"><use href="#icon-users"></use></svg><span>Jam indisponível</span>'
        return
    }

    jamRoomTitle.textContent = "Criem uma Jam para dois."
    jamRoomDescription.textContent = "A música começa nos dois aparelhos e os controles permanecem sincronizados."
    createJamButton.innerHTML = '<svg aria-hidden="true"><use href="#icon-users"></use></svg><span>Criar uma Jam</span>'
}

function startJamSynchronization() {
    if (!cloudMode || !jamSession?.id) return

    cloud.subscribeJam(jamSession.id,handleRemoteJamState)
    clearInterval(jamSyncInterval)
    jamSyncInterval = setInterval(correctJamDrift,4000)
}

function stopJamSynchronization() {
    cloud?.unsubscribeJam()
    clearInterval(jamSyncInterval)
    jamSyncInterval = null
}

function deactivateLocalJam() {
    stopJamSynchronization()
    jamActive = false
    jamSession = null
    jamInviteCode = ""
    updateJamInterface()
}

async function publishJamState() {
    if (!cloudMode || !cloudReady || !navigator.onLine || !jamActive || !jamSession?.id || applyingRemoteJamState) return

    const track = getCurrentTrack()

    try {
        jamSession = await cloud.setJamState(
            jamSession.id,
            track?.id || null,
            isPlaying,
            Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0
        )
    } catch (error) {
        showToast("A Jam perdeu a conexão. Tentando recuperar...","warning")
    }
}

function waitForAudioMetadata() {
    if (audioPlayer.readyState >= 1) return Promise.resolve()

    return new Promise(resolve => {
        const timeout = setTimeout(resolve,3500)

        audioPlayer.addEventListener("loadedmetadata",() => {
            clearTimeout(timeout)
            resolve()
        },{once:true})
    })
}

async function applyRemoteJamState(remoteJam,options = {}) {
    if (!jamActive || !remoteJam?.active) return

    applyingRemoteJamState = true
    jamSession = remoteJam
    jamInviteCode = remoteJam.invite_code || jamInviteCode

    try {
        const remoteTrack = tracks.find(track => track.id === remoteJam.current_track_id)

        if (remoteTrack && remoteTrack.id !== currentTrackId) {
            await selectTrack(remoteTrack.id,false,{syncJam:false})
        }

        const track = getCurrentTrack()

        if (!track || track.id !== remoteJam.current_track_id || !prepareAudioTrack(track)) {
            updateJamInterface()
            return
        }

        await waitForAudioMetadata()

        const expectedPosition = cloud.getExpectedJamPosition(remoteJam)
        const safePosition = Number.isFinite(audioPlayer.duration)
            ? Math.min(expectedPosition,Math.max(0,audioPlayer.duration - 0.1))
            : expectedPosition

        if (Math.abs(audioPlayer.currentTime - safePosition) > 0.35) audioPlayer.currentTime = safePosition

        if (remoteJam.is_playing) {
            await playTrack({syncJam:false,silent:options.silent})
        } else {
            pauseTrack({syncJam:false})
        }
    } finally {
        applyingRemoteJamState = false
        updateJamInterface()
    }
}

async function handleRemoteJamState(remoteJam) {
    if (!remoteJam?.active) {
        pauseTrack({syncJam:false})
        deactivateLocalJam()
        showToast("A outra pessoa encerrou a Jam.")
        return
    }

    jamSession = remoteJam

    if (remoteJam.updated_by === cloud.getUserId()) return

    await applyRemoteJamState(remoteJam)
}

function correctJamDrift() {
    if (!cloudMode || !jamActive || !jamSession?.is_playing || !isPlaying) return

    const expectedPosition = cloud.getExpectedJamPosition(jamSession)
    const drift = expectedPosition - audioPlayer.currentTime

    if (Math.abs(drift) > 0.7) audioPlayer.currentTime = expectedPosition
}

async function toggleJam() {
    if (!cloudMode) {
        jamActive = !jamActive
        jamInviteCode = jamActive ? generateJamCode() : ""
        jamSession = jamActive ? {active:true,invite_code:jamInviteCode} : null
        updateJamInterface()
        showToast(jamActive ? "Jam de demonstração criada." : "Jam encerrada.",jamActive ? "warning" : "success")
        return
    }

    if (!cloudReady || !navigator.onLine) {
        showToast("A Jam precisa de internet para manter os dois aparelhos sincronizados.","warning")
        return
    }

    setButtonLoading(createJamButton,true,jamActive ? "Encerrando..." : "Conectando...")

    try {
        if (jamActive) {
            await cloud.endJam(jamSession.id)
            pauseTrack({syncJam:false})
            deactivateLocalJam()
            showToast("Jam encerrada nos dois aparelhos.")
            return
        }

        jamSession = await cloud.getOrCreateJam(
            currentTrackId || null,
            isPlaying,
            Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0
        )
        jamActive = true
        jamInviteCode = jamSession.invite_code
        await cloud.synchronizeServerClock()
        startJamSynchronization()
        updateJamInterface()
        await applyRemoteJamState(jamSession,{silent:false})
        showToast("Jam conectada. Os controles agora valem para os dois.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível abrir a Jam."),"warning")
    } finally {
        setButtonLoading(createJamButton,false)
        updateJamInterface()
    }
}

async function copyJamInvite() {
    if (!jamInviteCode) return

    const invitation = `Abra o Dois Tons e entre na nossa Jam ${jamInviteCode}`

    if (navigator.share) {
        try {
            await navigator.share({title:"Jam no Dois Tons",text:invitation,url:window.location.href})
            return
        } catch (error) {
            if (error.name === "AbortError") return
        }
    }

    try {
        await navigator.clipboard.writeText(`${invitation} — ${window.location.href}`)
        showToast("Convite copiado.")
    } catch (error) {
        showToast(`Código da Jam: ${jamInviteCode}`)
    }
}

createJamButton?.addEventListener("click",toggleJam)
copyJamCodeButton?.addEventListener("click",copyJamInvite)

document.addEventListener("visibilitychange",async () => {
    if (document.visibilityState !== "visible") {
        savePlaybackState()
        updateMediaSessionPosition(true)
        return
    }

    await refreshAfterForeground()

    if (!cloudMode || !jamActive || !jamSession?.id) return

    try {
        await cloud.synchronizeServerClock()
        const freshJam = await cloud.getJam(jamSession.id)

        if (freshJam) await applyRemoteJamState(freshJam,{silent:true})
    } catch (error) {
        return
    }
})

// instalacao
function isStandaloneMode() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true
}

async function handleInstallApplication() {
    closeModal("profile")
    updateRuntimeInterface()

    if (isStandaloneMode()) {
        showToast("O Dois Tons já está instalado neste aparelho.")
        return
    }

    if (!deferredInstallPrompt || getRuntimePlatform().iOS) {
        openModal("install")
        return
    }

    deferredInstallPrompt.prompt()
    await deferredInstallPrompt.userChoice
    deferredInstallPrompt = null
    updateRuntimeInterface()
}

window.addEventListener("beforeinstallprompt",event => {
    event.preventDefault()
    deferredInstallPrompt = event
    updateRuntimeInterface()
})

window.addEventListener("appinstalled",() => {
    deferredInstallPrompt = null
    updateRuntimeInterface()
    showToast("Dois Tons instalado neste dispositivo.")
})

installAppButton?.addEventListener("click",handleInstallApplication)
downloadsOptionButton?.addEventListener("click",openDownloadsLibrary)
themeToggleButton?.addEventListener("click",toggleTheme)
logoutButton?.addEventListener("click",closeApplication)

// controles do sistema
function seekSystemPlayback(offset) {
    if (!Number.isFinite(audioPlayer.duration)) return

    const nextPosition = Math.min(
        Math.max((Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0) + offset,0),
        audioPlayer.duration
    )

    audioPlayer.currentTime = nextPosition
    updateProgressInterface()
    updateMediaSessionPosition(true)
    schedulePlaybackStateSave()
    publishJamState()
}

function configureMediaSessionActions() {
    if (!("mediaSession" in navigator)) return

    const actions = {
        play:() => playTrack({silent:true}),
        pause:pauseTrack,
        stop:() => {
            pauseTrack()
            audioPlayer.currentTime = 0
            updateProgressInterface()
            updateMediaSessionPosition(true)
        },
        previoustrack:() => changeTrack(-1),
        nexttrack:() => changeTrack(1),
        seekbackward:details => seekSystemPlayback(-Math.max(1,Number(details.seekOffset) || 10)),
        seekforward:details => seekSystemPlayback(Math.max(1,Number(details.seekOffset) || 10)),
        seekto:details => {
            if (!Number.isFinite(details.seekTime) || !Number.isFinite(audioPlayer.duration)) return

            if (details.fastSeek && typeof audioPlayer.fastSeek === "function") {
                audioPlayer.fastSeek(Math.min(Math.max(details.seekTime,0),audioPlayer.duration))
            } else {
                audioPlayer.currentTime = Math.min(Math.max(details.seekTime,0),audioPlayer.duration)
            }

            updateProgressInterface()
            updateMediaSessionPosition(true)
            schedulePlaybackStateSave()
            publishJamState()
        }
    }

    Object.entries(actions).forEach(([action,handler]) => {
        try {
            navigator.mediaSession.setActionHandler(action,handler)
        } catch (error) {
            return
        }
    })
}

function handleServiceWorkerControllerChange() {
    if (serviceWorkerReloading) return

    if (isPlaying) {
        pendingServiceWorkerReload = true
        showToast("Uma atualização do Dois Tons foi instalada. Ela será aplicada quando você reabrir o app.")
        return
    }

    serviceWorkerReloading = true
    window.location.reload()
}

async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return
    if (!window.location.protocol.startsWith("http")) return

    const hadController = Boolean(navigator.serviceWorker.controller)

    try {
        serviceWorkerRegistration = await navigator.serviceWorker.register("service-worker.js")

        if (hadController) navigator.serviceWorker.addEventListener("controllerchange",handleServiceWorkerControllerChange)

        serviceWorkerRegistration.addEventListener("updatefound",() => {
            const installingWorker = serviceWorkerRegistration.installing

            if (!installingWorker) return

            installingWorker.addEventListener("statechange",() => {
                if (installingWorker.state !== "installed" || !navigator.serviceWorker.controller) return

                if (isPlaying) {
                    pendingServiceWorkerReload = true
                    showToast("Nova versão pronta. Reabra o Dois Tons após terminar de ouvir para atualizar.")
                }
            })
        })

        serviceWorkerRegistration.update().catch(() => {})
    } catch (error) {
        showToast("A instalação offline será ativada quando o projeto estiver hospedado.","warning")
    }
}

async function restoreCloudConnection() {
    if (!cloudMode || cloudReady || !navigator.onLine) return

    try {
        await cloud.initialize()
        cloudReady = true

        const restoredProfile = await cloud.restoreProfile()

        if (restoredProfile) {
            currentProfile = restoredProfile
            saveOfflineProfile(restoredProfile)
            await loadCloudApplicationData()
            configureCloudSubscriptions()
            showToast("Conexão restaurada. A biblioteca voltou a sincronizar.")
        } else {
            cloudReady = false
            showToast("A internet voltou, mas esta sessão precisa entrar novamente na sala para sincronizar.","warning")
        }
    } catch (error) {
        cloudReady = false
    }

    updateConnectionInterface()
    renderApplicationData()
    updatePlayerInterface()
}

window.addEventListener("online",async () => {
    updateConnectionInterface()

    if (cloudMode && !cloudReady) {
        await restoreCloudConnection()
        return
    }

    if (cloudMode && currentProfile) scheduleCloudRefresh()

    renderApplicationData()
    updatePlayerInterface()
})

window.addEventListener("offline",() => {
    if (jamActive) {
        stopJamSynchronization()
        jamActive = false
        jamSession = null
        jamInviteCode = ""
    }

    updateConnectionInterface()
    normalizePlaybackQueue()
    renderApplicationData()
    updatePlayerInterface()
    updateJamInterface()
})
window.addEventListener("pageshow",() => refreshAfterForeground())
window.addEventListener("focus",() => refreshAfterForeground())
window.addEventListener("pagehide",() => {
    savePlaybackState()
    updateMediaSessionPosition(true)
})
window.addEventListener("unload",releaseOfflineObjectUrls)

// inicializacao
async function initializeOfflineMode() {
    if (!offline) return false

    try {
        const result = await offline.initialize()

        offlineReady = Boolean(result?.supported)
        return offlineReady
    } catch (error) {
        offlineReady = false
        return false
    }
}

async function initializeCloudMode() {
    cloudMode = Boolean(cloud?.isConfigured())

    if (!cloudMode) {
        accessNote.textContent = "Modo de demonstração: os dados ficam somente neste aparelho até você preencher a configuração do Supabase."
        uploadInformation.textContent = "No modo de demonstração, o arquivo fica disponível somente enquanto o aplicativo estiver aberto."
        updateConnectionInterface()
        return false
    }

    accessNote.textContent = "Conectando à sala privada..."

    if (!navigator.onLine) {
        cloudReady = false
        accessNote.textContent = "Sem internet. Se este aparelho já tiver downloads, o modo offline será aberto automaticamente."
        updateConnectionInterface()
        return false
    }

    try {
        await cloud.initialize()
        cloudReady = true
        accessNote.textContent = "O código é verificado com segurança e nunca fica salvo neste aparelho."
        uploadInformation.textContent = "O áudio e a capa serão salvos no espaço privado e aparecerão nos dois aparelhos."
        updateConnectionInterface()

        return true
    } catch (error) {
        cloudReady = false
        accessNote.textContent = getErrorMessage(error,"Não foi possível conectar ao Supabase. Confira as chaves públicas.")
        updateConnectionInterface()

        return false
    }
}

async function initializeApp() {
    updateRuntimeInterface()
    configureSheetGestures()
    configureMediaSessionActions()
    registerServiceWorker()
    updateJamInterface()
    updatePlaybackModeInterface()
    renderCatalogQueue()

    await initializeOfflineMode()

    const hasCloud = await initializeCloudMode()
    const explicitlyLoggedOut = localStorage.getItem(logoutStorageKey) === "true"

    if (hasCloud && !explicitlyLoggedOut) {
        try {
            const restoredProfile = await cloud.restoreProfile()

            if (restoredProfile) {
                openApplication(restoredProfile)
                await loadCloudApplicationData()
                configureCloudSubscriptions()
                return
            }
        } catch (error) {
            accessNote.textContent = "Sua sessão expirou. Digite novamente o nome e o código da sala."
        }
    }

    if (cloudMode && !hasCloud && !explicitlyLoggedOut && offlineReady) {
        const offlineProfile = loadOfflineProfile()

        if (offlineProfile) {
            openApplication(offlineProfile)
            await loadOfflineApplicationData()
            showToast("Modo offline: as músicas baixadas continuam disponíveis.","warning")
            return
        }
    }

    if (!cloudMode && !explicitlyLoggedOut) {
        const savedProfile = loadPreviewProfile()

        if (savedProfile) {
            openApplication(savedProfile)
            return
        }
    }

    accessScreen.hidden = false
    appShell.hidden = true
}

document.addEventListener("DOMContentLoaded",initializeApp)
