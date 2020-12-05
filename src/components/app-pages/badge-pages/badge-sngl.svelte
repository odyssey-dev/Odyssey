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

    let title = "Badge Name";
    let progress = 0;
    let date = "00/00/0000";

    import { Icon } from 'framework7-svelte';
</script>

{#if shown}
    <main>
        <div class="card-parent">
            <div class="card-child">
                <div class="nav">
                    <Icon on:click={hide()} icon="icon-back" />
                    <h3 class="title">{title}</h3>
                    {console.log("I am shown")}
                </div>
                <div class="body">
                    <div class="badge"></div>
                    <h1 class="badge-name">{title}</h1>
                    <progress id="lvl" value="{progress}" max="1" color="#000"></progress>
                    <p>{progress}/1</p>
                    {#if progress=1}
                        <p>Date Acquired: {date}</p>
                    {/if}
                </div>
            </div>
        </div>
    </main>
{/if}

<style>
    main {
        z-index: 10;
    }

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

</style>