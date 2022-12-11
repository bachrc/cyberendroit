<script lang="ts">
    import type {Article} from "../../../lib/models";
    import "../../../styles/code-block.css"
    import MastodonComments from "../../../components/comments/MastodonComments.svelte";
    export let data: Article;
    const metadata = data.metadata;

    import ArticleLayout from "$components/layouts/standard-article.svelte"
    import {prettyDateFromIsoString} from "$lib/dates.js";
</script>

<svelte:head>
    <link rel="canonical" href={metadata.url} />
    <!-- Meta Tags Generated via https://heymeta.com -->

    <!-- HTML Meta Tags -->
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta name="author" content={metadata.author | "bachrc"} />

    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content={metadata.title} />
    <meta itemprop="description" content={metadata.description} />
    <meta itemprop="image" content={metadata.image} />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content={metadata.url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content={metadata.image} />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="https://cyberpacha.space" />
    <meta property="twitter:url" content={metadata.url} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={metadata.image} />

</svelte:head>
<div class="content">
    <span class="cyber-title">{metadata.title}</span>
    <div class="centered-article">
        <span class="publication-date">Publié le {prettyDateFromIsoString(metadata.publication_date)}</span>
        <ArticleLayout publication_date={metadata.publication_date}>
            {@html data.html}
        </ArticleLayout>
        {#if metadata.pouet_url}
            <hr class="separator"/>
            <div class="comments">
                <MastodonComments pouetUrl={metadata.pouet_url} />
            </div>
        {/if}
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
    }

    .centered-article {
        margin-left: auto;
        margin-right: auto;
    }

    .cyber-title {
        font-size: 3.75rem;
        line-height: 1;
        font-family: 'Serpentine',serif;
        text-align: center;
        color: transparent;
        /*background-clip: text;*/
        align-self: center;
        background: -webkit-linear-gradient(#7e22ce, #4ade80);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .publication-date {
        font-size: 0.875rem;
        line-height: 1.25rem;
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
