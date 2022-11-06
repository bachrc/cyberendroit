<script lang="ts">
    import type {ArticleMetadata, ArticlesFromServer} from "../../lib/models";
    import CyberContainer from "../../components/CyberContainer.svelte";
    import ArticleCard from "../../components/ArticleCard.svelte";

    export let data: ArticlesFromServer;
    const articles: ArticleMetadata[] = data.articles;
</script>

<svelte:head>
    <title>Articles du cyberespace</title>
</svelte:head>

<div class="flex flex-col container mx-auto px-4">
    <div class="self-center flex flex-row items-center gap-2 my-8">
        <h1 class="text-6xl font-['Serpentine']">Le Blogidélice.</h1>
    </div>

    <div class="flex flex-row gap-8">
        <div class="flex flex-col gap-8">
            {#each articles as article}
                <ArticleCard
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    publication_date={article.publication_date}
                />
            {/each}

        </div>
    </div>
</div>


