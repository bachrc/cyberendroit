<script lang="ts">
    import type {ArticleMetadata} from "$lib/models.js";
    import {prettyDateFromIsoString} from "$lib/dates.js";
    import Tag from "./Tag.svelte";

    export let article: ArticleMetadata;
</script>

<fieldset>
    <legend>Article</legend>
    <div class="card-content">
        <a href="/{article.url}">
            <h1 class="titre">{article.title}</h1>
        </a>
        <span class="description">{article.description}</span>
        {#if article.tags.length > 0}
            <div class="tags">
                <span>Thèmes : </span>
                {#each article.tags as tag}
                    <Tag name={tag}/>
                {/each}
            </div>
        {/if}
        <span class="date">Le {prettyDateFromIsoString(article.publication_date)}</span>
    </div>
</fieldset>

<style>
    h1 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: bold;
        margin-bottom: 0.3em;
    }

    .date {
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(55 65 81)
    }

    fieldset {
        background-color: rgba(255, 255, 255, 0.2);
        border-style: double;
        border-width: 4px;
        padding: 10px 20px;
        border-radius: 10px;
        border-color: rgb(126, 146, 225);
        box-shadow: 6px 6px 6px 1px rgba(89, 115, 222, 0.4);
    }

    .description {
        padding-bottom: 2rem;
    }

    .card-content {
        display: flex;
        flex-direction: column;
    }

    .tags {
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: baseline;
        font-size: 0.875rem;
    }

    legend {
        font-family: "Serpentine", sans-serif;
        font-size: 1.5em;
    }
</style>
