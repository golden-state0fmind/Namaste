require('dotenv').config();
// Required for side-effects
import firebase from 'firebase/app';
import 'firebase/firestore';
// Initialize Cloud Firestore through Firebase
const firebaseConfig = {
    apiKey: process.env.api_Key,
    authDomain: process.env.auth_Domain,
    projectId: process.env.project_Id,
    storageBucket: process.env.storage_Bucket,
    messagingSenderId: process.env.messaging_SenderId,
    appId: process.env.app_Id
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};
//export
const firestore = firebase.firestore();

export { firebase, firestore };
