

    <div class="card-parent">
        <div class="card-child">
            {#await badges}
                loading..
            {:then querySnapshot}
                <span class="badges">
                    {#each badgeData as badge}
                    <div>
                        <img src="./static/logo-variations/color-icon.svg" alt="badge">
                        <span>{badge.Name}</span>
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
    flex-direction: row-reverse;
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

    var recentBadge = db.collection('Account').doc($userprofile.uid).collection('Achievement');
    
    if (localStorage.getItem('RecentBadges') === null  ) {
        var badgeData = [];
        var badges = recentBadge.orderBy("Timestamp").limit(4).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            badgeData.push(doc.data()); 
        });
            console.log("Recent Badge Fetched:", "True");
            localStorage.setItem('RecentBadges', JSON.stringify(badgeData));
        });
    } else {
        var profileStore = localStorage.getItem('RecentBadges');
        var badgeData = JSON.parse(profileStore);
    }
    
</script>