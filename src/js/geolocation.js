import {auth} from '../js/firebase.js';
import {showLocation, position, continent, territory, country, county, district, latitude, longitude} from '../js/store.js';
import Modal from '../components/modal.svelte';
// Location

export var locationData;
var newData
var token;

export function getLocation() {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(
       function(position) {
         // position.coords.longitude
         // position.coords.latitude 
         // position.coords.accuracy 
         // position.coords.altitudeAccuracy
         // position.coords.heading 
         // position.coords.speed 
         // position.timestamp  
         console.log("Calling Geolocation");
        showLocation.set(position);
         var latitudeFull = position.coords.latitude;
         var longitudeFull = position.coords.longitude;
         console.log(showLocation);
         formatLocation(longitudeFull,latitudeFull);
         },
         function errorCallback(error) {
           console.log(error);
           console.log("Geolocation Error");
         },
         {
             timeout:8000
         },
         { enableHighAccuracy: true }
     );
   } else { 
     console.log("Geolocation is not supported by this browser.");
   }
 }
 function formatLocation(longitudeFull,latitudeFull) {
  console.log("Format Geolocation");
  latitude.set(latitudeFull.toFixed(4));
  longitude.set(longitudeFull.toFixed(4));
  locationData = locationApi(latitude,longitude);
 }
 async function locationApi(latitude, longitude) {
   if (latitude != undefined && longitude != undefined ) {
     console.log("Calling Mapbox");
     const geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
     const accessToken = "pk.eyJ1Ijoiam9zaHdhbGtlciIsImEiOiJZZ092bC1jIn0.biUwNatSPRog-uFhhxyF-A"
     let response = await fetch(`${geocodingURL}-3.0944,53.3443.json?types=place&access_token=${accessToken}`);
     var data = await response.json();
     console.log(data.features);
     var testData = data.features[0].place_name;
     newData = testData.replace(/\,\s/g, ',');
     var array = newData.split(',');
     continent.set("Europe");
     territory.set(array[3]);
     country.set(array[2]);
     county.set(array[1]);
     district.set(array[0]);
     console.log(continent);
     console.log(territory);
     console.log(country);
     console.log(county);
     console.log(district);
     auth.currentUser.getIdToken().then(function(token) {
       console.log(token);
       apiCheck();
     });
     return data;
   } else {
     console.log("Mapbox Error");
   }
   return;
 }
 function apiCheck() {
   console.log("API Check");
   if (typeof localStorage !== 'undefined') {
     try {
         localStorage.setItem('localStorage_Test', 'yes');
         if (localStorage.getItem('localStorage_Test') === 'yes') {
             localStorage.removeItem('localStorage_Test');
             if (localStorage.getItem('Continent') !== continent) {
               localStorage.setItem('Continent', continent);
               console.log("New Continent");
               continentApi(newData);
             }
             if (localStorage.getItem('Territory') !== territory) {
               localStorage.setItem('Territory', territory);
               console.log("New Territory");
               territoryApi(newData);
             }
           
             if (localStorage.getItem('Country') !== country) {
               localStorage.setItem('Country', country);
               console.log("New Country");
               countryApi(newData);
             }
           
             if (localStorage.getItem('County') !== county) {
               localStorage.setItem('County', county);
               console.log("New County");
               countyApi(newData);
             }
             if (localStorage.getItem('District') !== district) {
               localStorage.setItem('District', district);
               console.log("New District");
               districtApi(newData);
             }
         } else {
           console.log(" localStorage is disabled");
         }
     } catch(e) {
         console.log(" localStorage is disabled - Error");
         apiBackup();
     }
   } else {
     console.log(" localStorage is not available");
   }
 }
 function apiBackup() {
  console.log("Backup API Call");
   continentApi(newData);
   territoryApi(newData);
   countryApi(newData);
   countyApi(newData);
   districtApi(newData);
 }
 if ( process.env.NODE_ENV == "production") {
   var apiUrl = 'https://us-central1-odyssey-65e36.cloudfunctions.net/app/';
 } else {
   var apiUrl = 'http://localhost:5000/odyssey-65e36/us-central1/app/';
 }

 export async function newAccountApi() {
   auth.currentUser.getIdToken().then(function(token) {
     console.log('Sending request to', apiUrl+"api/hello", 'with ID token in Authorization header.');
     var req = new XMLHttpRequest();
     req.onload = function() {
       console.log(req.responseText);
     };
     req.onerror = function() {
       this.responseContainer.innerText = 'There was an error';
     };
     req.open('GET', apiUrl+"api/hello", true);
     req.setRequestHeader('Authorization', 'Bearer ' + token);
     req.send();
   });
 } 

 async function continentApi(testData) {
   auth.currentUser.getIdToken().then(function(token) {
     console.log('Sending request to', apiUrl+"api/continent", 'with ID token in Authorization header.');
     var req = new XMLHttpRequest();
     req.onload = function() {
       console.log(req.responseText);
     };
     req.onerror = function() {
       this.responseContainer.innerText = 'There was an error';
     };
     req.open('GET', apiUrl+"api/continent", true);
     req.setRequestHeader('Authorization', 'Bearer ' + token);
     req.setRequestHeader('location', testData);
     req.send();
   });
 } 

 async function territoryApi(testData) {
   auth.currentUser.getIdToken().then(function(token) {
     console.log('Sending request to', apiUrl+"api/territory", 'with ID token in Authorization header.');
     var req = new XMLHttpRequest();
     req.onload = function() {
       console.log(req.responseText);
     };
     req.onerror = function() {
       this.responseContainer.innerText = 'There was an error';
     };
     req.open('GET', apiUrl+"api/territory", true);
     req.setRequestHeader('Authorization', 'Bearer ' + token);
     req.setRequestHeader('location', testData);
     req.send();
   });
 } 

 async function countryApi(testData) {
   auth.currentUser.getIdToken().then(function(token) {
     console.log('Sending request to', apiUrl+"api/country", 'with ID token in Authorization header.');
     var req = new XMLHttpRequest();
     req.onload = function() {
       console.log(req.responseText);
     };
     req.onerror = function() {
       this.responseContainer.innerText = 'There was an error';
     };
     req.open('GET', apiUrl+"api/country", true);
     req.setRequestHeader('Authorization', 'Bearer ' + token);
     req.setRequestHeader('location', testData);
     req.send();
   });
 } 

 async function countyApi(testData) {
   auth.currentUser.getIdToken().then(function(token) {
     console.log('Sending request to', apiUrl+"api/county", 'with ID token in Authorization header.');
     var req = new XMLHttpRequest();
     req.onload = function() {
       console.log(req.responseText);
     };
     req.onerror = function() {
       this.responseContainer.innerText = 'There was an error';
     };
     req.open('GET', apiUrl+"api/county", true);
     req.setRequestHeader('Authorization', 'Bearer ' + token);
     req.setRequestHeader('location', testData);
     req.send();
   });
 }

 async function districtApi(testData) {
   auth.currentUser.getIdToken().then(function(token) {
     console.log('Sending request to', apiUrl+"api/district", 'with ID token in Authorization header.');
     var req = new XMLHttpRequest();
     req.onload = function() {
       console.log(req.responseText)
       if (req.responseText != "District Badge Already Achieved: E08000015") {
         modal.show();
       };
     };
     req.onerror = function() {
       this.responseContainer.innerText = 'There was an error';
     };
     req.open('GET', apiUrl+"api/district", true);
     req.setRequestHeader('Authorization', 'Bearer ' + token);
     req.setRequestHeader('location', testData);
     req.send();
   });
 }