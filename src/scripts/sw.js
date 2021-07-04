/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from "./utils/cache-helper";

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    console.log('Installing Service Worker ...');
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
    // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker ...');
    event.waitUntil(CacheHelper.deleteOldCache());

    // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
    console.log(event.request);

    // event.respondWith(fetch(event.request));
    event.respondWith(CacheHelper.revalidateCache(event.request));

    // TODO: Add/get fetch request to/from caches
});
