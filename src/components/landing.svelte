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
              <p>Before we start we just need a few permissions from you,
              <br><br>
              For our app to work, we will need to access your location and send you notifications.
              <br><br>
              But rest assured, we will always respect your privacy and will never sell your data.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide class="swiper-container">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="swiper-img-cont"><img class="swiper-img" src="../static/svgs/slider-img-1.svg" alt="profile picture"></div>
            <div class="swiper-info">
              <h1 class="swiper-title">Have Fun & Stay Safe</h1>
              <p>Keep yourself safe, earn lots of badges and, most importantly,
                have fun, get ready to start your Odyssey and enjoy the adventure!</p>
              <button class="button" on:click|once={login}>Sign in with Google</button>
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

  .button {
    position:fixed;
    bottom: 10%;
    background-color: orange;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    width: 90%;
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

     // Firebase
import * as firebase from 'firebase'

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

// Authentication
var loggedIn;
var username;
var userPhoto;
var firsttime = false;
function login() {
  auth.signInWithPopup(provider);
}


function logout() {
  auth.signOut();
}

auth.onAuthStateChanged(user => {
  if (user){
    username = user.displayName;
    userPhoto = user.photoURL;
    
    console.log(username);
    loggedIn = true;
  } else {
    username = "";
    loggedIn = false;
  }
});
</script>