// Required for side-effects
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_MY_KEY,
    authDomain: process.env.REACT_APP_MY_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_MY_PROJECT_ID,
    storageBucket: process.env.REACT_APP_MY_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MY_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_MY_APP_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export
//const firestore = firebase.firestore(app);
const auth = getAuth()

export {
    firebase,
    auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
};
