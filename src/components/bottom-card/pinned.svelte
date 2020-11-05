<style>

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
        padding: 16px;
        height: 14vh;
        align-items: center;
        justify-content: center;
    }

    h2 {
        display: flex;
        z-index: 5;
        position: absolute;
        align-self: center;
        font-weight: 800;
    }
    
    </style>

<div class="card-parent">
    <div class="card-child">
        {#if isBadgePinned === true}
        <span class="badges">
            <img src="./static/logo-variations/color-icon.svg" alt="badge">
        </span>
        <h3 class="monthly-title">Pinned Badge</h3>
        {:else}
        <span class="badges">
            <img src="./static/svgs/no-selected-badge.svg" alt="none" style="opacity: 0.5;">
        </span>
        <h3 class="monthly-title" style="opacity: 0.5;">Pinned Badge</h3>
        <h2 class="click-to-select">Tap to Pin a Badge!</h2>
        {/if}
    </div>
</div>

<script>
    let isBadgePinned = false;
</script>