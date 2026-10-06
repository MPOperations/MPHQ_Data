// MPHQ launcher service worker — v1.0
// Minimal: only exists so browsers that require a service worker offer "Install app".
// Caches nothing; every request goes to the network.
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).catch(function() {
      return new Response('Offline — please check your connection.', {
        status: 503, headers: { 'Content-Type': 'text/plain' }
      });
    })
  );
});
