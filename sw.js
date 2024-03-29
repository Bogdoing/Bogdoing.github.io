const CACHE_NAME = `my-sample-app-cache-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(['/']);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    try {
      // Try to fetch the resource from the network.
      const fetchResponse = await fetch(event.request);

      // Save the resource in the cache.
      cache.put(event.request, fetchResponse.clone());

      // And return it.
      return fetchResponse;
    } catch (e) {
      // Fetching didn't work get the resource from the cache.
      const cachedResponse = await cache.match(event.request);

      // And return it.
      return cachedResponse;
    }
  })());
});

// window.addEventListener('beforeinstallprompt', (event) => {
//   // Предотвращаем отображение стандартного диалогового окна браузера
//   event.preventDefault();
//   // Отображаем свой диалоговое окно для установки приложения
//   // ...
// });