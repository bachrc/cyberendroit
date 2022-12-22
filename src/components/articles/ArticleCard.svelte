<script lang="ts">
    import type {Content} from "$lib/models.js";
    import {prettyDateFromIsoString} from "$lib/dates.js";
    import Tag from "./Tag.svelte";
    import {ContentType} from "$lib/models";

    export let content: Content;
    export let type: ContentType;
    export let url: string;
    export let title: string;
    export let description: string;
    export let tags: string[];
    export let publication_date: string;
</script>

<fieldset>
    <legend>{ContentType[type || content.type]}</legend>
    <div class="card-content">
        <a href="{url || content.url}">
            <h1 class="titre">{title || content.title}</h1>
        </a>
        <span class="description">{description || content.description}</span>
        {#if (tags || content.tags).length > 0}
            <div class="tags">
                <span>Thèmes : </span>
                {#each (tags || content.tags) as tag}
                    <Tag name={tag}/>
                {/each}
            </div>
        {/if}
        <span class="date">Le {publication_date || prettyDateFromIsoString(content.publication_date.toISOString())}</span>
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
