<AppPage>

{#await profileSettings}
loading..
{:then profileSettings}
    <List inset>
        <h1> Settings </h1>

        <h3>
        General Settings
        </h3>

    <ListItem title="Sound" >
        <span slot="after">
            <Toggle id="sound_setting" bind:checked={sound} on:toggleChange={updateSettings} />
        </span>
    </ListItem>

    <ListItem title="Vibration" >
        <span slot="after">
            <Toggle id="vibration_setting" bind:checked={vibration} on:toggleChange={updateSettings} />
        </span>
    </ListItem>

    <ListItem title="Animations" >
    <span slot="after">
        <Toggle id="animation_setting" bind:checked={animation} on:toggleChange={updateSettings} />
    </span>
    </ListItem>

    <ListItem title="Monthly Challenges" >
        <span slot="after">
            <Toggle id="monthly_challenge_setting" bind:checked={monthlyChallenge} on:toggleChange={updateSettings} />
        </span>
    </ListItem>

    <ListItem title="Email me Events/Updates" >
        <span slot="after">
            <Toggle id="email_setting" bind:checked={email} on:toggleChange={updateSettings} />
        </span>
    </ListItem>

    <ListItem title="Theme" >
    <span slot="after">
        <Toggle id="theme_setting" checked={theme} on:toggleChange={updateSettings} />
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
            <Toggle id="new_badge_setting" checked={newBadge} on:toggleChange={updateSettings} />
        </span>
    </ListItem>

    <ListItem
        title="On Party Join"
        >
        <span slot="after">
            <Toggle id="party_mode_setting" checked={partyMode} on:toggleChange={updateSettings} />
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

    <ListInput label="Select Home" type="select" >
        <option>England</option>
        <option>Northern Ireland</option>
        <option>Scotland</option>
        <option>Wales</option>
    </ListInput>

    <ListItem title="Allow Location" >
        <span slot="after">
            <Toggle id="location_setting" checked={location} on:toggleChange={updateSettings} />
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
</AppPage>


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

    var user = auth.currentUser;

    import AppPage from "../app-pages/app-pages";
  
    var sound;
    var vibration;
    var location;
    var animation;
    var monthlyChallenge;
    var email;
    var theme;
    var newBadge;
    var partyMode;
    var profileSettings 

    if (localStorage.getItem('Settings') === null  ) {
        getSettings();
        console.log("Setttings Fetched:", "True");
    } else {
        showSettings();
    }

    export async function showSettings() {
        var profileStore = localStorage.getItem('Settings');
        profileSettings =  JSON.parse(profileStore);
        console.log("Setttings Stored:", "True", profileSettings);

        sound = profileSettings.Sound;
        vibration = profileSettings.Vibration;
        location = profileSettings.Location;
        animation = profileSettings.Animation;
        monthlyChallenge = profileSettings.MonthlyChallenge;
        email = profileSettings.Email;
        theme = profileSettings.Theme;
        newBadge = profileSettings.newBadge;
        partyMode = profileSettings.partyMode;
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
                'Vibration': vibration,
                'Location': location, 
                'Animation': animation, 
                'MonthlyChallenge': monthlyChallenge, 
                'Email': email, 
                'Theme': theme, 
                'newBadge': newBadge, 
                'partyMode': newBadge
            };
            localStorage.setItem('Settings', JSON.stringify(profileSettings));
            const res = await settingRef.set(profileSettings, { merge: true });
         
        } else {
            console.log('Document data:', doc.data());
            localStorage.setItem('Settings', JSON.stringify(doc.data()));
            showSettings();
            return doc.data();
        }
        
    }

    export async function updateSettings() {
        sound = document.querySelector('#sound_setting input').checked;
        vibration = document.querySelector('#vibration_setting input').checked;
        location = document.querySelector('#location_setting input').checked;
        animation = document.querySelector('#animation_setting input').checked;
        monthlyChallenge = document.querySelector('#monthly_challenge_setting input').checked;
        email = document.querySelector('#email_setting input').checked;
        theme = document.querySelector('#theme_setting input').checked;
        newBadge = document.querySelector('#new_badge_setting input').checked;
        partyMode = document.querySelector('#party_mode_setting input').checked;
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
        localStorage.setItem('Settings', JSON.stringify(updateprofileSettings));
        const cityRef = db.collection('Account').doc(user.uid).collection('Profile').doc('Settings');
        const doc = await cityRef.get();
        if (!doc.exists) {
            console.log('No such document!');
            const res = await cityRef.set(updateprofileSettings, { merge: true });
            
        } else {
            const res = await cityRef.set(updateprofileSettings, { merge: true });
            console.log('Document data:', doc.data());
        }
    }
                        
  import Logout from "../logout.svelte";
</script>
