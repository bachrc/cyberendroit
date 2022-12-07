<script lang="ts">
    import type {ArticleMetadata, ArticlesFromServer} from "$lib/models";
    import ArticleCard from "../../components/articles/ArticleCard.svelte";
    import CyberContainer from "../../components/CyberContainer.svelte";

    export let data: ArticlesFromServer;
    const articles: ArticleMetadata[] = data.articles;
</script>

<svelte:head>
    <title>Articles du cyberespace</title>
</svelte:head>

<div class="page-container">
    <h1 class="header-text">Le Blogidélice.</h1>
    <div class="articles-panel">
        <div class="articles-list">
            {#each articles as article}
                <ArticleCard article={article}/>
            {/each}
        </div>
        <CyberContainer title="Recherche" theme="cyan">
            Bientôt ici on pourra rechercher
        </CyberContainer>
    </div>

</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
    }

    .header-text {
        align-self: center;
        gap: 0.5rem;
        margin: 2rem 0;
        font-family: "Serpentine", serif;
        font-size: 3.75rem;
    }

    .articles-panel {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .articles-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>

