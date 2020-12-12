<script>
  import AppPage from '../app-pages';
  import { Toggle, Icon } from 'framework7-svelte';

  // default shown = false
  let shown = true;

  // show function
  function show() {
    shown = true;
  }

  // hide function
  function hide(badgeName, badgeTimestamp) {
    shown = false;
    title = badgeName;
    date = badgeTimestamp;
    console.log(date);
  }

  let title = "Badge Name";
  let progress = 0;
  let date = "00/00/0000";


  import {db} from '../../../js/firebase.js';
  import {userprofile} from '../../../js/store.js';

  var allBadges = db.collection('Account').doc($userprofile.uid).collection('Achievement');
  
  if (localStorage.getItem('AllBadges') === null  ) {
      var badgeData = [];
      var badges = allBadges.orderBy("Timestamp").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          badgeData.push( doc.data()); 
      });
          console.log("All Badges Fetched:", "True");
          localStorage.setItem('AllBadges', JSON.stringify(badgeData));
      });
  } else {
      var profileStore = localStorage.getItem('AllBadges');
      console.log("profileStore", profileStore);
      var badgeData = JSON.parse(profileStore);
  }

</script>

<AppPage>
  {#if shown}
    <div class="badge-content">
      <span class="header">
        <p>District Badges</p>
        <span class="show-all">
          <p>Show All</p>
          <span class="divider"></span>
          <Toggle />
        </span>
      </span>
      <div class="badges-parent">
        <div class="badges">

          {#await badges}
              loading..
          {:then querySnapshot}
                {#each badgeData as badge}
                  <img on:click={() => hide(badge.Name, badge.Timestamp.seconds)} name="{badge.Name}" timestamp="{badge.Timestamp.seconds}" class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge" >
                {/each}
          {:catch error}
              <p style="color: red">{error.message}</p>
          {/await}
         
        </div>
      </div>
    </div>

  {:else}
    <div class="badge-content">
      <span class="header">
        <span class="go-back" on:click={() => show()}>
          <img class="prev" src="../../../static/svgs/previous.svg" alt="badge"/>
          <span class="divider"></span>
          <p>Go Back</p>
        </span>
        <span class="show-all">
          <p>{title}</p>
        </span>
      </span>

      <div class="body">
        <div class="badge"><img class="acq-badge" src="../../../static/logo-variations/color-icon.svg" alt="badge"></div>
        <h1 class="badge-name">{title}</h1>
        <progress id="lvl" value="{progress}" max="1" color="#000"></progress>
        <p>{progress}/1</p>
        {#if progress=1}
            <p>Date Acquired: {date}</p>
        {/if}
      </div>
    </div>
  
    {/if}
  
</AppPage>

<style>

.badges-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.badges img {
  max-height: 100px;
  max-width: 100px;
}

.badge {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: none;
}

.acq-badge {
  width: 60%;
}

.badge-name {
  font-size: 30pt;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px;
}

#lvl {
  width: 100%;
}

.go-back {
  display:flex;
  flex-direction: row;
}

.go-back img {
  display: flex;
  align-self: center;
  height: 30px;
}

.body p {
  font-size: 12pt;
  display: flex;
  justify-content: center;
}

.divider {
  width: 10px;
}

p {
  font-weight: 700;
  font-size: 12pt;
}

.badge-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  margin: 0 2%;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 2%;
}

.badges {
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}

.badges img {
  margin: 15px;
}

.show-all {
  display: flex;
}

.need {
  opacity: 0.5;
}

</style>