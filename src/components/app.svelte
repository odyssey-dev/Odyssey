<App params={ f7params } >

  <!-- Views/Tabs container -->
  <Views tabs class="safe-areas {background_hour}">

    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive url="/" />

  </Views>

  <DevTools id="devtools" ></DevTools>

  <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            value={username}
            onInput={(e) => username = e.target.value}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            value={password}
            onInput={(e) => password = e.target.value}
          />
        </List>
        <List>
          <ListButton title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen>

</App>

<script>
  import { onMount } from 'svelte';
  import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    Toggle,
    Range,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';
  import cordovaApp from '../js/cordova-app';
  import routes from '../js/routes';

  import DevTools from '../components/devtools.svelte';

  var date = new Date();
  var current_hour = date.getHours();
  var background_hour = "g"+current_hour; 

  // Framework7 Parameters
  let f7params = {
    id: 'io.Odyssey.Odyssey', // App bundle ID
    name: 'Odyssey', // App name
    theme: 'auto', // Automatic theme detection

    // App routes
    routes: routes,

    // Input settings
    input: {
      scrollIntoViewOnFocus: Device.cordova && !Device.electron,
      scrollIntoViewCentered: Device.cordova && !Device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };
  // Login screen demo data
  let username = '';
  let password = '';
  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  onMount(() => {
    f7ready(() => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  })
</script>