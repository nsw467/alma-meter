import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAmEZWav-dP-UwBAFgC894GYacZ5MvKq5k",
  authDomain: "almameter-22b4f.firebaseapp.com",
  databaseURL: "https://almameter-22b4f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "almameter-22b4f",
  storageBucket: "almameter-22b4f.appspot.com",
  messagingSenderId: "578719573241",
  appId: "1:578719573241:web:4f36b8fb97ba9b259aee28",
  measurementId: "G-W8QBSZH1TL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
