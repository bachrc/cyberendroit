
<script lang="ts">/** @type {import('./$types').PageData} */

    export let data;
    const articles = data.articles;
</script>

<div>La liste des articles de mon blog</div>
{#each articles as article}
    <a href="{article.url}"> <p>{article.title}</p></a>
{/each}