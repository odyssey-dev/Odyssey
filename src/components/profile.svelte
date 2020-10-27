{#if shown}


<div class="swiper-block" transition:slide="{{ y: 50, duration: 400 }}">
    <div class="swiper-func">
      <Swiper ref="swiper-container" init params={{spaceBetween: 0, }}>

          <SwiperSlide ref="swiper-slide">
            <div class="profile-cards">
                <Badges></Badges>
            </div>
          </SwiperSlide>

          <SwiperSlide ref="swiper-slide">
            <div class="profile-cards">
                <Settings></Settings>
            </div>
          </SwiperSlide>

      </Swiper>
    </div>
</div>
{/if}

<style>
  .swiper-func  {
    display: flex;
    height: auto;
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  } 
  
  .swiper-block {
    box-sizing: content-box;
    display:flex;
    justify-self: center;
    flex-direction: column;
    z-index: 4;
    overflow-y: hidden;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }

  .profile-cards {
    background: #fff;
    overflow: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 4%;
    border-radius: 6px;
  }

  :global([ref="swiper-container"]) {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }

  :global([ref="swiper-slide"]) {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
  }

</style>

<script>
    // default shown = false
    let shown = false;

    // show function
    export function show() {
        if(shown === false) {
            shown = true;
        } else {
            shown = false;
        }
    }

    import { slide } from 'svelte/transition';
    
    import { 
        f7,
        Button,
        Page,
        Swiper,
        SwiperSlide,
        Card,
        Link,
        Block,
        Col,
        Tab,
        Tabs,
        Toolbar,
     } from 'framework7-svelte';

     import Badges from '../components/prof-badges.svelte';
     import Settings from '../components/prof-settings.svelte';
</script>