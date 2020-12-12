{#if shown}
{#await locationData}
  <LoadingIcon></LoadingIcon>
{:then location}
  <div></div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
{#if $district != undefined }
  <div class="card-parent">
    <div class="card-child">
      <h1 class="hero-card-title">{$district}</h1>
      <h3 class="hero-card-subtitle">{$county}</h3>
      <LastUpdated></LastUpdated>
      <div class="hero-card-info"> 
          <span class="long-lat">
            <img class="flag-icons" src="/static/svgs/location.svg" alt="location ico">
            <div class="hero-card-text">{$latitude}, {$longitude}</div>
          </span>
          <span class="flag">
            <img class="flag-icons" src={countryIco} alt="flag ico">
            <div class="hero-card-text">{$country}</div>
          </span>
      </div>
    </div>
  </div>
{:else} 
<div class="enable-block">
  <h3 class="location-prompt" on:click={getLocation} >
    Enable Location Services
    <Icon ios="f7:location_slash" aurora="f7:location_slash" md="material:location_off"></Icon>
  </h3>
  <h5>Tap to try again</h5>
</div>
{/if}
{/if}
<script>

// Importing Geo Location functionality
import { locationData, getLocation} from '../js/geolocation.js';
import { showLocation, continent, territory, country,county,district,  latitude, longitude} from '../js/store.js';
import LoadingIcon from './loading.svelte';
import LastUpdated from './lastUpdated.svelte';

import {
  Icon,
  Badge
  } from 'framework7-svelte';
import { network } from '../js/networkCheck.js';

let countryIco


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

    // default shown = false
    export let shown = true;

    // show function
    export function show() {
        if(shown === false) {
            shown = true;
        } else {
            shown = false;
        }
    }

    // This will need to be changed when we expand outside of the UK
    if ($country === "England") {
      countryIco = "/static/svgs/flags/gb-eng.svg";
    } else if ($country === "Wales") {
      countryIco = "/static/svgs/flags/gb-wls.svg";
    } else if ($country === "Scotland") {
      countryIco = "/static/svgs/flags/gb-sct.svg";
    } else if ($country === "Northern Ireland") {
      countryIco = "/static/svgs/flags/gb-ni.svg";
    } else {
      countryIco = "/static/svgs/flags/gb.svg";
    }

</script>


<style>

  .long-lat, .flag {
    display: flex;
    flex-direction: row;
  }

  .card-parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 2%;
    overflow: hidden;
    height: 100%;
    }

.card-child {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 16px;
    height: 14vh;
    align-items: center;
    justify-content: center;
    width: 70%;
}

  .enable-block {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 0 2% 0 2%;
    align-items: center;
    place-content: center;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;  
  }

  .hero-card-text {
    font-weight: bolder;
    color: #848484;
    margin-right: 0;
  }

  .flag-icons {
    display: flex;
    align-self: center;
    margin-right: 12pt;
    margin-left: 0;
    height: 16px;
    width: 16px;
  }

  .location-prompt {
    text-align: center;
    vertical-align: middle;
  }

  @media only screen and (max-width: 350px) {
  .hero-card-info {
    font-size: 8pt;  
  }
}

</style>