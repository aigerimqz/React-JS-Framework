const CACHE_NAME = "app-shell-v1";
const API_CACHE = "api-cache-v1";


const APP_SHELL = [
    "/",
    "../index.html",
    "/manifest.json",
    "/icons/icon-192.png",
    "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
    console.log("[SW] Install event");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.add.addAll(APP_SHELL);

        })
    )
})





self.addEventListener("activate", (event) => {
  console.log("[SW] Activate event");

  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== API_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  )

  self.clients.claim();
})
