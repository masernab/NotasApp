import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKasgMISX_eHgC-1TJm2nSn8XchoIvBvs",
    authDomain: "react-app-curso-masb.firebaseapp.com",
    projectId: "react-app-curso-masb",
    storageBucket: "react-app-curso-masb.appspot.com",
    messagingSenderId: "386950767802",
    appId: "1:386950767802:web:6a327a25e5680e6d248e83",
    measurementId: "G-N5ZN2VZJ98"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

