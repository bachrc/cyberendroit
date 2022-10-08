<script lang="ts">
    import type {ArticleMetadata, ArticlesFromServer} from "../../lib/models";
    import CyberContainer from "../../components/CyberContainer.svelte";

    export let data: ArticlesFromServer;
    const articles: ArticleMetadata[] = data.articles;
</script>

<svelte:head>
    <title>Articles du cyberespace</title>
</svelte:head>

<div class="flex flex-col container mx-auto">
    <div class="self-center flex flex-row items-center gap-2 my-8">
        <span class="font-['Good_Timing']">Soyez les bienvenus dans</span>
        <h1 class="text-6xl font-['Serpentine']">Le Blogidélice.</h1>
        <span class="font-['Good_Timing']">Essuyez vos pieds merci</span>
    </div>

    <div class="flex flex-row gap-8">
        <div class="flex flex-col gap-8 w-2/3">
            {#each articles as article}
                <a href="{article.url}">
                    <span class="text-2xl font-bold">{article.title}</span>
                    <p class="text-lg">{article.description}</p>
                </a>
            {/each}

        </div>
        <div class="w-1/3">
            <CyberContainer title="Pouetent">
                <span>Bah coucou !</span>
            </CyberContainer>
        </div>
    </div>
</div>


