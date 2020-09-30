<Page name="home" class="transparent">

<div class="top-card">
  <div class="card">
    <Block strong inset>
      <Row>
        <Col width="100">
          <div class="hero-card">
            <div class="profile-info">
              <image class="pp" src="/static/default-pp.png" alt="profile picture" width="50" height="50">
              <div class="profile-txt">
                <div class="profile-name"><p>Ben Buckley</p></div>
                <div class="profile-points"><p>🧭 1,500</p></div>
              </div>
            </div>
          </div>
        </Col>  
      </Row>
    </Block>
  </div>
</div>


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
              <div class="spacer"></div>
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

  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  .hero-card {
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  .spacer {
    display: flex;
    width: 24%;
  }

  .hero-card-title {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 30px;
    font-weight: 600;
    font-family: 'Rubik', sans-serif;

  }

  .hero-card-info {
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-evenly;
    margin-bottom: 16px;
    font-family: 'Roboto';
    
  }

  .hero-card-text {
    margin-right: 14px;
    font-weight: bolder;
    color: #848484;
    margin-right: 0;
  }

  .flag-icons {
    margin-right: 4px;
    margin-left: 4px;
    height: 16px;
    width: 16px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    bottom: 2%;
  }

  .top-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 2%;
  }

  .card {
    margin: 10px;
  }

  .pp {
    display: flex;
    border-radius: 50%;
  }

  .profile-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile-txt {
    margin-left: 5px;
  }

  .profile-txt p {
    display:flex;
    margin: 0px;
  }

  .profile-name {
    font-size: 14pt;
    font-weight: 600;
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
         longitudeFull = showLocation.coords.longitude;
         longitude = longitudeFull.toFixed(4);
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
  var longitudeFull;  
  var latitude;
  var longitude;
</script>