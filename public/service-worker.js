
// Service Worker pour Business Digital PWA

const CACHE_NAME = 'business-digital-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Stratégie de cache : network first, falling back to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cloner la réponse car elle ne peut être lue qu'une fois
        const responseClone = response.clone();
        
        caches.open(CACHE_NAME)
          .then((cache) => {
            // Mettre la réponse dans le cache
            cache.put(event.request, responseClone);
          });
        
        return response;
      })
      .catch(() => {
        // Si la requête réseau échoue, essayer de servir depuis le cache
        return caches.match(event.request);
      })
  );
});

// Nettoyage des anciens caches lors de l'activation
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Supprimer les caches qui ne sont pas dans la whitelist
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
