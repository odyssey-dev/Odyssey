<div class="card-parent">
    <div class="card-child">
        <span class="badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
        </span>
        <progress id="lvl" value="{progress}" max="100" color="#000"></progress>
        <h3 class="monthly-title">Monthly Challenge: Visit Place</h3>
    </div>
</div>

<style>

#lvl {
    width: 90%;
    height: 5px;
    margin-bottom: 2px;
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
    opacity: 0.5;
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
    padding: 16px;
    height: 14vh;
    align-items: center;
    justify-content: center;
}

</style>

<script>
    let progress = 25
</script>