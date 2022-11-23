<script lang="ts">
    import type {ArticleContent} from "../../../lib/models";
    import "../../../styles/code-block.css"
    import MastodonComments from "../../../components/comments/MastodonComments.svelte";
    export let data: ArticleContent;
    const metadata = data.metadata;

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
    {@html data.html}
    <hr class="my-4"/>
    <div class="sm:w-2/3 self-center">
        <MastodonComments pouetUrl={metadata.pouet_url} />
    </div>
</div>

