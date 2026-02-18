const CACHE_NAME = 'barakah-pwa-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass-through saja, biar iframe Google Script yang handle kontennya
  e.respondWith(fetch(e.request));
});
