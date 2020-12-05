<script>
  import AppPage from '../app-pages';
  import BadgeSngl from '../badge-pages/badge-sngl';
  import { Toggle } from 'framework7-svelte';

  let badgeSngl
  let showBadge = () => { 
    badgeSngl.show();
    console.log("Badge Page Loaded");
    }
</script>
<BadgeSngl bind:this={badgeSngl}></BadgeSngl>
<AppPage>

  <div class="badge-content">
    <span class="header">
      <p>District Badges</p>
      <span class="show-all">
        <p>Show All</p>
        <span class="divider"></span>
        <Toggle />
      </span>
    </span>

    <div class="badges">
      <img on:click={showBadge} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
    </div>
  </div>
</AppPage>

<style>

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