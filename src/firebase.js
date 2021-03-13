import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAl5ugBNJplYPSX1Lfd3LuZa7O-q9NWO9g",
    authDomain: "day-boost.firebaseapp.com",
    projectId: "day-boost",
    storageBucket: "day-boost.appspot.com",
    messagingSenderId: "234547727200",
    appId: "1:234547727200:web:4bcfa17e2a986cfeecec05",
    measurementId: "G-P9RWVEW9LE",
});

export const auth = app.auth();
export const urlRef = firebase.firestore().collection("urls");
export default app;
