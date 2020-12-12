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
  function hide() {
    shown = false;
  }

  let title = "Badge Name";
    let progressValue = 0;
    let date = "00/00/0000";

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
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge" >
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          <img on:click={() => hide()} class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
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
        <div class="badge">
          {#if progressValue === 1}
            <img class="acq-badge" src="../../../static/logo-variations/color-icon.svg" alt="badge"> 
          {:else}
            <img id="halfOpacity" class="acq-badge" src="../../../static/logo-variations/color-icon.svg" alt="badge">
          {/if}
        </div>
        <h1 class="badge-name">{title}</h1>
        <progress id="lvl" value="{progressValue}" max="1" color="#000"></progress>
        <p>{progressValue}/1</p>
        {#if progressValue === 1}
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

#halfOpacity {
  opacity: 0.5;
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
  border-radius: 10px;
  overflow: hidden;
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