{#await promise}
  <div>Loading..</div>
  {:then data}
  <h1>Continents</h1>
  {#each continentBadges as continentBadge}
		{continentBadge}<br>
	{/each}
    
  <h1>Territories</h1>
  {#each territoryBadges as territoryBadge}
    {territoryBadge}<br>
  {/each}

  <h1>Countries</h1>
  {#each countryBadges as countryBadge}
    {countryBadge}<br>
  {/each}

  <h1>Counties</h1>
  {#each countyBadges as countyBadge}
    {countyBadge}<br>
  {/each}

  <h1>Districts</h1>
  {#each districtBadges as districtBadge}
    {districtBadge}<br>
  {/each}

  {:catch error}
    <p style="color: red">{error.message}</p>
{/await}


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

</script>