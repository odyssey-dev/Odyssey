  <h1> Settings </h1>
<List inset>

    <h3>
      General Settings
    </h3>

  <ListItem
    title="Sounds"
    >
    <span slot="after">
    <Toggle />
    </span>
  </ListItem>

  <ListItem
    title="Vibrations"
    >
    <span slot="after">
    <Toggle />
    </span>
  </ListItem>

  <ListItem
  title="Animations"
  >
  <span slot="after">
  <Toggle />
  </span>
</ListItem>

  <ListItem
    title="Monthly Challenges"
    >
    <span slot="after">
    <Toggle />
    </span>
  </ListItem>

  <ListItem
    title="Email me Events/Updates"
    >
    <span slot="after">
    <Toggle />
    </span>
  </ListItem>

  <ListItem
  title="Dark Mode"
  >
  <span slot="after">
    <Toggle />
  </span>
</ListItem>

</List>

<List inset>

    <h3>
      Push Notifications
    </h3>

  <ListItem
    title="On New Badge"
    >
    <span slot="after">
      <Toggle />
    </span>
  </ListItem>

  <ListItem
    title="On Party Join"
    >
    <span slot="after">
      <Toggle />
    </span>
  </ListItem>
</List>

<List inset>

  <h3>
    Language Settings
  </h3>

  <ListInput
    label="Select Language"
    type="select"
    >
    <option>English</option>
    <option>Scots</option>
    <option>Welsh</option>
  </ListInput>

</List>

<List inset>

  <h3>
    Account Settings
  </h3>

  <ListInput
    label="Select Home"
    type="select"
    >
    <option>England</option>
    <option>Northern Ireland</option>
    <option>Scotland</option>
    <option>Wales</option>
  </ListInput>

  <ListItem
    title="Allow Location"
    >
    <span slot="after">
      <Toggle />
    </span>
  </ListItem>

    <ListItem>
      <Link popupOpen="#devtools">Devtools</Link>
    </ListItem>

  <ListItem>
    <Logout></Logout>
  </ListItem>

</List>

<style>
  h1 {
    display: flex;
    align-self: center;
    margin-bottom: 0;
    font-size: 16pt;
    height: auto;
  }

</style>

<script>
  import {
    Page,
    Navbar,
    Link,
    List,
    ListInput,
    ListItem,
    Toggle,
    BlockTitle,
    Row,
    Button,
    Range,
    Block
  } from 'framework7-svelte';

  import Logout from "../logout.svelte";
</script>
