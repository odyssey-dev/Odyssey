<Page name="home" class="transparent">
  {#if $userstate == true }
  <main class="main-page">
    <div class="main-content">

      <!-- Profile-Card component -->
      <section class="top-card">
        <div class="card-block">
          <div class="card-content" on:click={() => profile.show()}>
            <div class="profile-block">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img class="profile-picture" src="{$userprofile.photoUrl}" alt="profile picture" width="50" height="50">
              <div class="profile-data">
                <div><p class="profile-name">{$userprofile.displayName}</p></div>
                <div><p class="profile-name">🧭 1,500</p></div>
              </div>
            </div>
          </div>
            <Profile bind:this={profile}></Profile>
        </div>
      </section>

      <!-- To Be Exported to 'achievement-get' -->
      <Modal bind:this={modal}>
          <div class="achievement-get">
              <h1 class="badge-notif">Badge Unlocked!</h1>
              <img id="badge-img" src="../static/badge/sample-badge.svg" alt="badge">
              <h3 class="badge-name">Badge Name Here</h3>
          </div>
      </Modal>

      <!-- Current-Location-Card Component -->
    <section class="location-card">
      <div class="card-block">
        {#if showLocation != undefined }
        {#await locationData}
        <div></div>
        {:then location}
        <div class="card-content">
                <h1 class="card-content-title">{district}</h1>
                <h3 class="card-content-subtitle">{county}</h3>
                <div class="card-content-info"> 
                  <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/2948/2948111.svg" alt="flag">
                <div class="card-content-text">{latitude}, {longitude}</div>
                  <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/197/197485.svg" alt="flag">
              <div class="card-content-text">{country}</div>
            </div>
          </div>
        {:catch error}
          <p style="color: red">{error.message}</p>
        {/await}
        {:else}
          <div class="card">
            <Button fill raised on:click={getLocation}>Discover</Button>
          </div> 
        {/if}
      </div>
    </section>
  </main>
  {:else if $userstate == false}
    <Landing></Landing> <!-- Show Landing Page -->
  {:else}
    <LoadingIcon></LoadingIcon> <!-- Show Loading Icon -->
  {/if}
</Page>

<style>
      /* Page */
  .main-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-self: center;
    height: 100vh;
    overflow: hidden;
  }
  .main-content {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    justify-self: center;
    height: 100%;
  }

    /* Card Formatting */
  .card-block {
    display: flex;
    flex-direction: column;
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 2%;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .card-content {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 16px;
  }

  .card-content-title {
    margin-top: 8px;
    margin-bottom: 0px;
    font-size: 30px;
    font-weight: 600;
    font-family: 'Rubik', sans-serif;
  }

  .card-content-subtitle {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 6pt;
    font-weight: 500;
    color: #848483;
  }

  .card-content-info {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-evenly;
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;  
  }

  .card-content-text {
    margin-right: 14px;
    font-weight: bolder;
    color: #848484;
    margin-right: 0;
  }
  .flag-icons {
    margin-right: 4px;
    margin-left: 4px;
    height: 16px;
    width: 16px;
  }

  .profile-picture {
    display: flex;
    border-radius: 50%;
  }

  .profile-block {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile-data {
    margin: 0;
    display: flex;
    flex-direction: column;
    
  }

  .profile-name {
    margin: 0;
    margin-left: 10pt;
    font-size: 12pt;
    font-weight: 500;
  }
/* to be exported to achievement-get */
  .achievement-get {
      display: flex;
      flex-direction: column;
  }
  .badge-notif {
      font-family: 'Rubik', sans-serif;
      font-size: 18pt;
      font-weight: 600;
      margin-top: 0;
  }
  .badge-name {
      font-family: 'Roboto', sans-serif;
      font-size: 12pt;
      font-weight: 400;
      margin-bottom: 0;
  }
  #badge-img {
      height: 60%;
  }

      /* Sections */

  .top-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
  }

</style>

<script>
  // Importing Login/user functionality
  import {userstate, userprofile} from '../js/store.js';
  import {onAuthStateChanged} from '../js/userstate.js';
  import Logout from '../components/logout.svelte';
  import {auth} from '../js/firebase.js';

  var devtools = true;
  // Location
  var showLocation;
  var latitudeFull;
  var longitudeFull;  
  var latitude;
  var longitude;
  var locationData;
  var newData;


  var continent;
  var territory;
  var country;
  var county;
  var district;
 function getLocation() {
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
          showLocation = position;
          latitudeFull = showLocation.coords.latitude;
          longitudeFull = showLocation.coords.longitude;
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
    latitude = latitudeFull.toFixed(4);
    longitude = longitudeFull.toFixed(4);
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
      continent = "Europe";
      territory = array[3];
      country = array[2];
      county = array[1];
      district = array[0];
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
                continentApi(newData);
              }
              if (localStorage.getItem('Territory') !== territory) {
                localStorage.setItem('Territory', territory);
                territoryApi(newData);
              }
            
              if (localStorage.getItem('Country') !== country) {
                localStorage.setItem('Country', country);
                countryApi(newData);
              }
            
              if (localStorage.getItem('County') !== county) {
                localStorage.setItem('County', county);
                countyApi(newData);
              }
              if (localStorage.getItem('District') !== district) {
                localStorage.setItem('District', district);
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
    continentApi(newData);
    territoryApi(newData);
    countryApi(newData);
    countyApi(newData);
    districtApi(newData);
  }
  if ( process.env.NODE_ENV == "production") {
    var apiUrl = 'https://us-central1-odyssey-65e36.cloudfunctions.net/app';
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
          playBadgeNotificationAudio();
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
  import {
    Page,
    Card,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
    Popup
  } from 'framework7-svelte';
  
  // importing functionality
  import Landing from '../components/landing.svelte';
  import LoadingIcon from '../components/loading.svelte';
  // import AchievementGet from '../components/achievement-get.svelte'; needs to be created
  import Profile from '../components/profile.svelte';
  let profile;
  
  document.addEventListener("DOMContentLoaded", function(){
    console.log("Ready");
  });

  // move to achievement-get component
  import Modal from "../components/modal.svelte";
  let modal;
  let badgeNotificationAudio = new Audio("../static/audio/app_alert_tone_011.mp3");
  function playBadgeNotificationAudio() {
    badgeNotificationAudio.play();
  }
</script>