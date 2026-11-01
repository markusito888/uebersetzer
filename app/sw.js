// Speichert die App-Dateien, damit sie schnell und auch ohne Mac-Server startet.
// Bei Änderungen an der App die Versionsnummer erhöhen.
const CACHE = "uebersetzer-v2";
const DATEIEN = ["./", "index.html", "style.css", "app.js", "manifest.webmanifest", "vendor/anthropic-sdk-1.3.0.mjs", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((n) => n !== CACHE).map((n) => caches.delete(n)))).then(() => self.clients.claim()));
});

// Erst das Netz fragen (neueste Version), bei Ausfall aus dem Speicher laden. Anfragen an Claude laufen nie über den Speicher.
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then((antwort) => {
      const kopie = antwort.clone();
      caches.open(CACHE).then((c) => c.put(e.request, kopie));
      return antwort;
    }).catch(() => caches.match(e.request))
  );
});
