<script>

    import Top from '../../profile';

</script>
<main>
    <div class="card-parent">
        <div class="card-child">
            <Top></Top>
            <div class="badge-content">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="badge-img" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                <h1>Badge Name</h1>
                <h3>Badge Descriptor</h3>
                <div class="progress-bar"></div>
                <p>0/0</p>
                <div class="badge-needed">
                  <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="got" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
                  <img class="need" src="../../../static/logo-variations/color-icon.svg" alt="badge">
              </div>
            </div>
        </div>
    </div>
</main>

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
    overflow-y: hidden;
    margin: 2%;
    border-radius: 4px;
    height: auto;
    width: 100%;
    margin-bottom: calc(var(--f7-tabbar-labels-height) + 2%);
  }

  .badge-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .badge-img {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 10% 0 0;
  }

  h1 {
    font-size: 30pt;
    justify-content: center;
    display: flex;
    margin: 2%;
  }

  h3 {
    margin: 0;
    display: flex;
    justify-content: center;
  }

  p {
    display: flex;
    justify-content: center;
  }

  .badge-needed {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    overflow-x: scroll;
    padding: 0 10%;
  }

  .badge-needed img {
    width: 14%;
    margin: 1%;
  }

  .need {
    opacity: 0.5;
  }

</style>