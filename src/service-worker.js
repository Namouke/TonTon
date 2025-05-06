// service-worker.js
/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

clientsClaim();
self.skipWaiting();

// Prend les ressources listées dans le manifest (injectées par CRA build)
precacheAndRoute(self.__WB_MANIFEST || []);
cleanupOutdatedCaches();
