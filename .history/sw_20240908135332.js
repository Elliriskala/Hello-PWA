var cacheName = 'hello-pwa';
var filesToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/main.js',
  './fonts/Roboto_Mono/static/RobotoMono-Regular.ttf',
  './images/background5.jpg'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then( async (cache) => {
      try {
        await cache.addAll(filesToCache);
        console.log('Files cached successfully');
      } catch (error) {
        console.error('Error caching files:', error);
        for (let file of filesToCache) {
          try {
            await cache.add(file);
            console.log('Cached successfully:', file);
          } catch (e) {
            console.error('Failed to cache:', file, e);
          }
        }
      }
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
