<Page name="home" class="transparent">

  {#if $userstate == true }
  <main>
    <div class="main-content">

      <!-- Profile-Card component -->
      <section class="top-card" on:click={() => profile.show()}>
        <div class="cards">
          <div class="card-block">
            <div class="hero-card">
              <div class="profile-info">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="pp" src="{$userprofile.photoUrl}" alt="profile picture" width="50" height="50">
                <div class="profile-txt">
                  <div class="profile-name"><p>{$userprofile.displayName}</p></div>
                  <div class="profile-points"><p>🧭 1,500</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <AchievementGet></AchievementGet> enable button to trigger Achievement popup-->
      <Profile bind:this={profile}></Profile>

      <!-- Current-Location-Card Component -->
      <div class="cards">
        {#if showLocation != undefined }
          {#await locationData}
            <div></div>
          {:then location}
            <div class="card-block">
              <div class="hero-card">
                <h1 class="hero-card-title">{location.features[2].text}</h1>
                <h3 class="hero-card-subtitle">{location.features[3].text}</h3>
                <div class="hero-card-info"> 
                    <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/2948/2948111.svg" alt="flag">
                    <div class="hero-card-text">{latitude}, {longitude}</div>
                    <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/197/197485.svg" alt="flag">
                    <div class="hero-card-text">{location.features[4].place_name}</div>
                </div>
              </div>
            </div>
          {:catch error}
            <p style="color: red">{error.message}</p>
          {/await}
        {/if}
      
        <div class="card-discover">
          <div class="cards">
            <div id="location" class="card-block">
              <Button fill raised on:click={getLocation}>Discover</Button>
            </div>
          </div>
        </div>
      <!-- Enable for debugging -->
      <!-- <div class="cards">
                <div class="card-block">
              <Logout></Logout>
                </div>
            </div>
      -->

      </div>
    </div>
  </main>

  {:else if $userstate == false}
    <Landing></Landing> <!-- Show Landing Page -->
  {:else}
    <LoadingIcon></LoadingIcon> <!-- Show Loading Icon -->
  {/if}
</Page>

<style>

  .card-block {
    padding: 16px; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 0;
    margin: 4%;
  }

  #location {
    margin-top: 0;
  }
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-self: center;
    height: 100vh;
  }

  .main-content {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    justify-self: center;
    height: 96%
  }

  .hero-card {
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  .hero-card-title {
    margin-top: 8px;
    margin-bottom: 0px;
    font-size: 30px;
    font-weight: 600;
    font-family: 'Rubik', sans-serif;
  }

  .hero-card-subtitle {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 6pt;
    font-weight: 500;
    color: #848483;
  }

  .hero-card-info {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-evenly;
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;  
  }

  .hero-card-text {
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

  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .top-card {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .pp {
    display: flex;
    border-radius: 50%;
  }

  .profile-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile-txt {
    margin-left: 5px;
  }

  .profile-txt p {
    display:flex;
    margin: 0px;
  }

  .profile-name {
    font-size: 14pt;
    font-weight: 600;
  }

</style>

<script>

  // Importing Login/user functionality
  import {userstate, userprofile} from '../js/store.js';
  import {onAuthStateChanged} from '../js/userstate.js';
  import Logout from '../components/logout.svelte';
  import {auth} from '../js/firebase.js';

  // Location
  var showLocation;
  var latitudeFull;
  var longitudeFull;  
  var latitude;
  var longitude;

  async function getLocation() {
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

          showLocation = position;
          latitudeFull = showLocation.coords.latitude;
          longitudeFull = showLocation.coords.longitude;
          console.log(showLocation);
          formatLocation(longitudeFull,latitudeFull);
          },
          function errorCallback(error) {
              // error handling
          },
          {
              timeout:5000
          },
          { enableHighAccuracy: true }
      );
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }

  }
  var locationData = locationApi();
  function formatLocation(longitudeFull,latitudeFull) {
    latitude = latitudeFull.toFixed(4);
    longitude = longitudeFull.toFixed(4);
    // var locationData = {longitude:longitude, latitude:latitude};
    // oneToOne(locationData);
    locationData = locationApi(latitude,longitude);

  }

  async function locationApi(latitude, longitude) {
    if (latitude != undefined && longitude != undefined ) {
      const geocodingURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
      const accessToken = "pk.eyJ1Ijoiam9zaHdhbGtlciIsImEiOiJZZ092bC1jIn0.biUwNatSPRog-uFhhxyF-A"
      let response = await fetch(`${geocodingURL}${longitude},${latitude}.json?access_token=${accessToken}`);
      var data = await response.json();
      var testData = data.features[2].place_name;
      pingApi(testData);
      return data;
    } 
    return;
  }

  if ( process.env.NODE_ENV == "production") {
    var apiUrl = 'https://us-central1-odyssey-65e36.cloudfunctions.net/app/ping';
  } else {
    var apiUrl = 'http://localhost:5000/odyssey-65e36/us-central1/app/ping';
  }


  async function pingApi(testData) {
    auth.currentUser.getIdToken().then(function(token) {
      console.log('Sending request to', apiUrl, 'with ID token in Authorization header.');
      var req = new XMLHttpRequest();
      req.onload = function() {
        console.log(req.responseText);
      };
      req.onerror = function() {
        this.responseContainer.innerText = 'There was an error';
      };
      req.open('GET', apiUrl, true);
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
  import AchievementGet from '../components/achievement-get.svelte';
  import Profile from '../components/profile.svelte';

  let profile;

</script>