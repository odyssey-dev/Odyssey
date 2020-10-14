<script>
    import Modal from "./modal.svelte";
    let modal;
</script>

<style>
    main {
        width: 100%;
        height: 100%;
    }

    .achievement-get {
        display: flex;
        flex-direction: column;
    }

    .badge-unlocked {
        font-family: 'Rubik', sans-serif;
        font-size: 18pt;
        font-weight: 600;
    }

    .badge-name {
        font-family: 'Roboto', sans-serif;
        font-size: 12pt;
        font-weight: 400;
        margin-bottom: 0;
    }

    img {
        height: 60%;
    }

    h1 {
        margin-top: 0;
    }

</style>

<main>
    <button on:click={() => modal.show()}>Show Modal</button>
    <Modal bind:this={modal}>
        <div class="achievement-get">
            <h1 class="badge-unlocked">Badge Unlocked!</h1>
            <img src="../static/badge/sample-badge.svg" alt="badge">
            <h3 class="badge-name">Merseyside Explorer (Gold)</h3>   
        </div>
    </Modal>
</main>