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
    <Link tabLink="#tab-1" tabLinkActive text="Tab 1" iconIos="f7:envelope_fill" iconAurora="f7:envelope_fill" iconMd="material:email" />
    <Link tabLink="#tab-2" text="Tab 2" iconIos="f7:calendar_fill" iconAurora="f7:calendar_fill" iconMd="material:today" />
    <Link tabLink="#tab-3" text="Tab 3" iconIos="f7:cloud_upload_fill" iconAurora="f7:cloud_upload_fill" iconMd="material:file_upload" />
    <Link tabLink="#tab-4" text="Tab 4" iconIos="f7:settings_fill" iconAurora="f7:settings_fill" iconMd="material:settings" />
  </Toolbar>

  <script>
    import {Toolbar, Link, Tabs, Tab } from 'framework7-svelte';
    import Badges from '../app-pages/badges';
    import Profile from '../app-pages/profile';
    import Settings from '../app-pages/settings';
  
    let isBottom = true;
  </script>