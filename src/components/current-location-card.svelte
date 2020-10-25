
<div class="cards">
  {#if $showLocation != undefined }
    {#await locationData}
      <div></div>
    {:then location}
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
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  {:else}
  <div class="card">
      <Button fill raised on:click={getLocation}>Discover</Button>
  </div> 
  {/if}

</div>


<script>

// Importing Geo Location functionality
import { locationData, getLocation} from '../js/geolocation.js';
import { showLocation, continent, territory, country,county,district,  latitude, longitude} from '../js/store.js';


import {
    Button
  } from 'framework7-svelte';

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
  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>