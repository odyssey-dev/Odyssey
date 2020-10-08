<div class="swiper-block">
    <div class="swiper-func">
      <Swiper class="swiper-main" init pagination params={{spaceBetween: 20,  }}  >

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Visit Anywhere</h1>
                <p>You can go to Towns, Cities, Countries, Continents, anywhere!
                <br><br>
                Just get out there and explore!</p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Earn Badges</h1>
                <p>When you visit a new place, you earn a badge, badges get you points!
                <br><br>
                Complete areas for better badges!</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Before we start</h1>
                <p>For our app to work, we will need to access your location, we use this so that we can find where
                you are to award you badges, but rest assured, we will always respect your privacy and will 
                <b>never</b> sell your data.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">One more thing</h1>
                <p>The last thing we need from you is permission to send you notifications,
                <br><br>
                We use these in conjunction with the location data to send you notifications when you unlock a
                new badge.
              </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards"> 
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Have Fun & Stay Safe</h1>
                <p>Keep yourself safe, earn lots of badges and, most importantly,
                  have fun, get ready to start your Odyssey and enjoy the adventure!</p>
                <!-- <button class="button">Sign in with Google</button> -->
                <Login></Login>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
</div>
<style>
  .swiper-block {
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    z-index: 4;
  }

  .introduction-cards {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    margin: auto;
    margin-top: 40px;
    width: 96%;
    height: 100%;
    height: 80vh;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }

  .swiper-img {
    height: 100%;
    width: 100%;
  }

  .swiper-img-cont {
    flex: 1;
  }

  .swiper-info {
    box-sizing: border-box; 
    padding: 10px;   
    padding-top: 0;
    flex: 1;
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