<div class="card-parent">
    <div class="card-child">
      <div class="badge-card">
        <Top></Top>
        <div class="location-container">
          <h3 class="location-title">Continent Badges</h3>
          <span class="location-badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
          </span>
          <p> See More Badges {'>'} </p>
        </div>

        <hr size="1">

        <div class="location-container">
          <h3 class="location-title">Territory Badges</h3>
          <span class="location-badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
          </span>
          <p> See More Badges {'>'} </p>
        </div>

        <hr size="1">

        <div class="location-container">
          <h3 class="location-title">Country Badges</h3>
          <span class="location-badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
          </span>
          <p> See More Badges {'>'} </p>
        </div>

        <hr size="1">

        <div class="location-container">
          <h3 class="location-title">County Badges</h3>
          <span class="location-badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
          </span>
          <p> See More Badges {'>'} </p>
        </div>

        <hr size="1">

        <div class="location-container">
          <h3 class="location-title">District Badges</h3>
          <span class="location-badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
          </span>
          <p> See More Badges {'>'} </p>
        </div>

        <hr size="1">

        <div class="location-container">
          <h3 class="location-title">Challenge Badges</h3>
          <span class="location-badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
          </span>
          <p> See More Badges {'>'} </p>
        </div>

        <hr size="1">

        <div class="location-container">
          <h3 class="location-title">Special Badges</h3>
          <span class="location-badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
          </span>
          <p> See More Badges {'>'} </p>
        </div>
      </div>
    </div>
</div>


<style>

  .card-parent {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
  }

  h3 {
    margin: 0;
    margin-bottom: 14px;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left));
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
    font-weight: 400;
  }

  .card-child {
    display: flex;
    flex-direction: column;
    background: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 2%;
    border-radius: 4px;
    height: auto;
    width: 100%;
    margin-bottom: calc(var(--f7-tabbar-labels-height) + 2%);
  }

  .location-container {
    margin: 24px 0;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left));
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .location-badges {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left));
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .badge-card {
    padding-bottom: 10px;
  }

  .location-badges img {
    height: 50px;
    width: auto;
  }

  .location-container p {
    font-size: 10pt;
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }
</style>

<script>
  import Top from '../profile.svelte';
</script>