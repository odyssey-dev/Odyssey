<Page name="home" class="transparent">
  {#if $userstate == true }

    <!-- Top-card component -->
    <div class="background">
      <image class="bg" src="./static/bg/merseyside-bg.png" width="100%" height="auto">
    </div>

    <!-- Profile-Card component -->
    <div class="top-card">
      <div class="card">
        <Block strong inset>
          <Row>
            <Col width="100">
              <div class="hero-card">
                <div class="profile-info">
                  <!-- svelte-ignore a11y-img-redundant-alt -->
                  <img class="pp" src="{$userprofile.photoUrl}" alt="profile picture" width="50" height="50">
                  <div class="profile-txt">
                    <div class="profile-name"><p>{$userprofile.displayName}</p></div>
                    <div class="profile-points"><p>🧭 1,500</p></div>
                  </div>
                </div>
              </div>
            </Col>  
          </Row>
        </Block>
      </div>
    </div>

    <!-- Current-Location-Card Component -->
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
        <Block strong inset>
          <Row>
            <Col width="100">
              <Button fill raised on:click|once={getLocation}>Discover</Button>
            </Col>
          </Row>
        </Block>
      </div>
    <!-- Need Replacing/Removing -->
      <div class="card">
        <Block strong inset>
          <Row>
            <Col width="100">
              <Logout></Logout>
            </Col>
          </Row>
        </Block>
      </div>

    </div>
  {:else if $userstate == false}
    <Landing></Landing> <!-- Show Landing Page -->
  {:else}
    <LoadingIcon></LoadingIcon> <!-- Show Loading Icon -->
  {/if}
</Page>

<style>
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
    font-family: 'Roboto', sans-serif;    
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

  .bg {
    z-index: -1;
    position:fixed;
    bottom: 0;
    opacity: 0.4;
  }

</style>

<script>

  // Importing Login/user functionality
  import {userstate, userprofile} from '../js/store.js';
  import {test} from '../js/userstate.js';
  import Logout from '../components/logout.svelte';

  // Location
  var ErrorHandler;
  var showLocation;
  var latitudeFull;
  var longitudeFull;  
  var latitude;
  var longitude;
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {

          showLocation = position;
          latitudeFull = showLocation.coords.latitude;
          longitudeFull = showLocation.coords.longitude;
      
          formatLocation(longitudeFull,latitudeFull);
          },
          function errorCallback(error) {
              // error handling
          },
          {
              timeout:5000
          }
      );
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function formatLocation(longitudeFull,latitudeFull) {
    latitude = latitudeFull.toFixed(4);
    longitude = longitudeFull.toFixed(4);
    var locationData = {longitude:longitude, latitude:latitude};
    oneToOne(locationData);
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
    Button,
    Popup
  } from 'framework7-svelte';


  // importing landing functionality
  import Landing from '../components/landing.svelte';
  import LoadingIcon from '@odyssey-dev/loading-icon';

</script>