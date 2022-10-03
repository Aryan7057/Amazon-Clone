import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOwWxJFrmL2tLW2sou0EXETVV5aqi6DNI",
  authDomain: "clone-13c9e.firebaseapp.com",
  projectId: "clone-13c9e",
  storageBucket: "clone-13c9e.appspot.com",
  messagingSenderId: "117097419034",
  appId: "1:117097419034:web:bf5d5b682b3f30d7bd5ca3",
  measurementId: "G-FQK5TWHC5S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };