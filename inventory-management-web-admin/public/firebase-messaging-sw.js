// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyAOsTvFpfrLrHiXjD_5hYQXtYYWJ2L_GKs",
    authDomain: "inventorymanagement-5767e.firebaseapp.com",
    projectId: "inventorymanagement-5767e",
    storageBucket: "inventorymanagement-5767e.appspot.com",
    messagingSenderId: "329387777915",
    appId: "1:329387777915:web:72c08611f1fba4c2ff67de"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});