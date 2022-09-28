// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDadqGnSedRZxGaukFOgIl_hZearXRcGgA",
    authDomain: "instagram-clone-4276d.firebaseapp.com",
    projectId: "instagram-clone-4276d",
    storageBucket: "instagram-clone-4276d.appspot.com",
    messagingSenderId: "1045332612298",
    appId: "1:1045332612298:web:eea41955e7b3d1a0e09033",
    measurementId: "G-LKSTEHQETP"
};

// Initialize Firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage }
