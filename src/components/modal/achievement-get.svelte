<style>
  .achievement-get { 
    display: flex;
    flex-direction: column;
  }
  .badge-notif {
    display: flex;
    text-align: center;
    font-family: 'Rubik', sans-serif;
    font-size: 18pt;
    font-weight: 600;
    margin-top: 0;
  }
  .badge-name {
    display: flex;
    align-self: center;
    font-family: 'Roboto', sans-serif;
    font-size: 12pt;
    font-weight: 400;
    margin-bottom: 0;
  }
  .badge-xp {
    display: flex;
    align-self: center;
    font-family: 'Roboto', sans-serif;
    font-size: 12pt;
    font-weight: 600;
    margin-top: 5px;
  }

  #badge-img {
      height: 60%;
  }

</style>

<main>
    <Modal bind:this={modal}>
        <div class="achievement-get">
            <h1 class="badge-notif">Badge Unlocked!</h1>
            <img id="badge-img" src="../../static/logo-variations/color-icon.svg" alt="badge">
            <h3 class="badge-name">{badgeName}</h3>
            <h3 class="badge-xp">{badgeXP}xp</h3>
        </div>
    </Modal>
</main>

<script context="module">
    import Modal from "./modal.svelte";
    let modal;
    let badgeNotificationAudio = new Audio("/static/audio/app_alert_tone_012.mp3");
    export function showBadge() {
        modal.show();
    }
    export function playAudio() {
        badgeNotificationAudio.play();
    }

    let badgeName = "Badge Name Here";
    let badgeXP = 100;

</script>