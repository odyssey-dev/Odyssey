{#if shown}
<div class="swiper-block">
    <div class="swiper-func">
      <Swiper init pagination params={{spaceBetween: 0,  }}  >

          <SwiperSlide  class="swiper-container">
            <div id="swiper-page-one" class="profile-cards">
                <Badges></Badges>
            </div>
          </SwiperSlide>


          <!-- <SwiperSlide class="swiper-container">
            <div class="profile-cards">
                <Statistics></Statistics>
            </div>
          </SwiperSlide> -->

          <SwiperSlide id="swiper-page-two" class="swiper-container">
            <div id="swiper-page-two" class="profile-cards">
                <Settings></Settings>
            </div>
          </SwiperSlide>

      </Swiper>
    </div>
</div>
{/if}

<style>

  #swiper-page-one {
    border-radius: 6px;
    height: 100vh;
    overflow: hidden;
  }

  #swiper-page-two {
    border-radius:6px;
    height: 100vh;
  }

  .swiper-func  {
    display: flex;
    height: 100%;
    align-items: center;
    width: 100%;
  } 
  
  .swiper-block {
    box-sizing: content-box;
    padding: 2%;
    display:flex;
    justify-self: center;
    flex-direction: column;
    z-index: 4;
  }

  .profile-cards {
    background: #fff;
    overflow: hidden;
    overflow-y: scroll;
    margin: auto;
    min-height: 30vh;
    width:90vw;
    display: flex;
    flex-direction: column;
    align-self: center;
    max-height: 70vh;
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
    
    import { 
        f7,
        Button,
        Page,
        Swiper,
        SwiperSlide,
        Card,
        Link,
        Block,
        Col
     } from 'framework7-svelte';

     import Badges from '../components/prof-badges.svelte';
     import Settings from '../components/prof-settings.svelte';
     import Statistics from '../components/prof-stats.svelte';
</script>