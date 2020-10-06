// Firebase 
import * as firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
export var firebaseConfig = {
  apiKey: "AIzaSyDItGG1opisGpeiVW-u18Ao4qy0ctFRQ1k",
  authDomain: "odyssey-65e36.firebaseapp.com",
  databaseURL: "https://odyssey-65e36.firebaseio.com",
  projectId: "odyssey-65e36",
  storageBucket: "odyssey-65e36.appspot.com",
  messagingSenderId: "472825991254",
  appId: "1:472825991254:web:ec6f2163e9183667952bf7",
  measurementId: "G-7HLL2Q93W8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const performance = firebase.performance();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();