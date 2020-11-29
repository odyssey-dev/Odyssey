<script>
  import AppPage from '../app-pages';
  import { Toggle } from 'framework7-svelte';
</script>

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
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
      <img src="../../../static/logo-variations/color-icon.svg" alt="badge">
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
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
}

.badges img {
  display: flex;
  width: 45pt;
  margin: 5px;
}

.show-all {
  display: flex;
}

</style>