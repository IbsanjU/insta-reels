// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyAwUDM48vAtXStwDq8Dwpk-1umgsWpDDuQ",
   authDomain: "ibs-react.firebaseapp.com",
   projectId: "ibs-react",
   storageBucket: "ibs-react.appspot.com",
   messagingSenderId: "264063476519",
   appId: "1:264063476519:web:f1512e4e9c62c39ee5bf02",
   measurementId: "G-7V4TLX6LGG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;