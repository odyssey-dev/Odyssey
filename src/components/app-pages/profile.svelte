<div class="card-parent">
    <div class="card-child">
      <div class="profile-container">
        <div class="progress-bar-container">
          <span>
            <h1 class="lvl">{lvl}</h1>
            <div class="progress-bar"></div>
          </span>
            <p class="progress-subtitle">{progress}</p>
        </div>

        <hr class="page-break">

        <div class="total-activity">
          <h3>Total Activity</h3>
          <div class="activity-container">
            <span class="activity">
              <p>Continents Visited</p>
              <p>{continents}</p>
            </span>
            <span class="activity">
              <p>Territories Visited</p>
              <p>{territories}</p>
            </span>
            <span class="activity">
              <p>Countries Visited</p>
              <p>{countries}</p>
            </span>
            <span class="activity">
              <p>Counties Visited</p>
              <p>{counties}</p>
            </span>
            <span class="activity">
              <p>Districts Visited</p>
              <p>{districts}</p>
            </span>
            <span class="activity">
              <p>Badges Acquired</p>
              <p>{badges}</p>
            </span>
            <span class="activity">
              <p>Badges Completed</p>
              <p>{badgesComplete}</p>
            </span>
            <span class="activity">
              <p>Total XP</p>
              <p>{totalXP}</p>
            </span>
            <span class="activity">
              <p>Start Date</p>
              <p>{startDate}</p>
            </span>
          </div>
        </div>

        <hr class="page-break">

        <div class="challenges">
          <h3>Challenges</h3>
          <div class="challenge-container">
            <h3>Monthly Challenges</h3>
            <span id="challOne" class="current-challenge">
              <img class="challenge-img" src="./static/logo-variations/color-icon.svg" alt="badge">
              <p>Visit {currentMonthlyChallengeLocation}</p>
            </span>
            <span class="current-challenge">
              <img class="challenge-img" src="./static/logo-variations/color-icon.svg" alt="badge">
              <p>Visit {currentWeeklyChallengeLocation}</p>
            </span>
          </div>
        </div>

        <hr class="page-break">

        <div class="recent-badges">
          <h3>Recent Badges</h3>
          <div class="recent-badges-container">
            <span class="badges-cont">
              <img src="./static/logo-variations/color-icon.svg" alt="badge">
              <img src="./static/logo-variations/color-icon.svg" alt="badge">
              <img src="./static/logo-variations/color-icon.svg" alt="badge">
              <img src="./static/logo-variations/color-icon.svg" alt="badge">
            </span>
            <p>See All Badges {'>'}</p>
          </div>
        </div>
      </div>
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

  .profile-container {
    display: flex;
    flex-direction: column;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left)) ;
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .progress-subtitle {
    text-align: center;
  }

  /* activity */

  .activity-container {
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left)) ;
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .activity {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  /* challenges */

  .challenge-container {
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left)) ;
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .challenge-container img {
    height: 50px;
    width: auto;
  }

  .current-challenge {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #challOne {
    margin-bottom: 10px;
  }

  /* challenges */

  .recent-badges-container {
    display: flex;
    flex-direction: column;
    margin-left: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-left));
    margin-right: calc(var(--f7-list-inset-side-margin) + var(--f7-safe-area-outer-right));
  }

  .badges-cont {
    display: flex;
    justify-content: space-around;
  }

  .recent-badges-container img {
    height: 50px;
    width: auto;
  }

  .recent-badges-container p {
    align-self: flex-end;
  }

</style>

<script>
    let progress = 0;

    let lvl = 0;
    let continents = 0;
    let territories = 0;
    let countries = 0;
    let counties = 0;
    let districts = 0;
    let badges = 0;
    let badgesComplete = 0;
    let totalXP = 0;
    let startDate = "00/00/0000";

    let currentMonthlyChallengeLocation = "Merseyside County";
    let currentWeeklyChallengeLocation = "Wirral District";
</script>