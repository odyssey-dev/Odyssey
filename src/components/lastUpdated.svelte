<script>

import { network } from '../js/networkCheck.js';

var lastUpdatedDate = localStorage.getItem('lastUpdated')

  const date = new Date();
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const dateDay = date.getDate();
  const dateHour =  date.getHours();
  const dateMinutes =  date.getMinutes();
  const dateSeconds =  date.getSeconds();

  const currentDate = [dateSeconds,dateMinutes,dateHour,dateDay,dateMonth,dateYear];

  console.log(currentDate.toString());
  console.log(lastUpdatedDate);


</script>

{#if network != true }
  <span>No Network</span>
  <span>Last updated {lastUpdatedDate}</span>
{/if}

<style>

</style>

