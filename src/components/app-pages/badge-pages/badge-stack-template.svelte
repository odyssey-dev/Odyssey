<script>

  import Top from '../../profile';
  import { Toggle } from 'framework7-svelte';

</script>

<main>
  <div class="card-parent">
      <div class="card-child">
          <Top></Top>
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
      </div>
  </div>
</main>

<style>

.divider {
  width: 10px;
}

p {
  font-weight: 700;
  font-size: 12pt;
}

.card-parent {
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
}

.card-child {
  display: flex;
  flex-direction: column;
  background: #fff;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 2%;
  border-radius: 4px;
  height: auto;
  width: 100%;
  margin-bottom: calc(var(--f7-tabbar-labels-height) + 2%);
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