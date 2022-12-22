<script>
    import "../../styles/code-block.css"
    import {prettyDateFromIsoString} from "$lib/dates";
    import MastodonComments from "../comments/MastodonComments.svelte";

    export let url;
    export let title;
    export let description;
    export let author;
    export let image;
    export let publication_date;
</script>

<svelte:head>
    <link rel="canonical" href={url} />
    <!-- Meta Tags Generated via https://heymeta.com -->

    <!-- HTML Meta Tags -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content={author | "bachrc"} />

    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content={title} />
    <meta itemprop="description" content={description} />
    <meta itemprop="image" content={image} />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="https://cyberendroit.net" />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

</svelte:head>

<div class="content">
    <span class="cyber-title">{title}</span>
    <div class="centered-article">
        <span class="publication-date">Publié le {prettyDateFromIsoString(publication_date)}</span>
        <article>
            <slot></slot>
        </article>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
    }
    .centered-article {
        display: flex;
        flex-direction: column;
    }
    .cyber-title {
        font-size: 2rem;
        padding: 10px;
        line-height: 1;
        font-family: 'Serpentine',serif;
        font-style: italic;
        text-align: center;
        color: transparent;
        /*background-clip: text;*/
        align-self: center;
        background: -webkit-linear-gradient(right, #7e22ce, #4ade80);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media only screen and (min-width: 768px) {
        .cyber-title {
            font-size: 4rem;
        }
        .centered-article {
            margin-left: auto;
            margin-right: auto;
        }
    }
    .publication-date {
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
    .separator {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    article > :global(h1), :global(h2), :global(h3), :global(h4), :global(h5) {
        font-family: Serpentine, serif;
    }

    article :global(h1) {
        font-size: 2.2em;
        margin-top: 0.5em;
        margin-bottom: 1em;
    }

    article :global(h2) {
        font-size: 2em;
        line-height: 1em;
        margin-bottom: 1em;
        margin-top: 0.5em;
    }

    article :global(h3) {
        font-size: 1.8em;
        line-height: 1em;
        margin-bottom: 1em;
        margin-top: 0.5em;
    }
    article :global(h4) {
        font-size: 1.6em;
        line-height: 1em;
        margin-bottom: 1em;
    }

    article :global(h5) {
        font-size: 1.4em;
        line-height: 1em;
        margin-bottom: 1em;
    }

    article > :global(*) {
        margin-bottom: 1em;
    }

    article :global(p), :global(li) {
        color: #343434;
        font-size: 1em;
        line-height: 1.6em;
    }

    article :global(code) {
        font-size: 1em;
        font-family: monospace;
        background-color: rgba(10, 10, 208, 0.05);
        border-radius: 5px;
        padding: 3px;
    }

    article :global(strong) {
        font-weight: bold;
    }

    article :global(table) {
        width: 100%;
        border-collapse: collapse;
    }

    article :global(table) :global(tbody) {
        background-color: rgba(255, 255, 255, 0.1);
    }

    article :global(tr):nth-child(even) {
        background-color: rgba(56, 197, 56, 0.1);
    }

    article :global(tr):nth-child(odd) {

    }

    article :global(thead) {
        background-color: rgba(56, 197, 56, 0.3)
    }

    article :global(th), :global(td) {
        padding: 5px 10px;
    }

    article :global(th) {
        font-weight: bold;
    }

    article :global(ul) {
        list-style: square inside;
    }

    article {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        font-family: "Merriweather", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        max-width: 828px;
        padding: 10px;
    }

    @media only screen and (min-width: 768px) {
        article :global(p), :global(li) {
            color: #343434;
            font-size: 1.2rem;
            line-height: 2rem;
        }

        article :global(pre) {
            font-size: 1.2rem;
        }
    }
</style>
