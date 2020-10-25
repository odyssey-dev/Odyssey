{#await promise}
    <div></div>
  {:then data}

  <Swiper  params={{spaceBetween: 20}}>
    <SwiperSlide>

      <BlockTitle>Inset</BlockTitle>
      <List mediaList inset>
        <ListItem
          link="#"
          title="Yellow Submarine"
          subtitle="Beatles">
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" />
        </ListItem>
        <ListItem
          link="#"
          title="Don't Stop Me Now"
          subtitle="Queen">
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg" width="44" />
        </ListItem>
        <ListItem
          link="#"
          title="Billie Jean"
          subtitle="Michael Jackson">
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg" width="44" />
        </ListItem>
      </List>

    </SwiperSlide>
    <SwiperSlide>

      <BlockTitle>Inset</BlockTitle>
      <List mediaList inset>
        <ListItem
          link="#"
          title="Yellow Submarine"
          subtitle="Beatles">
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-4.jpg" width="44" />
        </ListItem>
        <ListItem
          link="#"
          title="Don't Stop Me Now"
          subtitle="Queen">
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-5.jpg" width="44" />
        </ListItem>
        <ListItem
          link="#"
          title="Billie Jean"
          subtitle="Michael Jackson">
          <img slot="media" src="https://cdn.framework7.io/placeholder/fashion-88x88-6.jpg" width="44" />
        </ListItem>
      </List>

    </SwiperSlide>

  </Swiper>


  {:catch error}
    <p style="color: red">{error.message}</p>
{/await}


<script>
  let url = "https://firebasestorage.googleapis.com/v0/b/odyssey-65e36.appspot.com/o/badge.json?alt=media&token=52cf5ea8-8308-44b5-b80e-1f091f030c6c";

  let promise = getRandomNumber();

  async function getRandomNumber() {
    const res = await fetch(url);
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