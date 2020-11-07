import {auth} from '../js/firebase.js';
import { SaveLastUpdatedDate } from '../js/LastUpdated.js';
import { showLocation, position, continent, territory, country, county, district, latitude, longitude} from '../js/store.js';
import { network } from '../js/networkCheck.js';
// Location

export var locationData;
var newData
var token;

var continentLoc;
var territoryLoc;
var countryLoc;
var countyLoc;
var districtLoc;

var longitudeLoc;
var latitudeLoc;

getLocation();

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
  //  stored vars 
  latitude.set(latitudeFull.toFixed(4));
  longitude.set(longitudeFull.toFixed(4));
  //  local vars
  latitudeLoc = latitudeFull.toFixed(4);
  longitudeLoc = longitudeFull.toFixed(4);

  if (network == true) {
    locationData = mapboxCheck(longitudeLoc,latitudeLoc);
  } else {
    console.log("Offline");
  }

 }

 function mapboxCheck(longitudeLoc,latitudeLoc) {
  console.log("MapBox API Check");
  if (typeof localStorage !== 'undefined') {
    try {
        localStorage.setItem('localStorage_Test', 'yes');
        if (localStorage.getItem('localStorage_Test') === 'yes') {
            localStorage.removeItem('localStorage_Test');

            if (localStorage.getItem('Latitude') !== latitudeLoc && localStorage.getItem('Longitude') !== longitudeLoc) {
              localStorage.setItem('Latitude', latitudeLoc);
              localStorage.setItem('Longitude', longitudeLoc);
              console.log("Longitude, Latitude has Changed");
              locationApi(longitudeLoc,latitudeLoc);
            } else {
              console.log("Longitude, Latitude hasn't Changed");
            }

        } else {
          console.log(" localStorage is disabled");
        }
    } catch(e) {
        console.log(" localStorage is disabled - Error", e);
        locationApi(longitudeLoc,latitudeLoc);
    }
  } else {
    console.log(" localStorage is not available");
  }
}

 async function locationApi(latitude, longitude) {
   if (latitude != undefined && longitude != undefined ) {
     console.log("Calling Mapbox");
     const geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
     const accessToken = "pk.eyJ1Ijoiam9zaHdhbGtlciIsImEiOiJZZ092bC1jIn0.biUwNatSPRog-uFhhxyF-A"
     let response = await fetch(`${geocodingURL}${latitude},${longitude}.json?types=place&access_token=${accessToken}`);
     var data = await response.json();

     SaveLastUpdatedDate();

     console.log("locationApi:",data.features);
     var testData = data.features[0].place_name;
     newData = testData.replace(/\,\s/g, ',');
     var array = newData.split(',');
      //  stored vars
     continent.set("Europe");
     territory.set(array[3]);
     country.set(array[2]);
     county.set(array[1]);
     district.set(array[0]);

    //  local vars
    continentLoc = "Europe";
    territoryLoc = array[3];
    countryLoc = array[2];
    countyLoc = array[1];
    districtLoc = array[0];

    auth.currentUser.getIdToken().then(function(token) {
       apiCheck();
     });
     return data;
   } else {
     console.log("Mapbox Error");
   }
   return;
 }

 function apiCheck() {
   console.log("Odyssey API Check");
   if (typeof localStorage !== 'undefined') {
     try {
         localStorage.setItem('localStorage_Test', 'yes');
         if (localStorage.getItem('localStorage_Test') === 'yes') {
             localStorage.removeItem('localStorage_Test');

             if (localStorage.getItem('Continent') !== continentLoc) {
               localStorage.setItem('Continent', continentLoc);
               console.log("Continent has Changed");
              //  console.log($continent)
               continentApi(newData);
             } else {
              console.log("Continent hasn't Changed");
            }

             if (localStorage.getItem('Territory') !== territoryLoc) {
               localStorage.setItem('Territory', territoryLoc);
               console.log("Territory has Changed");
              //  console.log($territory)
               territoryApi(newData);
             } else {
              console.log("Territory hasn't Changed");
            }

             if (localStorage.getItem('Country') !== countryLoc) {
               localStorage.setItem('Country', countryLoc);
               console.log("Country has Changed");
              //  console.log($country)
               countryApi(newData);
             } else {
              console.log("Country hasn't Changed");
            }
   
             if (localStorage.getItem('County') !== countyLoc) {
               localStorage.setItem('County', countyLoc);
               console.log("County has Changed");
              //  console.log($county)
               countyApi(newData);
             } else {
              console.log("County hasn't Changed");
            }

             if (localStorage.getItem('District') !== districtLoc) {
               localStorage.setItem('District', districtLoc);
               console.log("District has Changed");
              //  console.log($district)
               districtApi(newData);
             } else {
              console.log("District hasn't Changed");
            }

         } else {
           console.log(" localStorage is disabled");
         }
     } catch(e) {
         console.log(" localStorage is disabled - Error", e);
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
        console.log("District Badge Achieved");
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