<script>
    import Modal from "./modal.svelte";
    let modal;
    let badgeNotificationAudio = new Audio("/static/audio/app_alert_tone_012.mp3");
    function playBadgeNotificationAudio() {
    badgeNotificationAudio.play();
  }
    playBadgeNotificationAudio()
</script>

<style>

  .achievement-get { 
      display: flex;
      flex-direction: column;
  }
  .badge-notif {
      font-family: 'Rubik', sans-serif;
      font-size: 18pt;
      font-weight: 600;
      margin-top: 0;
  }
  .badge-name {
      font-family: 'Roboto', sans-serif;
      font-size: 12pt;
      font-weight: 400;
      margin-bottom: 0;
  }
  #badge-img {
      height: 60%;
  }

</style>

<main>
    <Modal bind:this={modal}>
        <div class="achievement-get">
            <h1 class="badge-notif">Badge Unlocked!</h1>
            <img id="badge-img" src="../static/badge/sample-badge.svg" alt="badge">
            <h3 class="badge-name">Badge Name Here</h3>
        </div>
    </Modal>
</main>