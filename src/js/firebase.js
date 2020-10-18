// Firebase 
import * as firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 

export var firebaseConfig = {
  apiKey: "AIzaSyCyx2lcqANo_cve5LXWcV6_75dX1KJBy-0",
  authDomain: "odyssey-65e36.firebaseapp.com",
  databaseURL: "https://odyssey-65e36.firebaseio.com",
  projectId: "odyssey-65e36",
  storageBucket: "odyssey-65e36.appspot.com",
  messagingSenderId: "472825991254",
  appId: "1:472825991254:web:af0d44280fc63e5a952bf7",
  measurementId: "G-M8LPY480WP"
};
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const performance = firebase.performance();
export const auth = firebase.auth();
// export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();