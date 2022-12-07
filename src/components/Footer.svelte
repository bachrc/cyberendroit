<script>
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
    import FaMastodon from 'svelte-icons/fa/FaMastodon.svelte'
    import FaRssSquare from 'svelte-icons/fa/FaRssSquare.svelte'
</script>

<div class="w-full flex flex-col justify-center items-center py-4 gap-2">
    <div>
        <span>cyberendroit.net - développé avec amour par pacha</span>
    </div>
    <div class="flex flex-row items-center gap-8">
        <div class="h-12 w-12">
            <a href="https://github.com/bachrc"><FaGithub/></a>
        </div>
        <div class="h-12 w-12">
            <a href="https://mamot.fr/@pacha"><FaMastodon/></a>
        </div>
        <div class="h-12 w-12">
            <a href="/atom.xml"><FaRssSquare/></a>
        </div>
    </div>
</div>
