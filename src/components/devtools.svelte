<Popup id="devtools" >
  <Page>
    <Navbar title="DevTools">
      <NavRight>
        <Link popupClose>Close</Link>
      </NavRight>
    </Navbar>
    <Block>


    <List mediaList inset>

      <ListItem title="Geo Location" badge="{navigator.geolocation}" badgeColor="red" ></ListItem>

      <ListItem title="Mapbox" badge="Offline" badgeColor="red" ></ListItem>

      <ListItem title="Internet" badge="{navigator.onLine}" badgeColor="red" ></ListItem>

      <ListItem title="Localstorage" badge="true" badgeColor="red" ></ListItem>

      <ListItem title="User Status" badge="{navigator.onLine}" badgeColor="red" ></ListItem>

      <ListItem title="User Agent" text="{navigator.userAgent}" ></ListItem>

      <ListItem title="Cookies" text="{navigator.cookieEnabled}" ></ListItem>

      <ListItem title="Language" text="{navigator.language}" ></ListItem>


      <ListItem title="Host" text="{location.host}" ></ListItem>

      <ListItem title="Hostname" text="{location.hostname}" ></ListItem>

      <ListItem title="Href" text="{location.href}" ></ListItem>

      <ListItem title="Origin" text="{location.origin}" ></ListItem>

      <ListItem title="Pathname" text="{location.pathname}" ></ListItem>

      <ListItem title="Port" text="{location.port}" ></ListItem>

      <ListItem title="Protocol" text="{location.protocol}" ></ListItem>

      <ListItem title="Search Query" text="{location.search}" ></ListItem>


      <ListItem title="Screen Height" text="{screen.availHeight}" ></ListItem>

      <ListItem title="Screen Width" text="{screen.availWidth}" ></ListItem>

      <ListItem title="Window Height" text="{screen.height}" ></ListItem>

      <ListItem title="Window Width" text="{screen.width}" ></ListItem>

      <ListItem title="Color Resolution" text="{screen.pixelDepth}" ></ListItem>

      <ListItem title="Color Depth" text="{screen.colorDepth}" ></ListItem>


    </List>

    </Block>
  </Page>
</Popup>

<style>

</style>

<script>


import {
    Page,
    Navbar,
    NavRight,
    Link,
    Block,
    Popup,
    List,
    ListItem,
    ListInput,
    Toggle
  } from 'framework7-svelte';

</script>