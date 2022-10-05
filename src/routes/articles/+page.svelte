<script lang="ts">
    import type {ArticleMetadata, ArticlesFromServer} from "../../lib/models";

    export let data: ArticlesFromServer;
    const articles: ArticleMetadata[] = data.articles;
</script>

<div class="flex flex-col gap-8">
    {#each articles as article}
        <a href="{article.url}">
            <span class="text-2xl">{article.title}</span>
            <p class="text-lg">{article.description}</p>
        </a>
    {/each}
</div>
