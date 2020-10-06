<div class="swiper-block">
    <div class="swiper-func">
      <Swiper class="swiper-main" init pagination>
        <div class="swiper-obj">
          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
            <div class="swiper-info">
              <h1 class="swiper-title">Visit Anywhere</h1>
              <p>You can go to Towns, Cities, Countries, Continents, anywhere!
              <br><br>
              Just get out there and explore!</p>
            </div>
          </SwiperSlide>
        </div>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
            <div class="swiper-info">
              <h1 class="swiper-title">Earn Badges</h1>
              <p>When you visit a new place, you earn a badge, badges get you points!
              <br><br>
              Complete areas for better badges!</p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
            <div class="swiper-info">
              <h1 class="swiper-title">Before we start</h1>
              <p>For our app to work, we will need to access your location, we use this so that we can find where
               you are to award you badges, but rest assured, we will always respect your privacy and will 
               <b>never</b> sell your data.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
            <div class="swiper-info">
              <h1 class="swiper-title">One more thing</h1>
              <p>The last thing we need from you is permission to send you notifications,
              <br><br>
              We use these in conjunction with the location data to send you notifications when you unlock a
              new badge.
            </p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
            <div class="swiper-info">
              <h1 class="swiper-title">Have Fun & Stay Safe</h1>
              <p>Keep yourself safe, earn lots of badges and, most importantly,
                have fun, get ready to start your Odyssey and enjoy the adventure!</p>
              <Login></Login>
              <!-- <button class="button">Sign in with Google</button> -->
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
              <!--Whoopsy-->
          </SwiperSlide>

      </Swiper>
    </div>
</div>
<style>
  .swiper-block {
    margin: 10;
    display:flex;
    flex-direction: column;
    position: fixed;
    z-index: 4;
    background: white;
    height: 100vh;
    width: 100vw;
  }

  .swiper-img {
    height: 100%;
    width: auto;
  }

  .swiper-img-cont {
    height: 50%;
  }

  .swiper-func {
    height: -webkit-fill-available;
  }

  .swiper-obj :global(.swiper-container) {
    height: -webkit-fill-available;
    width: 100vw;
  }

  .swiper-func :global(.swiper-main) {
    height: -webkit-fill-available;
    width: 100vw
  }

  .swiper-info {
    padding: 5%;
    padding-top: 0%;
  }

  .swiper-info p {
    font-size: 14pt;
    text-align: center;
  }

  .swiper-title {
    display: flex;
    justify-content: center;
  }

</style>

<script>
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

     import Login from '../components/login.svelte';
</script>