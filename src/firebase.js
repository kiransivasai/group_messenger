import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // Add firebase config here
});

const db = firebaseApp.firestore();

export default db;
