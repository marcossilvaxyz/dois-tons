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
const libraryTrackList = document.getElementById("library-track-list")
const playLibraryButton = document.getElementById("play-library")
const playlistGrid = document.getElementById("playlist-grid")
const playlistContext = document.getElementById("playlist-context")
const activePlaylistTitle = document.getElementById("active-playlist-title")
const clearPlaylistFilterButton = document.getElementById("clear-playlist-filter")
const createPlaylistButton = document.getElementById("create-playlist-button")
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
const sendCurrentTrackButton = document.getElementById("send-current-track")
const addCurrentToPlaylistButton = document.getElementById("add-current-to-playlist")
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
const logoutButton = document.getElementById("logout-button")
const modalCloseButtons = document.querySelectorAll("[data-close-modal]")
const sheetCloseButtons = document.querySelectorAll("[data-close-sheet]")
const toast = document.getElementById("toast")
const toastMessage = document.getElementById("toast-message")

// configuracoes
const cloud = window.DoisTonsCloud
const profileStorageKey = "dois-tons-profile"
const accessStorageKey = "dois-tons-preview-access"
const logoutStorageKey = "dois-tons-logged-out"
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
let activeLibraryFilter = "all"
let activePlaylistId = ""
let currentProfile = null
let duoMembers = []
let cloudMode = false
let cloudReady = false
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
let pendingPlaylistTrackId = ""
let metadataLibraryPromise = null
let catalogItems = []
let catalogAnalyzing = false
let catalogImporting = false
let catalogCancelRequested = false

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

function getCurrentTrack() {
    return tracks.find(track => track.id === currentTrackId) || tracks[0]
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
            ? online ? "Nuvem privada conectada" : "Nuvem temporariamente offline"
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
    accessScreen.hidden = true
    appShell.hidden = false

    updateProfileInterface()
    renderApplicationData()
    updatePlayerInterface()
}

function closeApplication() {
    pauseTrack({syncJam:false})
    closeAllOverlays()
    clearCatalogQueue()
    stopJamSynchronization()
    cloud?.disconnectRealtime()
    localStorage.removeItem(profileStorageKey)
    localStorage.removeItem(accessStorageKey)
    localStorage.setItem(logoutStorageKey,"true")
    currentProfile = null
    duoMembers = []
    jamSession = null
    jamActive = false
    playlists = []
    tracks = cloudMode ? [] : [...demoTracks]
    currentTrackId = tracks[0]?.id || ""
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

    tracks = cloudTracks.map((track,index) => ({
        ...track,
        cover:getCoverClass(track,index)
    }))
    playlists = cloudPlaylists
    duoMembers = members
    currentTrackId = tracks.some(track => track.id === previousTrackId)
        ? previousTrackId
        : tracks[0]?.id || ""
    jamSession = activeJam
    jamInviteCode = activeJam?.invite_code || ""

    if (jamActive && !jamSession?.active) deactivateLocalJam()

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
        activePlaylistId = ""
        activeLibraryFilter = button.dataset.libraryFilter
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

function createTrackItem(track,index) {
    const currentClass = track.id === currentTrackId ? "current" : ""
    const sharingLabel = track.sharedBy
        ? `<span><svg aria-hidden="true"><use href="#icon-send"></use></svg>${escapeHTML(track.sharedBy)}</span>`
        : `<span>${formatTime(track.duration)}</span>`

    return `
        <button type="button" class="track-item ${currentClass}" data-track-id="${escapeAttribute(track.id)}">
            <span class="track-cover ${escapeAttribute(getCoverClass(track,index))} ${track.coverImage ? "custom-cover" : ""}" ${getCoverStyle(track)}></span>
            <span class="track-information">
                <strong>${escapeHTML(track.title)}</strong>
                <span>${escapeHTML(track.artist)} · ${escapeHTML(track.album)}</span>
            </span>
            <span class="track-meta">${sharingLabel}</span>
        </button>
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

function createPlaylistCard(playlist) {
    const count = playlist.trackIds.length
    const label = count === 1 ? "1 música" : `${count} músicas`

    return `
        <button type="button" class="playlist-card ${playlist.id === activePlaylistId ? "active" : ""}" data-playlist-id="${escapeAttribute(playlist.id)}">
            <svg aria-hidden="true"><use href="#icon-playlist"></use></svg>
            <strong>${escapeHTML(playlist.title)}</strong>
            <small>${label}</small>
        </button>
    `
}

function renderPlaylists() {
    playlistGrid.innerHTML = playlists.length
        ? playlists.map(createPlaylistCard).join("")
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
    if (activePlaylistId) {
        const playlist = playlists.find(item => item.id === activePlaylistId)

        return playlist
            ? playlist.trackIds.map(trackId => tracks.find(track => track.id === trackId)).filter(Boolean)
            : []
    }

    if (activeLibraryFilter === "favorites") return tracks.filter(track => track.favorite)
    if (activeLibraryFilter === "shared") return tracks.filter(track => track.sharedBy)

    return tracks
}

function updateLibraryFilters() {
    filterButtons.forEach(button => {
        const active = !activePlaylistId && button.dataset.filter === activeLibraryFilter
        button.classList.toggle("active",active)
        button.setAttribute("aria-selected",String(active))
    })
}

function renderLibrary() {
    const filteredTracks = getFilteredLibraryTracks()
    const label = filteredTracks.length === 1 ? "1 música" : `${filteredTracks.length} músicas`

    libraryCount.textContent = label
    libraryTrackList.innerHTML = filteredTracks.length
        ? filteredTracks.map(createTrackItem).join("")
        : createEmptyState(
            activePlaylistId ? "Playlist vazia" : "Nenhuma música encontrada",
            activePlaylistId
                ? "Abra uma música e use o botão Playlist para adicioná-la."
                : "Escolha outro filtro ou adicione uma música à biblioteca.",
            activePlaylistId ? "icon-playlist" : "icon-search"
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
}

document.addEventListener("click",event => {
    const trackButton = event.target.closest("[data-track-id]")

    if (trackButton) {
        selectTrack(trackButton.dataset.trackId,true)
        return
    }

    const playlistButton = event.target.closest("[data-playlist-id]")

    if (playlistButton) {
        activePlaylistId = playlistButton.dataset.playlistId
        openView("library")
        renderPlaylists()
        updateLibraryFilters()
        renderLibrary()
        return
    }

    if (event.target.closest("[data-create-playlist]")) openPlaylistModal("")
})

filterButtons.forEach(button => {
    button.addEventListener("click",() => {
        activePlaylistId = ""
        activeLibraryFilter = button.dataset.filter
        renderPlaylists()
        updateLibraryFilters()
        renderLibrary()
    })
})

clearPlaylistFilterButton?.addEventListener("click",() => {
    activePlaylistId = ""
    activeLibraryFilter = "all"
    renderPlaylists()
    updateLibraryFilters()
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
    if (!("mediaSession" in navigator) || !("MediaMetadata" in window)) return

    const metadata = {
        title:track.title,
        artist:track.artist,
        album:track.album
    }

    if (track.coverImage) metadata.artwork = [{src:track.coverImage,sizes:"512x512"}]

    navigator.mediaSession.metadata = new MediaMetadata(metadata)
    navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused"
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

    setCoverElement(miniCover,track)
    setCoverElement(playerArtwork,track)
    updateProgressInterface()
    updateMediaSession(track)
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
}

function prepareAudioTrack(track) {
    if (!track?.source) return false

    if (audioPlayer.dataset.trackId !== track.id) {
        audioPlayer.src = track.source
        audioPlayer.dataset.trackId = track.id
        audioPlayer.load()
    }

    return true
}

async function playTrack(options = {}) {
    const track = getCurrentTrack()
    const syncJam = options.syncJam !== false

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

    const changedTrack = selectedTrack.id !== currentTrackId
    currentTrackId = selectedTrack.id

    if (changedTrack) {
        audioPlayer.pause()
        audioPlayer.removeAttribute("src")
        audioPlayer.dataset.trackId = ""
        audioPlayer.load()
        isPlaying = false
    }

    updatePlayerInterface()

    if (shouldPlay) {
        await playTrack(options)
    } else if (options.syncJam) {
        await publishJamState()
    }
}

function changeTrack(direction) {
    if (!tracks.length) return

    const currentIndex = tracks.findIndex(track => track.id === currentTrackId)
    const safeCurrentIndex = currentIndex < 0 ? 0 : currentIndex
    const nextIndex = (safeCurrentIndex + direction + tracks.length) % tracks.length

    selectTrack(tracks[nextIndex].id,true)
}

async function toggleFavorite() {
    const track = getCurrentTrack()

    if (!track) return

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
favoriteButton?.addEventListener("click",toggleFavorite)
sendCurrentTrackButton?.addEventListener("click",sendCurrentTrack)
addCurrentToPlaylistButton?.addEventListener("click",() => {
    closeSheet("player")
    openPlaylistModal(currentTrackId)
})

playLibraryButton?.addEventListener("click",() => {
    const playableTrack = getFilteredLibraryTracks().find(track => track.source)

    if (!playableTrack) {
        showToast("Adicione uma música para reproduzir a biblioteca.","warning")
        return
    }

    selectTrack(playableTrack.id,true)
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
})

audioPlayer?.addEventListener("pause",() => {
    isPlaying = false
    updatePlayerInterface()
})

audioPlayer?.addEventListener("timeupdate",updateProgressInterface)

audioPlayer?.addEventListener("loadedmetadata",() => {
    const track = getCurrentTrack()

    if (track && Number.isFinite(audioPlayer.duration)) {
        track.duration = audioPlayer.duration

        if (cloudMode && track.cloud) {
            cloud.updateTrackDuration(track.id,audioPlayer.duration).catch(() => {})
        }
    }

    updateProgressInterface()
    renderApplicationData()
})

audioPlayer?.addEventListener("ended",() => changeTrack(1))

// paineis e modais
function openSheet(name) {
    if (name !== "player" || !getCurrentTrack()) return

    playerSheet.classList.add("open")
    playerSheet.setAttribute("aria-hidden","false")
    setOverlayState()
}

function closeSheet(name) {
    if (name !== "player") return

    playerSheet.classList.remove("open")
    playerSheet.setAttribute("aria-hidden","true")
    setOverlayState()
}

function getModal(name) {
    const modalMap = {
        upload:uploadModal,
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

    playerSheet.classList.remove("open")
    playerSheet.setAttribute("aria-hidden","true")
    setOverlayState()
}

openPlayerButton?.addEventListener("click",() => openSheet("player"))
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
function openPlaylistModal(trackId = "") {
    pendingPlaylistTrackId = trackId
    renderPlaylistPicker()
    openModal("playlist")
}

function renderPlaylistPicker() {
    if (!playlistPicker) return

    if (!playlists.length) {
        playlistPicker.innerHTML = `
            <p class="playlist-picker-empty">Ainda não há playlists. Crie uma abaixo${pendingPlaylistTrackId ? " e a música atual será adicionada automaticamente" : ""}.</p>
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

    setButtonLoading(playlistSubmitButton,true,"Criando...")

    try {
        if (cloudMode) {
            const playlist = await cloud.createPlaylist(title)

            if (pendingPlaylistTrackId) await cloud.addTrackToPlaylist(playlist.id,pendingPlaylistTrackId)

            await loadCloudApplicationData()
        } else {
            playlists.unshift({
                id:createId("playlist"),
                title,
                description:"",
                trackIds:pendingPlaylistTrackId ? [pendingPlaylistTrackId] : []
            })
            renderApplicationData()
        }

        playlistForm.reset()
        renderPlaylistPicker()
        showToast(pendingPlaylistTrackId ? "Playlist criada com a música atual." : "Playlist criada para vocês.")
    } catch (error) {
        showToast(getErrorMessage(error,"Não foi possível criar a playlist."),"warning")
    } finally {
        setButtonLoading(playlistSubmitButton,false)
    }
}

async function toggleTrackInPlaylist(playlistId) {
    if (!pendingPlaylistTrackId) return

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

    jamRoom.classList.toggle("active",jamActive)
    copyJamCodeButton.hidden = !availableJam

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
    if (!cloudMode || !jamActive || !jamSession?.id || applyingRemoteJamState) return

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
    if (document.visibilityState !== "visible" || !cloudMode || !jamActive || !jamSession?.id) return

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

    if (isStandaloneMode()) {
        showToast("O Dois Tons já está instalado neste aparelho.")
        return
    }

    if (!deferredInstallPrompt) {
        openModal("install")
        return
    }

    deferredInstallPrompt.prompt()
    await deferredInstallPrompt.userChoice
    deferredInstallPrompt = null
}

window.addEventListener("beforeinstallprompt",event => {
    event.preventDefault()
    deferredInstallPrompt = event
})

installAppButton?.addEventListener("click",handleInstallApplication)
logoutButton?.addEventListener("click",closeApplication)

// controles do sistema
function configureMediaSessionActions() {
    if (!("mediaSession" in navigator)) return

    const actions = {
        play:playTrack,
        pause:pauseTrack,
        previoustrack:() => changeTrack(-1),
        nexttrack:() => changeTrack(1),
        seekto:details => {
            if (!Number.isFinite(details.seekTime) || !Number.isFinite(audioPlayer.duration)) return

            audioPlayer.currentTime = Math.min(details.seekTime,audioPlayer.duration)
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

function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return
    if (!window.location.protocol.startsWith("http")) return

    navigator.serviceWorker.register("service-worker.js").catch(() => {
        showToast("A instalação offline será ativada quando o projeto estiver hospedado.","warning")
    })
}

window.addEventListener("online",() => {
    updateConnectionInterface()

    if (cloudMode && currentProfile) scheduleCloudRefresh()
})

window.addEventListener("offline",updateConnectionInterface)

// inicializacao
async function initializeCloudMode() {
    cloudMode = Boolean(cloud?.isConfigured())

    if (!cloudMode) {
        accessNote.textContent = "Modo de demonstração: os dados ficam somente neste aparelho até você preencher a configuração do Supabase."
        uploadInformation.textContent = "No modo de demonstração, o arquivo fica disponível somente enquanto o aplicativo estiver aberto."
        updateConnectionInterface()
        return false
    }

    accessNote.textContent = "Conectando à sala privada..."

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
    configureMediaSessionActions()
    registerServiceWorker()
    updateJamInterface()
    renderCatalogQueue()

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
