<Page name="home" class="transparent">
  <!-- Top Navbar -->
  <!-- <Navbar >
    <NavTitle>Odyssey</NavTitle>
  </Navbar> -->

  <Block >
    <Row>
      <Col width="100">
        <div class="spacing"></div>
      </Col>
    </Row>
  </Block>

<div class="cards">
<div class="card">
  <Block strong inset>
    <Row>
      <Col width="100">
      <div class="hero-card">
        <h1 class="hero-card-title">Merseyside</h1>
        <div class="hero-card-info"> 
            {#if showLocation != undefined }
              <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/2948/2948111.svg" alt="flag">
              <div class="hero-card-text">{latitude}, {longitude}</div> 
              <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/197/197485.svg" alt="flag">
              <div class="hero-card-text">England</div>
            {:else}
              <div class="hero-card-text">Unknown</div> 
            {/if}
        </div>
      </div>
      </Col>
    </Row>
  </Block>
</div>
<div class="card">
  {#if firsttime == true && loggedIn == false }
    <Block strong inset>
      <Row>
        <Col width="100">
          <Button fill raised popupOpen="#my-popup">Join In</Button>
        </Col>
      </Row>
    </Block>
  {:else}

    {#if loggedIn == true }
      <Block strong inset>
        <Row>
          <Col width="100">
            <Button fill raised on:click|once={getLocation}>Discover</Button>
          </Col>
        </Row>
      </Block>
    {:else}
      <Block strong inset>
        <Row>
          <Col width="100">
            <Button fill raised loginScreenOpen="#my-login-screens">Sign In</Button>
          </Col>
        </Row>
      </Block>
    {/if}
  
  {/if}
</div>
</div>

</Page>

<style>
  .spacing {
    height:40vh;
  }

  .hero-card {
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  .hero-card-title {
    margin-top: 8px;
    font-size: 24px;
    font-weight: bold;
  }

  .hero-card-info {
    display: flex;
    align-items:center;
    justify-content: center;
  }

  .hero-card-text {
    margin-right: 14px;
    font-weight: bolder;
    color: #848484;
  }

  .flag-icons {
    margin-right: 4px;
    height: 16px;
    width: 16px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    bottom: 10%;
  }

  .card {
    margin: 10px;
  }
</style>

<script>

function getLocation() {

  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
         showLocation = position;
         console.log(showLocation);

         latitudeFull = showLocation.coords.latitude;
         latitude = latitudeFull.toFixed(4);
         longitude = showLocation.coords.longitude;

        },
        function errorCallback(error) {
            //do error handling
        },
        {
            timeout:5000
        }
    );
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}



  import {
    Page,
    Card,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
  } from 'framework7-svelte';

  var firsttime = true;
  var loggedIn = true;

  var ErrorHandler;
  var showLocation;
  var latitudeFull;
  var latitude;
  var longitude;
</script>