<script lang="ts">
    import {prettyDateFromIsoString} from "$lib/dates";
    import type {ArticleMetadata} from "$lib/models.js";

    export let article: ArticleMetadata;
</script>

<fieldset>
    <legend>Article</legend>
    <a href="{article.url}">
        <span class="text-2xl font-bold">{article.title}</span>
    </a>
    <p class="text-lg">{article.description}</p>
    <span class="text-sm text-gray-700">Le {prettyDateFromIsoString(article.publication_date)}</span>
</fieldset>

<style>
    fieldset {
        border-width: 2px;
        padding: 10px 20px;
        border-radius: 10px;
    }

    legend {
        font-family: "Serpentine", sans-serif;
        font-size: 1.5em;
    }
</style>
