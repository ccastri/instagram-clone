// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm9ah_3jYtP4Zbi-oWrtsRMtNmx2cHWc0",
    authDomain: "insta-clone-db84f.firebaseapp.com",
    projectId: "insta-clone-db84f",
    storageBucket: "insta-clone-db84f.appspot.com",
    messagingSenderId: "783513979725",
    appId: "1:783513979725:web:2401d4cf694b2a08234504"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage }
