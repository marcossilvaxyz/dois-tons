// interface
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
const activityButton = document.getElementById("activity-button")
const activityBadge = document.getElementById("activity-badge")
const activityModal = document.getElementById("activity-modal")
const activityList = document.getElementById("activity-list")
const activityFilterButtons = document.querySelectorAll("[data-activity-filter]")
const activityMarkAllButton = document.getElementById("activity-mark-all")
const activityProfileOptionButton = document.getElementById("activity-profile-option-button")
const activityProfileDescription = document.getElementById("activity-profile-description")
const dedicationPreviewList = document.getElementById("dedication-preview-list")
const openDedicationsButton = document.getElementById("open-dedications")
const dedicationModal = document.getElementById("dedication-modal")
const dedicationList = document.getElementById("dedication-list")
const dedicationFilterButtons = document.querySelectorAll("[data-dedication-filter]")
const dedicationMarkAllButton = document.getElementById("dedication-mark-all")
const dedicationProfileOptionButton = document.getElementById("dedication-profile-option-button")
const dedicationProfileDescription = document.getElementById("dedication-profile-description")
const dedicationComposeModal = document.getElementById("dedication-compose-modal")
const dedicationComposePreview = document.getElementById("dedication-compose-preview")
const dedicationRecipient = document.getElementById("dedication-recipient")
const dedicationForm = document.getElementById("dedication-form")
const dedicationMessageInput = document.getElementById("dedication-message")
const dedicationMessageError = document.getElementById("dedication-message-error")
const dedicationCharacterCount = document.getElementById("dedication-character-count")
const dedicationSubmitButton = document.getElementById("dedication-submit-button")
const navigationButtons = document.querySelectorAll("[data-navigation]")
const appViews = document.querySelectorAll(".app-view")
const openViewButtons = document.querySelectorAll("[data-open-view]")
const openUploadButtons = document.querySelectorAll("[data-open-upload]")
const openCatalogButtons = document.querySelectorAll("[data-open-catalog]")
const favoritesGrid = document.getElementById("favorites-grid")
const sharedTrackList = document.getElementById("shared-track-list")
const recentlyPlayedList = document.getElementById("recently-played-list")
const listeningTotalTime = document.getElementById("listening-total-time")
const listeningPersonalTime = document.getElementById("listening-personal-time")
const listeningTotalPlays = document.getElementById("listening-total-plays")
const listeningPersonalPlays = document.getElementById("listening-personal-plays")
const listeningTopTrack = document.getElementById("listening-top-track")
const listeningTopTrackDetail = document.getElementById("listening-top-track-detail")
const listeningTopArtist = document.getElementById("listening-top-artist")
const listeningTopArtistDetail = document.getElementById("listening-top-artist-detail")
const openListeningHistoryButton = document.getElementById("open-listening-history")
const openRecentHistoryButton = document.getElementById("open-recent-history")
const smartMixGrid = document.getElementById("smart-mix-grid")
const smartMixModal = document.getElementById("smart-mix-modal")
const smartMixModalKicker = document.getElementById("smart-mix-modal-kicker")
const smartMixModalTitle = document.getElementById("smart-mix-modal-title")
const smartMixModalDescription = document.getElementById("smart-mix-modal-description")
const smartMixModalMeta = document.getElementById("smart-mix-modal-meta")
const smartMixTrackList = document.getElementById("smart-mix-track-list")
const smartMixPlayButton = document.getElementById("smart-mix-play-button")
const smartMixSaveButton = document.getElementById("smart-mix-save-button")
const openMusicalProfileButton = document.getElementById("open-musical-profile")
const openMusicalProfileCard = document.getElementById("open-musical-profile-card")
const musicalProfileOptionButton = document.getElementById("musical-profile-option-button")
const musicalProfileOptionDescription = document.getElementById("musical-profile-option-description")
const musicalCompatibilityRing = document.getElementById("musical-compatibility-ring")
const musicalCompatibilityValue = document.getElementById("musical-compatibility-value")
const musicalProfileHeadline = document.getElementById("musical-profile-headline")
const musicalProfileSummary = document.getElementById("musical-profile-summary")
const musicalCommonArtist = document.getElementById("musical-common-artist")
const musicalCommonTrack = document.getElementById("musical-common-track")
const musicalProfileModal = document.getElementById("musical-profile-modal")
const musicalProfileModalRing = document.getElementById("musical-profile-modal-ring")
const musicalProfileModalScore = document.getElementById("musical-profile-modal-score")
const musicalProfileModalHeadline = document.getElementById("musical-profile-modal-headline")
const musicalProfileModalDescription = document.getElementById("musical-profile-modal-description")
const musicalCommonArtists = document.getElementById("musical-common-artists")
const musicalCommonTracks = document.getElementById("musical-common-tracks")
const musicalMeLabel = document.getElementById("musical-me-label")
const musicalPartnerLabel = document.getElementById("musical-partner-label")
const musicalMeTracks = document.getElementById("musical-me-tracks")
const musicalPartnerTracks = document.getElementById("musical-partner-tracks")
const musicalEvolutionPartnerLabel = document.getElementById("musical-evolution-partner-label")
const musicalEvolutionChart = document.getElementById("musical-evolution-chart")
const musicalRetrospectiveKicker = document.getElementById("musical-retrospective-kicker")
const musicalRetrospectiveTitle = document.getElementById("musical-retrospective-title")
const musicalYearTime = document.getElementById("musical-year-time")
const musicalYearTrack = document.getElementById("musical-year-track")
const musicalYearArtist = document.getElementById("musical-year-artist")
const musicalYearSharedTrack = document.getElementById("musical-year-shared-track")
const searchInput = document.getElementById("search-input")
const clearSearchButton = document.getElementById("clear-search")
const searchIntroduction = document.getElementById("search-introduction")
const searchResults = document.getElementById("search-results")
const searchModeTabs = document.getElementById("search-mode-tabs")
const searchModeButtons = document.querySelectorAll("[data-search-mode]")
const searchRecentSection = document.getElementById("search-recent-section")
const searchRecentList = document.getElementById("search-recent-list")
const clearRecentSearchesButton = document.getElementById("clear-recent-searches")
const searchDiscoveryTrackList = document.getElementById("search-discovery-track-list")
const searchDiscoveryArtistGrid = document.getElementById("search-discovery-artist-grid")
const searchDiscoveryAlbumGrid = document.getElementById("search-discovery-album-grid")
const searchDiscoveryArtistsSection = document.getElementById("search-discovery-artists-section")
const searchDiscoveryAlbumsSection = document.getElementById("search-discovery-albums-section")
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
const activePlaylistMeta = document.getElementById("active-playlist-meta")
const organizePlaylistButton = document.getElementById("organize-playlist-button")
const managePlaylistButton = document.getElementById("manage-playlist-button")
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
const dedicateCurrentTrackButton = document.getElementById("dedicate-current-track")
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
const trackAlbumInput = document.getElementById("track-album")
const uploadMetadataButton = document.getElementById("upload-metadata-button")
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
const trackManagerMetadataButton = document.getElementById("track-manager-metadata-button")
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
const catalogOnlineMetadataInput = document.getElementById("catalog-online-metadata")
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
const playlistDescriptionInput = document.getElementById("playlist-description")
const playlistSubmitButton = document.getElementById("playlist-submit-button")
const playlistManagerModal = document.getElementById("playlist-manager-modal")
const playlistManagerForm = document.getElementById("playlist-manager-form")
const playlistManagerTitleInput = document.getElementById("playlist-manager-title-input")
const playlistManagerDescriptionInput = document.getElementById("playlist-manager-description")
const playlistManagerMeta = document.getElementById("playlist-manager-meta")
const playlistManagerSubmit = document.getElementById("playlist-manager-submit")
const playlistActivityList = document.getElementById("playlist-activity-list")
const deletePlaylistButton = document.getElementById("delete-playlist-button")
const playlistDeleteConfirmation = document.getElementById("playlist-delete-confirmation")
const playlistDeleteCancelButton = document.getElementById("playlist-delete-cancel")
const playlistDeleteConfirmButton = document.getElementById("playlist-delete-confirm")
const profileModal = document.getElementById("profile-modal")
const listeningHistoryModal = document.getElementById("listening-history-modal")
const listeningHistoryList = document.getElementById("listening-history-list")
const historyFilterButtons = document.querySelectorAll("[data-history-filter]")
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

// configuração
const cloud = window.DoisTonsCloud
const offline = window.DoisTonsOffline
const metadata = window.DoisTonsMetadata
const profileStorageKey = "dois-tons-profile"
const accessStorageKey = "dois-tons-preview-access"
const logoutStorageKey = "dois-tons-logged-out"
const themeStorageKey = "dois-tons-theme"
const playbackStorageKey = "dois-tons-playback"
const offlineProfileStorageKey = "dois-tons-offline-profile"
const durationValidationStorageKey = "dois-tons-duration-validation-v1"
const metadataLookupStorageKey = "dois-tons-online-metadata"
const listeningPendingStorageKey = "dois-tons-listening-pending-v1"
const availableCoverClasses = ["cover-rose","cover-sea","cover-sun","cover-plum","cover-forest"]
const metadataLibraryUrl = "https://cdn.jsdelivr.net/npm/jsmediatags@3.9.7/dist/jsmediatags.min.js"
const supportedAudioExtensions = ["mp3","m4a","mp4","aac","wav","ogg","oga","flac"]
const maximumAudioFileSize = 100 * 1024 * 1024
const maximumCoverFileSize = 10 * 1024 * 1024

const demoTracks = [
    {
        id:"exemplo-01",
        title:"Faixa de exemplo 01",
        artist:"Artista de exemplo",
        album:"Álbum de exemplo",
        cover:"cover-rose",
        coverImage:"",
        duration:210,
        favorite:true,
        sharedBy:"Outro perfil",
        tags:["exemplo"],
        source:""
    },
    {
        id:"exemplo-02",
        title:"Faixa de exemplo 02",
        artist:"Artista de exemplo",
        album:"Álbum de exemplo",
        cover:"cover-sea",
        coverImage:"",
        duration:195,
        favorite:false,
        sharedBy:"",
        tags:["exemplo"],
        source:""
    },
    {
        id:"exemplo-03",
        title:"Faixa de exemplo 03",
        artist:"Artista de exemplo",
        album:"Álbum de exemplo",
        cover:"cover-forest",
        coverImage:"",
        duration:230,
        favorite:false,
        sharedBy:"Outro perfil",
        tags:["exemplo"],
        source:""
    }
]

// estado
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
let playlistOrganizing = false
let playlistDragState = null
let playlistManagerPlaylistId = ""
let playlistActivity = []
let activityNotifications = []
let activityFilter = "all"
let activityRefreshTimeout = null
let musicDedications = []
let dedicationFilter = "received"
let dedicationRefreshTimeout = null
let dedicationComposeTrackId = ""
let listeningHistory = []
let listeningHistoryFilter = "all"
let listeningSession = null
let listeningProgressInterval = null
let listeningHistoryRefreshTimeout = null
let listeningSyncingPending = false
let listeningPersistingSessions = new Set()
let activeSmartMixKey = ""
let activeSearchMode = "all"
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
let selectedOnlineCoverFile = null
let selectedOnlineCoverPreviewUrl = ""
let managedTrackId = ""
let managedCoverRemoved = false
let managedCoverPreviewUrl = ""
let managedMetadataCoverFile = null
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
let mediaSessionActionsConfigured = false
let lastForegroundRefresh = 0
let durationValidationCache = null
let durationValidationPromises = new Map()
let validatedDurationTrackIds = new Set()
let catalogEndHandledTrackId = ""
let audioRecoveryInProgress = false

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
    showToast(nextTheme === "dark" ? "Tema escuro ativado." : "Tema claro ativado.")
}

applyTheme(getStoredTheme(),{persist:false})
configurePlaybackAudioSession()

// iOS e instalação
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

    configurePlaybackAudioSession()
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

function configurePlaybackAudioSession() {
    if (!getRuntimePlatform().iOS) return
    if (!("audioSession" in navigator) || !navigator.audioSession) return

    try {
        if (navigator.audioSession.type !== "playback") navigator.audioSession.type = "playback"
    } catch (error) {
        return
    }
}

function updateMediaSessionPosition(force = false) {
    if (!("mediaSession" in navigator) || typeof navigator.mediaSession.setPositionState !== "function") return

    const now = Date.now()

    if (!force && now - lastMediaSessionPositionUpdate < 700) return

    const duration = getTrackPlaybackDuration()
    const position = Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0

    if (!Number.isFinite(duration) || duration <= 0) return

    try {
        navigator.mediaSession.setPositionState({
            duration,
            playbackRate:Number.isFinite(audioPlayer.playbackRate) && audioPlayer.playbackRate > 0 ? audioPlayer.playbackRate : 1,
            position:Math.min(Math.max(position,0),Math.max(0,duration - 0.001))
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

// utilitários
function escapeHTML(value) {
    const temporaryElement = document.createElement("div")
    temporaryElement.textContent = String(value ?? "")

    return temporaryElement.innerHTML
}

function escapeAttribute(value) {
    return escapeHTML(value)
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#39;")
        .replaceAll("`","&#96;")
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00"

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2,"0")

    return `${minutes}:${remainingSeconds}`
}

function formatPlaylistDate(value) {
    if (!value) return ""

    const date = new Date(value)

    if (Number.isNaN(date.getTime())) return ""

    return new Intl.DateTimeFormat("pt-BR",{
        day:"2-digit",
        month:"short",
        year:date.getFullYear() === new Date().getFullYear() ? undefined : "numeric"
    }).format(date).replace(" de "," ")
}

function getPlaylistItem(playlist,trackId) {
    return Array.isArray(playlist?.items)
        ? playlist.items.find(item => item.trackId === trackId || item.track_id === trackId) || null
        : null
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
        .replace(/[^\p{L}\p{N}]+/gu," ")
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

// downloads
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
        createdBy:playlist.created_by || playlist.createdBy || "",
        createdByName:playlist.createdByName || "",
        createdAt:playlist.created_at || playlist.createdAt || "",
        updatedAt:playlist.updated_at || playlist.updatedAt || "",
        items:Array.isArray(playlist.items) ? playlist.items : [],
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
        const query = String(context.query || "").trim()

        return query ? getRankedSearchTracks(query) : tracks
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
    if (element.closest("#smart-mix-track-list")) {
        const mix = getSmartMixByKey()

        return {
            type:"collection",
            label:mix?.title || "Mix do Dois Tons",
            trackIds:mix?.tracks.map(track => track.id) || []
        }
    }

    if (element.closest("#recently-played-list") || element.closest("#listening-history-list")) {
        return {
            type:"collection",
            label:"Tocadas recentemente",
            trackIds:getRecentlyPlayedTracks().map(track => track.id)
        }
    }

    if (element.closest("#search-discovery-track-list")) {
        return {
            type:"collection",
            label:"Sugestões",
            trackIds:getSearchDiscoveryTracks().map(track => track.id)
        }
    }

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
                const duration = getTrackPlaybackDuration(track)
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

function escapeCSSUrl(value) {
    return String(value || "")
        .replaceAll("\\","\\\\")
        .replaceAll("'","\\'")
        .replace(/[\r\n\f]/g,"")
}

function getCoverStyle(track) {
    if (!track.coverImage) return ""

    return `style="background-image:url('${escapeAttribute(escapeCSSUrl(track.coverImage))}');background-position:center;background-size:cover"`
}

function normalizeSearchText(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"")
        .toLocaleLowerCase("pt-BR")
        .replace(/[^\p{L}\p{N}]+/gu," ")
        .trim()
}

function getTrackSearchText(track) {
    const tags = Array.isArray(track?.tags) ? track.tags : []

    return normalizeSearchText([track?.title,track?.artist,track?.album,...tags].join(" "))
}

function getSearchTokens(query) {
    return normalizeSearchText(query).split(/\s+/).filter(Boolean)
}

function getSearchWordDistance(first,second) {
    if (first === second) return 0
    if (!first.length) return second.length
    if (!second.length) return first.length
    if (Math.abs(first.length - second.length) > 1) return 2

    let previous = Array.from({length:second.length + 1},(_,index) => index)

    for (let firstIndex = 1; firstIndex <= first.length; firstIndex += 1) {
        const current = [firstIndex]
        let rowMinimum = current[0]

        for (let secondIndex = 1; secondIndex <= second.length; secondIndex += 1) {
            const substitution = previous[secondIndex - 1] + (first[firstIndex - 1] === second[secondIndex - 1] ? 0 : 1)
            const insertion = current[secondIndex - 1] + 1
            const deletion = previous[secondIndex] + 1
            const value = Math.min(substitution,insertion,deletion)

            current.push(value)
            rowMinimum = Math.min(rowMinimum,value)
        }

        if (rowMinimum > 1) return 2
        previous = current
    }

    return previous[second.length]
}

function getSearchTextScore(value,query) {
    const normalizedValue = normalizeSearchText(value)
    const normalizedQuery = normalizeSearchText(query)
    const tokens = getSearchTokens(query)

    if (!normalizedValue || !normalizedQuery || !tokens.length) return 0

    let score = 0

    if (normalizedValue === normalizedQuery) score += 1200
    else if (normalizedValue.startsWith(normalizedQuery)) score += 850
    else if (normalizedValue.includes(normalizedQuery)) score += 620

    const words = normalizedValue.split(/\s+/).filter(Boolean)

    for (const token of tokens) {
        let tokenScore = 0

        if (words.includes(token)) tokenScore = 150
        else if (words.some(word => word.startsWith(token))) tokenScore = 110
        else if (normalizedValue.includes(token)) tokenScore = 80
        else if (token.length >= 4 && words.some(word => Math.abs(word.length - token.length) <= 1 && getSearchWordDistance(word,token) <= 1)) tokenScore = 45

        if (!tokenScore) return 0
        score += tokenScore
    }

    return score
}

function getTrackSearchScore(track,query) {
    const tags = Array.isArray(track?.tags) ? track.tags.join(" ") : ""
    const combined = [track?.title,track?.artist,track?.album,tags].join(" ")
    const combinedScore = getSearchTextScore(combined,query)

    if (!combinedScore) return 0

    return combinedScore
        + getSearchTextScore(track?.title,query) * 3
        + getSearchTextScore(track?.artist,query) * 2
        + getSearchTextScore(track?.album,query)
}

function getRankedSearchTracks(query,limit = 0) {
    const ranked = tracks
        .map((track,index) => ({track,index,score:getTrackSearchScore(track,query)}))
        .filter(item => item.score > 0)
        .sort((first,second) => second.score - first.score || first.index - second.index)
        .map(item => item.track)

    return limit > 0 ? ranked.slice(0,limit) : ranked
}

function getSearchEntityScore(label,details,query) {
    const labelScore = getSearchTextScore(label,query)
    const detailsScore = getSearchTextScore(details,query)

    return labelScore * 3 + detailsScore
}

function getRankedSearchArtists(query,limit = 0) {
    const ranked = getArtistGroups()
        .map(group => ({
            group,
            score:getSearchEntityScore(group.artist,group.tracks.map(track => `${track.title} ${track.album}`).join(" "),query)
        }))
        .filter(item => item.score > 0)
        .sort((first,second) => second.score - first.score || first.group.artist.localeCompare(second.group.artist,"pt-BR",{sensitivity:"base"}))
        .map(item => item.group)

    return limit > 0 ? ranked.slice(0,limit) : ranked
}

function getRankedSearchAlbums(query,limit = 0) {
    const ranked = getAlbumGroups()
        .map(group => ({
            group,
            score:getSearchEntityScore(group.album,`${group.artist} ${group.tracks.map(track => track.title).join(" ")}`,query)
        }))
        .filter(item => item.score > 0)
        .sort((first,second) => second.score - first.score || first.group.album.localeCompare(second.group.album,"pt-BR",{sensitivity:"base"}))
        .map(item => item.group)

    return limit > 0 ? ranked.slice(0,limit) : ranked
}

function getRankedSearchPlaylists(query,limit = 0) {
    const ranked = playlists
        .map((playlist,index) => ({
            playlist,
            index,
            score:getSearchEntityScore(
                playlist.title,
                `${playlist.description || ""} ${playlist.trackIds.map(trackId => tracks.find(track => track.id === trackId)).filter(Boolean).map(track => `${track.title} ${track.artist}`).join(" ")}`,
                query
            )
        }))
        .filter(item => item.score > 0)
        .sort((first,second) => second.score - first.score || first.index - second.index)
        .map(item => item.playlist)

    return limit > 0 ? ranked.slice(0,limit) : ranked
}

const recentSearchStorageKey = "dois-tons-recent-searches-v1"

function getRecentSearches() {
    try {
        const saved = JSON.parse(localStorage.getItem(recentSearchStorageKey) || "[]")

        return Array.isArray(saved) ? saved.filter(Boolean).slice(0,6) : []
    } catch {
        return []
    }
}

function saveRecentSearch(query) {
    const value = String(query || "").trim()

    if (value.length < 2) return

    const normalized = normalizeSearchText(value)
    const searches = getRecentSearches().filter(item => normalizeSearchText(item) !== normalized)

    searches.unshift(value)
    localStorage.setItem(recentSearchStorageKey,JSON.stringify(searches.slice(0,6)))
    renderSearchLanding()
}

function clearRecentSearches() {
    localStorage.removeItem(recentSearchStorageKey)
    renderSearchLanding()
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
            : "Modo local neste aparelho"
    }
}

// acesso
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

    if (hour < 12) return "Bom dia."
    if (hour < 18) return "Boa tarde."

    return "Boa noite."
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

    const partnerLabel = partner?.display_name || "Outro perfil"
    const partnerOwnerOption = libraryOwnerSelect?.querySelector('option[value="partner"]')
    const partnerHistoryButton = [...historyFilterButtons].find(button => button.dataset.historyFilter === "partner")

    if (partnerOwnerOption) partnerOwnerOption.textContent = partnerLabel
    if (partnerHistoryButton) partnerHistoryButton.textContent = partnerLabel

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
    finishListeningSession({completed:false})
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
    activityNotifications = []
    activityFilter = "all"
    musicDedications = []
    dedicationFilter = "received"
    dedicationComposeTrackId = ""
    listeningHistory = []
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
        showToast("Modo local aberto neste aparelho.","warning")
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
            ? "Perfil conectado. Falta só o outro perfil entrar."
            : "Os dois perfis estão conectados.")
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

// sincronização
async function loadCloudApplicationData() {
    if (!cloudMode || !cloudReady || !currentProfile) return

    const previousTrackId = currentTrackId
    const [cloudTracks,cloudPlaylists,members,activeJam,cloudListeningHistory,cloudActivityNotifications,cloudMusicDedications] = await Promise.all([
        cloud.loadTracks(),
        cloud.loadPlaylists(),
        cloud.getMembers(),
        cloud.getActiveJam(),
        cloud.loadListeningHistory().catch(() => []),
        cloud.loadActivityNotifications().catch(() => []),
        cloud.loadMusicDedications().catch(() => [])
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
    listeningHistory = cloudListeningHistory
    activityNotifications = cloudActivityNotifications
    musicDedications = cloudMusicDedications
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

    if (jamActive && jamSession?.active) {
        applyRemoteJamState(jamSession,{silent:true}).catch(() => {})
    }

    syncPendingListeningRecords()
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
    cloud.subscribeListeningHistory(scheduleListeningHistoryRefresh)
    cloud.subscribeActivity(scheduleActivityRefresh)
    cloud.subscribeDedications(scheduleDedicationRefresh)
}

function handleJamAvailabilityChange(remoteJam) {
    if (!remoteJam) return

    if (!remoteJam.active) {
        if (jamSession?.id === remoteJam.id) {
            const wasActive = jamActive

            if (wasActive) pauseTrack({syncJam:false})
            deactivateLocalJam()
            if (wasActive && remoteJam.updated_by !== cloud.getUserId()) {
                showToast("A Jam foi encerrada.")
            }
        }
        return
    }

    jamSession = remoteJam
    jamInviteCode = remoteJam.invite_code || ""
    updateJamInterface()
}

// navegação
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

// renderização
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
    const activePlaylist = activePlaylistId ? playlists.find(playlist => playlist.id === activePlaylistId) : null
    const playlistItem = getPlaylistItem(activePlaylist,track.id)
    const collaboratorLabel = activePlaylist && playlistItem?.addedByName
        ? `<small class="playlist-track-credit">Adicionada por ${escapeHTML(playlistItem.addedByName)}</small>`
        : ""
    const organizerActions = activePlaylist && playlistOrganizing
        ? `
            <span class="track-item-actions playlist-order-actions">
                <button type="button" class="playlist-drag-handle" data-playlist-drag="${escapeAttribute(track.id)}" aria-label="Arrastar ${escapeAttribute(track.title)} para outra posição">
                    <svg aria-hidden="true"><use href="#icon-queue"></use></svg>
                </button>
                <button type="button" class="playlist-order-step" data-playlist-move="up" data-playlist-track="${escapeAttribute(track.id)}" aria-label="Mover ${escapeAttribute(track.title)} para cima">
                    <svg aria-hidden="true"><use href="#icon-up"></use></svg>
                </button>
                <button type="button" class="playlist-order-step" data-playlist-move="down" data-playlist-track="${escapeAttribute(track.id)}" aria-label="Mover ${escapeAttribute(track.title)} para baixo">
                    <svg aria-hidden="true"><use href="#icon-down"></use></svg>
                </button>
                <button type="button" class="playlist-remove-track-button" data-playlist-remove="${escapeAttribute(track.id)}" aria-label="Remover ${escapeAttribute(track.title)} da playlist">
                    <svg aria-hidden="true"><use href="#icon-close"></use></svg>
                </button>
            </span>
        `
        : `
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
        `

    return `
        <div class="track-item-row ${currentClass} ${activePlaylist && playlistOrganizing ? "organizing" : ""}" ${activePlaylist && playlistOrganizing ? `data-playlist-row-track="${escapeAttribute(track.id)}"` : ""}>
            <button type="button" class="track-item ${currentClass}" data-track-id="${escapeAttribute(track.id)}">
                <span class="track-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
                <span class="track-information">
                    <strong>${escapeHTML(track.title)}</strong>
                    <span>${escapeHTML(track.artist)} · ${escapeHTML(track.album)}</span>
                    ${collaboratorLabel}
                </span>
                <span class="track-meta">${offlineLabel}${sharingLabel}</span>
            </button>
            ${organizerActions}
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

// atividades
function getActivityUnreadCount() {
    return activityNotifications.filter(item => !item.read_at && !item.read).length
}

function formatActivityDate(value) {
    if (!value) return ""

    const date = new Date(value)

    if (Number.isNaN(date.getTime())) return ""

    const now = new Date()
    const difference = Math.max(0,now.getTime() - date.getTime())
    const minutes = Math.floor(difference / 60000)

    if (minutes < 1) return "Agora"
    if (minutes < 60) return `${minutes} min atrás`

    const hours = Math.floor(minutes / 60)

    if (hours < 24) return `${hours}h atrás`

    return new Intl.DateTimeFormat("pt-BR",{
        day:"2-digit",
        month:"short",
        hour:"2-digit",
        minute:"2-digit"
    }).format(date).replace(" de "," ")
}

function getActivityPresentation(item) {
    const actor = item.actor_member_id === currentProfile?.memberId ? currentProfile?.name || "Meu perfil" : item.actorName || "Outro perfil"
    const details = item.details && typeof item.details === "object" ? item.details : {}
    const trackTitle = details.track_title || details.title || tracks.find(track => track.id === item.track_id)?.title || "uma música"
    const artist = details.artist || tracks.find(track => track.id === item.track_id)?.artist || ""
    const playlistTitle = details.playlist_title || details.title || playlists.find(playlist => playlist.id === item.playlist_id)?.title || "uma playlist"

    if (item.event_type === "track_added") {
        const count = Math.max(1,Number(details.count || 1))

        return {
            icon:"icon-upload",
            title:count > 1 ? `${actor} adicionou ${count} músicas` : `${actor} adicionou uma música`,
            description:count > 1
                ? `Mais recente: “${trackTitle}”${artist ? ` · ${artist}` : ""}`
                : `“${trackTitle}”${artist ? ` · ${artist}` : ""}`,
            action:"Ouvir"
        }
    }

    if (item.event_type === "track_shared") {
        return {
            icon:"icon-send",
            title:`${actor} compartilhou uma música`,
            description:`“${trackTitle}”${artist ? ` · ${artist}` : ""}`,
            action:"Ouvir"
        }
    }

    if (item.event_type === "playlist_activity") {
        const action = details.action || "updated"
        const messages = {
            created:`${actor} criou uma playlist`,
            updated:`${actor} atualizou uma playlist`,
            track_added:`${actor} adicionou uma música à playlist`,
            track_removed:`${actor} removeu uma música da playlist`,
            track_moved:`${actor} reorganizou uma playlist`
        }
        const description = [playlistTitle,details.track_title].filter(Boolean).join(" · ")

        return {
            icon:"icon-playlist",
            title:messages[action] || `${actor} alterou uma playlist`,
            description,
            action:"Abrir"
        }
    }

    if (item.event_type === "dedication_received") {
        return {
            icon:"icon-heart",
            title:`${actor} enviou uma dedicatória`,
            description:`“${trackTitle}”${details.message_preview ? ` · ${details.message_preview}` : ""}`,
            action:"Ler"
        }
    }

    if (item.event_type === "jam_started") {
        return {
            icon:"icon-users",
            title:`${actor} criou uma Jam`,
            description:details.invite_code ? `Convite ${details.invite_code} · Entre para ouvir junto.` : "Há uma Jam disponível.",
            action:"Entrar"
        }
    }

    if (item.event_type === "jam_ended") {
        return {
            icon:"icon-users",
            title:`${actor} encerrou a Jam`,
            description:"A sessão sincronizada terminou.",
            action:""
        }
    }

    return {
        icon:"icon-bell",
        title:`Nova atividade de ${actor}`,
        description:"Há uma nova atividade.",
        action:""
    }
}

function createActivityItem(item) {
    const presentation = getActivityPresentation(item)
    const unread = !item.read_at && !item.read

    return `
        <article class="activity-item ${unread ? "unread" : ""}" data-activity-id="${escapeAttribute(item.id)}">
            <span class="activity-item-icon"><svg aria-hidden="true"><use href="#${escapeAttribute(presentation.icon)}"></use></svg></span>
            <button type="button" class="activity-item-main" data-open-activity="${escapeAttribute(item.id)}">
                <strong>${escapeHTML(presentation.title)}</strong>
                <span>${escapeHTML(presentation.description)}</span>
                <small>${escapeHTML(formatActivityDate(item.created_at))}</small>
            </button>
            <span class="activity-item-side">
                ${unread ? '<span class="activity-unread-dot" aria-label="Não lida"></span>' : ""}
                ${presentation.action ? `<small>${escapeHTML(presentation.action)}</small>` : ""}
            </span>
        </article>
    `
}

function renderActivityCenter() {
    const unreadCount = getActivityUnreadCount()

    if (activityBadge) {
        activityBadge.hidden = unreadCount === 0
        activityBadge.textContent = unreadCount > 99 ? "99+" : String(unreadCount)
    }

    if (activityButton) {
        activityButton.classList.toggle("has-unread",unreadCount > 0)
        activityButton.setAttribute("aria-label",unreadCount
            ? `Abrir atividades, ${unreadCount} não ${unreadCount === 1 ? "lida" : "lidas"}`
            : "Abrir atividades")
    }

    if (activityProfileDescription) {
        activityProfileDescription.textContent = unreadCount
            ? `${unreadCount} ${unreadCount === 1 ? "atividade nova" : "atividades novas"}`
            : "Nenhuma atividade nova"
    }

    if (activityMarkAllButton) activityMarkAllButton.disabled = unreadCount === 0 || !cloudReady || !navigator.onLine

    activityFilterButtons.forEach(button => {
        const active = button.dataset.activityFilter === activityFilter

        button.classList.toggle("active",active)
        button.setAttribute("aria-selected",String(active))
    })

    if (!activityList) return

    if (!cloudMode) {
        activityList.innerHTML = createEmptyState("Atividades","Conecte ao Supabase para carregar as atividades.","icon-bell")
        return
    }

    if (!navigator.onLine && !activityNotifications.length) {
        activityList.innerHTML = createEmptyState("Sem conexão","Reconecte-se para atualizar as atividades.","icon-cloud")
        return
    }

    const visibleItems = activityFilter === "unread"
        ? activityNotifications.filter(item => !item.read_at && !item.read)
        : activityNotifications

    activityList.innerHTML = visibleItems.length
        ? visibleItems.map(createActivityItem).join("")
        : createEmptyState(
            activityFilter === "unread" ? "Tudo em dia" : "Nenhuma atividade ainda",
            activityFilter === "unread" ? "Não há atividades novas." : "Músicas, dedicatórias, playlists e Jam aparecem aqui quando houver novidade.",
            "icon-bell"
        )
}

async function refreshActivityNotifications({announce = false} = {}) {
    if (!cloudMode || !cloudReady || !navigator.onLine || !currentProfile) return

    const previousIds = new Set(activityNotifications.map(item => item.id))

    try {
        activityNotifications = await cloud.loadActivityNotifications()
        renderActivityCenter()

        if (announce && activityNotifications.some(item => !previousIds.has(item.id) && !item.read_at)) {
            showToast("Nova atividade.")
        }
    } catch (error) {
        return
    }
}

function scheduleActivityRefresh(payload) {
    clearTimeout(activityRefreshTimeout)

    const eventType = payload?.new?.event_type || payload?.record?.event_type || ""
    const inserted = payload?.eventType === "INSERT" || payload?.event === "INSERT"
    const announce = inserted && eventType !== "dedication_received"

    activityRefreshTimeout = setTimeout(() => refreshActivityNotifications({announce}),350)
}

async function markActivityRead(notificationId) {
    const item = activityNotifications.find(entry => entry.id === notificationId)

    if (!item || item.read_at || item.read) return true
    if (!cloudMode || !cloudReady || !navigator.onLine) return false

    try {
        await cloud.markActivityNotifications(notificationId)
        item.read = true
        item.read_at = new Date().toISOString()
        renderActivityCenter()
        return true
    } catch (error) {
        showToast("Não foi possível atualizar esta atividade.","warning")
        return false
    }
}

async function markAllActivitiesRead() {
    if (!getActivityUnreadCount()) return
    if (!cloudMode || !cloudReady || !navigator.onLine) {
        showToast("Conecte-se à internet para marcar as atividades como lidas.","warning")
        return
    }

    try {
        await cloud.markActivityNotifications()
        const readAt = new Date().toISOString()

        activityNotifications.forEach(item => {
            item.read = true
            item.read_at = item.read_at || readAt
        })

        renderActivityCenter()
    } catch (error) {
        showToast("Não foi possível marcar as atividades como lidas.","warning")
    }
}

async function openActivityItem(notificationId) {
    const item = activityNotifications.find(entry => entry.id === notificationId)

    if (!item) return

    await markActivityRead(item.id)
    closeModal("activity")

    if (item.event_type === "dedication_received") {
        const dedicationId = item.details?.dedication_id

        if (dedicationId) await markDedicationRead(dedicationId)

        dedicationFilter = "received"
        renderDedicationCenter()
        openModal("dedication")
        return
    }

    if (item.event_type === "jam_started") {
        openView("jam")
        return
    }

    if (item.playlist_id && playlists.some(playlist => playlist.id === item.playlist_id)) {
        activeLibraryEntity = null
        activeLibraryMode = "playlists"
        activeLibraryFilter = "all"
        activePlaylistId = item.playlist_id
        playlistOrganizing = false
        openView("library")
        renderPlaylists()
        updateLibraryFilters()
        renderLibrary()
        return
    }

    if (item.track_id && tracks.some(track => track.id === item.track_id)) {
        await selectTrack(item.track_id,false,{context:{type:"library",label:"Atividades"}})
        openSheet("player")
    }
}

// dedicatórias
function getDedicationUnreadCount() {
    return musicDedications.filter(item => item.received && !item.read_at && !item.read).length
}

function getDedicationTrack(item) {
    return tracks.find(track => track.id === item.track_id) || null
}

function createDedicationItem(item,{compact = false} = {}) {
    const track = getDedicationTrack(item)
    const received = item.received ?? item.recipient_member_id === currentProfile?.memberId
    const unread = received && !item.read_at && !item.read
    const title = track?.title || item.track_title || "Música removida"
    const artist = track?.artist || item.track_artist || ""
    const album = track?.album || item.track_album || ""
    const personLabel = received
        ? `De ${item.senderName || "outro perfil"}`
        : `Para ${item.recipientName || "outro perfil"} · ${item.read_at || item.read ? "Lida" : "Ainda não lida"}`
    const coverClass = track ? getCoverClass(track,track.coverIndex || 0) : "cover-rose"
    const coverStyle = track ? getCoverStyle(track) : ""

    return `
        <article class="dedication-item ${unread ? "unread" : ""} ${compact ? "compact" : ""}" data-dedication-id="${escapeAttribute(item.id)}">
            <button type="button" class="dedication-item-main" data-open-dedication="${escapeAttribute(item.id)}">
                <span class="dedication-cover ${escapeAttribute(coverClass)} ${track?.coverImage ? "custom-cover" : ""}" ${coverStyle}></span>
                <span class="dedication-copy">
                    <small>${escapeHTML(personLabel)} · ${escapeHTML(formatActivityDate(item.created_at))}</small>
                    <strong>${escapeHTML(title)}</strong>
                    <span>${escapeHTML([artist,album].filter(Boolean).join(" · "))}</span>
                    <q>${escapeHTML(item.message || "")}</q>
                </span>
                ${unread ? '<span class="dedication-unread-dot" aria-label="Não lida"></span>' : ""}
            </button>
        </article>
    `
}

function renderDedicationPreview() {
    if (!dedicationPreviewList) return

    if (!cloudMode) {
        dedicationPreviewList.innerHTML = createEmptyState("Recados musicais","Conecte o Dois Tons ao Supabase para trocar dedicatórias.","icon-heart")
        return
    }

    const received = musicDedications.filter(item => item.received).slice(0,2)

    dedicationPreviewList.innerHTML = received.length
        ? received.map(item => createDedicationItem(item,{compact:true})).join("")
        : createEmptyState("Nenhuma dedicatória ainda","Quando chegar uma música com um recado, ela aparecerá aqui.","icon-heart")
}

function renderDedicationCenter() {
    const unreadCount = getDedicationUnreadCount()

    if (dedicationProfileDescription) {
        dedicationProfileDescription.textContent = unreadCount
            ? `${unreadCount} ${unreadCount === 1 ? "recado novo" : "recados novos"}`
            : "Nenhum recado novo"
    }

    dedicationFilterButtons.forEach(button => {
        const active = button.dataset.dedicationFilter === dedicationFilter

        button.classList.toggle("active",active)
        button.setAttribute("aria-selected",String(active))
    })

    if (dedicationMarkAllButton) {
        dedicationMarkAllButton.hidden = dedicationFilter !== "received"
        dedicationMarkAllButton.disabled = unreadCount === 0 || !cloudReady || !navigator.onLine
    }

    renderDedicationPreview()

    if (!dedicationList) return

    if (!cloudMode) {
        dedicationList.innerHTML = createEmptyState("Dedicatórias compartilhadas","Conecte o Dois Tons ao Supabase para usar esta caixa.","icon-heart")
        return
    }

    const visibleItems = musicDedications.filter(item => dedicationFilter === "sent" ? item.sent : item.received)

    dedicationList.innerHTML = visibleItems.length
        ? visibleItems.map(item => createDedicationItem(item)).join("")
        : createEmptyState(
            dedicationFilter === "sent" ? "Nenhuma dedicatória enviada" : "Nenhuma dedicatória recebida",
            dedicationFilter === "sent" ? "Abra uma música no player e toque em Dedicar." : "Os recados recebidos aparecem aqui.",
            "icon-heart"
        )
}

async function refreshMusicDedications({announce = false} = {}) {
    if (!cloudMode || !cloudReady || !navigator.onLine || !currentProfile) return

    const previousIds = new Set(musicDedications.map(item => item.id))

    try {
        musicDedications = await cloud.loadMusicDedications()
        renderDedicationCenter()

        const newReceived = musicDedications.some(item => item.received && !previousIds.has(item.id) && !item.read_at)

        if (announce && newReceived) showToast("Nova dedicatória recebida.")
    } catch (error) {
        return
    }
}

function scheduleDedicationRefresh(payload) {
    clearTimeout(dedicationRefreshTimeout)

    const announce = payload?.eventType === "INSERT" || payload?.event === "INSERT"

    dedicationRefreshTimeout = setTimeout(() => refreshMusicDedications({announce}),300)
}

async function markDedicationRead(dedicationId) {
    const item = musicDedications.find(entry => entry.id === dedicationId)

    if (!item || !item.received || item.read_at || item.read) return true
    if (!cloudMode || !cloudReady || !navigator.onLine) return false

    try {
        await cloud.markMusicDedications(dedicationId)
        item.read = true
        item.read_at = new Date().toISOString()
        renderDedicationCenter()
        return true
    } catch (error) {
        showToast("Não foi possível marcar o recado como lido.","warning")
        return false
    }
}

async function markAllDedicationsRead() {
    if (!getDedicationUnreadCount()) return

    if (!cloudMode || !cloudReady || !navigator.onLine) {
        showToast("Conecte-se à internet para marcar as dedicatórias como lidas.","warning")
        return
    }

    try {
        await cloud.markMusicDedications()
        const readAt = new Date().toISOString()

        musicDedications.forEach(item => {
            if (!item.received || item.read_at) return

            item.read = true
            item.read_at = readAt
        })

        renderDedicationCenter()
    } catch (error) {
        showToast("Não foi possível atualizar as dedicatórias.","warning")
    }
}

async function openDedicationItem(dedicationId,{keepModal = false} = {}) {
    const item = musicDedications.find(entry => entry.id === dedicationId)

    if (!item) return

    await markDedicationRead(item.id)

    const track = getDedicationTrack(item)

    if (!track) {
        showToast("A música desta dedicatória não está mais na biblioteca.","warning")
        return
    }

    if (!keepModal) closeModal("dedication")

    await selectTrack(track.id,false,{context:{type:"library",label:"Dedicatórias"}})
    openSheet("player")
}

function updateDedicationCharacterCount() {
    if (!dedicationCharacterCount || !dedicationMessageInput) return

    dedicationCharacterCount.textContent = `${dedicationMessageInput.value.length}/500`
}

function resetDedicationCompose() {
    dedicationComposeTrackId = ""

    if (dedicationMessageInput) dedicationMessageInput.value = ""
    if (dedicationMessageError) dedicationMessageError.textContent = ""
    if (dedicationComposePreview) dedicationComposePreview.innerHTML = ""

    updateDedicationCharacterCount()
}

function openDedicationCompose(trackId = currentTrackId) {
    const track = tracks.find(item => item.id === trackId)
    const partner = duoMembers.find(member => member.id !== currentProfile?.memberId)

    if (!track) return

    if (!cloudMode || !cloudReady || !navigator.onLine) {
        showToast("Conecte-se à internet para enviar uma dedicatória.","warning")
        return
    }

    if (!partner) {
        showToast("O outro perfil ainda não entrou.","warning")
        return
    }

    dedicationComposeTrackId = track.id

    if (dedicationRecipient) dedicationRecipient.textContent = `Para ${partner.display_name}`
    if (dedicationMessageInput) dedicationMessageInput.value = ""
    if (dedicationMessageError) dedicationMessageError.textContent = ""
    if (dedicationComposePreview) {
        dedicationComposePreview.innerHTML = `
            <span class="dedication-cover ${escapeAttribute(getCoverClass(track,track.coverIndex || 0))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
            <span><strong>${escapeHTML(track.title)}</strong><small>${escapeHTML(track.artist)} · ${escapeHTML(track.album || "Sem álbum")}</small></span>
        `
    }

    updateDedicationCharacterCount()
    closeSheet("player")
    openModal("dedication-compose")
    setTimeout(() => dedicationMessageInput?.focus(),120)
}

async function submitMusicDedication(event) {
    event.preventDefault()

    const track = tracks.find(item => item.id === dedicationComposeTrackId)
    const message = dedicationMessageInput?.value.trim() || ""

    if (!track) {
        showToast("Escolha uma música para dedicar.","warning")
        return
    }

    if (!message) {
        if (dedicationMessageError) dedicationMessageError.textContent = "Escreva um recado antes de enviar."
        dedicationMessageInput?.focus()
        return
    }

    if (!cloudMode || !cloudReady || !navigator.onLine) {
        showToast("Conecte-se à internet para enviar a dedicatória.","warning")
        return
    }

    setButtonLoading(dedicationSubmitButton,true,"Enviando...")

    try {
        await cloud.sendMusicDedication(track.id,message)
        await refreshMusicDedications()
        closeModal("dedication-compose")
        showToast("Dedicatória enviada.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível enviar a dedicatória."),"warning")
    } finally {
        setButtonLoading(dedicationSubmitButton,false)
    }
}

// histórico
function createListeningSessionId() {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID()

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,character => {
        const random = Math.random() * 16 | 0
        const value = character === "x" ? random : random & 0x3 | 0x8

        return value.toString(16)
    })
}

function formatListeningDuration(seconds) {
    const safeSeconds = Math.max(0,Number(seconds || 0))
    const totalMinutes = Math.round(safeSeconds / 60)

    if (totalMinutes < 60) return `${totalMinutes} min`

    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    return minutes ? `${hours}h ${minutes}min` : `${hours}h`
}

function formatListeningHistoryDate(value) {
    if (!value) return ""

    const date = new Date(value)

    if (Number.isNaN(date.getTime())) return ""

    return new Intl.DateTimeFormat("pt-BR",{
        day:"2-digit",
        month:"short",
        hour:"2-digit",
        minute:"2-digit"
    }).format(date).replace(" de "," ")
}

function getListeningTrack(item) {
    return tracks.find(track => track.id === item?.track_id) || null
}

function getListeningPlayThreshold(track) {
    const duration = Number(track?.duration || 0)

    if (duration > 0) return Math.max(2,Math.min(30,duration * 0.5))

    return 10
}

function isQualifiedListeningEntry(item) {
    const track = getListeningTrack(item)

    return Boolean(track && Number(item?.listenedSeconds || item?.listened_seconds || 0) >= getListeningPlayThreshold(track))
}

function getListeningEntries({days = 30,filter = "all",qualified = false} = {}) {
    const minimumDate = days > 0 ? Date.now() - days * 86400000 : 0

    return listeningHistory.filter(item => {
        const listenedAt = Date.parse(item.last_listened_at || item.started_at || "") || 0

        if (minimumDate && listenedAt < minimumDate) return false
        if (!getListeningTrack(item)) return false
        if (qualified && !isQualifiedListeningEntry(item)) return false
        if (filter === "me" && item.member_id !== currentProfile?.memberId) return false
        if (filter === "partner" && item.member_id === currentProfile?.memberId) return false

        return Number(item.listenedSeconds || item.listened_seconds || 0) >= 3
    })
}

function getRecentlyPlayedTracks(limit = 4) {
    const usedTrackIds = new Set()
    const recentTracks = []

    for (const item of getListeningEntries({days:0})) {
        if (usedTrackIds.has(item.track_id)) continue

        const track = getListeningTrack(item)

        if (!track) continue

        usedTrackIds.add(item.track_id)
        recentTracks.push(track)

        if (recentTracks.length >= limit) break
    }

    return recentTracks
}

function summarizeListening(entries) {
    const trackTotals = new Map()
    const artistTotals = new Map()
    let seconds = 0
    let plays = 0

    entries.forEach(item => {
        const track = getListeningTrack(item)
        const listened = Number(item.listenedSeconds || item.listened_seconds || 0)

        if (!track || listened <= 0) return

        seconds += listened
        if (isQualifiedListeningEntry(item)) plays += 1

        const trackTotal = trackTotals.get(track.id) || {track,seconds:0,plays:0}
        trackTotal.seconds += listened
        if (isQualifiedListeningEntry(item)) trackTotal.plays += 1
        trackTotals.set(track.id,trackTotal)

        const artistKey = String(track.artist || "Artista desconhecido").trim() || "Artista desconhecido"
        const artistTotal = artistTotals.get(artistKey) || {artist:artistKey,seconds:0,plays:0}
        artistTotal.seconds += listened
        if (isQualifiedListeningEntry(item)) artistTotal.plays += 1
        artistTotals.set(artistKey,artistTotal)
    })

    const topTrack = [...trackTotals.values()].sort((first,second) => second.seconds - first.seconds)[0] || null
    const topArtist = [...artistTotals.values()].sort((first,second) => second.seconds - first.seconds)[0] || null

    return {seconds,plays,topTrack,topArtist}
}

// perfil musical
function getMusicalProfilePartner() {
    return duoMembers.find(member => member.id !== currentProfile?.memberId) || null
}

function getMusicalTasteMap(entries,type = "track") {
    const totals = new Map()
    let totalSeconds = 0

    entries.forEach(item => {
        const track = getListeningTrack(item)
        const seconds = Number(item.listenedSeconds || item.listened_seconds || 0)

        if (!track || seconds <= 0) return

        const key = type === "artist"
            ? String(track.artist || "Artista desconhecido").trim().toLocaleLowerCase("pt-BR")
            : track.id
        const current = totals.get(key) || {
            key,
            label:type === "artist" ? track.artist || "Artista desconhecido" : track.title,
            track,
            seconds:0
        }

        current.seconds += seconds
        totals.set(key,current)
        totalSeconds += seconds
    })

    totals.forEach(item => {
        item.weight = totalSeconds > 0 ? item.seconds / totalSeconds : 0
    })

    return {totals,totalSeconds}
}

function getWeightedTasteOverlap(firstMap,secondMap) {
    const keys = new Set([...firstMap.keys(),...secondMap.keys()])
    let intersection = 0
    let union = 0

    keys.forEach(key => {
        const first = Number(firstMap.get(key)?.weight || 0)
        const second = Number(secondMap.get(key)?.weight || 0)

        intersection += Math.min(first,second)
        union += Math.max(first,second)
    })

    return union > 0 ? intersection / union : 0
}

function getMusicalProfileHeadline(score) {
    if (!Number.isFinite(score)) return "Ainda sem dados suficientes"
    if (score >= 85) return "Muito parecido"
    if (score >= 70) return "Bem parecido"
    if (score >= 50) return "Vários pontos em comum"
    if (score >= 30) return "Alguns pontos em comum"

    return "Gostos bem diferentes"
}

function getCommonTasteItems(firstTaste,secondTaste,limit = 5) {
    return [...firstTaste.totals.values()]
        .filter(item => secondTaste.totals.has(item.key))
        .map(item => {
            const other = secondTaste.totals.get(item.key)

            return {
                ...item,
                sharedScore:Math.min(Number(item.weight || 0),Number(other.weight || 0)) * 2 + Number(item.weight || 0) + Number(other.weight || 0),
                combinedSeconds:Number(item.seconds || 0) + Number(other.seconds || 0)
            }
        })
        .sort((first,second) => second.sharedScore - first.sharedScore || second.combinedSeconds - first.combinedSeconds)
        .slice(0,limit)
}

function getDistinctiveTasteTracks(primaryTaste,secondaryTaste,limit = 4) {
    return [...primaryTaste.totals.values()]
        .map(item => {
            const otherWeight = Number(secondaryTaste.totals.get(item.key)?.weight || 0)
            const difference = Number(item.weight || 0) - otherWeight

            return {...item,difference}
        })
        .filter(item => item.seconds >= 10 && item.difference > 0)
        .sort((first,second) => second.difference - first.difference || second.seconds - first.seconds)
        .slice(0,limit)
}

function getMusicalEvolution(entries,memberId,partnerMemberId,months = 6) {
    const now = new Date()
    const buckets = []
    const bucketMap = new Map()

    for (let offset = months - 1; offset >= 0; offset -= 1) {
        const date = new Date(now.getFullYear(),now.getMonth() - offset,1)
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,"0")}`
        const label = new Intl.DateTimeFormat("pt-BR",{month:"short"}).format(date).replace(".","")
        const bucket = {key,label,me:0,partner:0}

        buckets.push(bucket)
        bucketMap.set(key,bucket)
    }

    entries.forEach(item => {
        const date = new Date(item.last_listened_at || item.started_at || "")

        if (Number.isNaN(date.getTime())) return

        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,"0")}`
        const bucket = bucketMap.get(key)

        if (!bucket) return

        const seconds = Number(item.listenedSeconds || item.listened_seconds || 0)

        if (item.member_id === memberId) bucket.me += seconds
        if (partnerMemberId && item.member_id === partnerMemberId) bucket.partner += seconds
    })

    return buckets
}

function getListeningEntriesSince(timestamp) {
    return listeningHistory.filter(item => {
        const listenedAt = Date.parse(item.last_listened_at || item.started_at || "") || 0

        return listenedAt >= timestamp && getListeningTrack(item) && Number(item.listenedSeconds || item.listened_seconds || 0) >= 3
    })
}

function getMostSharedTrack(entries,memberId,partnerMemberId) {
    if (!memberId || !partnerMemberId) return null

    const totals = getListeningTotalsByTrack(entries)

    return [...totals.values()]
        .filter(item => item.members.has(memberId) && item.members.has(partnerMemberId))
        .map(item => ({
            ...item,
            sharedSeconds:Math.min(
                Number(item.members.get(memberId)?.seconds || 0),
                Number(item.members.get(partnerMemberId)?.seconds || 0)
            )
        }))
        .sort((first,second) => second.sharedSeconds - first.sharedSeconds || second.seconds - first.seconds)[0] || null
}

function getMusicalProfileData() {
    const currentMemberId = currentProfile?.memberId || ""
    const partner = getMusicalProfilePartner()
    const partnerMemberId = partner?.id || ""
    const partnerName = partner?.display_name || "Outro perfil"
    const periodEntries = getListeningEntries({days:90,qualified:true})
    const personalEntries = periodEntries.filter(item => item.member_id === currentMemberId)
    const partnerEntries = periodEntries.filter(item => partnerMemberId && item.member_id === partnerMemberId)
    const personalTrackTaste = getMusicalTasteMap(personalEntries,"track")
    const partnerTrackTaste = getMusicalTasteMap(partnerEntries,"track")
    const personalArtistTaste = getMusicalTasteMap(personalEntries,"artist")
    const partnerArtistTaste = getMusicalTasteMap(partnerEntries,"artist")
    const enoughData = Boolean(
        currentMemberId &&
        partnerMemberId &&
        personalTrackTaste.totalSeconds >= 30 &&
        partnerTrackTaste.totalSeconds >= 30 &&
        personalTrackTaste.totals.size >= 2 &&
        partnerTrackTaste.totals.size >= 2
    )
    const trackOverlap = getWeightedTasteOverlap(personalTrackTaste.totals,partnerTrackTaste.totals)
    const artistOverlap = getWeightedTasteOverlap(personalArtistTaste.totals,partnerArtistTaste.totals)
    const score = enoughData ? Math.round((trackOverlap * 0.62 + artistOverlap * 0.38) * 100) : null
    const commonTracks = getCommonTasteItems(personalTrackTaste,partnerTrackTaste,5)
    const commonArtists = getCommonTasteItems(personalArtistTaste,partnerArtistTaste,6)
    const personalTracks = getDistinctiveTasteTracks(personalTrackTaste,partnerTrackTaste,4)
    const partnerTracks = getDistinctiveTasteTracks(partnerTrackTaste,personalTrackTaste,4)
    const allEntries = getListeningEntries({days:0})
    const evolution = getMusicalEvolution(allEntries,currentMemberId,partnerMemberId,6)
    const currentYear = new Date().getFullYear()
    const yearStart = new Date(currentYear,0,1).getTime()
    const yearEntries = getListeningEntriesSince(yearStart)
    const yearSummary = summarizeListening(yearEntries)
    const yearSharedTrack = getMostSharedTrack(yearEntries,currentMemberId,partnerMemberId)

    return {
        partner,
        partnerName,
        score,
        enoughData,
        headline:getMusicalProfileHeadline(score),
        personalTrackCount:personalTrackTaste.totals.size,
        partnerTrackCount:partnerTrackTaste.totals.size,
        commonTracks,
        commonArtists,
        personalTracks,
        partnerTracks,
        evolution,
        currentYear,
        yearSummary,
        yearSharedTrack
    }
}

function getMusicalProfileSummaryText(data) {
    if (!data.partner) return "A comparação começa quando o outro perfil tiver histórico."
    if (!data.enoughData) return "Ainda falta histórico nos dois perfis para calcular a comparação."

    const commonArtist = data.commonArtists[0]?.label

    return commonArtist
        ? `Artista em comum: ${commonArtist}.`
        : "Ainda há pouco histórico em comum."
}

function createMusicalProfileTrackItem(item,index) {
    const track = item?.track

    if (!track) return ""

    return `
        <button type="button" class="musical-profile-track" data-track-id="${escapeAttribute(track.id)}">
            <span class="musical-profile-track-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
            <span>
                <strong>${escapeHTML(track.title)}</strong>
                <small>${escapeHTML(track.artist)}</small>
            </span>
        </button>
    `
}

function renderMusicalEvolution(data) {
    if (!musicalEvolutionChart) return

    const maximum = Math.max(1,...data.evolution.flatMap(item => [item.me,item.partner]))

    musicalEvolutionChart.innerHTML = data.evolution.map(item => {
        const meHeight = item.me > 0 ? Math.max(5,Math.round(item.me / maximum * 100)) : 0
        const partnerHeight = item.partner > 0 ? Math.max(5,Math.round(item.partner / maximum * 100)) : 0

        return `
            <div class="musical-evolution-month">
                <div class="musical-evolution-bars" title="${escapeAttribute(currentProfile?.name || "Meu perfil")}: ${escapeAttribute(formatListeningDuration(item.me))} · ${escapeAttribute(data.partnerName)}: ${escapeAttribute(formatListeningDuration(item.partner))}">
                    <i class="me" style="height:${meHeight}%"></i>
                    <i class="partner" style="height:${partnerHeight}%"></i>
                </div>
                <span>${escapeHTML(item.label)}</span>
            </div>
        `
    }).join("")
}

function renderMusicalProfileModal() {
    if (!musicalProfileModal) return

    const data = getMusicalProfileData()
    const scoreText = Number.isFinite(data.score) ? `${data.score}%` : "—"
    const summary = getMusicalProfileSummaryText(data)

    musicalProfileModalRing?.style.setProperty("--compatibility",String(data.score || 0))
    if (musicalProfileModalScore) musicalProfileModalScore.textContent = scoreText
    if (musicalProfileModalHeadline) musicalProfileModalHeadline.textContent = data.headline
    if (musicalProfileModalDescription) musicalProfileModalDescription.textContent = summary
    if (musicalMeLabel) musicalMeLabel.textContent = `Mais a minha cara`
    if (musicalPartnerLabel) musicalPartnerLabel.textContent = `Mais a cara de ${data.partnerName}`
    if (musicalEvolutionPartnerLabel) musicalEvolutionPartnerLabel.textContent = data.partnerName

    if (musicalCommonArtists) {
        musicalCommonArtists.innerHTML = data.commonArtists.length
            ? data.commonArtists.map(item => `<span>${escapeHTML(item.label)}</span>`).join("")
            : `<small class="musical-profile-empty">Ainda sem artistas em comum suficientes.</small>`
    }

    if (musicalCommonTracks) {
        musicalCommonTracks.innerHTML = data.commonTracks.length
            ? data.commonTracks.map(createMusicalProfileTrackItem).join("")
            : `<small class="musical-profile-empty">As músicas em comum aparecerão aqui.</small>`
    }

    if (musicalMeTracks) {
        musicalMeTracks.innerHTML = data.personalTracks.length
            ? data.personalTracks.map(createMusicalProfileTrackItem).join("")
            : `<small class="musical-profile-empty">Meu lado do perfil ainda está em formação.</small>`
    }

    if (musicalPartnerTracks) {
        musicalPartnerTracks.innerHTML = data.partnerTracks.length
            ? data.partnerTracks.map(createMusicalProfileTrackItem).join("")
            : `<small class="musical-profile-empty">O lado de ${escapeHTML(data.partnerName)} ainda está em formação.</small>`
    }

    renderMusicalEvolution(data)

    if (musicalRetrospectiveKicker) musicalRetrospectiveKicker.textContent = `Retrospectiva ${data.currentYear}`
    if (musicalRetrospectiveTitle) musicalRetrospectiveTitle.textContent = `Retrospectiva ${data.currentYear}`
    if (musicalYearTime) musicalYearTime.textContent = formatListeningDuration(data.yearSummary.seconds)
    if (musicalYearTrack) musicalYearTrack.textContent = data.yearSummary.topTrack?.track.title || "Ainda descobrindo"
    if (musicalYearArtist) musicalYearArtist.textContent = data.yearSummary.topArtist?.artist || "Ainda descobrindo"
    if (musicalYearSharedTrack) musicalYearSharedTrack.textContent = data.yearSharedTrack?.track.title || "Ainda descobrindo"
}

function renderMusicalProfile() {
    const data = getMusicalProfileData()
    const scoreText = Number.isFinite(data.score) ? `${data.score}%` : "—"

    musicalCompatibilityRing?.style.setProperty("--compatibility",String(data.score || 0))
    if (musicalCompatibilityValue) musicalCompatibilityValue.textContent = scoreText
    if (musicalProfileHeadline) musicalProfileHeadline.textContent = data.headline
    if (musicalProfileSummary) musicalProfileSummary.textContent = getMusicalProfileSummaryText(data)
    if (musicalCommonArtist) musicalCommonArtist.textContent = data.commonArtists[0]?.label || "Ainda descobrindo"
    if (musicalCommonTrack) musicalCommonTrack.textContent = data.commonTracks[0]?.track?.title || "Ainda descobrindo"
    if (musicalProfileOptionDescription) {
        musicalProfileOptionDescription.textContent = Number.isFinite(data.score)
            ? `${data.score}% de compatibilidade nos últimos 90 dias`
            : "Comparar o que a gente ouve"
    }

    if (musicalProfileModal?.classList.contains("open")) renderMusicalProfileModal()
}

function openMusicalProfile() {
    renderMusicalProfileModal()
    closeModal("profile")
    openModal("musical-profile")
}

function getListeningTotalsByTrack(entries) {
    const totals = new Map()

    entries.forEach(item => {
        const track = getListeningTrack(item)
        const listened = Number(item.listenedSeconds || item.listened_seconds || 0)

        if (!track || listened <= 0) return

        const total = totals.get(track.id) || {
            track,
            seconds:0,
            plays:0,
            lastPlayed:0,
            members:new Map()
        }
        const memberId = item.member_id || ""
        const member = total.members.get(memberId) || {seconds:0,plays:0,lastPlayed:0}
        const playedAt = Date.parse(item.last_listened_at || item.started_at || "") || 0
        const qualified = isQualifiedListeningEntry(item)

        total.seconds += listened
        if (qualified) total.plays += 1
        total.lastPlayed = Math.max(total.lastPlayed,playedAt)

        member.seconds += listened
        if (qualified) member.plays += 1
        member.lastPlayed = Math.max(member.lastPlayed,playedAt)
        total.members.set(memberId,member)
        totals.set(track.id,total)
    })

    return totals
}

function getSmartMixNoise(trackId) {
    const dateKey = new Date().toISOString().slice(0,10)
    const value = `${dateKey}:${trackId}`
    let hash = 2166136261

    for (let index = 0; index < value.length; index += 1) {
        hash ^= value.charCodeAt(index)
        hash = Math.imul(hash,16777619)
    }

    return (hash >>> 0) / 4294967295
}

function selectDiverseSmartMixTracks(scoredTracks,limit = 12) {
    const sorted = [...scoredTracks]
        .filter(item => item?.track)
        .sort((first,second) => second.score - first.score)
    const selected = []
    const deferred = []
    const artistCounts = new Map()

    sorted.forEach(item => {
        const artist = String(item.track.artist || "Artista desconhecido").trim().toLocaleLowerCase("pt-BR")
        const count = artistCounts.get(artist) || 0

        if (selected.length < limit && count < 2) {
            selected.push(item.track)
            artistCounts.set(artist,count + 1)
        } else {
            deferred.push(item.track)
        }
    })

    deferred.forEach(track => {
        if (selected.length >= limit) return
        if (selected.some(item => item.id === track.id)) return

        selected.push(track)
    })

    return selected.slice(0,limit)
}

function getSmartMixes() {
    const allEntries = getListeningEntries({days:90})
    const qualifiedEntries = getListeningEntries({days:90,qualified:true})
    const allTotals = getListeningTotalsByTrack(allEntries)
    const personalTotals = getListeningTotalsByTrack(getListeningEntries({days:90,filter:"me"}))
    const partnerTotals = getListeningTotalsByTrack(getListeningEntries({days:90,filter:"partner"}))
    const currentMemberId = currentProfile?.memberId || ""
    const partnerMemberId = duoMembers.find(member => member.id !== currentMemberId)?.id || ""
    const now = Date.now()
    const day = 86400000

    const mostPlayed = selectDiverseSmartMixTracks(
        tracks.map(track => {
            const total = allTotals.get(track.id)

            return {
                track,
                score:Number(total?.plays || 0) * 100000 + Number(total?.seconds || 0)
            }
        }).filter(item => item.score > 0),
        12
    )

    const recent = tracks
        .map(track => ({track,date:Date.parse(track.createdAt || "") || 0}))
        .sort((first,second) => second.date - first.date)
        .slice(0,12)
        .map(item => item.track)

    let discoveries = selectDiverseSmartMixTracks(
        tracks.map(track => {
            const personal = personalTotals.get(track.id)
            const partner = partnerTotals.get(track.id)
            const createdAt = Date.parse(track.createdAt || "") || 0
            const ageDays = createdAt ? Math.max(0,(now - createdAt) / day) : 365
            const neverReallyHeard = Number(personal?.plays || 0) === 0

            return {
                track,
                score:(neverReallyHeard ? 100000 : 0)
                    + Number(partner?.plays || 0) * 5000
                    + Number(partner?.seconds || 0) * 4
                    + (track.sharedBy ? 3500 : 0)
                    + Math.max(0,2200 - ageDays * 35)
                    - Number(personal?.seconds || 0)
            }
        }),
        12
    )

    if (!discoveries.length) discoveries = recent.slice(0,12)

    let onlyOurs = selectDiverseSmartMixTracks(
        tracks.map(track => {
            const total = allTotals.get(track.id)
            const mine = total?.members.get(currentMemberId)
            const partner = partnerMemberId ? total?.members.get(partnerMemberId) : null
            const sharedListening = Boolean(mine?.plays && partner?.plays)

            return {
                track,
                score:sharedListening
                    ? 100000 + Math.min(Number(mine.seconds || 0),Number(partner.seconds || 0)) * 8 + Number(total?.plays || 0) * 2000
                    : 0
            }
        }).filter(item => item.score > 0),
        12
    )

    if (!onlyOurs.length) {
        onlyOurs = selectDiverseSmartMixTracks(
            tracks.map(track => {
                const partner = partnerTotals.get(track.id)
                const personal = personalTotals.get(track.id)

                return {
                    track,
                    score:Number(partner?.seconds || 0) * 5
                        + Number(personal?.seconds || 0) * 2
                        + (track.sharedBy ? 2500 : 0)
                        + (track.favorite ? 1800 : 0)
                }
            }).filter(item => item.score > 0),
            12
        )
    }

    const artistAffinity = new Map()

    qualifiedEntries
        .filter(item => item.member_id === currentMemberId)
        .forEach(item => {
            const track = getListeningTrack(item)

            if (!track) return

            const artist = String(track.artist || "Artista desconhecido").trim().toLocaleLowerCase("pt-BR")
            const current = artistAffinity.get(artist) || 0

            artistAffinity.set(artist,current + Number(item.listenedSeconds || item.listened_seconds || 0))
        })

    const automatic = selectDiverseSmartMixTracks(
        tracks.map(track => {
            const personal = personalTotals.get(track.id)
            const partner = partnerTotals.get(track.id)
            const combined = allTotals.get(track.id)
            const artist = String(track.artist || "Artista desconhecido").trim().toLocaleLowerCase("pt-BR")
            const lastPlayed = Number(personal?.lastPlayed || 0)
            const recentlyPlayedPenalty = lastPlayed && now - lastPlayed < day ? 4500 : 0
            const createdAt = Date.parse(track.createdAt || "") || 0
            const recentAddition = createdAt && now - createdAt < 30 * day ? 1000 : 0

            return {
                track,
                score:Number(personal?.seconds || 0) * 2.2
                    + Number(personal?.plays || 0) * 2400
                    + Number(partner?.seconds || 0) * 0.8
                    + Number(combined?.plays || 0) * 500
                    + Number(artistAffinity.get(artist) || 0) * 0.25
                    + (track.favorite ? 4200 : 0)
                    + (track.sharedBy ? 1800 : 0)
                    + recentAddition
                    + getSmartMixNoise(track.id) * 2600
                    - recentlyPlayedPenalty
            }
        }),
        14
    )

    return [
        {
            key:"automatic",
            kicker:"Hoje",
            title:"Mix do dia",
            description:"Uma seleção baseada nas favoritas e no que a gente tem ouvido.",
            icon:"icon-shuffle",
            tracks:automatic.length ? automatic : recent
        },
        {
            key:"ours",
            kicker:"Em comum",
            title:"Em comum",
            description:"Músicas que aparecem no histórico dos dois perfis.",
            icon:"icon-users",
            tracks:onlyOurs.length ? onlyOurs : mostPlayed
        },
        {
            key:"top",
            kicker:"Nos últimos 90 dias",
            title:"Mais ouvidas",
            description:"As músicas com mais tempo ouvido e reproduções.",
            icon:"icon-history",
            tracks:mostPlayed.length ? mostPlayed : recent
        },
        {
            key:"recent",
            kicker:"Adicionadas recentemente",
            title:"Recentes",
            description:"As músicas adicionadas mais recentemente.",
            icon:"icon-music",
            tracks:recent
        },
        {
            key:"discoveries",
            kicker:"Pouco ouvidas",
            title:"Descobertas",
            description:"Músicas ainda pouco ouvidas, levando em conta o histórico dos dois perfis.",
            icon:"icon-search",
            tracks:discoveries
        }
    ]
}

function getSmartMixByKey(key = activeSmartMixKey) {
    return getSmartMixes().find(mix => mix.key === key) || null
}

function createSmartMixArtwork(mix) {
    const artworkTracks = mix.tracks.slice(0,4)

    if (!artworkTracks.length) {
        return `<span class="smart-mix-artwork-empty"><svg aria-hidden="true"><use href="#${mix.icon}"></use></svg></span>`
    }

    return artworkTracks.map((track,index) => `
        <span class="smart-mix-artwork-tile ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
    `).join("")
}

function createSmartMixCard(mix) {
    const count = mix.tracks.length
    const countLabel = count === 1 ? "1 música" : `${count} músicas`

    return `
        <button type="button" class="smart-mix-card" data-smart-mix="${escapeAttribute(mix.key)}">
            <span class="smart-mix-artwork">${createSmartMixArtwork(mix)}</span>
            <span class="smart-mix-card-information">
                <small>${escapeHTML(mix.kicker)}</small>
                <strong>${escapeHTML(mix.title)}</strong>
                <span>${escapeHTML(countLabel)}</span>
            </span>
        </button>
    `
}

function renderSmartMixes() {
    if (!smartMixGrid) return

    const mixes = getSmartMixes().filter(mix => mix.tracks.length)

    smartMixGrid.innerHTML = mixes.length
        ? mixes.map(createSmartMixCard).join("")
        : createEmptyState("Ainda sem mixes","Os mixes aparecem depois que houver histórico suficiente.","icon-shuffle")
}

function renderSmartMixModal() {
    const mix = getSmartMixByKey()

    if (!mix) return false

    const count = mix.tracks.length
    const countLabel = count === 1 ? "1 música" : `${count} músicas`
    const playableCount = getPlayableTracks(mix.tracks).length

    smartMixModalKicker.textContent = mix.kicker
    smartMixModalTitle.textContent = mix.title
    smartMixModalDescription.textContent = mix.description
    smartMixModalMeta.textContent = `${countLabel} · montado a partir do histórico`
    smartMixTrackList.innerHTML = count
        ? mix.tracks.map(createTrackItem).join("")
        : createEmptyState("Nada por aqui ainda","Continue ouvindo músicas para formar este mix.",mix.icon)
    smartMixPlayButton.disabled = !playableCount
    smartMixSaveButton.disabled = !count || cloudMode && (!cloudReady || !navigator.onLine)

    return true
}

function openSmartMix(key) {
    activeSmartMixKey = key

    if (!renderSmartMixModal()) {
        showToast("Este mix ainda não tem músicas suficientes.","warning")
        return
    }

    openModal("smart-mix")
}

function playActiveSmartMix() {
    const mix = getSmartMixByKey()
    const playableTracks = mix ? getPlayableTracks(mix.tracks) : []

    if (!mix || !playableTracks.length) {
        showToast("Nenhuma música deste mix está disponível para reprodução.","warning")
        return
    }

    closeModal("smart-mix")
    selectTrack(playableTracks[0].id,true,{
        context:{
            type:"collection",
            label:mix.title,
            trackIds:mix.tracks.map(track => track.id)
        }
    })
}

function saveActiveSmartMixAsPlaylist() {
    const mix = getSmartMixByKey()

    if (!mix?.tracks.length) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para salvar este mix como playlist.","warning")
        return
    }

    pendingPlaylistQueueIds = mix.tracks.map(track => track.id)
    closeModal("smart-mix")
    openPlaylistModal("",pendingPlaylistQueueIds)
}

function renderListeningOverview() {
    const recentTracks = getRecentlyPlayedTracks(4)
    const monthEntries = getListeningEntries({days:30})
    const personalEntries = monthEntries.filter(item => item.member_id === currentProfile?.memberId)
    const combined = summarizeListening(monthEntries)
    const personal = summarizeListening(personalEntries)

    if (recentlyPlayedList) {
        recentlyPlayedList.innerHTML = recentTracks.length
            ? recentTracks.map(createTrackItem).join("")
            : createEmptyState("Ainda sem histórico","As músicas reproduzidas aparecem aqui.","icon-history")
    }

    if (listeningTotalTime) listeningTotalTime.textContent = formatListeningDuration(combined.seconds)
    if (listeningPersonalTime) listeningPersonalTime.textContent = `Meu perfil: ${formatListeningDuration(personal.seconds)}`
    if (listeningTotalPlays) listeningTotalPlays.textContent = String(combined.plays)
    if (listeningPersonalPlays) listeningPersonalPlays.textContent = `Meu perfil: ${personal.plays}`

    if (listeningTopTrack) listeningTopTrack.textContent = combined.topTrack?.track.title || "Ainda descobrindo"
    if (listeningTopTrackDetail) {
        listeningTopTrackDetail.textContent = combined.topTrack
            ? `${combined.topTrack.track.artist} · ${formatListeningDuration(combined.topTrack.seconds)}`
            : "A música mais ouvida aparece aqui depois de algumas reproduções."
    }

    if (listeningTopArtist) listeningTopArtist.textContent = combined.topArtist?.artist || "Ainda descobrindo"
    if (listeningTopArtistDetail) {
        listeningTopArtistDetail.textContent = combined.topArtist
            ? `${formatListeningDuration(combined.topArtist.seconds)} ouvidos nos últimos 30 dias`
            : "O artista mais ouvido aparece aqui."
    }
}

function createListeningHistoryItem(item,index) {
    const track = getListeningTrack(item)

    if (!track) return ""

    const listened = Number(item.listenedSeconds || item.listened_seconds || 0)
    const ownerLabel = item.member_id === currentProfile?.memberId ? currentProfile?.name || "Meu perfil" : item.memberName || "Outro perfil"

    return `
        <button type="button" class="listening-history-item" data-track-id="${escapeAttribute(track.id)}">
            <span class="listening-history-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
            <span class="listening-history-information">
                <strong>${escapeHTML(track.title)}</strong>
                <span>${escapeHTML(track.artist)} · ${escapeHTML(ownerLabel)}</span>
                <small>${escapeHTML(formatListeningHistoryDate(item.last_listened_at || item.started_at))}</small>
            </span>
            <span class="listening-history-duration">${escapeHTML(formatListeningDuration(listened))}</span>
        </button>
    `
}

function renderListeningHistory() {
    if (!listeningHistoryList) return

    const entries = getListeningEntries({days:0,filter:listeningHistoryFilter}).slice(0,80)

    listeningHistoryList.innerHTML = entries.length
        ? entries.map(createListeningHistoryItem).join("")
        : createEmptyState("Nenhuma reprodução por aqui","O histórico será criado conforme as músicas forem tocadas.","icon-history")

    historyFilterButtons.forEach(button => {
        const active = button.dataset.historyFilter === listeningHistoryFilter
        button.classList.toggle("active",active)
        button.setAttribute("aria-selected",String(active))
    })
}

function getPendingListeningRecords() {
    try {
        const records = JSON.parse(localStorage.getItem(listeningPendingStorageKey) || "[]")

        return Array.isArray(records) ? records : []
    } catch (error) {
        return []
    }
}

function savePendingListeningRecords(records) {
    try {
        localStorage.setItem(listeningPendingStorageKey,JSON.stringify(records.slice(-500)))
    } catch (error) {
        return
    }
}

function queuePendingListeningRecord(record) {
    const records = getPendingListeningRecords()
    const existingIndex = records.findIndex(item => item.sessionId === record.sessionId && item.memberId === record.memberId)

    if (existingIndex >= 0) {
        records[existingIndex] = {
            ...records[existingIndex],
            ...record,
            listenedSeconds:Math.max(Number(records[existingIndex].listenedSeconds || 0),Number(record.listenedSeconds || 0)),
            completed:Boolean(records[existingIndex].completed || record.completed)
        }
    } else {
        records.push(record)
    }

    savePendingListeningRecords(records)
}

function removePendingListeningRecord(record) {
    const records = getPendingListeningRecords().filter(item => {
        if (item.sessionId !== record.sessionId || item.memberId !== record.memberId) return true

        const pendingSeconds = Number(item.listenedSeconds || 0)
        const persistedSeconds = Number(record.listenedSeconds || 0)
        const hasNewerProgress = pendingSeconds > persistedSeconds
        const hasNewerCompletion = Boolean(item.completed) && !record.completed

        return hasNewerProgress || hasNewerCompletion
    })

    savePendingListeningRecords(records)
}

async function persistListeningSnapshot(snapshot) {
    if (!snapshot?.trackId || Number(snapshot.listenedSeconds || 0) < 3) return false

    const record = {
        duoId:snapshot.duoId || currentProfile?.duoId,
        memberId:snapshot.memberId || currentProfile?.memberId,
        trackId:snapshot.trackId,
        sessionId:snapshot.sessionId,
        listenedSeconds:Math.max(0,Math.round(Number(snapshot.listenedSeconds || 0))),
        completed:Boolean(snapshot.completed)
    }
    const persistenceKey = `${record.memberId}:${record.sessionId}`

    // grava localmente antes de sincronizar
    queuePendingListeningRecord(record)

    if (!cloudMode || !cloudReady || !navigator.onLine || !currentProfile) return false
    if (listeningPersistingSessions.has(persistenceKey)) return false

    listeningPersistingSessions.add(persistenceKey)

    try {
        await cloud.recordListeningProgress(record.trackId,record.sessionId,record.listenedSeconds,record.completed)
        removePendingListeningRecord(record)
        scheduleListeningHistoryRefresh()
        return true
    } catch (error) {
        return false
    } finally {
        listeningPersistingSessions.delete(persistenceKey)
    }
}

function startListeningSession(trackId) {
    if (!trackId || !currentProfile || !cloudMode) return

    if (listeningSession?.trackId === trackId) {
        listeningSession.lastPosition = Number(audioPlayer.currentTime || 0)
        listeningSession.lastTimestamp = Date.now()
        return
    }

    if (listeningSession) finishListeningSession({completed:false})

    listeningSession = {
        duoId:currentProfile.duoId,
        memberId:currentProfile.memberId,
        trackId,
        sessionId:createListeningSessionId(),
        listenedSeconds:0,
        lastSentSeconds:0,
        lastPosition:Number(audioPlayer.currentTime || 0),
        lastTimestamp:Date.now(),
        completed:false
    }
}

function updateListeningSessionProgress() {
    if (!listeningSession || listeningSession.trackId !== currentTrackId) return

    const now = Date.now()
    const currentPosition = Number(audioPlayer.currentTime || 0)
    const previousPosition = Number(listeningSession.lastPosition || 0)
    const elapsed = Math.max(0,(now - Number(listeningSession.lastTimestamp || now)) / 1000)
    const positionDelta = currentPosition - previousPosition

    if (isPlaying && positionDelta > 0 && positionDelta <= elapsed + 3) {
        listeningSession.listenedSeconds += positionDelta
    }

    listeningSession.lastPosition = currentPosition
    listeningSession.lastTimestamp = now
}

async function flushListeningSession({force = false} = {}) {
    if (!listeningSession) return false

    updateListeningSessionProgress()

    const listenedSeconds = Number(listeningSession.listenedSeconds || 0)

    if (!force && listenedSeconds - Number(listeningSession.lastSentSeconds || 0) < 30) return false
    if (listenedSeconds < 3) return false

    const snapshot = {...listeningSession,listenedSeconds}
    const persisted = await persistListeningSnapshot(snapshot)

    if (persisted && listeningSession?.sessionId === snapshot.sessionId) {
        listeningSession.lastSentSeconds = listenedSeconds
    }

    return persisted
}

function finishListeningSession({completed = false} = {}) {
    if (!listeningSession) return

    updateListeningSessionProgress()

    const snapshot = {
        ...listeningSession,
        completed:Boolean(completed),
        listenedSeconds:Number(listeningSession.listenedSeconds || 0)
    }

    listeningSession = null
    persistListeningSnapshot(snapshot)
}

function startListeningProgressTracker() {
    if (listeningProgressInterval) return

    listeningProgressInterval = setInterval(() => {
        updateListeningSessionProgress()
        flushListeningSession()
    },5000)
}

async function syncPendingListeningRecords() {
    if (listeningSyncingPending || !cloudMode || !cloudReady || !navigator.onLine || !currentProfile) return false

    const ownRecords = getPendingListeningRecords()
        .filter(record => record.duoId === currentProfile.duoId && record.memberId === currentProfile.memberId)

    if (!ownRecords.length) return false

    listeningSyncingPending = true
    let synchronizedCount = 0

    try {
        for (const record of ownRecords) {
            try {
                await cloud.recordListeningProgress(record.trackId,record.sessionId,record.listenedSeconds,record.completed)
                removePendingListeningRecord(record)
                synchronizedCount += 1
            } catch (error) {
                continue
            }
        }

        if (synchronizedCount) scheduleListeningHistoryRefresh()

        return Boolean(synchronizedCount)
    } finally {
        listeningSyncingPending = false
    }
}

async function refreshListeningHistory() {
    if (!cloudMode || !cloudReady || !navigator.onLine || !currentProfile) return

    try {
        const recentHistory = await cloud.loadListeningHistory(250)
        const historyById = new Map(listeningHistory.map(item => [item.id,item]))

        recentHistory.forEach(item => historyById.set(item.id,item))

        listeningHistory = [...historyById.values()]
            .sort((first,second) => new Date(second.last_listened_at || second.started_at || 0) - new Date(first.last_listened_at || first.started_at || 0))
            .slice(0,10000)

        renderListeningOverview()
        renderMusicalProfile()
        renderSmartMixes()
        renderListeningHistory()

        if (smartMixModal?.classList.contains("open")) renderSmartMixModal()
    } catch (error) {
        return
    }
}

function scheduleListeningHistoryRefresh() {
    clearTimeout(listeningHistoryRefreshTimeout)
    listeningHistoryRefreshTimeout = setTimeout(refreshListeningHistory,500)
}

function renderHome() {
    const favoriteTracks = tracks.filter(track => track.favorite).slice(0,4)
    const sharedTracks = tracks.filter(track => track.sharedBy).slice(0,3)

    renderListeningOverview()
    renderMusicalProfile()
    renderSmartMixes()
    renderDedicationPreview()

    favoritesGrid.innerHTML = favoriteTracks.length
        ? favoriteTracks.map(createAlbumCard).join("")
        : createEmptyState("Nenhuma favorita","As músicas marcadas como favoritas aparecem aqui.","icon-heart")

    sharedTrackList.innerHTML = sharedTracks.length
        ? sharedTracks.map(createTrackItem).join("")
        : createEmptyState("Nada por aqui","As músicas recebidas aparecem aqui.","icon-send")
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
    return normalizeSearchText(librarySearchInput?.value || "")
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
    const creator = playlist.createdByName ? `por ${playlist.createdByName}` : "compartilhada"
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
                <small>${label} · ${escapeHTML(creator)}</small>
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

    if (activePlaylistMeta) {
        const creator = selectedPlaylist?.createdByName ? `Criada por ${selectedPlaylist.createdByName}` : "Playlist compartilhada"
        const description = selectedPlaylist?.description?.trim()
        const organizingHint = playlistOrganizing && selectedPlaylist ? "Segure o ícone de fila e arraste para mudar a ordem" : ""
        activePlaylistMeta.textContent = selectedPlaylist
            ? [description,creator,organizingHint].filter(Boolean).join(" · ")
            : ""
    }

    if (organizePlaylistButton) {
        const canOrganize = Boolean(selectedPlaylist && (!cloudMode || cloudReady && navigator.onLine))
        const organizing = playlistOrganizing && Boolean(selectedPlaylist)
        const label = organizing ? "Concluir organização da playlist" : "Organizar playlist"

        organizePlaylistButton.disabled = !canOrganize
        organizePlaylistButton.classList.toggle("active",organizing)
        organizePlaylistButton.setAttribute("aria-pressed",organizing ? "true" : "false")
        organizePlaylistButton.setAttribute("aria-label",label)
        organizePlaylistButton.title = label
    }

    if (managePlaylistButton) managePlaylistButton.disabled = !selectedPlaylist || cloudMode && (!cloudReady || !navigator.onLine)
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

    if (activePlaylistId && playlistOrganizing) return sourceTracks

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
            : createEmptyState("Nenhum álbum encontrado","Os álbuns são agrupados pelos dados das músicas.","icon-library")
        libraryCollectionGrid.hidden = false
        return groups.length
    }

    if (activeLibraryMode === "artists" && !activeLibraryEntity) {
        const groups = getVisibleArtistGroups()

        libraryCollectionGrid.innerHTML = groups.length
            ? groups.map((group,index) => createLibraryCollectionCard(group,index,"artist")).join("")
            : createEmptyState("Nenhum artista encontrado","Os artistas são agrupados pelos dados das músicas.","icon-users")
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

function getSearchDiscoveryTracks(limit = 5) {
    const mixes = getSmartMixes()
    const automatic = mixes.find(mix => mix.key === "automatic")?.tracks || []
    const discoveries = mixes.find(mix => mix.key === "discoveries")?.tracks || []
    const recent = mixes.find(mix => mix.key === "recent")?.tracks || []
    const selected = []
    const used = new Set()

    for (const track of [...automatic,...discoveries,...recent,...tracks]) {
        if (!track || used.has(track.id)) continue

        used.add(track.id)
        selected.push(track)

        if (selected.length >= limit) break
    }

    return selected
}

function getSearchDiscoveryArtists(limit = 4) {
    const discoveryTracks = getSearchDiscoveryTracks(12)
    const priorityArtists = new Map()

    discoveryTracks.forEach((track,index) => {
        const key = getArtistKey(track)
        if (!priorityArtists.has(key)) priorityArtists.set(key,index)
    })

    return getArtistGroups()
        .map(group => ({group,priority:priorityArtists.has(group.key) ? priorityArtists.get(group.key) : 9999}))
        .sort((first,second) => first.priority - second.priority || second.group.tracks.length - first.group.tracks.length)
        .slice(0,limit)
        .map(item => item.group)
}

function getSearchDiscoveryAlbums(limit = 4) {
    const discoveryTracks = getSearchDiscoveryTracks(12)
    const priorityAlbums = new Map()

    discoveryTracks.forEach((track,index) => {
        const key = getAlbumKey(track)
        if (!priorityAlbums.has(key)) priorityAlbums.set(key,index)
    })

    return getAlbumGroups()
        .map(group => ({group,priority:priorityAlbums.has(group.key) ? priorityAlbums.get(group.key) : 9999}))
        .sort((first,second) => first.priority - second.priority || second.group.tracks.length - first.group.tracks.length)
        .slice(0,limit)
        .map(item => item.group)
}

function renderSearchLanding() {
    const recentSearches = getRecentSearches()
    const discoveryTracks = getSearchDiscoveryTracks()
    const discoveryArtists = getSearchDiscoveryArtists()
    const discoveryAlbums = getSearchDiscoveryAlbums()

    if (searchRecentSection) searchRecentSection.hidden = !recentSearches.length
    if (searchRecentList) {
        searchRecentList.innerHTML = recentSearches.map(search => `
            <button type="button" data-recent-search="${escapeAttribute(search)}">
                <svg aria-hidden="true"><use href="#icon-history"></use></svg>
                <span>${escapeHTML(search)}</span>
            </button>
        `).join("")
    }

    if (searchDiscoveryTrackList) {
        searchDiscoveryTrackList.innerHTML = discoveryTracks.length
            ? discoveryTracks.map(createTrackItem).join("")
            : createEmptyState("A descoberta começa aqui","Adicione músicas à biblioteca para receber sugestões.","icon-music")
    }

    if (searchDiscoveryArtistGrid) {
        searchDiscoveryArtistGrid.innerHTML = discoveryArtists.map((group,index) => createLibraryCollectionCard(group,index,"artist")).join("")
    }

    if (searchDiscoveryAlbumGrid) {
        searchDiscoveryAlbumGrid.innerHTML = discoveryAlbums.map((group,index) => createLibraryCollectionCard(group,index,"album")).join("")
    }

    if (searchDiscoveryArtistsSection) searchDiscoveryArtistsSection.hidden = !discoveryArtists.length
    if (searchDiscoveryAlbumsSection) searchDiscoveryAlbumsSection.hidden = !discoveryAlbums.length
}

function createSearchResultHeading(title,count,description = "") {
    const countLabel = count === 1 ? "1 resultado" : `${count} resultados`

    return `
        <header class="search-result-heading">
            <div>
                <span>${escapeHTML(countLabel)}</span>
                <h3>${escapeHTML(title)}</h3>
            </div>
            ${description ? `<p>${escapeHTML(description)}</p>` : ""}
        </header>
    `
}

function createSearchTrackResults(tracksResult,{limit = 0} = {}) {
    const visibleTracks = limit > 0 ? tracksResult.slice(0,limit) : tracksResult

    if (!visibleTracks.length) return ""

    return `
        <section class="search-result-section">
            ${createSearchResultHeading("Músicas",tracksResult.length,"Ordenadas pelo melhor resultado")}
            <div class="track-list">${visibleTracks.map(createTrackItem).join("")}</div>
        </section>
    `
}

function createSearchArtistResults(groups,{limit = 0} = {}) {
    const visibleGroups = limit > 0 ? groups.slice(0,limit) : groups

    if (!visibleGroups.length) return ""

    return `
        <section class="search-result-section">
            ${createSearchResultHeading("Artistas",groups.length)}
            <div class="library-collection-grid search-entity-grid">
                ${visibleGroups.map((group,index) => createLibraryCollectionCard(group,index,"artist")).join("")}
            </div>
        </section>
    `
}

function createSearchAlbumResults(groups,{limit = 0} = {}) {
    const visibleGroups = limit > 0 ? groups.slice(0,limit) : groups

    if (!visibleGroups.length) return ""

    return `
        <section class="search-result-section">
            ${createSearchResultHeading("Álbuns",groups.length)}
            <div class="library-collection-grid search-entity-grid">
                ${visibleGroups.map((group,index) => createLibraryCollectionCard(group,index,"album")).join("")}
            </div>
        </section>
    `
}

function createSearchPlaylistResults(playlistResults,{limit = 0} = {}) {
    const visiblePlaylists = limit > 0 ? playlistResults.slice(0,limit) : playlistResults

    if (!visiblePlaylists.length) return ""

    return `
        <section class="search-result-section">
            ${createSearchResultHeading("Playlists",playlistResults.length)}
            <div class="playlist-grid search-playlist-grid">
                ${visiblePlaylists.map(createPlaylistCard).join("")}
            </div>
        </section>
    `
}

function renderSearch(query = "") {
    const normalizedQuery = normalizeSearchText(query)

    clearSearchButton.hidden = !normalizedQuery
    searchIntroduction.hidden = Boolean(normalizedQuery)
    searchModeTabs.hidden = !normalizedQuery

    searchModeButtons.forEach(button => {
        button.classList.toggle("active",button.dataset.searchMode === activeSearchMode)
    })

    if (!normalizedQuery) {
        searchResults.innerHTML = ""
        renderSearchLanding()
        return
    }

    const matchingTracks = getRankedSearchTracks(query)
    const matchingArtists = getRankedSearchArtists(query)
    const matchingAlbums = getRankedSearchAlbums(query)
    const matchingPlaylists = getRankedSearchPlaylists(query)
    const totalResults = matchingTracks.length + matchingArtists.length + matchingAlbums.length + matchingPlaylists.length

    let content = ""

    if (activeSearchMode === "all") {
        content = [
            createSearchTrackResults(matchingTracks,{limit:8}),
            createSearchArtistResults(matchingArtists,{limit:6}),
            createSearchAlbumResults(matchingAlbums,{limit:6}),
            createSearchPlaylistResults(matchingPlaylists,{limit:4})
        ].filter(Boolean).join("")
    }

    if (activeSearchMode === "tracks") content = createSearchTrackResults(matchingTracks)
    if (activeSearchMode === "artists") content = createSearchArtistResults(matchingArtists)
    if (activeSearchMode === "albums") content = createSearchAlbumResults(matchingAlbums)
    if (activeSearchMode === "playlists") content = createSearchPlaylistResults(matchingPlaylists)

    const summary = activeSearchMode === "all" && totalResults
        ? `<p class="search-results-summary">${totalResults === 1 ? "1 resultado encontrado" : `${totalResults} resultados encontrados`} para <strong>${escapeHTML(query.trim())}</strong></p>`
        : ""

    searchResults.innerHTML = content
        ? `${summary}${content}`
        : createEmptyState("Nenhum resultado","A busca encontra título, artista, álbum e playlist, mesmo sem acentos ou com pequenos erros.")
}

function renderApplicationData() {
    renderHome()
    renderActivityCenter()
    renderDedicationCenter()
    renderPlaylists()
    updateLibraryFilters()
    renderLibrary()
    renderSearch(searchInput.value)
    renderPlaylistPicker()
    renderQueue()
}

document.addEventListener("click",event => {
    const dedicationItemButton = event.target.closest("[data-open-dedication]")

    if (dedicationItemButton) {
        openDedicationItem(dedicationItemButton.dataset.openDedication)
        return
    }

    const activityItemButton = event.target.closest("[data-open-activity]")

    if (activityItemButton) {
        openActivityItem(activityItemButton.dataset.openActivity)
        return
    }

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

    const playlistMoveButton = event.target.closest("[data-playlist-move]")

    if (playlistMoveButton) {
        moveActivePlaylistTrack(playlistMoveButton.dataset.playlistTrack,playlistMoveButton.dataset.playlistMove)
        return
    }

    const playlistRemoveButton = event.target.closest("[data-playlist-remove]")

    if (playlistRemoveButton) {
        removeTrackFromActivePlaylist(playlistRemoveButton.dataset.playlistRemove)
        return
    }

    const smartMixButton = event.target.closest("[data-smart-mix]")

    if (smartMixButton) {
        openSmartMix(smartMixButton.dataset.smartMix)
        return
    }

    const trackButton = event.target.closest("[data-track-id]")

    if (trackButton) {
        if (trackButton.closest("#search-results")) saveRecentSearch(searchInput.value)
        selectTrack(trackButton.dataset.trackId,true,{context:getPlaybackContextFromElement(trackButton)})
        return
    }

    const collectionButton = event.target.closest("[data-library-entity-type]")

    if (collectionButton) {
        const collectionType = collectionButton.dataset.libraryEntityType
        const fromSearch = Boolean(collectionButton.closest("#search-results") || collectionButton.closest("#search-introduction"))

        if (collectionButton.closest("#search-results")) saveRecentSearch(searchInput.value)

        activePlaylistId = ""
        activeLibraryMode = collectionType === "album" ? "albums" : "artists"
        activeLibraryFilter = "all"
        activeLibraryEntity = {
            type:collectionType,
            key:decodeURIComponent(collectionButton.dataset.libraryEntityKey || "")
        }

        if (fromSearch) openView("library")

        updateLibraryFilters()
        renderLibrary()
        return
    }

    const playlistButton = event.target.closest("[data-playlist-id]")

    if (playlistButton) {
        if (playlistButton.closest("#search-results")) saveRecentSearch(searchInput.value)
        activeLibraryEntity = null
        activeLibraryMode = "playlists"
        activeLibraryFilter = "all"
        playlistOrganizing = false
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
        playlistOrganizing = false
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
        playlistOrganizing = false
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
    playlistOrganizing = false
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

searchInput?.addEventListener("keydown",event => {
    if (event.key !== "Enter") return

    saveRecentSearch(searchInput.value)
    renderSearch(searchInput.value)
})

clearSearchButton?.addEventListener("click",() => {
    searchInput.value = ""
    activeSearchMode = "all"
    renderSearch("")
    searchInput.focus()
})

searchModeButtons.forEach(button => {
    button.addEventListener("click",() => {
        activeSearchMode = button.dataset.searchMode || "all"
        renderSearch(searchInput.value)
    })
})

clearRecentSearchesButton?.addEventListener("click",clearRecentSearches)

searchRecentList?.addEventListener("click",event => {
    const button = event.target.closest("[data-recent-search]")

    if (!button) return

    searchInput.value = button.dataset.recentSearch || ""
    activeSearchMode = "all"
    renderSearch(searchInput.value)
    searchInput.focus()
})

suggestionButtons.forEach(button => {
    button.addEventListener("click",() => {
        searchInput.value = button.dataset.searchSuggestion
        activeSearchMode = "all"
        saveRecentSearch(searchInput.value)
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
        showToast("Durante a Jam, a ordem fica igual nos dois aparelhos.","warning")
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
        configureMediaSessionActions()
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
    const duration = getTrackPlaybackDuration(track)
    const rawPosition = Number.isFinite(audioPlayer.currentTime) ? audioPlayer.currentTime : 0
    const position = duration > 0 ? Math.min(rawPosition,duration) : rawPosition
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
                const duration = getTrackPlaybackDuration(track)

                audioPlayer.currentTime = duration
                    ? Math.min(restorePosition,Math.max(0,duration - 0.1))
                    : restorePosition
                updateProgressInterface()
            },{once:true})
        }
    }

    return true
}

async function refreshTrackCloudAssets(track) {
    if (!track || !cloudMode || !cloudReady || !navigator.onLine || !cloud?.createPrivateUrl) return track

    if (track.audioPath) {
        try {
            const source = await cloud.createPrivateUrl(track.audioPath)

            if (source) {
                track.cloudSource = source
                if (!track.downloaded) track.source = source
            }
        } catch (error) {
            // usa a URL atual como último recurso
        }
    }

    if (track.coverPath) {
        try {
            const coverImage = await cloud.createPrivateUrl(track.coverPath)

            if (coverImage) {
                track.cloudCoverImage = coverImage
                if (!track.downloaded || !String(track.coverImage || "").startsWith("blob:")) track.coverImage = coverImage
            }
        } catch (error) {
            // mantém a capa que já está em memória
        }
    }

    return track
}

async function playTrack(options = {}) {
    const track = getCurrentTrack()
    const syncJam = options.syncJam !== false
    const backgroundSafe = options.backgroundSafe === true || document.visibilityState !== "visible"
    const refreshBeforePlayback = options.refreshAssets !== false && !backgroundSafe

    configurePlaybackAudioSession()

    if (track && refreshBeforePlayback && cloudMode && cloudReady && navigator.onLine) {
        await refreshTrackCloudAssets(track)
    }

    if (cloudMode && !navigator.onLine && track && !track.downloaded) {
        isPlaying = false
        if (document.visibilityState === "visible") updatePlayerInterface()
        showToast("Esta música ainda não foi baixada neste aparelho.","warning")
        return false
    }

    if (!prepareAudioTrack(track)) {
        isPlaying = false
        if (document.visibilityState === "visible") updatePlayerInterface()
        showToast(cloudMode
            ? "Adicione uma música à biblioteca para reproduzir."
            : "Adicione um arquivo de áudio para testar a reprodução.","warning")
        return false
    }

    try {
        const playbackPromise = audioPlayer.play()

        await playbackPromise
        isPlaying = true
        configureMediaSessionActions()

        if (document.visibilityState === "visible") {
            updatePlayerInterface()
        } else {
            updateMediaSession(track)
            updateMediaSessionPosition(true)
        }

        schedulePlaybackStateSave()

        if (syncJam) publishJamState()

        return true
    } catch (error) {
        isPlaying = false

        if (document.visibilityState === "visible") updatePlayerInterface()
        else updateMediaSession(track)

        if (!options.silent) showToast("Toque em reproduzir para liberar o áudio neste aparelho.","warning")

        return false
    }
}

function pauseTrack(options = {}) {
    const syncJam = options.syncJam !== false

    updateListeningSessionProgress()
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
    if (shouldPlay) catalogEndHandledTrackId = ""

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
    const backgroundSafe = options.backgroundSafe === true || document.visibilityState !== "visible"

    if (changedTrack) finishListeningSession({completed:false})

    currentTrackId = selectedTrack.id

    if (changedTrack) {
        catalogEndHandledTrackId = ""

        if (!shouldPlay) audioPlayer.pause()

        isPlaying = false
    }

    if (backgroundSafe) {
        updateMediaSession(selectedTrack)
    } else {
        updatePlayerInterface()
    }

    schedulePlaybackStateSave()

    if (shouldPlay) {
        await playTrack({
            ...options,
            backgroundSafe,
            refreshAssets:options.refreshAssets !== false && !backgroundSafe
        })
    } else if (options.syncJam) {
        await publishJamState()
    }
}

function getJamSequence() {
    return getPlayableTracks().map(track => track.id)
}

function changeTrack(direction,options = {}) {
    const automatic = options.automatic === true
    const backgroundSafe = options.backgroundSafe === true || document.visibilityState !== "visible"

    if (automatic) finishListeningSession({completed:true})

    if (automatic && repeatMode === "one" && !jamActive) {
        catalogEndHandledTrackId = ""
        audioPlayer.currentTime = 0
        return playTrack({backgroundSafe,refreshAssets:!backgroundSafe})
    }

    if (direction < 0 && !automatic && Number.isFinite(audioPlayer.currentTime) && audioPlayer.currentTime > 3) {
        audioPlayer.currentTime = 0

        if (backgroundSafe) updateMediaSessionPosition(true)
        else updateProgressInterface()

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

        return selectTrack(activeQueue[fallbackIndex],true,{preserveQueue:true,queueIndex:fallbackIndex,backgroundSafe})
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

                if (backgroundSafe) updateMediaSession(getCurrentTrack())
                else updatePlayerInterface()

                schedulePlaybackStateSave()
            } else {
                showToast(direction > 0 ? "Fim da fila." : "Início da fila.","warning")
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

    return selectTrack(nextTrackId,true,{preserveQueue:true,queueIndex:nextIndex,backgroundSafe})
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

    showToast(track.favorite ? "Música adicionada aos favoritos." : "Música removida das favoritas.")
}

async function sendCurrentTrack() {
    const track = getCurrentTrack()

    if (!track) return

    if (!cloudMode) {
        track.sharedBy = track.sharedBy || `Enviada por ${currentProfile?.name || "meu perfil"}`
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
        showToast("Música enviada.")
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
dedicateCurrentTrackButton?.addEventListener("click",() => openDedicationCompose(currentTrackId))
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
    const duration = getTrackPlaybackDuration()

    trackProgress.style.setProperty("--range-progress",`${trackProgress.value}%`)

    if (!Number.isFinite(duration) || duration <= 0) return

    audioPlayer.currentTime = (Number(trackProgress.value) / 100) * duration
    updateProgressInterface()
})

trackProgress?.addEventListener("change",() => {
    clearTimeout(seekPublishTimeout)
    seekPublishTimeout = setTimeout(publishJamState,120)
})

audioPlayer?.addEventListener("play",() => {
    isPlaying = true
    configurePlaybackAudioSession()
    configureMediaSessionActions()
    setMediaSessionPlaybackState("playing")
    startListeningSession(currentTrackId)

    if (document.visibilityState === "visible") {
        updatePlayerInterface()
    } else {
        updateMediaSession(getCurrentTrack())
        updateMediaSessionPosition(true)
    }
})

audioPlayer?.addEventListener("pause",() => {
    updateListeningSessionProgress()
    flushListeningSession({force:true})
    isPlaying = false
    setMediaSessionPlaybackState("paused")

    if (document.visibilityState === "visible") {
        updatePlayerInterface()
    } else {
        updateMediaSession(getCurrentTrack())
        updateMediaSessionPosition(true)
    }

    if (pendingServiceWorkerReload && document.visibilityState === "visible") {
        pendingServiceWorkerReload = false
        showToast("Atualização pronta. Ela será aplicada ao reabrir o Dois Tons.")
    }
})

audioPlayer?.addEventListener("timeupdate",() => {
    updateListeningSessionProgress()

    if (document.visibilityState === "visible") updateProgressInterface()
    else updateMediaSessionPosition()

    finishTrackAtValidatedDuration()

    if (Date.now() - lastPlaybackProgressSave > 4000) {
        lastPlaybackProgressSave = Date.now()
        schedulePlaybackStateSave()
    }
})

audioPlayer?.addEventListener("loadedmetadata",() => {
    const track = getCurrentTrack()
    const browserDuration = Number(audioPlayer.duration || 0)

    catalogEndHandledTrackId = ""

    if (track) {
        if (isMp3Track(track) || isM4aAacTrack(track)) {
            validateTrackDuration(track).catch(() => {})
        } else if ((!track.duration || Number(track.duration) <= 0) && Number.isFinite(browserDuration) && browserDuration > 0) {
            track.duration = browserDuration

            if (cloudMode && cloudReady && navigator.onLine && track.cloud) {
                cloud.updateTrackDuration(track.id,browserDuration).catch(() => {})
            }
        }
    }

    if (document.visibilityState === "visible") {
        updateProgressInterface()
        renderApplicationData()
    }

    updateMediaSession(getCurrentTrack())
    updateMediaSessionPosition(true)
})

audioPlayer?.addEventListener("durationchange",() => updateMediaSessionPosition(true))
audioPlayer?.addEventListener("ratechange",() => updateMediaSessionPosition(true))

audioPlayer?.addEventListener("ended",() => changeTrack(1,{
    automatic:true,
    backgroundSafe:document.visibilityState !== "visible"
}))

audioPlayer?.addEventListener("error",async () => {
    const track = getCurrentTrack()

    if (audioRecoveryInProgress || !track || !track.cloud || !cloudMode || !cloudReady || !navigator.onLine) return

    audioRecoveryInProgress = true

    try {
        await refreshTrackCloudAssets(track)

        if (track.id !== currentTrackId || !prepareAudioTrack(track)) return

        configurePlaybackAudioSession()
        await audioPlayer.play()
    } catch (error) {
        if (document.visibilityState === "visible") showToast("Não foi possível retomar esta música.","warning")
    } finally {
        audioRecoveryInProgress = false
    }
})

openMusicalProfileButton?.addEventListener("click",openMusicalProfile)
openMusicalProfileCard?.addEventListener("click",openMusicalProfile)
musicalProfileOptionButton?.addEventListener("click",openMusicalProfile)
musicalProfileModal?.addEventListener("click",event => {
    if (event.target.closest("[data-track-id]")) closeModal("musical-profile")
})

openListeningHistoryButton?.addEventListener("click",() => {
    listeningHistoryFilter = "all"
    renderListeningHistory()
    openModal("listening-history")
})

openRecentHistoryButton?.addEventListener("click",() => {
    listeningHistoryFilter = "all"
    renderListeningHistory()
    openModal("listening-history")
})

historyFilterButtons.forEach(button => {
    button.addEventListener("click",() => {
        listeningHistoryFilter = button.dataset.historyFilter || "all"
        renderListeningHistory()
    })
})

// edição de músicas
function resetTrackManager() {
    if (managedCoverPreviewUrl) URL.revokeObjectURL(managedCoverPreviewUrl)

    managedTrackId = ""
    managedCoverRemoved = false
    managedCoverPreviewUrl = ""
    managedMetadataCoverFile = null
    trackManagerForm?.reset()

    if (trackDeleteConfirmation) trackDeleteConfirmation.hidden = true
    if (trackDeleteButton) trackDeleteButton.hidden = false
}

function getTrackOwnerLabel(track) {
    if (!cloudMode) return "Música do modo local"
    if (canManageTrack(track)) return `Adicionada por ${currentProfile?.name || "meu perfil"}`

    return track.addedByName ? `Adicionada por ${track.addedByName}` : "Adicionada em outro perfil"
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
        : "As alterações do modo local ficam somente neste aparelho."

    setCoverElement(trackManagerCover,track)
    updateTrackManagerCoverPreview(track)

    const hasCover = Boolean(track.coverPath || track.cloudCoverImage || track.coverImage)

    trackManagerRemoveCoverButton.disabled = !hasCover
    trackDeleteButton.disabled = jamActive
    if (jamActive) trackManagerInformation.textContent = "Durante a Jam, os dados podem ser editados, mas a exclusão fica bloqueada até o fim."

    openModal("track-manager")
}

function handleTrackManagerCoverSelection() {
    const track = tracks.find(item => item.id === managedTrackId)
    const file = trackManagerCoverInput.files[0]

    if (!track) return

    managedMetadataCoverFile = null

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


    managedMetadataCoverFile = null

    if (managedCoverPreviewUrl) {
        URL.revokeObjectURL(managedCoverPreviewUrl)
        managedCoverPreviewUrl = ""
    }

    trackManagerCoverInput.value = ""
    managedCoverRemoved = true
    trackManagerRemoveCoverButton.disabled = true
    updateTrackManagerCoverPreview(track)
    showToast("A capa será removida ao salvar.")
}

async function handleTrackManagerMetadataLookup() {
    const track = tracks.find(item => item.id === managedTrackId)

    if (!track) return

    setButtonLoading(trackManagerMetadataButton,true,"Buscando informações...")

    try {
        const result = await findOnlineMetadata({
            title:trackManagerTitleInput.value.trim() || track.title,
            artist:trackManagerArtistInput.value.trim() || track.artist,
            album:trackManagerAlbumInput.value.trim() || track.album,
            duration:track.duration
        })

        if (!result) {
            showToast("Não encontramos uma correspondência confiável para esta música.","warning")
            return
        }

        trackManagerTitleInput.value = limitText(result.title,80,track.title)
        trackManagerArtistInput.value = limitText(result.artist,80,track.artist)
        trackManagerAlbumInput.value = limitText(result.album,100,track.album || "Álbum desconhecido")

        if (metadata?.downloadCover) {
            const coverFile = await metadata.downloadCover(result,{maximumSize:maximumCoverFileSize})

            if (coverFile) {
                if (managedCoverPreviewUrl) URL.revokeObjectURL(managedCoverPreviewUrl)

                trackManagerCoverInput.value = ""
                managedMetadataCoverFile = coverFile
                managedCoverRemoved = false
                managedCoverPreviewUrl = URL.createObjectURL(coverFile)
                trackManagerRemoveCoverButton.disabled = false
                updateTrackManagerCoverPreview(track)
            }
        }

        showToast("Informações encontradas. Confira e salve as alterações.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível buscar as informações."),"warning")
    } finally {
        setButtonLoading(trackManagerMetadataButton,false)
    }
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
    const coverFile = trackManagerCoverInput.files[0] || managedMetadataCoverFile || null

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
            showToast("Música atualizada.")
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
        showToast("Música atualizada no modo local.","warning")
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
        showToast("Música removida do modo local.","warning")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível excluir a música."),"warning")
    } finally {
        trackDeleteConfirmButton.disabled = false
        trackDeleteConfirmButton.textContent = originalLabel
    }
}

trackManagerMetadataButton?.addEventListener("click",handleTrackManagerMetadataLookup)
trackManagerCoverInput?.addEventListener("change",handleTrackManagerCoverSelection)
trackManagerRemoveCoverButton?.addEventListener("click",markTrackCoverForRemoval)
trackManagerForm?.addEventListener("submit",handleTrackManagerSubmit)
trackDeleteButton?.addEventListener("click",openTrackDeleteConfirmation)
trackDeleteCancelButton?.addEventListener("click",closeTrackDeleteConfirmation)
trackDeleteConfirmButton?.addEventListener("click",confirmTrackDeletion)

// modais e painéis
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
        "playlist-manager":playlistManagerModal,
        "listening-history":listeningHistoryModal,
        "smart-mix":smartMixModal,
        "musical-profile":musicalProfileModal,
        activity:activityModal,
        dedication:dedicationModal,
        "dedication-compose":dedicationComposeModal,
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
    if (name === "playlist-manager") resetPlaylistManager()
    if (name === "dedication-compose") resetDedicationCompose()

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
    resetPlaylistManager()
    resetDedicationCompose()
    setOverlayState()
}

smartMixPlayButton?.addEventListener("click",playActiveSmartMix)
smartMixSaveButton?.addEventListener("click",saveActiveSmartMixAsPlaylist)

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
activityButton?.addEventListener("click",() => {
    openModal("activity")
    refreshActivityNotifications()
})
activityProfileOptionButton?.addEventListener("click",() => {
    closeModal("profile")
    openModal("activity")
    refreshActivityNotifications()
})
activityMarkAllButton?.addEventListener("click",markAllActivitiesRead)
openDedicationsButton?.addEventListener("click",() => {
    dedicationFilter = "received"
    renderDedicationCenter()
    openModal("dedication")
})
dedicationProfileOptionButton?.addEventListener("click",() => {
    closeModal("profile")
    dedicationFilter = "received"
    renderDedicationCenter()
    openModal("dedication")
})
dedicationMarkAllButton?.addEventListener("click",markAllDedicationsRead)
dedicationFilterButtons.forEach(button => {
    button.addEventListener("click",() => {
        dedicationFilter = button.dataset.dedicationFilter || "received"
        renderDedicationCenter()
    })
})
dedicationForm?.addEventListener("submit",submitMusicDedication)
dedicationMessageInput?.addEventListener("input",() => {
    if (dedicationMessageError) dedicationMessageError.textContent = ""
    updateDedicationCharacterCount()
})
activityFilterButtons.forEach(button => {
    button.addEventListener("click",() => {
        activityFilter = button.dataset.activityFilter || "all"
        renderActivityCenter()
    })
})

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

// adicionar e importar
function getFileTitle(fileName) {
    return fileName.replace(/\.[^/.]+$/,"").replaceAll(/[_-]+/g," ").trim()
}

function clearSelectedOnlineCover() {
    if (selectedOnlineCoverPreviewUrl) URL.revokeObjectURL(selectedOnlineCoverPreviewUrl)

    selectedOnlineCoverFile = null
    selectedOnlineCoverPreviewUrl = ""
}

function setUploadCoverPreviewFile(file) {
    if (!file) return

    clearSelectedOnlineCover()
    selectedOnlineCoverFile = file
    selectedOnlineCoverPreviewUrl = URL.createObjectURL(file)
    selectedCoverImage = selectedOnlineCoverPreviewUrl
    coverPreview.classList.add("has-image")
    coverPreview.style.backgroundImage = `url("${selectedOnlineCoverPreviewUrl}")`
}

function resetUploadForm() {
    uploadForm.reset()
    clearSelectedOnlineCover()
    selectedCoverImage = ""
    audioFileDrop.classList.remove("has-file")
    audioFileTitle.textContent = "Escolher arquivo de áudio"
    coverPreview.classList.remove("has-image")
    coverPreview.style.removeProperty("background-image")
}

function handleAudioFileSelection() {
    const file = audioFileInput.files[0]

    clearSelectedOnlineCover()
    selectedCoverImage = ""
    coverFileInput.value = ""
    coverPreview.classList.remove("has-image")
    coverPreview.style.removeProperty("background-image")

    if (!file) {
        audioFileDrop.classList.remove("has-file")
        audioFileTitle.textContent = "Escolher arquivo de áudio"
        return
    }

    const fileMetadata = getFileNameMetadata(file)

    audioFileDrop.classList.add("has-file")
    audioFileTitle.textContent = file.name

    if (!trackTitleInput.value.trim()) trackTitleInput.value = fileMetadata.title || getFileTitle(file.name)
    if (!trackArtistInput.value.trim() && fileMetadata.artist) trackArtistInput.value = fileMetadata.artist
    if (!trackAlbumInput.value.trim() && fileMetadata.album) trackAlbumInput.value = fileMetadata.album
}

function handleCoverFileSelection() {
    const file = coverFileInput.files[0]

    clearSelectedOnlineCover()

    if (!file) {
        selectedCoverImage = ""
        coverPreview.classList.remove("has-image")
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

async function findOnlineMetadata({title,artist,album,duration}) {
    if (!metadata?.searchTrack) return null
    if (!navigator.onLine) throw new Error("Conecte-se à internet para buscar informações.")

    return metadata.searchTrack({title,artist,album,duration})
}

async function handleUploadMetadataLookup() {
    const audioFile = audioFileInput.files[0]

    if (!audioFile) {
        showToast("Escolha o arquivo de áudio antes de buscar as informações.","warning")
        return
    }

    setButtonLoading(uploadMetadataButton,true,"Buscando informações...")

    try {
        const fileMetadata = getFileNameMetadata(audioFile)
        const [embeddedMetadata,duration] = await Promise.all([
            readEmbeddedMetadata(audioFile),
            getAudioDuration(audioFile)
        ])
        const currentTitle = trackTitleInput.value.trim() || limitText(embeddedMetadata.title,80,fileMetadata.title || getFileTitle(audioFile.name))
        const currentArtist = trackArtistInput.value.trim() || limitText(embeddedMetadata.artist,80,fileMetadata.artist || "")
        const currentAlbum = trackAlbumInput.value.trim() || limitText(embeddedMetadata.album,100,fileMetadata.album || "")

        trackTitleInput.value = currentTitle
        if (currentArtist) trackArtistInput.value = currentArtist
        if (currentAlbum) trackAlbumInput.value = currentAlbum

        const result = await findOnlineMetadata({
            title:currentTitle,
            artist:currentArtist,
            album:currentAlbum,
            duration
        })

        if (!result) {
            showToast("Não encontramos uma correspondência confiável para esta música.","warning")
            return
        }

        trackTitleInput.value = limitText(result.title,80,currentTitle)
        trackArtistInput.value = limitText(result.artist,80,currentArtist || "Artista desconhecido")
        trackAlbumInput.value = limitText(result.album,100,currentAlbum || "Álbum desconhecido")

        if (!coverFileInput.files[0] && metadata?.downloadCover) {
            const coverFile = await metadata.downloadCover(result,{maximumSize:maximumCoverFileSize})

            if (coverFile) setUploadCoverPreviewFile(coverFile)
        }

        showToast("Informações encontradas. Confira antes de adicionar à biblioteca.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível buscar as informações."),"warning")
    } finally {
        setButtonLoading(uploadMetadataButton,false)
    }
}

function getBrowserAudioDuration(file) {
    return new Promise(resolve => {
        const previewAudio = document.createElement("audio")
        const objectUrl = URL.createObjectURL(file)
        let finished = false
        let timeout = null

        const finish = duration => {
            if (finished) return

            finished = true
            clearTimeout(timeout)
            previewAudio.removeAttribute("src")
            previewAudio.load()
            URL.revokeObjectURL(objectUrl)
            resolve(Number.isFinite(duration) && duration > 0 ? duration : 0)
        }

        timeout = setTimeout(() => finish(0),12000)
        previewAudio.preload = "metadata"
        previewAudio.addEventListener("loadedmetadata",() => finish(previewAudio.duration),{once:true})
        previewAudio.addEventListener("error",() => finish(0),{once:true})
        previewAudio.src = objectUrl
    })
}

function isMp3File(file) {
    const mimeType = String(file?.type || "").toLocaleLowerCase("pt-BR")

    return getFileExtension(file?.name) === "mp3"
        || mimeType === "audio/mpeg"
        || mimeType === "audio/mp3"
}

function isM4aFile(file) {
    const mimeType = String(file?.type || "").toLocaleLowerCase("pt-BR")
    const extension = getFileExtension(file?.name)

    return extension === "m4a"
        || extension === "mp4"
        || mimeType === "audio/mp4"
        || mimeType === "audio/x-m4a"
        || mimeType === "audio/m4a"
}

function isMp3Track(track) {
    if (!track) return false

    const mimeType = String(track.mimeType || "").toLocaleLowerCase("pt-BR")
    const audioPath = String(track.audioPath || "").toLocaleLowerCase("pt-BR")

    return mimeType === "audio/mpeg"
        || mimeType === "audio/mp3"
        || audioPath.endsWith(".mp3")
}

function isM4aAacTrack(track) {
    if (!track) return false

    const mimeType = String(track.mimeType || "").toLocaleLowerCase("pt-BR")
    const audioPath = String(track.audioPath || "").toLocaleLowerCase("pt-BR")

    return mimeType === "audio/mp4"
        || mimeType === "audio/x-m4a"
        || mimeType === "audio/m4a"
        || mimeType === "audio/aac"
        || mimeType === "audio/x-aac"
        || audioPath.endsWith(".m4a")
        || audioPath.endsWith(".mp4")
        || audioPath.endsWith(".aac")
}

function getMpegFrameInformation(bytes,offset) {
    if (offset + 4 > bytes.length) return null

    const first = bytes[offset]
    const second = bytes[offset + 1]
    const third = bytes[offset + 2]

    if (first !== 0xff || (second & 0xe0) !== 0xe0) return null

    const versionBits = (second >> 3) & 0x03
    const layerBits = (second >> 1) & 0x03
    const bitrateIndex = (third >> 4) & 0x0f
    const sampleRateIndex = (third >> 2) & 0x03
    const padding = (third >> 1) & 0x01

    if (versionBits === 1 || layerBits === 0 || bitrateIndex === 0 || bitrateIndex === 15 || sampleRateIndex === 3) return null

    const version = versionBits === 3 ? 1 : versionBits === 2 ? 2 : 2.5
    const layer = layerBits === 3 ? 1 : layerBits === 2 ? 2 : 3
    const mpegOneBitrates = {
        1:[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448],
        2:[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384],
        3:[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320]
    }
    const mpegTwoBitrates = {
        1:[0,32,48,56,64,80,96,112,128,144,160,176,192,224,256],
        2:[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160],
        3:[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160]
    }
    const bitrate = (version === 1 ? mpegOneBitrates : mpegTwoBitrates)[layer][bitrateIndex] * 1000
    const baseSampleRate = [44100,48000,32000][sampleRateIndex]
    const sampleRate = version === 1 ? baseSampleRate : version === 2 ? baseSampleRate / 2 : baseSampleRate / 4
    const samplesPerFrame = layer === 1 ? 384 : layer === 2 ? 1152 : version === 1 ? 1152 : 576
    let frameLength = 0

    if (layer === 1) frameLength = Math.floor((12 * bitrate / sampleRate + padding) * 4)
    else if (layer === 3 && version !== 1) frameLength = Math.floor(72 * bitrate / sampleRate + padding)
    else frameLength = Math.floor(144 * bitrate / sampleRate + padding)

    if (!Number.isFinite(frameLength) || frameLength < 4) return null

    return {
        version,
        layer,
        bitrate,
        sampleRate,
        samplesPerFrame,
        frameLength
    }
}

function getId3v2Offset(bytes) {
    if (bytes.length < 10) return 0
    if (bytes[0] !== 0x49 || bytes[1] !== 0x44 || bytes[2] !== 0x33) return 0

    const size = (bytes[6] & 0x7f) * 0x200000
        + (bytes[7] & 0x7f) * 0x4000
        + (bytes[8] & 0x7f) * 0x80
        + (bytes[9] & 0x7f)
    const footerSize = bytes[5] & 0x10 ? 10 : 0

    return Math.min(bytes.length,10 + size + footerSize)
}

function getMp3FrameDurationFromBuffer(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer)

    if (bytes.length < 8) return 0

    const startOffset = getId3v2Offset(bytes)
    let endOffset = bytes.length

    if (endOffset >= 128
        && bytes[endOffset - 128] === 0x54
        && bytes[endOffset - 127] === 0x41
        && bytes[endOffset - 126] === 0x47) {
        endOffset -= 128
    }

    let firstFrameOffset = -1
    let firstFrame = null
    const searchLimit = Math.min(endOffset - 8,startOffset + 1024 * 1024)

    for (let offset = startOffset; offset <= searchLimit; offset += 1) {
        const frame = getMpegFrameInformation(bytes,offset)

        if (!frame) continue

        const nextFrame = getMpegFrameInformation(bytes,offset + frame.frameLength)

        if (!nextFrame) continue
        if (nextFrame.version !== frame.version || nextFrame.layer !== frame.layer || nextFrame.sampleRate !== frame.sampleRate) continue

        firstFrameOffset = offset
        firstFrame = frame
        break
    }

    if (firstFrameOffset < 0 || !firstFrame) return 0

    let offset = firstFrameOffset
    let duration = 0
    let frameCount = 0
    let invalidBytes = 0

    while (offset + 4 <= endOffset) {
        const frame = getMpegFrameInformation(bytes,offset)

        if (!frame
            || frame.version !== firstFrame.version
            || frame.layer !== firstFrame.layer
            || frame.sampleRate !== firstFrame.sampleRate
            || offset + frame.frameLength > endOffset) {
            invalidBytes += 1

            if (frameCount >= 8 && invalidBytes > 16) break
            if (invalidBytes > 4096) break

            offset += 1
            continue
        }

        duration += frame.samplesPerFrame / frame.sampleRate
        frameCount += 1
        invalidBytes = 0
        offset += frame.frameLength
    }

    return frameCount >= 8 && Number.isFinite(duration) && duration > 0 ? duration : 0
}

async function getMp3FrameDuration(file) {
    if (!isMp3File(file)) return 0

    try {
        return getMp3FrameDurationFromBuffer(await file.arrayBuffer())
    } catch (error) {
        return 0
    }
}

function readUint32BigEndian(bytes,offset) {
    if (offset < 0 || offset + 4 > bytes.length) return 0

    return bytes[offset] * 0x1000000
        + bytes[offset + 1] * 0x10000
        + bytes[offset + 2] * 0x100
        + bytes[offset + 3]
}

function readUint64BigEndian(bytes,offset) {
    const high = readUint32BigEndian(bytes,offset)
    const low = readUint32BigEndian(bytes,offset + 4)
    const value = high * 0x100000000 + low

    return Number.isSafeInteger(value) ? value : 0
}

function readMp4Type(bytes,offset) {
    if (offset < 0 || offset + 4 > bytes.length) return ""

    return String.fromCharCode(bytes[offset],bytes[offset + 1],bytes[offset + 2],bytes[offset + 3])
}

function getMp4Boxes(bytes,start = 0,end = bytes.length) {
    const boxes = []
    let offset = Math.max(0,start)
    const maximum = Math.min(bytes.length,end)

    while (offset + 8 <= maximum) {
        const size32 = readUint32BigEndian(bytes,offset)
        const type = readMp4Type(bytes,offset + 4)
        let headerSize = 8
        let size = size32

        if (size32 === 1) {
            if (offset + 16 > maximum) break
            size = readUint64BigEndian(bytes,offset + 8)
            headerSize = 16
        } else if (size32 === 0) {
            size = maximum - offset
        }

        if (!type || !Number.isFinite(size) || size < headerSize || offset + size > maximum) break

        boxes.push({
            type,
            start:offset,
            dataStart:offset + headerSize,
            end:offset + size,
            size,
            headerSize
        })

        offset += size
    }

    return boxes
}

function findMp4Child(bytes,parent,type) {
    if (!parent) return null

    return getMp4Boxes(bytes,parent.dataStart,parent.end).find(box => box.type === type) || null
}

function readMp4HandlerType(bytes,hdlrBox) {
    if (!hdlrBox || hdlrBox.dataStart + 12 > hdlrBox.end) return ""

    return readMp4Type(bytes,hdlrBox.dataStart + 8)
}

function readMp4MediaDuration(bytes,mdhdBox) {
    if (!mdhdBox || mdhdBox.dataStart + 20 > mdhdBox.end) return 0

    const offset = mdhdBox.dataStart
    const version = bytes[offset]
    let timescale = 0
    let duration = 0

    if (version === 1) {
        if (offset + 32 > mdhdBox.end) return 0
        timescale = readUint32BigEndian(bytes,offset + 20)
        duration = readUint64BigEndian(bytes,offset + 24)
    } else {
        timescale = readUint32BigEndian(bytes,offset + 12)
        duration = readUint32BigEndian(bytes,offset + 16)
    }

    if (!timescale || !duration) return 0

    const seconds = duration / timescale

    return Number.isFinite(seconds) && seconds > 0 ? seconds : 0
}

function getM4aDurationFromBuffer(arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer)
    const moov = getMp4Boxes(bytes).find(box => box.type === "moov")

    if (!moov) return 0

    const tracks = getMp4Boxes(bytes,moov.dataStart,moov.end).filter(box => box.type === "trak")

    for (const trackBox of tracks) {
        const mediaBox = findMp4Child(bytes,trackBox,"mdia")
        const handlerBox = findMp4Child(bytes,mediaBox,"hdlr")

        if (!mediaBox || readMp4HandlerType(bytes,handlerBox) !== "soun") continue

        const mediaHeader = findMp4Child(bytes,mediaBox,"mdhd")
        const duration = readMp4MediaDuration(bytes,mediaHeader)

        if (duration > 0) return duration
    }

    return 0
}

async function getM4aDuration(file) {
    if (!isM4aFile(file)) return 0

    try {
        return getM4aDurationFromBuffer(await file.arrayBuffer())
    } catch (error) {
        return 0
    }
}

async function getAudioDuration(file) {
    if (isMp3File(file)) {
        const frameDuration = await getMp3FrameDuration(file)

        if (frameDuration > 0) return frameDuration
    }

    if (isM4aFile(file)) {
        const containerDuration = await getM4aDuration(file)

        if (containerDuration > 0) return containerDuration
    }

    return getBrowserAudioDuration(file)
}

function getDurationValidationCache() {
    if (durationValidationCache) return durationValidationCache

    try {
        const stored = JSON.parse(localStorage.getItem(durationValidationStorageKey) || "{}")

        durationValidationCache = stored && typeof stored === "object" ? stored : {}
    } catch (error) {
        durationValidationCache = {}
    }

    return durationValidationCache
}

function getDurationValidationKey(track) {
    return [track?.id || "",track?.fileHash || "",Number(track?.fileSize || 0)].join(":")
}

function readValidatedDuration(track) {
    const key = getDurationValidationKey(track)
    const duration = Number(getDurationValidationCache()[key] || 0)

    return Number.isFinite(duration) && duration > 0 ? duration : 0
}

function storeValidatedDuration(track,duration) {
    if (!track?.id || !Number.isFinite(duration) || duration <= 0) return

    const cache = getDurationValidationCache()

    cache[getDurationValidationKey(track)] = Math.round(duration * 1000) / 1000

    try {
        localStorage.setItem(durationValidationStorageKey,JSON.stringify(cache))
    } catch (error) {
        return
    }
}

function getTrackPlaybackDuration(track = getCurrentTrack()) {
    const catalogDuration = Number(track?.duration || 0)

    if (catalogDuration > 0) return catalogDuration
    if (Number.isFinite(audioPlayer?.duration) && audioPlayer.duration > 0) return audioPlayer.duration

    return 0
}

async function applyValidatedTrackDuration(track,duration,{persist = true} = {}) {
    if (!track?.id || !Number.isFinite(duration) || duration <= 0) return false

    const previousDuration = Number(track.duration || 0)
    const changed = !previousDuration || Math.abs(previousDuration - duration) > 1

    track.duration = duration
    validatedDurationTrackIds.add(track.id)
    storeValidatedDuration(track,duration)

    if (persist && changed && cloudMode && cloudReady && navigator.onLine && track.cloud) {
        try {
            await cloud.updateTrackDuration(track.id,duration)
        } catch (error) {
            console.warn("Não foi possível corrigir a duração da música na nuvem.",error)
        }
    }

    if (changed && track.downloaded && offlineReady && currentProfile?.duoId && offline?.updateDownloadMetadata) {
        try {
            const updatedRecord = await offline.updateDownloadMetadata({
                duoId:currentProfile.duoId,
                track
            })

            if (updatedRecord) offlineDownloads.set(track.id,updatedRecord)
        } catch (error) {
            console.warn("Não foi possível corrigir a duração da cópia offline.",error)
        }
    }

    if (changed && offlineReady && currentProfile?.duoId) {
        saveOfflineLibrarySnapshot(tracks,playlists,duoMembers).catch(() => {})
    }

    if (track.id === currentTrackId) {
        if (document.visibilityState === "visible") updateProgressInterface()
        else updateMediaSessionPosition(true)
    }

    if (changed) renderApplicationData()

    return changed
}

async function validateTrackDuration(track) {
    if (!track?.id || (!isMp3Track(track) && !isM4aAacTrack(track))) return Number(track?.duration || 0)

    const cachedDuration = readValidatedDuration(track)

    if (cachedDuration > 0) {
        await applyValidatedTrackDuration(track,cachedDuration)
        return cachedDuration
    }

    if (durationValidationPromises.has(track.id)) return durationValidationPromises.get(track.id)

    const validationPromise = (async () => {
        const source = track.cloudSource || track.source

        if (!source) return Number(track.duration || 0)

        try {
            const response = await fetch(source,{cache:"no-store"})

            if (!response.ok) throw new Error(`HTTP ${response.status}`)

            const blob = await response.blob()
            let duration = 0

            if (isMp3Track(track)) {
                const audioFile = new File([blob],`${track.title || "musica"}.mp3`,{type:track.mimeType || blob.type || "audio/mpeg"})
                duration = await getMp3FrameDuration(audioFile)
            } else if (isM4aAacTrack(track)) {
                const audioFile = new File([blob],`${track.title || "musica"}.m4a`,{type:track.mimeType || blob.type || "audio/mp4"})
                duration = await getM4aDuration(audioFile)
            }

            if (duration > 0) {
                await applyValidatedTrackDuration(track,duration)
                return duration
            }
        } catch (error) {
            console.warn("Não foi possível validar a duração desta música.",error)
        }

        return Number(track.duration || 0)
    })().finally(() => durationValidationPromises.delete(track.id))

    durationValidationPromises.set(track.id,validationPromise)

    return validationPromise
}

function finishTrackAtValidatedDuration() {
    const track = getCurrentTrack()

    if (!track) return

    const duration = Number(track.duration || 0)
    const position = Number(audioPlayer.currentTime || 0)
    const browserDuration = Number(audioPlayer.duration || 0)
    const cachedDuration = readValidatedDuration(track)
    const browserDurationIsKnown = Number.isFinite(browserDuration) && browserDuration > 0
    const browserRunsPastCatalog = browserDurationIsKnown && browserDuration > duration + 0.5
    const hasContainerDurationMismatch = (isMp3Track(track) || isM4aAacTrack(track))
        && browserRunsPastCatalog
    const hasReliableCatalogEnd = validatedDurationTrackIds.has(track.id)
        || cachedDuration > 0
        || hasContainerDurationMismatch

    if (!hasReliableCatalogEnd || !duration || !Number.isFinite(position)) return
    if (position < Math.max(0,duration - 0.08)) return
    if (catalogEndHandledTrackId === track.id) return

    catalogEndHandledTrackId = track.id
    changeTrack(1,{
        automatic:true,
        backgroundSafe:document.visibilityState !== "visible"
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
                ? `style="background-image:url('${escapeAttribute(escapeCSSUrl(item.coverUrl))}')"`
                : ""
            const information = item.artist
                ? `${escapeHTML(item.artist)} · ${escapeHTML(item.album)}`
                : escapeHTML(item.file.name)
            const details = [
                item.duration ? formatTime(item.duration) : "",
                formatFileSize(item.file.size),
                item.coverFile ? "capa encontrada" : "",
                item.metadataSource ? `dados: ${item.metadataSource}` : ""
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
        "Mais arquivos podem ser adicionados antes de começar.",
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
            "Mais arquivos podem ser adicionados antes de começar.",
            0,
            0
        )
    }
}

function shouldCompleteCatalogMetadata({title,artist,album,coverFile,hasReliableMetadata}) {
    if (!catalogOnlineMetadataInput?.checked || !metadata?.searchTrack || !navigator.onLine) return false
    if (!title || metadata?.isGenericValue?.(title)) return false
    if (!artist || metadata?.isGenericValue?.(artist)) return false

    return !hasReliableMetadata || !coverFile || metadata?.isGenericValue?.(album)
}

async function completeCatalogMetadata({title,artist,album,duration,coverFile,hasReliableMetadata}) {
    if (!shouldCompleteCatalogMetadata({title,artist,album,coverFile,hasReliableMetadata})) {
        return {title,artist,album,coverFile,metadataSource:""}
    }

    try {
        const result = await findOnlineMetadata({title,artist,album,duration})

        if (!result) return {title,artist,album,coverFile,metadataSource:""}

        const completedTitle = hasReliableMetadata ? title : limitText(result.title,80,title)
        const completedArtist = hasReliableMetadata ? artist : limitText(result.artist,80,artist)
        const completedAlbum = metadata?.isGenericValue?.(album)
            ? limitText(result.album,100,album || "Álbum desconhecido")
            : album
        let completedCoverFile = coverFile

        if (!completedCoverFile && metadata?.downloadCover) {
            completedCoverFile = await metadata.downloadCover(result,{maximumSize:maximumCoverFileSize})
        }

        return {
            title:completedTitle,
            artist:completedArtist,
            album:completedAlbum || "Álbum desconhecido",
            coverFile:completedCoverFile,
            metadataSource:result.source || "MusicBrainz"
        }
    } catch (error) {
        console.warn("Não foi possível completar os metadados desta música.",error)
        return {title,artist,album,coverFile,metadataSource:""}
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
        metadataSource:"",
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
            const initialTitle = limitText(embeddedMetadata.title,80,fileMetadata.title || "Música sem título")
            const initialArtist = limitText(embeddedMetadata.artist,80,fileMetadata.artist || "Artista desconhecido")
            const initialAlbum = limitText(embeddedMetadata.album,100,fileMetadata.album || "Álbum desconhecido")
            const embeddedCoverFile = createEmbeddedCoverFile(embeddedMetadata.picture,item.file)
            const hasReliableMetadata = Boolean(embeddedMetadata.title && embeddedMetadata.artist)

            if (shouldCompleteCatalogMetadata({
                title:initialTitle,
                artist:initialArtist,
                album:initialAlbum,
                coverFile:embeddedCoverFile,
                hasReliableMetadata
            })) {
                updateCatalogProgress(
                    `Analisando ${index + 1} de ${newItems.length}`,
                    `Buscando informações para ${item.file.name}`,
                    index,
                    newItems.length
                )
            }

            const completedMetadata = await completeCatalogMetadata({
                title:initialTitle,
                artist:initialArtist,
                album:initialAlbum,
                duration,
                coverFile:embeddedCoverFile,
                hasReliableMetadata
            })
            const title = completedMetadata.title
            const artist = completedMetadata.artist
            const album = completedMetadata.album
            const coverFile = completedMetadata.coverFile
            const signature = createCatalogSignature({title,artist,album,duration})
            const looseSignature = createCatalogLooseSignature({title,artist,duration})
            const hasReliableIdentity = hasReliableMetadata || Boolean(completedMetadata.metadataSource)
            const duplicate = knownHashes.has(fileHash)
                || hasReliableIdentity && (knownSignatures.has(signature) || knownLooseSignatures.has(looseSignature))

            item.title = title
            item.artist = artist
            item.album = album
            item.duration = duration
            item.genres = getMetadataGenres(embeddedMetadata.genre)
            item.fileHash = fileHash
            item.signature = signature
            item.coverFile = coverFile
            item.metadataSource = completedMetadata.metadataSource
            item.coverUrl = coverFile ? URL.createObjectURL(coverFile) : ""
            item.status = duplicate ? "duplicate" : "ready"
            item.message = duplicate ? "Esta música já está na biblioteca" : ""

            if (!duplicate) {
                knownHashes.add(fileHash)
                if (hasReliableIdentity) {
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
            : "Confira a lista e inicie a importação.",
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
            `${importedItems} ${importedItems === 1 ? "música foi salva" : "músicas foram salvas"}.`,
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
    const coverFile = coverFileInput.files[0] || selectedOnlineCoverFile
    const title = trackTitleInput.value.trim()
    const artist = trackArtistInput.value.trim()
    const album = trackAlbumInput.value.trim() || "Álbum desconhecido"

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
            album,
            cover:selectedCoverImage ? "" : availableCoverClasses[tracks.length % availableCoverClasses.length],
            coverImage:selectedOnlineCoverFile ? URL.createObjectURL(selectedOnlineCoverFile) : selectedCoverImage,
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

    setButtonLoading(uploadSubmitButton,true,"Enviando...")

    try {
        // processa em sequência para poupar memória
        const duration = await getAudioDuration(audioFile)
        const fileHash = await createFileFingerprint(audioFile)
        const signature = createCatalogSignature({title,artist,album,duration})
        const looseSignature = createCatalogLooseSignature({title,artist,duration})
        const duplicate = tracks.some(track => {
            if (track.fileHash && track.fileHash === fileHash) return true

            return createCatalogSignature(track) === signature
                || createCatalogLooseSignature(track) === looseSignature
        })

        if (duplicate) throw new Error("Esta música já existe na biblioteca.")

        const createdTrack = await cloud.uploadTrack({
            audioFile,
            coverFile,
            title,
            artist,
            album,
            duration,
            tags:["adicionada",title.toLocaleLowerCase("pt-BR"),artist.toLocaleLowerCase("pt-BR"),album.toLocaleLowerCase("pt-BR")],
            fileHash,
            fileSize:audioFile.size,
            mimeType:getAudioMimeType(audioFile)
        })

        closeModal("upload")
        resetUploadForm()
        await loadCloudApplicationData()
        await selectTrack(createdTrack.id,true)
        showToast("Música adicionada à biblioteca.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível enviar o arquivo."),"warning")
    } finally {
        setButtonLoading(uploadSubmitButton,false)
    }
}

audioFileInput?.addEventListener("change",handleAudioFileSelection)
uploadMetadataButton?.addEventListener("click",handleUploadMetadataLookup)
coverFileInput?.addEventListener("change",handleCoverFileSelection)
uploadForm?.addEventListener("submit",handleUploadSubmit)

if (catalogOnlineMetadataInput) {
    catalogOnlineMetadataInput.checked = localStorage.getItem(metadataLookupStorageKey) !== "off"
    catalogOnlineMetadataInput.addEventListener("change",() => {
        localStorage.setItem(metadataLookupStorageKey,catalogOnlineMetadataInput.checked ? "on" : "off")
    })
}

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
        const creator = playlist.createdByName ? `por ${playlist.createdByName}` : "compartilhada"

        return `
            <button type="button" class="playlist-picker-button" data-toggle-playlist-track="${escapeAttribute(playlist.id)}" ${pendingPlaylistTrackId ? "" : "disabled"}>
                <span><svg aria-hidden="true"><use href="#icon-playlist"></use></svg></span>
                <span>
                    <strong>${escapeHTML(playlist.title)}</strong>
                    <small>${count === 1 ? "1 música" : `${count} músicas`} · ${escapeHTML(creator)}</small>
                </span>
                <small>${pendingPlaylistTrackId ? hasTrack ? "Remover" : "Adicionar" : "Compartilhada"}</small>
            </button>
        `
    }).join("")
}

async function handlePlaylistSubmit(event) {
    event.preventDefault()

    const title = playlistTitleInput.value.trim()
    const description = playlistDescriptionInput?.value.trim() || ""

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
            const playlist = await cloud.createPlaylist(title,description)

            if (pendingPlaylistTrackId) await cloud.addTrackToPlaylist(playlist.id,pendingPlaylistTrackId)

            for (const trackId of queuedTrackIds) {
                await cloud.addTrackToPlaylist(playlist.id,trackId)
            }

            await loadCloudApplicationData()
        } else {
            const now = new Date().toISOString()
            const trackIds = pendingPlaylistTrackId ? [pendingPlaylistTrackId] : queuedTrackIds

            playlists.unshift({
                id:createId("playlist"),
                title,
                description,
                createdByName:currentProfile?.name || "Meu perfil",
                createdAt:now,
                updatedAt:now,
                trackIds,
                items:trackIds.map((trackId,position) => ({
                    trackId,
                    position,
                    addedByName:currentProfile?.name || "Meu perfil",
                    createdAt:now
                }))
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
                : "Playlist criada.")
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
            playlist.items = (playlist.items || []).filter(item => item.trackId !== pendingPlaylistTrackId)
        } else {
            const now = new Date().toISOString()
            playlist.trackIds.push(pendingPlaylistTrackId)
            playlist.items = [
                ...(playlist.items || []),
                {
                    trackId:pendingPlaylistTrackId,
                    position:playlist.trackIds.length - 1,
                    addedByName:currentProfile?.name || "Meu perfil",
                    createdAt:now
                }
            ]
            playlist.updatedAt = now
        }

        renderApplicationData()
        showToast(hasTrack ? "Música removida da playlist." : "Música adicionada à playlist.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível alterar a playlist."),"warning")
    }
}

function resetPlaylistManager() {
    playlistManagerPlaylistId = ""
    playlistActivity = []
    playlistManagerForm?.reset()
    if (playlistDeleteConfirmation) playlistDeleteConfirmation.hidden = true
    if (playlistActivityList) playlistActivityList.innerHTML = '<p class="playlist-activity-empty">Abra uma playlist para ver a atividade.</p>'
}

function getPlaylistActivityText(item) {
    const track = tracks.find(trackItem => trackItem.id === item.track_id)
    const trackTitle = item.details?.track_title || track?.title || "uma música"

    if (item.action === "created") return "criou a playlist"
    if (item.action === "updated") return "editou a playlist"
    if (item.action === "track_added") return `adicionou “${trackTitle}”`
    if (item.action === "track_removed") return `removeu “${trackTitle}”`
    if (item.action === "track_moved") return `reorganizou “${trackTitle}”`

    return "atualizou a playlist"
}

function renderPlaylistActivity() {
    if (!playlistActivityList) return

    if (!cloudMode) {
        playlistActivityList.innerHTML = '<p class="playlist-activity-empty">O histórico da playlist aparece quando há conexão com o Supabase.</p>'
        return
    }

    if (!navigator.onLine) {
        playlistActivityList.innerHTML = '<p class="playlist-activity-empty">Conecte-se à internet para carregar o histórico desta playlist.</p>'
        return
    }

    playlistActivityList.innerHTML = playlistActivity.length
        ? playlistActivity.map(item => `
            <article class="playlist-activity-item">
                <span class="playlist-activity-avatar">${escapeHTML(getInitials(item.actorName || "DT"))}</span>
                <span>
                    <strong>${escapeHTML(item.actorName || "Outro perfil")}</strong>
                    <p>${escapeHTML(getPlaylistActivityText(item))}</p>
                    <small>${escapeHTML(formatPlaylistDate(item.created_at))}</small>
                </span>
            </article>
        `).join("")
        : '<p class="playlist-activity-empty">Ainda não há atividades registradas nesta playlist.</p>'
}

async function openPlaylistManager(playlistId = activePlaylistId) {
    const playlist = playlists.find(item => item.id === playlistId)

    if (!playlist) return

    playlistManagerPlaylistId = playlist.id
    playlistManagerTitleInput.value = playlist.title || ""
    playlistManagerDescriptionInput.value = playlist.description || ""
    playlistManagerMeta.textContent = [
        playlist.createdByName ? `Criada por ${playlist.createdByName}` : "Playlist compartilhada",
        formatPlaylistDate(playlist.created_at || playlist.createdAt)
    ].filter(Boolean).join(" · ")
    playlistDeleteConfirmation.hidden = true
    playlistActivityList.innerHTML = '<p class="playlist-activity-empty">Carregando atividade...</p>'
    openModal("playlist-manager")

    if (!cloudMode || !cloudReady || !navigator.onLine) {
        playlistActivity = []
        renderPlaylistActivity()
        return
    }

    try {
        playlistActivity = await cloud.loadPlaylistActivity(playlist.id)
    } catch (error) {
        playlistActivity = []
    }

    renderPlaylistActivity()
}

async function handlePlaylistManagerSubmit(event) {
    event.preventDefault()

    const playlist = playlists.find(item => item.id === playlistManagerPlaylistId)
    const title = playlistManagerTitleInput.value.trim()
    const description = playlistManagerDescriptionInput.value.trim()

    if (!playlist || !title) {
        showToast("Digite um nome para a playlist.","warning")
        return
    }

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para editar a playlist.","warning")
        return
    }

    setButtonLoading(playlistManagerSubmit,true,"Salvando...")

    try {
        if (cloudMode) {
            await cloud.updatePlaylist(playlist.id,{title,description})
            await loadCloudApplicationData()
        } else {
            playlist.title = title
            playlist.description = description
            playlist.updatedAt = new Date().toISOString()
            renderApplicationData()
        }

        closeModal("playlist-manager")
        showToast("Playlist atualizada.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível atualizar a playlist."),"warning")
    } finally {
        setButtonLoading(playlistManagerSubmit,false)
    }
}

async function deleteActivePlaylist() {
    const playlist = playlists.find(item => item.id === playlistManagerPlaylistId)

    if (!playlist) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para excluir a playlist.","warning")
        return
    }

    setButtonLoading(playlistDeleteConfirmButton,true,"Excluindo...")

    try {
        if (cloudMode) {
            await cloud.deletePlaylist(playlist.id)
            activePlaylistId = ""
            playlistOrganizing = false
            await loadCloudApplicationData()
        } else {
            playlists = playlists.filter(item => item.id !== playlist.id)
            activePlaylistId = ""
            playlistOrganizing = false
            renderApplicationData()
        }

        closeModal("playlist-manager")
        showToast("Playlist excluída. As músicas continuam na Biblioteca.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível excluir a playlist."),"warning")
    } finally {
        setButtonLoading(playlistDeleteConfirmButton,false)
    }
}

function togglePlaylistOrganizing() {
    if (!activePlaylistId) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para reorganizar a playlist.","warning")
        return
    }

    if (playlistDragState) cancelPlaylistDrag()

    playlistOrganizing = !playlistOrganizing
    renderPlaylists()
    renderLibrary()
    showToast(playlistOrganizing ? "Arraste as músicas para mudar a ordem." : "Organização concluída.")
}

async function moveActivePlaylistTrack(trackId,direction) {
    const playlist = playlists.find(item => item.id === activePlaylistId)

    if (!playlist || !playlist.trackIds.includes(trackId)) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para reorganizar a playlist.","warning")
        return
    }

    try {
        if (cloudMode) {
            const moved = await cloud.movePlaylistTrack(playlist.id,trackId,direction)

            if (!moved) return
            await loadCloudApplicationData()
        } else {
            const index = playlist.trackIds.indexOf(trackId)
            const targetIndex = direction === "up" ? index - 1 : index + 1

            if (targetIndex < 0 || targetIndex >= playlist.trackIds.length) return

            ;[playlist.trackIds[index],playlist.trackIds[targetIndex]] = [playlist.trackIds[targetIndex],playlist.trackIds[index]]
            const itemByTrack = new Map((playlist.items || []).map(item => [item.trackId,item]))
            playlist.items = playlist.trackIds.map((id,position) => ({...(itemByTrack.get(id) || {trackId:id}),position}))
            playlist.updatedAt = new Date().toISOString()
            renderApplicationData()
        }
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível reorganizar a playlist."),"warning")
    }
}

async function reorderActivePlaylistTrack(trackId,targetPosition) {
    const playlist = playlists.find(item => item.id === activePlaylistId)

    if (!playlist || !playlist.trackIds.includes(trackId)) return

    const currentPosition = playlist.trackIds.indexOf(trackId)
    const boundedTarget = Math.max(0,Math.min(Number(targetPosition) || 0,playlist.trackIds.length - 1))

    if (currentPosition === boundedTarget) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para reorganizar a playlist.","warning")
        renderLibrary()
        return
    }

    try {
        if (cloudMode) {
            const moved = await cloud.reorderPlaylistTrack(playlist.id,trackId,boundedTarget)

            if (!moved) {
                renderLibrary()
                return
            }

            await loadCloudApplicationData()
        } else {
            const [movedTrackId] = playlist.trackIds.splice(currentPosition,1)
            playlist.trackIds.splice(boundedTarget,0,movedTrackId)

            const itemByTrack = new Map((playlist.items || []).map(item => [item.trackId,item]))
            playlist.items = playlist.trackIds.map((id,position) => ({...(itemByTrack.get(id) || {trackId:id}),position}))
            playlist.updatedAt = new Date().toISOString()
            renderApplicationData()
        }

        showToast("Ordem da playlist atualizada.")
    } catch (error) {
        renderLibrary()
        showToast(getErrorMessage(error,"Não foi possível reorganizar a playlist."),"warning")
    }
}

function getPlaylistOrganizerRows() {
    if (!libraryTrackList) return []

    return [...libraryTrackList.querySelectorAll(".track-item-row.organizing[data-playlist-row-track]")]
}

function cleanPlaylistDragState() {
    if (!playlistDragState) return null

    const state = playlistDragState

    state.row?.classList.remove("playlist-dragging-row")
    state.handle?.classList.remove("dragging")
    document.documentElement.classList.remove("playlist-reordering")
    playlistDragState = null

    return state
}

function cancelPlaylistDrag() {
    const state = cleanPlaylistDragState()

    if (state?.moved) renderLibrary()
}

function startPlaylistDrag(event) {
    const handle = event.target.closest("[data-playlist-drag]")

    if (!handle || !playlistOrganizing || !activePlaylistId || !libraryTrackList?.contains(handle)) return
    if (event.pointerType === "mouse" && event.button !== 0) return

    const row = handle.closest(".track-item-row.organizing")
    const rows = getPlaylistOrganizerRows()
    const startIndex = rows.indexOf(row)

    if (!row || startIndex < 0) return

    playlistDragState = {
        pointerId:event.pointerId,
        trackId:handle.dataset.playlistDrag,
        row,
        handle,
        startIndex,
        moved:false
    }

    row.classList.add("playlist-dragging-row")
    handle.classList.add("dragging")
    document.documentElement.classList.add("playlist-reordering")

    try {
        handle.setPointerCapture(event.pointerId)
    } catch (error) {
        // O arraste continua funcionando mesmo sem captura explícita do ponteiro.
    }

    event.preventDefault()
}

function movePlaylistDrag(event) {
    const state = playlistDragState

    if (!state || event.pointerId !== state.pointerId) return

    event.preventDefault()

    const element = document.elementFromPoint(event.clientX,event.clientY)
    const targetRow = element?.closest?.(".track-item-row.organizing[data-playlist-row-track]")

    if (targetRow && targetRow !== state.row && libraryTrackList.contains(targetRow)) {
        const targetRect = targetRow.getBoundingClientRect()
        const insertAfter = event.clientY > targetRect.top + targetRect.height / 2

        if (insertAfter) {
            targetRow.after(state.row)
        } else {
            targetRow.before(state.row)
        }

        state.moved = true
    }

    const edge = 72

    if (event.clientY < edge) {
        window.scrollBy({top:-12,behavior:"auto"})
    } else if (event.clientY > window.innerHeight - edge) {
        window.scrollBy({top:12,behavior:"auto"})
    }
}

async function finishPlaylistDrag(event) {
    const state = playlistDragState

    if (!state || event.pointerId !== state.pointerId) return

    const rows = getPlaylistOrganizerRows()
    const targetIndex = rows.indexOf(state.row)
    const finishedState = cleanPlaylistDragState()

    if (!finishedState || !finishedState.moved || targetIndex < 0 || targetIndex === finishedState.startIndex) {
        if (finishedState?.moved) renderLibrary()
        return
    }

    await reorderActivePlaylistTrack(finishedState.trackId,targetIndex)
}

async function removeTrackFromActivePlaylist(trackId) {
    const playlist = playlists.find(item => item.id === activePlaylistId)

    if (!playlist || !playlist.trackIds.includes(trackId)) return

    if (cloudMode && (!cloudReady || !navigator.onLine)) {
        showToast("Conecte-se à internet para alterar a playlist.","warning")
        return
    }

    try {
        if (cloudMode) {
            await cloud.removeTrackFromPlaylist(playlist.id,trackId)
            await loadCloudApplicationData()
        } else {
            playlist.trackIds = playlist.trackIds.filter(id => id !== trackId)
            playlist.items = (playlist.items || []).filter(item => item.trackId !== trackId)
            renderApplicationData()
        }

        showToast("Música removida da playlist.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível remover a música da playlist."),"warning")
    }
}

createPlaylistButton?.addEventListener("click",() => openPlaylistModal(""))
playlistForm?.addEventListener("submit",handlePlaylistSubmit)
playlistManagerForm?.addEventListener("submit",handlePlaylistManagerSubmit)
organizePlaylistButton?.addEventListener("click",togglePlaylistOrganizing)

document.addEventListener("pointerdown",startPlaylistDrag)
document.addEventListener("pointermove",movePlaylistDrag,{passive:false})
document.addEventListener("pointerup",finishPlaylistDrag)
document.addEventListener("pointercancel",cancelPlaylistDrag)
managePlaylistButton?.addEventListener("click",() => openPlaylistManager())
deletePlaylistButton?.addEventListener("click",() => {
    playlistDeleteConfirmation.hidden = false
})
playlistDeleteCancelButton?.addEventListener("click",() => {
    playlistDeleteConfirmation.hidden = true
})
playlistDeleteConfirmButton?.addEventListener("click",deleteActivePlaylist)

playlistPicker?.addEventListener("click",event => {
    const button = event.target.closest("[data-toggle-playlist-track]")

    if (!button) return

    toggleTrackInPlaylist(button.dataset.togglePlaylistTrack)
})

// Jam
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
        jamRoomTitle.textContent = "Jam conectada."
        jamRoomDescription.textContent = cloudMode
            ? `Jam ${jamInviteCode}. Reproduzir, pausar, trocar ou avançar mantém os dois aparelhos sincronizados.`
            : `Convite ${jamInviteCode}. Esta Jam é apenas uma demonstração local.`
        createJamButton.innerHTML = '<svg aria-hidden="true"><use href="#icon-close"></use></svg><span>Encerrar Jam</span>'
        return
    }

    if (availableJam) {
        jamRoomTitle.textContent = "Há uma Jam disponível."
        jamRoomDescription.textContent = `Sala ${jamSession.invite_code}. Entre para acompanhar a música no mesmo instante.`
        createJamButton.innerHTML = '<svg aria-hidden="true"><use href="#icon-users"></use></svg><span>Entrar na Jam</span>'
        return
    }

    if (jamOffline) {
        jamRoomTitle.textContent = "A Jam precisa de internet."
        jamRoomDescription.textContent = "Os downloads continuam funcionando offline. A Jam volta a sincronizar quando a conexão retorna."
        createJamButton.innerHTML = '<svg aria-hidden="true"><use href="#icon-users"></use></svg><span>Jam indisponível</span>'
        return
    }

    jamRoomTitle.textContent = "Vamos criar uma Jam?"
    jamRoomDescription.textContent = "A reprodução fica sincronizada nos dois aparelhos."
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

        if (track && cloudReady && navigator.onLine) await refreshTrackCloudAssets(track)

        if (!track || track.id !== remoteJam.current_track_id || !prepareAudioTrack(track)) {
            updateJamInterface()
            return
        }

        await waitForAudioMetadata()

        const expectedPosition = cloud.getExpectedJamPosition(remoteJam)
        const playbackDuration = getTrackPlaybackDuration(track)
        const safePosition = playbackDuration > 0
            ? Math.min(expectedPosition,Math.max(0,playbackDuration - 0.1))
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
        showToast("A Jam foi encerrada.")
        return
    }

    jamSession = remoteJam

    if (remoteJam.updated_by === cloud.getUserId()) return

    await applyRemoteJamState(remoteJam)
}

function correctJamDrift() {
    if (!cloudMode || !jamActive || !jamSession?.is_playing || !isPlaying) return

    const track = getCurrentTrack()
    const expectedPosition = cloud.getExpectedJamPosition(jamSession)
    const duration = getTrackPlaybackDuration(track)
    const safePosition = duration > 0
        ? Math.min(expectedPosition,Math.max(0,duration - 0.1))
        : Math.max(0,expectedPosition)
    const drift = safePosition - audioPlayer.currentTime

    if (Math.abs(drift) > 0.7) audioPlayer.currentTime = safePosition
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
        showToast("A Jam precisa de internet para manter os aparelhos sincronizados.","warning")
        return
    }

    setButtonLoading(createJamButton,true,jamActive ? "Encerrando..." : "Conectando...")

    try {
        if (jamActive) {
            await cloud.endJam(jamSession.id)
            pauseTrack({syncJam:false})
            deactivateLocalJam()
            showToast("Jam encerrada.")
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
        showToast("Jam conectada. Os controles agora ficam sincronizados.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível abrir a Jam."),"warning")
    } finally {
        setButtonLoading(createJamButton,false)
        updateJamInterface()
    }
}

async function copyJamInvite() {
    if (!jamInviteCode) return

    const invitation = `Abra o Dois Tons e entre na Jam ${jamInviteCode}`

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
    configurePlaybackAudioSession()

    if (document.visibilityState !== "visible") {
        configureMediaSessionActions(true)
        updateListeningSessionProgress()
        flushListeningSession({force:true})
        savePlaybackState()
        updateMediaSession(getCurrentTrack())
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

// instalação
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
function setMediaSessionPlaybackState(state) {
    if (!("mediaSession" in navigator)) return

    try {
        navigator.mediaSession.playbackState = state
    } catch (error) {
        return
    }
}

function handleMediaSessionPlay() {
    const track = getCurrentTrack()

    if (!track) return

    configurePlaybackAudioSession()

    if (!prepareAudioTrack(track)) return

    try {
        const playbackPromise = audioPlayer.play()

        isPlaying = true
        setMediaSessionPlaybackState("playing")
        updateMediaSessionPosition(true)
        schedulePlaybackStateSave()

        if (playbackPromise && typeof playbackPromise.catch === "function") {
            playbackPromise.catch(() => {
                isPlaying = false
                setMediaSessionPlaybackState("paused")
            })
        }
    } catch (error) {
        isPlaying = false
        setMediaSessionPlaybackState("paused")
    }
}

function handleMediaSessionPause() {
    updateListeningSessionProgress()
    audioPlayer.pause()
    isPlaying = false
    setMediaSessionPlaybackState("paused")
    updateMediaSessionPosition(true)
    schedulePlaybackStateSave()
    publishJamState()
}

function handleMediaSessionTrackChange(direction) {
    configurePlaybackAudioSession()

    const result = changeTrack(direction,{backgroundSafe:true,mediaSession:true})

    if (result && typeof result.catch === "function") result.catch(() => {})
}

function configureMediaSessionActions(force = false) {
    if (!("mediaSession" in navigator)) return
    if (mediaSessionActionsConfigured && !force) return

    const actions = {
        play:handleMediaSessionPlay,
        pause:handleMediaSessionPause,
        previoustrack:() => handleMediaSessionTrackChange(-1),
        nexttrack:() => handleMediaSessionTrackChange(1),
        seekto:details => {
            const duration = getTrackPlaybackDuration()

            if (!Number.isFinite(details.seekTime) || !Number.isFinite(duration) || duration <= 0) return

            const nextPosition = Math.min(Math.max(details.seekTime,0),Math.max(0,duration - 0.05))

            if (details.fastSeek && typeof audioPlayer.fastSeek === "function") {
                audioPlayer.fastSeek(nextPosition)
            } else {
                audioPlayer.currentTime = nextPosition
            }

            if (document.visibilityState === "visible") updateProgressInterface()
            else updateMediaSessionPosition(true)

            schedulePlaybackStateSave()
            publishJamState()
        },
        stop:() => {
            updateListeningSessionProgress()
            audioPlayer.pause()
            audioPlayer.currentTime = 0
            isPlaying = false
            setMediaSessionPlaybackState("paused")
            updateMediaSessionPosition(true)
            schedulePlaybackStateSave()
            publishJamState()
        }
    }

    ;["seekbackward","seekforward"].forEach(action => {
        try {
            navigator.mediaSession.setActionHandler(action,null)
        } catch (error) {
            return
        }
    })

    let criticalActionsConfigured = true
    const criticalActions = new Set(["play","pause","previoustrack","nexttrack"])

    Object.entries(actions).forEach(([action,handler]) => {
        try {
            navigator.mediaSession.setActionHandler(action,handler)
        } catch (error) {
            if (criticalActions.has(action)) criticalActionsConfigured = false
        }
    })

    mediaSessionActionsConfigured = criticalActionsConfigured
}

function handleServiceWorkerControllerChange() {
    if (serviceWorkerReloading) return

    if (isPlaying) {
        pendingServiceWorkerReload = true
        showToast("Atualização instalada. Ela será aplicada ao reabrir o app.")
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

    if (cloudMode && currentProfile) {
        scheduleCloudRefresh()
        syncPendingListeningRecords()
    }

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
    updateListeningSessionProgress()
    flushListeningSession({force:true})
    savePlaybackState()
    updateMediaSessionPosition(true)
})
window.addEventListener("unload",releaseOfflineObjectUrls)

// inicialização
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
        accessNote.textContent = "Modo local: os dados ficam somente neste aparelho enquanto o Supabase não estiver configurado."
        uploadInformation.textContent = "No modo local, o arquivo fica disponível somente enquanto o app estiver aberto."
        updateConnectionInterface()
        return false
    }

    accessNote.textContent = "Conectando à sala privada..."

    if (!navigator.onLine) {
        cloudReady = false
        accessNote.textContent = "Sem internet. Os downloads deste aparelho continuam disponíveis."
        updateConnectionInterface()
        return false
    }

    try {
        await cloud.initialize()
        cloudReady = true
        accessNote.textContent = "O código é verificado com segurança e nunca fica salvo neste aparelho."
        uploadInformation.textContent = "O áudio e a capa serão salvos no storage privado e aparecerão nos dois aparelhos."
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
    startListeningProgressTracker()
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
            accessNote.textContent = "A sessão expirou. Entre novamente com o nome e o código."
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
