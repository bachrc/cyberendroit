<script lang="ts">
    import type {ArticleMetadata, ArticlesFromServer} from "../../lib/models";

    export let data: ArticlesFromServer;
    const articles: ArticleMetadata[] = data.articles;
</script>

<svelte:head>
    <title>Articles du cyberespace</title>
</svelte:head>

<div class="flex flex-col gap-8 container mx-auto">
    {#each articles as article}
        <a href="{article.url}">
            <span class="text-2xl">{article.title}</span>
            <p class="text-lg">{article.description}</p>
        </a>
    {/each}
</div>
