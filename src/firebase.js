import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLCtj-P3fkC93vD3EcmYfiODmo_GyCrVk",
  authDomain: "challenge-b40f5.firebaseapp.com",
  projectId: "challenge-b40f5",
  storageBucket: "challenge-b40f5.appspot.com",
  messagingSenderId: "834590260814",
  appId: "1:834590260814:web:85a23c27a7c737f7204d1f"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };