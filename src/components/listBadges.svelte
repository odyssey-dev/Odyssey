
{#await promise}
  <div>Loading..</div>
  {:then data}
  <div class="achievement-card">
  <h1 class="badge-title" >Continents</h1>
  <div class="achievement-list" >
  {#each continentBadges as continentBadge}
    <div class="achievement">
      <img id="badge-img" src="../static/badge/sample-badge.svg" alt="badge">
      <h3 class="badge-name">{continentBadge}</h3>   
    </div>
	{/each}
  </div>
  <h1 class="badge-title" >Territories</h1>
  <div class="achievement-list" >
    {#each territoryBadges as territoryBadge}
      <div class="achievement">
        <img id="badge-img" src="../static/badge/sample-badge.svg" alt="badge">
        <h3 class="badge-name">{territoryBadge}</h3>   
      </div>
    {/each}
  </div>
  <h1 class="badge-title" >Countries</h1>
  <div class="achievement-list" >
    {#each countryBadges as countryBadge}
    <div class="achievement">
      <img id="badge-img" src="../static/badge/sample-badge.svg" alt="badge">
      <h3 class="badge-name">{countryBadge}</h3>   
    </div>
    {/each}
  </div>
  <h1 class="badge-title" >Counties</h1>
  <div class="achievement-list" >
  {#each countyBadges as countyBadge}
    <div class="achievement">
      <img id="badge-img" src="../static/badge/sample-badge.svg" alt="badge">
      <h3 class="badge-name">{countyBadge}</h3>   
    </div>
  {/each}
  </div>
    <h1 class="badge-title" >Districts</h1>
    <div class="achievement-list" >
    {#each districtBadges as districtBadge}
      <div class="achievement">
        <img id="badge-img" src="../static/badge/sample-badge.svg" alt="badge">
        <h3 class="badge-name">{districtBadge}</h3>   
      </div>
    {/each}
  </div>
</div>
  {:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>

  .achievement-card{
    background-color: #fff;
    overflow-y: scroll;
    margin: 10px;
    border-radius: 4px;
  }

  .badge-title {
    text-align: center;
    font-size: 20px;

  }

  .achievement {
    margin: 10px;
    width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    font-size: 10px;
  }

  .achievement-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<script>
    let url = "https://firebasestorage.googleapis.com/v0/b/odyssey-65e36.appspot.com/o/badge.json?alt=media&token=52cf5ea8-8308-44b5-b80e-1f091f030c6c";
    let promise = getRandomNumber();

    var continentBadges = ["Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"];
    var territoryBadges = ["United Kingdom"];
    var countryBadges = ["England", "Wales", "Northern Ireland", "Scotland"];
    var countyBadges = ["Merseyside"];
    var districtBadges = ["Wirral"];

  async function getRandomNumber() {
    console.log("List Badges");
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();

    if (res.ok) {

      console.log(data);
      return data;
    } else {
      throw new Error(data);
    }
  }

  import {
    AccordionContent,
    BlockTitle,
    Swiper,
    SwiperSlide,
    List,
    ListItem
  } from 'framework7-svelte';

</script>