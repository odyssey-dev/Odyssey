<div class="swiper-block">
    <div class="swiper-func">
      <Swiper init pagination params={{spaceBetween: 20,  }}>
        
        <SwiperSlide class="swiper-container">
            <div class="introduction-cards">  
                <SlideOne></SlideOne>
            </div>
        </SwiperSlide>
        

        <SwiperSlide class="swiper-container">
            <div class="introduction-cards">
                <SlideTwo></SlideTwo>
            </div>
        </SwiperSlide>


        <SwiperSlide class="swiper-container">
            <div class="introduction-cards">
                <SlideThree></SlideThree>  
            </div>
        </SwiperSlide>

        <SwiperSlide class="swiper-container">
            <div class="introduction-cards">
                <SlideFour></SlideFour>
            </div>
        </SwiperSlide>


        <SwiperSlide class="swiper-container">
            <div class="introduction-cards">
                <SlideFive></SlideFive>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
</div>

<style>

.swiper-func  {
    display: flex;
    min-height: 100%;
    align-items: center;
} 

.swiper-block {
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    z-index: 4;
    height: 100%;
}

.introduction-cards {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin: auto;
    width: 94%;
    min-width: 300px;
    min-height: 80%;
    flex-direction: column;
    max-width: 610px;
}

</style>

<script>
    import { 
        f7,
        Swiper,
        SwiperSlide,
     } from 'framework7-svelte';

     import SlideOne from './slide-1.svelte'
     import SlideTwo from './slide-2.svelte'
     import SlideThree from './slide-3.svelte'
     import SlideFour from './slide-4.svelte'
     import SlideFive from './slide-5.svelte'
</script>