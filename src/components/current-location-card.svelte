
{#await locationData}
  <LoadingIcon></LoadingIcon>
{:then location}
  <div></div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
{#if $district != undefined }
  <div class="card-block">
    <div class="hero-card">
      <h1 class="hero-card-title">{$district}</h1>
      <h3 class="hero-card-subtitle">{$county}</h3>
      <div class="hero-card-info"> 
          <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/2948/2948111.svg" alt="flag">
          <div class="hero-card-text">{$latitude}, {$longitude}</div>
          <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/197/197485.svg" alt="flag">
          <div class="hero-card-text">{$country}</div>
      </div>
    </div>
  </div>

{:else} 
<div class="card-block">
  <h3 class="location-prompt">
    Enable Location Services
    <Icon ios="f7:location_slash" aurora="f7:location_slash" md="material:location_off"></Icon>
  </h3>
</div>
{/if}

<script>

// Importing Geo Location functionality
import { locationData, getLocation} from '../js/geolocation.js';
import { showLocation, continent, territory, country,county,district,  latitude, longitude} from '../js/store.js';
import LoadingIcon from '../components/loading.svelte';

import {
  Icon,
  Badge
  } from 'framework7-svelte';

locationCheck();
function locationCheck() {
  console.log("Location Check");
  if (typeof localStorage !== 'undefined') {
    try {
        localStorage.setItem('localStorage_Test', 'yes');
        if (localStorage.getItem('localStorage_Test') === 'yes') {
            localStorage.removeItem('localStorage_Test');
            
            if (localStorage.getItem('Continent')) {
              continent.set(localStorage.getItem('Continent')); 
              console.log("Continent", $continent);
              console.log($continent);
            }
            if (localStorage.getItem('Territory')) {
              territory.set(localStorage.getItem('Territory')); 
              console.log("Territory",  $territory);
              console.log($territory);
            }
          
            if (localStorage.getItem('Country')) {
              country.set(localStorage.getItem('Country')); 
              console.log("Country", $country);
              console.log($country);
            }
          
            if (localStorage.getItem('County')) {
              county.set(localStorage.getItem('County')); 
              console.log("County", $county);
              console.log($county);
            }
            if (localStorage.getItem('District')) {
              district.set(localStorage.getItem('District')); 
              console.log("District", $district);
              console.log($district);
            }

            if (localStorage.getItem('Latitude')) {
              latitude.set(localStorage.getItem('Latitude')); 
              console.log("Latitude", $latitude);
              console.log($latitude);
            }

            if (localStorage.getItem('Longitude')) {
              longitude.set(localStorage.getItem('Longitude')); 
              console.log("Longitude", $longitude);
              console.log($longitude);
            }
        } else {
          console.log(" localStorage is disabled");
        }
    } catch(e) {
        console.log(" localStorage is disabled - Error");
        locationBackup();
    }
  } else {
    console.log(" localStorage is not available");
  }
}
function locationBackup() {
 console.log("Backup Location");
}



</script>


<style>
  .card-block {
    display: flex;
    flex-direction: column;
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 2%;
  }
  .hero-card {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 16px;
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

  .location-prompt {
    text-align: center;
    vertical-align: middle;
  }
</style>