

    <div class="card-parent">
        <div class="card-child">
            {#await badges}
                loading..
            {:then querySnapshot}
                <span class="badges">
                    {#each badgeData as badge}
                    <div>
                        <img src="./static/logo-variations/color-icon.svg" alt="badge">
                        <span>{badge}</span>
                    </div>  
                    {/each}
                </span>
            {:catch error}
                <p style="color: red">{error.message}</p>
            {/await}
            <h3 class="monthly-title">Recent Badges</h3>
        </div>
    </div>

<style>

.badges {
    display: flex;
    flex-direction: row;
}

h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 11pt;
    font-weight: 500;
    margin: 0;
    color: #000;
}

img {
    display: flex;
    place-self: center;
    height: 46pt;
    width: 46pt;
    margin: 8pt;
}

.card-parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0; 
    font-size: inherit;
    background-color: #fff;
    border-radius: 4px;
    margin: 2%;
    overflow: hidden;
    height: 100%;
    }

.card-child {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 14vh;
    padding: 16px;
}

</style>

<script>
    import {db} from '../../js/firebase.js';
    import {userprofile} from '../../js/store.js';

    if (localStorage.getItem('Badges') === null  ) {
        var badgeData = [];
        var badges = db.collection('Account').doc($userprofile.uid).collection('Achievement').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                badgeData.push(doc.data().Name); 
            });
            console.log("Profile Fetched:", "True");
            localStorage.setItem('Badges', badgeData);
        });
    } else {
        var profileStore = localStorage.getItem('Badges');
        var badgeData = profileStore.split(',');
    }
    
</script>