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

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("push", (event) => {
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
