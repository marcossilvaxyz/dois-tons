// ======================================================
// dois tons - service worker
// suporte offline da pwa
// ======================================================

// configuracoes
const cacheName = "dois-tons-v3"
const appAssets = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./assets/css/style.css",
    "./assets/js/supabase-config.js",
    "./assets/js/cloud-service.js",
    "./assets/js/script.js",
    "./assets/icons/icon.svg",
    "./assets/icons/icon-192.png",
    "./assets/icons/icon-512.png",
    "./assets/icons/icon-maskable-512.png",
    "./assets/icons/apple-touch-icon.png"
]

// instalacao
self.addEventListener("install",event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(appAssets))
    )

    self.skipWaiting()
})

// atualizacao
self.addEventListener("activate",event => {
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames
                .filter(currentCache => currentCache !== cacheName)
                .map(currentCache => caches.delete(currentCache))
        ))
    )

    self.clients.claim()
})

// requisicoes
self.addEventListener("fetch",event => {
    const request = event.request
    const requestUrl = new URL(request.url)

    if (request.method !== "GET") return
    if (requestUrl.origin !== self.location.origin) return

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const responseCopy = response.clone()
                    caches.open(cacheName).then(cache => cache.put("./index.html",responseCopy))

                    return response
                })
                .catch(() => caches.match("./index.html"))
        )
        return
    }

    event.respondWith(
        fetch(request)
            .then(response => {
                if (!response || response.status !== 200) return response

                const responseCopy = response.clone()
                caches.open(cacheName).then(cache => cache.put(request,responseCopy))

                return response
            })
            .catch(() => caches.match(request))
    )
})
