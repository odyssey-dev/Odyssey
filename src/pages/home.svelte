<Page name="home" class="transparent">

  {#if $userstate == true }
  <main class="main-page">
    <div class="main-content">

      <!-- Profile-Card component -->
      <section class="top-card">
        <div class="cards">
          <div class="card-block">
              <div class="hero-card" on:click={() => profile.show()}>
                <div class="profile-info">
                  <!-- svelte-ignore a11y-img-redundant-alt -->
                  <img class="pp" src="{$userprofile.photoUrl}" alt="profile picture" width="50" height="50">
                  <div class="profile-txt">
                    <div class="profile-name"><p>{$userprofile.displayName}</p></div>
                    <div class="profile-points"><p>🧭 1,500</p></div>
                  </div>
                </div>
              </div>
            <Profile bind:this={profile}></Profile>
          </div>
        </div>
      </section>

      <!-- debug: <button on:click={() => modal.show()}>Show Modal</button> -->
      <!-- to be exported to achievement-get -->
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
  .card-block {
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
  }
  
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
    height: 96%;
    padding: 4%;
  }
  .hero-card {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 16px;
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
  import AchievementGet from '../components/achievement-get.svelte';
  import Profile from '../components/profile.svelte';

  import ListBadges from '../components/listBadges.svelte';

  let profile;
  
  document.addEventListener("DOMContentLoaded", function(){
    console.log("Ready");
  });
  
  // move to achievement-get component
  import Modal from "../components/modal.svelte";
  let modal;
</script>