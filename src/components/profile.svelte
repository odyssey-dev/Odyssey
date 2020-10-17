{#if shown}
<div class="swiper-block">
    <div class="swiper-func">
      <Swiper init pagination params={{spaceBetween: 20,  }}  >

          <SwiperSlide class="swiper-container">
            <div class="profile-cards">
                <Badges></Badges>
            </div>
          </SwiperSlide>


          <SwiperSlide class="swiper-container">
            <div class="profile-cards">
                <Statistics></Statistics>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
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
    height: 100%;
    align-items: center;
  } 
  
  .swiper-block {
    box-sizing: border-box;
    display:flex;
    height: 100%;
    justify-self: center;
    flex-direction: column;
    z-index: 4;
  }

  .profile-cards {
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    overflow-y: scroll;
    margin: auto;
    width: 94%;
    min-width: 300px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    max-width: 610px;
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