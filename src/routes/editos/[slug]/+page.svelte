<script lang="ts">
    import type {Article, Edito} from "../../../lib/models";
    import "../../../styles/code-block.css"
    import MastodonComments from "../../../components/comments/MastodonComments.svelte";
    import {prettyDateFromIsoString} from "$lib/dates.js";
    export let data: Edito;
    const metadata = data.metadata;

</script>

<svelte:head>
    <!-- Meta Tags Generated via https://heymeta.com -->

    <!-- HTML Meta Tags -->
    <title>{metadata.title}</title>
    <meta name="author" content={"bachrc"} />

    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content={metadata.title} />

    <!-- Facebook Meta Tags -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metadata.title} />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="https://cyberpacha.space" />
    <meta name="twitter:title" content={metadata.title} />

</svelte:head>
<div class="content">
    <h1 class="title">{metadata.title}</h1>
    <article>
        {@html data.content}
        <span class="published-date">Publié le {prettyDateFromIsoString(metadata.publication_date)}</span>
    </article>

    {#if (metadata.pouet_url)}
        <hr class="separator"/>
        <div class="comments">
            <MastodonComments pouetUrl={metadata.pouet_url} />
        </div>
    {/if}
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        font-size: 1.875rem;
        line-height: 2.25rem;
        margin-bottom: 2rem;
    }

    article {
        font-family: Merriweather,serif;
        line-height: 1.5em;
        color: #2f2f2f;
        width: 50%;
    }

    article :global(p) {
        margin-bottom: 0.5em;
    }

    .published-date {
        font-size: 0.75rem;
        line-height: 1rem;
    }

    .separator {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .comments {
        width: 50%;
        align-self: center;
    }

</style>

