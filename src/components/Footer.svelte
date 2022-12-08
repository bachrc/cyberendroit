<script>
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import FaMastodon from 'svelte-icons/fa/FaMastodon.svelte'
    import FaRssSquare from 'svelte-icons/fa/FaRssSquare.svelte'
</script>

<div class="container">
    <div>
        <span>cyberendroit.net - développé avec amour par pacha</span>
    </div>
    <div class="items">
        <div>
            <a href="https://github.com/bachrc"><FaGithub/></a>
        </div>
        <div>
            <a href="https://mamot.fr/@pacha"><FaMastodon/></a>
        </div>
        <div>
            <a href="/atom.xml"><FaRssSquare/></a>
        </div>
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        gap: 0.5rem;
    }

    .items {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }

    .items * {
        height: 3rem;
        width: 3rem;
    }
</style>
