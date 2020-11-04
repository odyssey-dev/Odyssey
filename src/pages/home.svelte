<Page name="home" class="transparent">

  {#if $userstate == true }
  <main class="main-page">
    <div class="main-content">

      <!-- Profile-Card component -->
      <section class="top-card">
        <div class="card-block">
          <div class="card-content">
            <div class="profile-block">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img class="profile-picture" src="{$userprofile.photoUrl}" alt="profile picture" width="50" height="50">
              <div class="profile-data">
                <div><p class="profile-name">{$userprofile.displayName}</p></div>
                <div><p class="profile-name">🧭 1,500</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="menus">
        <Profile bind:this={settings}></Profile>
      </section>

      <!-- Bottom-Card -->
      <section class="bottom-card">
      <Bottom></Bottom>
      <BottomToolbar></BottomToolbar>
      </section>
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
    height: 100%;
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
    overflow: hidden;
  }

  .card-content {
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 16px;
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

      /* Sections */

  .top-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }

</style>

<script>
  // Importing Login/user functionality
  import {userstate, userprofile} from '../js/store.js';
  import {onAuthStateChanged} from '../js/userstate.js';
  import Logout from '../components/logout.svelte';
  import {auth} from '../js/firebase.js';
  import Bottom from '../components/bottom-card/main.svelte';
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
  import Landing from '../components/landing-page/main.svelte';
  import LoadingIcon from '../components/loading.svelte';
  import AchievementGet from '../components/modal/achievement-get.svelte';
  import Profile from '../components/full-screen-el/profile.svelte';
  import ListBadges from '../components/listBadges.svelte';
  import BottomToolbar from '../components/toolbar/toolbar.svelte';

  let settings;
  // settings.show(); 

  document.addEventListener("DOMContentLoaded", function(){
    console.log("Ready");
  });
</script>