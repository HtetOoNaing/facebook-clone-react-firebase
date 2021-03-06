// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBWR7wJufQlVFmD4wgbeq5aex-XeDyIgew",
  authDomain: "facebook-clone-7987e.firebaseapp.com",
  databaseURL: "https://facebook-clone-7987e.firebaseio.com",
  projectId: "facebook-clone-7987e",
  storageBucket: "facebook-clone-7987e.appspot.com",
  messagingSenderId: "746645291212",
  appId: "1:746645291212:web:50b9ef6148bfa315358269",
  measurementId: "G-3C9PGGQSMX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
