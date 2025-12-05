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


async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  return cached || fetch(request);
}

async function networkFirst(request) {
  const cache = await caches.open(API_CACHE);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (e) {
    return cache.match(request);
  }
}