{#await promise}
    <div></div>
  {:then text}
    <div>{text}</div>
  {:catch error}
    <p style="color: red">{error.message}</p>
{/await}


<script>
  let url = "https://firebasestorage.googleapis.com/v0/b/odyssey-65e36.appspot.com/o/badge.json?alt=media&token=52cf5ea8-8308-44b5-b80e-1f091f030c6c";

  let promise = getRandomNumber();

  async function getRandomNumber() {
    const res = await fetch(url);
    const data = await res.text();

    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }

</script>