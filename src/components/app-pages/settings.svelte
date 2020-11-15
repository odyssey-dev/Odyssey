<div class="card-parent">
    <div class="card-child">
        <h1> Settings </h1>


        {#await profileSettings}
        loading..
        {:then profileSettings}
            <List inset>

                <h3>
                General Settings
                </h3>

            <ListItem
                title="Sound"
                >
                <span slot="after">
                    {#if profileSettings.Sound == true }
                        <Toggle checked on:toggleChange={updateSettings} />
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
                </span>
            </ListItem>

            <ListItem
                title="Vibration"
                >
                <span slot="after">
                    {#if profileSettings.Vibration == true }
                        <Toggle checked on:toggleChange={updateSettings} />
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
                </span>
            </ListItem>

            <ListItem
            title="Animations"
            >
            <span slot="after">
                {#if profileSettings.Animation == true }
                        <Toggle checked on:toggleChange={updateSettings}/>
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
            </span>
            </ListItem>

            <ListItem
                title="Monthly Challenges"
                >
                <span slot="after">
                    {#if profileSettings.MonthlyChallenge == true }
                        <Toggle checked on:toggleChange={updateSettings}/>
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
                </span>
            </ListItem>

            <ListItem
                title="Email me Events/Updates"
                >
                <span slot="after">
                    {#if profileSettings.Email == true }
                        <Toggle checked on:toggleChange={updateSettings}/>
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
                </span>
            </ListItem>

            <ListItem
            title="Theme"
            >
            <span slot="profileSettings">
                {#if profileSettings.Theme == true }
                    <Toggle checked on:toggleChange={updateSettings}/>
                {:else}
                    <Toggle on:toggleChange={updateSettings} />
                {/if}
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
                    {#if profileSettings.newBadge == true }
                        <Toggle checked on:toggleChange={updateSettings} />
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
                </span>
            </ListItem>

            <ListItem
                title="On Party Join"
                >
                <span slot="after">
                    {#if profileSettings.partyMode == true }
                        <Toggle checked on:toggleChange={updateSettings} />
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
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
                    {#if profileSettings.Location == true }
                        <Toggle checked on:toggleChange={updateSettings} />
                    {:else}
                        <Toggle on:toggleChange={updateSettings} />
                    {/if}
                </span>
            </ListItem>

                <ListItem>
                <Link popupOpen="#devtools">Devtools</Link>
                </ListItem>

            <ListItem>
                <Logout></Logout>
            </ListItem>
        </List>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}

    </div>
</div>

<style>
  h1 {
    display: flex;
    align-self: center;
    margin-bottom: 0;
    font-size: 16pt;
    height: auto;
  }

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

    import {auth, db} from '../../js/firebase.js';
    import { userprofile, settings, userstate } from '../../js/store.js';
  
    var sound;
    var vibration;
    var location;
    var animation;
    var monthlyChallenge;
    var email;
    var theme;
    var newBadge;
    var partyMode;


    // var profileSettings = { 
    //             'Sound': sound,
    //             'Vibration': vibration,
    //             'Location': location, 
    //             'Animation': animation, 
    //             'MonthlyChallenge': monthlyChallenge, 
    //             'Email': email, 
    //             'Theme': theme, 
    //             'newBadge': newBadge, 
    //             'partyMode': partyMode
    //         };

    if (localStorage.getItem('Settings') === null  ) {
        getSettings();
        console.log("Setttings Fetched:", "True");
    } else {
        var profileStore = localStorage.getItem('Settings');
        var profileSettings =  JSON.parse(profileStore);
        console.log("Setttings Stored:", "True", profileSettings);
    }


    export async function getSettings() {
        var profileStored = localStorage.getItem('Profile');
        var profile = JSON.parse(profileStored);
        console.log('Profile Settings: ', profile);
        const settingRef = db.collection('Account').doc(profile.uid).collection('Profile').doc('Settings');
        const doc = await settingRef.get();
        if (!doc.exists) {
            console.log('No such document!');
            var profileSettings = { 
                'Sound': sound,
                'Vibration': true,
                'Location': true, 
                'Animation': true, 
                'MonthlyChallenge': true, 
                'Email': true, 
                'Theme': true, 
                'newBadge': true, 
                'partyMode': true
            };
            localStorage.setItem('Settings', JSON.stringify(profileSettings));
            const res = await settingRef.set(profileSettings, { merge: true });
        } else {
            console.log('Document data:', doc.data());
            localStorage.setItem('Settings', JSON.stringify(doc.data()));
            return doc.data();
        }
    }

    export async function updateSettings() {


            var updateprofileSettings = { 
                'Sound': sound,
                'Vibration': vibration,
                'Location': location, 
                'Animation': animation, 
                'MonthlyChallenge': monthlyChallenge, 
                'Email': email, 
                'Theme': theme, 
                'newBadge': newBadge, 
                'partyMode': partyMode
            };
        console.log(updateprofileSettings);
        // localStorage.setItem('Settings', JSON.stringify(profileSettings));
    }


    // export async function updateSettings(profileSettings) {

    //     localStorage.setItem('Settings', profileSettings);

    //     var profileStored = localStorage.getItem('Profile');

    //     var profile = JSON.parse(profileStored);
    //     console.log('Profile Settings: ', profile);

    //     console.log(profile.uid);

    //     const cityRef = db.collection('Account').doc(profile.uid).collection('Profile').doc('Settings');
    //     const doc = await cityRef.get();
    //     if (!doc.exists) {
    //         console.log('No such document!');
            
    //         const res = await cityRef.set(profileSettings, { merge: true });
            
    //     } else {
    //         const res = await cityRef.set(profileSettings);
    //         console.log('Document data:', doc.data());
    //     }
    // }

    // var soundSetting = true;
    // var vibrationSetting = true;
    // var locationSetting = true ;
    // var animationSetting = true ;
    // var monthlyChallengeSetting = true;
    // var emailSetting = true;
    // var themeSetting = true;
    // var newBadgeSetting = true;
    // var partyModeSetting = true;

    // createSettings();


    // var profileSettings = { 
    //                         'Sound': soundSetting,
    //                         'Vibration': vibrationSetting,
    //                         'Location': locationSetting, 
    //                         'Animation': animationSetting, 
    //                         'MonthlyChallenge': monthlyChallengeSetting, 
    //                         'Email': emailSetting, 
    //                         'Theme': themeSetting, 
    //                         'newBadge': newBadgeSetting, 
    //                         'partyMode': partyModeSetting
    //                     };

    //                     console.log(profileSettings.Sound);
  



    // export async function getSettings() {

    //     var profileStored = localStorage.getItem('Profile');

    //     var profile = JSON.parse(profileStored);

    //     const cityRef = db.collection('Account').doc(profile.uid).collection('Profile').doc('Settings');
    //     const doc = await cityRef.get();
    //     if (!doc.exists) {
    //         console.log('No such document!');

    //         const res = await cityRef.set(profileSettings, { merge: true });
            
    //     } else {
    //         console.log('Document data:', doc.data());
    //         return doc.data();
    //     }
    // }


    // export async function updateSettings(profileSettings) {

    //     var profileStored = localStorage.getItem('Profile');

    //     var profile = JSON.parse(profileStored);
    //     console.log('Profile Settings: ', profile);

    //     console.log(profile.uid);

    //     const cityRef = db.collection('Account').doc(profile.uid).collection('Profile').doc('Settings');
    //     const doc = await cityRef.get();
    //     if (!doc.exists) {
    //         console.log('No such document!');
            
    //         const res = await cityRef.set(profileSettings, { merge: true });
            
    //     } else {
    //         const res = await cityRef.set(profileSettings);
    //         console.log('Document data:', doc.data());
    //     }
    // }




    // export function getLocalSettings() {

    //     // Retrieve the object from storage
    //     var profileSettings = localStorage.getItem('Settings');

    //     console.log('Profile Settings: ', JSON.parse(profileSettings));
    // }

    // createSettings();
    // getLocalSettings();
                        
  import Logout from "../logout.svelte";
</script>
