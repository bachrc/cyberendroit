<script lang="ts">
    import ArticleCard from '$components/articles/ArticleCard.svelte';
    import CyberContainer from '$components/CyberContainer.svelte';
    import type {ContentFromServer, TagOccurrencies} from "$lib/models";
    import {page} from "$app/stores";
    import Tag from "$components/articles/Tag.svelte";
    import {type SpecialTag, tags} from "$lib/tags";

    export let data: ContentFromServer;

    $: contained = data.content;
    $: tag = $page.url.searchParams.get("tag")

    $: specialtag = tags[tag ?? ""] ?? {}

    async function fetchTags(): Promise<TagOccurrencies[]> {
        return await fetch('blog/tags.json')
            .then(res => res.json());
    }
</script>

<svelte:head>
    <title>Articles du cyberespace</title>
</svelte:head>

<div class="page-container">
    <h1 class="header-text">{specialtag.name || tag || "Le Blogidélice."}</h1>
    {#if specialtag.description}
        <h3 class="description">{specialtag.description}</h3>
    {/if}
    <div class="articles-panel">
        <div class="articles-list">
            {#each contained as content (content.url)}
                <ArticleCard {content} />
            {/each}
        </div>
        <aside>
            <CyberContainer title="Recherche" theme="cyan">
                {#await fetchTags()}
                    loading tags..
                {:then tags}
                    {#each tags as tag}
                        <div class="tag">
                            <Tag name={tag.tag} />
                            <span class="contained">{tag.contained}</span>
                        </div>
                    {/each}
                {:catch error}
                    <p>Error fetching tags</p>
                {/await}
            </CyberContainer>
        </aside>
    </div>
</div>

<style>
    .tag {
        display: flex;
        flex-direction: row;
    }

    .tag .contained {
        background-color: rgba(0, 0, 255, 0.1);
        padding: 3px 7px;
        border-radius: 10px;
    }

    h3 {
        font-size: 1.3em;
        align-self: center;
    }

    aside {
        margin-top: 20px;
    }

    .page-container {
        display: flex;
        flex-direction: column;
        padding: 15px;
        gap: 5px;
    }

    .header-text {
        align-self: center;
        gap: 0.5rem;
        margin: 2rem 0;
        font-family: 'Serpentine', serif;
        font-size: 2.5rem;
    }

    .articles-panel {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 768px) {
        .articles-panel {
            flex-direction: row;
            justify-content: space-between;
            gap: 15px;
        }

        aside {
            min-width: 400px;
        }

        .header-text {
            font-size: 3.5rem;
        }
    }

    .articles-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        flex-grow: 1;
    }
</style>
