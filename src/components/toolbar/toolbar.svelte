  <Tabs>

    <Tab id="tab-1" class="page-content" tabActive>

    </Tab>

    <Tab id="tab-2" class="page-content">
      <Badges></Badges>
    </Tab>

    <Tab id="tab-3" class="page-content">
      <Profile></Profile>
    </Tab>

    <Tab id="tab-4" class="page-content">
      <Settings></Settings>
    </Tab>

  </Tabs>

  <Toolbar tabbar labels position={isBottom ? 'bottom' : 'top'}>
    <Link tabLink="#tab-1" text="Home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="f7:house_fill" />
    <Link tabLink="#tab-2" text="Badges" iconIos="f7:star_circle_fill" iconAurora="f7:star_circle_fill" iconMd="f7:star_circle_fill" />
    <Link tabLink="#tab-3" text="Profile" iconIos="f7:person_crop_circle_fill" iconAurora="f7:person_crop_circle_fill" iconMd="f7:person_crop_circle_fill" />
    <Link tabLink="#tab-4" text="Settings" iconIos="f7:gear_alt_fill" iconAurora="f7:gear_alt_fill" iconMd="f7:gear_alt_fill" />
  </Toolbar>

  <script>
    import {Toolbar, Link, Tabs, Tab } from 'framework7-svelte';
    import Badges from '../app-pages/badge-pages/badge-stack-template';
    import Profile from '../app-pages/profile';
    import Settings from '../app-pages/settings';
  
    let isBottom = true;
  </script>