<Popup class="devtools-popup" opened={devtoolState} onPopupClosed={() => devtoolState = false}>
  <Page>
    <Navbar title="DevTools">
      <NavRight>
        <Link popupClose>Close</Link>
      </NavRight>
    </Navbar>
    <Block>
      <List inset>

      
        <ListItem>
          <Logout></Logout>
        </ListItem>
    
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

  import Logout from '../components/logout.svelte';

  var devtoolState = false;

</script>