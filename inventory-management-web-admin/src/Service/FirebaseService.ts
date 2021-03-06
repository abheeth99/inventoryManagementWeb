import firebase from 'firebase/app';
import 'firebase/messaging';
import { setToken } from '../api/TokenApi';
import Utility from '../Model/Utility';


var firebaseConfig = {
  apiKey: "AIzaSyAOsTvFpfrLrHiXjD_5hYQXtYYWJ2L_GKs",
  authDomain: "inventorymanagement-5767e.firebaseapp.com",
  projectId: "inventorymanagement-5767e",
  storageBucket: "inventorymanagement-5767e.appspot.com",
  messagingSenderId: "329387777915",
  appId: "1:329387777915:web:72c08611f1fba4c2ff67de"
};

// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const messaging = firebase.messaging();

export const requestPermission = () => {
  return messaging.requestPermission().
    then(() => {
      getToken();
    }).catch((err) => {
      console.log("Permission not granted!!", err)
    })

}

const getToken = () => {
  messaging.getToken({ vapidKey: 'BJf4ewxuRrREBzFzoQtllqs2T9F-MU-IGeWwtWqKPn1B-XvVmlJ3ZgnJ_UC6SeUadbpS_Ej-rIge0rawinRvb7k' }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
     
      (async function(){
          const utilityToken = new Utility();
          utilityToken.Name = "Token";
          utilityToken.Value = currentToken;

          const tokenResponse =await setToken(utilityToken);
          console.log("tokenResponse", tokenResponse);
      })();    
 
    } else {
      console.log('No registration token available. Request permission to generate one.');
      //setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const getPayload = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });