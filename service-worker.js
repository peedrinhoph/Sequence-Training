/* =========================================================
   SERVICE WORKER — SEQUENCE TRAINING
   =========================================================
   Altere CACHE_VERSION quando uma nova publicação precisar
   invalidar os arquivos armazenados pelo Service Worker.
   ========================================================= */

const CACHE_VERSION = "2.1.1";
const CACHE_PREFIX = "sequence-training-";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );

  // Permite que a nova versão seja ativada sem esperar o fechamento
  // de todas as abas antigas.
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(
            key =>
              key.startsWith(CACHE_PREFIX) &&
              key !== CACHE_NAME
          )
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  // O Service Worker cuida somente dos recursos do próprio aplicativo.
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  // Para navegação, priorizamos a rede para detectar uma versão nova
  // do index.html. Se estiver offline, usamos o cache.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();

            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, copy);
            });
          }

          return response;
        })
        .catch(() =>
          caches.match(event.request).then(
            cached => cached || caches.match("./index.html")
          )
        )
    );

    return;
  }

  // Recursos estáticos: cache primeiro para funcionamento offline.
  // Se ainda não estiverem no cache, buscamos na rede e armazenamos.
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then(response => {
        if (response.ok) {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, copy);
          });
        }

        return response;
      });
    })
  );
});
