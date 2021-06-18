import firebase from 'firebase/app';
import 'firebase/messaging';
import { setToken } from '../api/TokenApi';
import Utility from '../Model/Utility';

export default class FirebaseService {

    firebaseConfig = {
        apiKey: "AIzaSyAOsTvFpfrLrHiXjD_5hYQXtYYWJ2L_GKs",
        authDomain: "inventorymanagement-5767e.firebaseapp.com",
        projectId: "inventorymanagement-5767e",
        storageBucket: "inventorymanagement-5767e.appspot.com",
        messagingSenderId: "329387777915",
        appId: "1:329387777915:web:72c08611f1fba4c2ff67de",
        vapidKey: "BJf4ewxuRrREBzFzoQtllqs2T9F-MU-IGeWwtWqKPn1B-XvVmlJ3ZgnJ_UC6SeUadbpS_Ej-rIge0rawinRvb7k"
    };

    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(this.firebaseConfig);
        } else {
            firebase.app(); // if already initialized, use that one
        }
    }

    grantFirebasePermission = (): Promise<boolean> => {
        return new Promise((resolve) => {
            firebase.messaging().requestPermission().then(() => {
                this.generateToken();
                resolve(true);
            }).catch((err: any) => {
                console.log("Permission issue", err);
            })
        })
    }

    generateToken = () => {
        firebase.messaging().getToken({ vapidKey: this.firebaseConfig.vapidKey }).then((currentToken: string) => {
            if (currentToken) {
                console.log('current token for client: ', currentToken);

                (async function(){
                    const utilityToken = new Utility();
                    utilityToken.Name = "Token";
                    utilityToken.Value = currentToken;
          
                    const tokenResponse =await setToken(utilityToken);
                    console.log("tokenResponse", tokenResponse);
                })();

                //this.getPayload();
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err: any) => {
            console.log('An error occurred while retrieving token. ', err);

        });
    }
}

export const getPayload = () =>
    new Promise((resolve) => {
        firebase.messaging().onMessage((payload) => {
            resolve(payload);
        });
    });