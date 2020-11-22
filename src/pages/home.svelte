<Page name="home" class="transparent">

  {#if $userstate == true }
  <main class="main-page">
    <div class="main-content">
      <!-- Profile-Card component -->
      <section class="top-card">
        <div class="top-profile">
          <Top></Top>
        </div>
      </section>

      <section class="menus">
        <AchievementGet></AchievementGet>
        <Profile></Profile>
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

  .top-profile {
    display: flex;
    flex-direction: column;
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 2%;
    overflow: hidden;
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
  import {auth} from '../js/firebase.js';
  import Bottom from '../components/bottom-card/main.svelte';
  import { checkNetwork } from '../js/networkCheck.js';
  import Top from "../components/profile.svelte";

  import {
    Page,
  } from 'framework7-svelte';
  import Landing from '../components/landing-page/main.svelte';
  import LoadingIcon from '../components/loading.svelte';
  import Profile from '../components/full-screen-el/profile.svelte';
  import BottomToolbar from '../components/toolbar/toolbar.svelte';
  import AchievementGet from '../components/modal/achievement-get.svelte';

  let profile;
  let currentCard;

  checkNetwork();
  function topMenuOpen() {
    profile.show(); 
    currentCard.show();
  }

  document.addEventListener("DOMContentLoaded", function(){
    console.log("Ready");
  });
</script>