var cacheName = 'video-dreams';
var filesToCache = [
  '/index.html',
  '/static/css/main.be8a6ace.chunk.css',
  '/static/js/main.adb58295.chunk.js',
  '/static/css/2.9616a389.chunk.css',
  '/static/css/main.2f4ffd25.chunk.css',
  '/static/js/2.524eb2da.chunk.js',
  '/static/js/main.886cc1ab.chunk.js',
  '/static/js/runtime~main.a8a9905a.js',
  '/images/*'
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});