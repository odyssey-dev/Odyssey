<Page name="home" class="transparent">
  {#if loggedIn == true }
  <div class="background">
    <image class="bg" src="./static/bg/merseyside-bg.png" width="100%" height="auto">
  </div>
    <div class="top-card">
      <div class="card">
        <Block strong inset>
          <Row>
            <Col width="100">
              <div class="hero-card">
                <div class="profile-info">
                  <!-- svelte-ignore a11y-img-redundant-alt -->
                  <img class="pp" src="{userPhoto}" alt="profile picture" width="50" height="50">
                  <div class="profile-txt">
                    <div class="profile-name"><p>{username}</p></div>
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
        <Block strong inset>
          <Row>
            <Col width="100">
              <Button fill raised on:click|once={getLocation}>Discover</Button>
            </Col>
          </Row>
        </Block>
        <Block strong inset>
          <Row>
            <Col width="100">
              <Button fill raised on:click|once={logout}>Logout</Button>
            </Col>
          </Row>
        </Block>
      </div>
    </div>
  {:else if loggedIn == false}
    <div class="cards">
      <div class="card">
        <Block strong inset>
          <Row>
            <Col width="100">
              <Button fill raised on:click|once={login} >Sign In</Button>
            </Col>
          </Row>
        </Block>
      </div>
    </div>
  {:else}
  <img class="loading" src="/static/svgs/loading.svg" alt="loading" width="50" height="50">
  {/if}
</Page>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  .loading {
    position: absolute;
    top: 50%;
    width: 100%;
    margin: 0 auto;
  }

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

  .bg {
    z-index: -1;
    position:absolute;
    bottom: 0;
    opacity: 0.4;
  }

</style>

<script>
  var name;
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

function formatLocation(longitudeFull,latitudeFull) {
  latitude = latitudeFull.toFixed(4);
  longitude = longitudeFull.toFixed(4);
  var locationData = {longitude:longitude, latitude:latitude};
  oneToOne(locationData);
}

async function oneToOne(locationData) {
  const {uid} = auth.currentUser;
  const ref = db.collection('accounts').doc(uid);
  console.log("Sending data...");
  return ref.set({locationData},{merge:true});
}


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

</script>