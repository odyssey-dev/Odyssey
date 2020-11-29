<script>
    import Top from '../profile.svelte';
</script>

<main>
    <div class="card-parent">
        <div class="card-child">
            <Top></Top>
            <slot />
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
        overflow-y: scroll;
        margin: 2%;
        border-radius: 4px;
        height: auto;
        width: 100%;
        margin-bottom: calc(var(--f7-tabbar-labels-height) + 2%);
    }
</style>