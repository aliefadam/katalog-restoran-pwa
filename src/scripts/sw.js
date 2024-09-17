// import "regenerator-runtime";
// import CacheHelper from "./utils/cache-helper";

// const assetsToCache = [
//   "./",
//   "./icons/icon-192x192.png",
//   "./index.html",
//   "./favicon.png",
//   "./app.bundle.js",
//   "./app.webmanifest",
//   "./sw.bundle.js",
// ];

// self.addEventListener("install", (event) => {
//   console.log("Installing Service Worker ...");

//   // TODO: Caching App Shell Resource
//   event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
// });

// self.addEventListener("activate", (event) => {
//   console.log("Activating Service Worker ...");

//   // TODO: Delete old caches
//   event.waitUntil(CacheHelper.deleteOldCache());
// });

// self.addEventListener("fetch", (event) => {
//   console.log(event.request);

//   // TODO: Add/get fetch request to/from caches
//   const url = new URL(event.request.url);

//   if (url.protocol === "chrome-extension:") {
//     // Skip caching chrome-extension requests
//     return;
//   }

//   event.respondWith(CacheHelper.revalidateCache(event.request));
// });

import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

precacheAndRoute(self.__WB_MANIFEST);

const catalougeRestaurantAPI = new Route(
  ({ url }) => url.href.startsWith("https://restaurant-api.dicoding.dev"),
  new StaleWhileRevalidate({
    cacheName: "catalouge-restaurant-api",
  })
);

const catalougeRestaurantImageAPI = new Route(
  ({ url }) =>
    url.href.startsWith("https://restaurant-api.dicoding.dev/images/large/"),
  new StaleWhileRevalidate({
    cacheName: "catalouge-restaurant-image-api",
  })
);

registerRoute(catalougeRestaurantAPI);
registerRoute(catalougeRestaurantImageAPI);
console.log("TESTING");

self.addEventListener("install", () => {
  // console.log("Service Worker: Installed");
  self.skipWaiting();
});

self.addEventListener("push", (event) => {
  // console.log("Service Worker: Pushed");

  const notificationData = {
    title: "Push Notification",
    options: {
      body: "Testing Notification",
      icon: "/favicon.png",
      image: "/icons/icon-512x512.jpg",
    },
  };

  const showNotification = self.registration.showNotification(
    notificationData.title,
    notificationData.options
  );

  event.waitUntil(showNotification);
});
