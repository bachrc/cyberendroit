<script lang="ts">
    import type {Article} from "../../../lib/models";
    import "../../../styles/code-block.css"
    import MastodonComments from "../../../components/comments/MastodonComments.svelte";
    export let data: Article;
    const metadata = data.metadata;

    import ArticleLayout from "$components/layouts/standard-article.svelte"
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
<div class="flex flex-col">
    <ArticleLayout title={metadata.title} publication_date={metadata.publication_date}>
        {@html data.html}
    </ArticleLayout>
    <hr class="my-4"/>
    <div class="sm:w-1/2 self-center">
        <MastodonComments pouetUrl={metadata.pouet_url} />
    </div>
</div>

