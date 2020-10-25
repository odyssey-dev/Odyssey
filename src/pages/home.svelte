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
      <CurrentLocationCard></CurrentLocationCard>
    </div>

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
  }

</style>

<script>
  // Importing Login/user functionality
  import {userstate, userprofile} from '../js/store.js';
  import {onAuthStateChanged} from '../js/userstate.js';
  import Logout from '../components/logout.svelte';
  import {auth} from '../js/firebase.js';

  import CurrentLocationCard from '../components/current-location-card.svelte';

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