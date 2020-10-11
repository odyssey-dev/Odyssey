<div class="swiper-block">
    <div class="swiper-func">
      <Swiper init pagination params={{spaceBetween: 20,  }}  >

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/intro-cards/img-1.jpg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Visit Anywhere</h1>
                <p>You can go to Towns, Cities, Countries, Continents, anywhere!
                <br><br>
                Just get out there and explore! We keep a track of your visits and give you rewards for them!</p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/intro-cards/img-4.jpg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Earn Badges</h1>
                <p>When you visit a new place, you earn a badge, badges get you points!
                <br><br>
                Collect badges for smaller areas to complete badges for bigger ones!</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/intro-cards/img-2.jpg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Before we start</h1>
                <p>For our app to work, we will need to access your location <br><br> We use this to find where
                you are to award badges, but rest assured, we will always respect your privacy and will 
                <b>never</b> sell your location data.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="introduction-cards">
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/intro-cards/img-5.jpg" alt="profile picture"></div>
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
              <div class="swiper-img-cont"><img class="swiper-img" src="../static/intro-cards/img-3.jpg" alt="profile picture"></div>
              <div class="swiper-info">
                <h1 class="swiper-title">Have Fun & Stay Safe</h1>
                <div class="swiper-button-and-text">
                  <p>Keep yourself safe, earn lots of badges and, most importantly,
                    have fun, get ready to start your Odyssey and enjoy the adventure!</p>
                  <Login></Login>
                </div>
              </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
</div>
<style>

  .swiper-button-and-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30vh;
  }

  .swiper-func  {
    display: flex;
    height: 100vh;
    align-items: center;
  } 
  
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
    width: 94%;
    min-width: 300px;
    min-height: 86vh;
    display: flex;
    flex-direction: column;
    max-width: 800px;
  }

  .swiper-img {
    height: 100%;
    width: auto;
  }

  .swiper-img-cont {
    display: flex;
    height: 40vh;
    max-height: 40vh;
    min-height: 40vh;
    width:auto;
    align-self: center;
  }

  .swiper-info {
    display: flex;
    flex-direction:column;
    box-sizing: border-box; 
    padding: 10px;   
    padding-top: 0;
    flex: 1;
    height: inherit;
  }

  .swiper-info p {
    font-size: 12pt;
    text-align: center;
  }

  .swiper-title {
    display: flex;
    justify-content: center;
    font-size: 18pt;
    margin-bottom: 0px;
  }

  /* larger phones */

  @media screen and (min-height: 800px) { 
  .swiper-info p {
    font-size: 14pt;
  }

  .swiper-title {
    font-size: 22pt;
  }

}

  /* larger devices */

  @media screen and (min-width: 800px) { 
  .swiper-info p {
    font-size: 20pt;
  }

  .swiper-title {
    font-size: 30pt;
  }

  .swiper-img-cont {
    height: 50vh;
    max-height: 48vh;
    min-height: 48vh;
  }

}

/* smaller phones */

@media screen and (max-height: 500px) { 
  .swiper-info p {
    font-size: 10pt;
  }

  .swiper-title {
    font-size: 14pt;
    margin-bottom: 0px;
  }

  .swiper-img {
    width: 100%;
  }

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