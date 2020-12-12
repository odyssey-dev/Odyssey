<div class="card-block">
    <div class="card-content">
      <div class="profile-block">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="profile-picture" src="{$userprofile.photoUrl}" alt="profile picture" width="50" height="50">
        <div class="profile-data">
          <p class="profile-name">{$userprofile.displayName}</p>
          <p class="profile-name">{userScore}</p>
        </div>
      </div>
    </div>
  </div>

  <style>

  /* .card-block {
    display: flex;
    flex-direction: column;
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 2%;
    overflow: hidden;
  } */

  .card-block {
    width: 100%;
  }

  .card-content {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 16px;
    width: auto;
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


  </style>

  <script>
      import {userstate, userprofile} from '../js/store.js';
      import { Link, Tab, Tabs, tabLink } from 'framework7-svelte';

      let userScore = "🧭 1,500"
  </script>