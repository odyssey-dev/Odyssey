<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="swiper-img-cont"><img class="swiper-img" src="../static/intro-cards/img-1.jpg" alt="profile picture"></div>
<div class="swiper-info">
    <h1 class="swiper-title">Visit Anywhere</h1>
    <p>You can go to Towns, Cities, Countries, Continents, anywhere!
    <br><br>
    Just get out there and explore! We keep a track of your visits and give you rewards for them!</p>
</div>

<style>  
    .swiper-img {
      display: flex;
      height: 100%;
      width: auto;
    }
  
    .swiper-img-cont {
      display: flex;
      height: 40vh;
      max-height: 40vh;
      min-height: 40vh;
      width: 100%;
      justify-content: center;
    }
  
    .swiper-info {
      display: flex;
      flex-direction:column;
      box-sizing: border-box; 
      padding: 10px;   
      padding-top: 0;
      flex: 1;
      height: 50vh;
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
      font-size: 26pt;
    }
  
    .swiper-title {
      font-size: 36pt;
    }
  
  }
  
  /* smaller phones */
  
  @media screen and (max-width: 350px) { 
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