self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/css/pico.classless.min.css',
        '/favicon-512x512.png',
        '/favicon.svg',
        '/manifest.json',
        '/koo-maa-yo-yim-hai-gap-sat-ruu-tii-lap-l-i.png',
        '/koo-maa-yo-yim-hai-gap-sat-ruu-tii-lap-l-i.webp',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
