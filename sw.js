const CACHE = "mi-dia-v1";
const BASE  = "/Pacho-project-";
const FILES = [BASE + "/", BASE + "/index.html", BASE + "/manifest.json", BASE + "/icon.svg"];

self.addEventListener("install", e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)))
);

self.addEventListener("fetch", e =>
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  )
);

self.addEventListener("activate", e =>
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  )
);
