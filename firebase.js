const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '',
    authDomain: 'namaste-53ddb.firebaseapp.com',
    projectId:'namaste-53ddb'
});
const db = firebase.firestore();
export { db };