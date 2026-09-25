// arquivos básicos do app
const cacheName = "dois-tons-v33"
const appAssets = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./assets/css/style.css",
    "./assets/js/supabase-config.js",
    "./assets/js/offline-service.js",
    "./assets/js/cloud-service.js?v=32",
    "./assets/js/metadata-service.js",
    "./assets/js/script.js?v=33",
    "./assets/icons/icon.svg",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png",
    "./assets/icons/icon-maskable-512.png",
    "./assets/icons/apple-touch-icon.png"
]

// instalação
self.addEventListener("install",event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(appAssets))
    )

    self.skipWaiting()
})

// ativação
self.addEventListener("activate",event => {
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames
                .filter(currentCache => currentCache.startsWith("dois-tons-") && currentCache !== cacheName)
                .map(currentCache => caches.delete(currentCache))
        ))
    )

    self.clients.claim()
})

// mensagens do app
self.addEventListener("message",event => {
    if (event.data?.type === "SKIP_WAITING") self.skipWaiting()
})

// cache de navegação e assets
self.addEventListener("fetch",event => {
    const request = event.request
    const requestUrl = new URL(request.url)

    if (request.method !== "GET") return
    if (requestUrl.origin !== self.location.origin) return

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then(response => {
                    if (response.ok) {
                        const responseCopy = response.clone()
                        event.waitUntil(caches.open(cacheName).then(cache => cache.put("./index.html",responseCopy)))
                    }

                    return response
                })
                .catch(() => caches.open(cacheName).then(cache => cache.match("./index.html")))
        )
        return
    }

    event.respondWith(
        fetch(request)
            .then(response => {
                if (!response || response.status !== 200) return response

                const responseCopy = response.clone()
                event.waitUntil(caches.open(cacheName).then(cache => cache.put(request,responseCopy)))

                return response
            })
            .catch(() => caches.open(cacheName).then(cache => cache.match(request)))
    )
})
