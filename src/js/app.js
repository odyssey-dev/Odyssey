// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Svelte Plugin
import Framework7Svelte from 'framework7-svelte';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.svelte';
import * as firebase from 'firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDItGG1opisGpeiVW-u18Ao4qy0ctFRQ1k",
  authDomain: "odysseyapp.dev",
  databaseURL: "https://odyssey-65e36.firebaseio.com",
  projectId: "odyssey-65e36",
  storageBucket: "odyssey-65e36.appspot.com",
  messagingSenderId: "472825991254",
  appId: "1:472825991254:web:ec6f2163e9183667952bf7",
  measurementId: "G-7HLL2Q93W8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Init F7 Svelte Plugin
Framework7.use(Framework7Svelte)

// Mount Svelte App
const app = new App({
  target: document.getElementById('app'),
});