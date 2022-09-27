
<script lang="ts">/** @type {import('./$types').PageData} */

    export let data;

    const articles = data.articles;
</script>

<div class="flex flex-col gap-8">
    {#each articles as article}
        <a href="{article.url}"> <span class="text-2xl">{article.title}</span><p class="text-lg">Description</p></a>
    {/each}
</div>
