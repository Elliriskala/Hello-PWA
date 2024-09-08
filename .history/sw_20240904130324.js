var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then( (cache) => {
      return cache.addAll(filesToCache);
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

const target = document.querySelector('.fullscreen')
const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');

paragraphElement.innerHTML = 'This is a simple Progressive Web App (PWA) example.';

divElement.appendChild(paragraphElement);
target.appendChild(divElement);
