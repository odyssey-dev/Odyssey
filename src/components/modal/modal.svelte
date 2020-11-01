<script>
    // default shown = false
    let shown = false;

    // show function
    export function show() {
        shown = true;
    }

    // hide function
    export function hide() {
        shown = false;
    }
    
</script>

<style>
    .modal-wrapper {
        display: flex;
        align-content: center;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
    }

    .modal {
        display: flex;
        background-color: #fff;
        width: 60%;
        height: 30%;
        padding: 10%;
        margin: 15% auto;
        border-radius: 8px;
        align-self: center;
        justify-content: center;
        z-index: 12;
    }
    .modal-closer {
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
    }

    slot {
        max-height: 100%;
    }
</style>

{#if shown}
    <div class="modal-wrapper">
        <div class="modal" on:click={() => show()}>
            <slot />
        </div>
        <div class="modal-closer" on:click={() => hide()}> 

        </div>
    </div>
{/if}
