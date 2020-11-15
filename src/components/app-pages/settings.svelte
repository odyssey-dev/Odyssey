<div class="card-parent">
    <div class="card-child">
        <Top></Top>
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
    </div>
</div>

<style>

  .card-parent {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
  }

  .card-child {
    display: flex;
    flex-direction: column;
    background: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
    margin: 2%;
    border-radius: 4px;
    height: auto;
    width: 100%;
    margin-bottom: calc(var(--f7-tabbar-labels-height) + 2%);
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
  import Top from '../profile.svelte';
</script>
