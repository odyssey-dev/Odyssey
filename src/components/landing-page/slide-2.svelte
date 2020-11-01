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

<style>
  
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