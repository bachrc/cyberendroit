<script lang="ts">
    import type {Article, Edito} from "../../../lib/models";
    import "../../../styles/code-block.css"
    import MastodonComments from "../../../components/comments/MastodonComments.svelte";
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
<div class="flex flex-col">
    {@html data.content}
    {#if (metadata.pouet_url)}
        <hr class="my-4"/>
        <div class="sm:w-1/2 self-center">
            <MastodonComments pouetUrl={metadata.pouet_url} />
        </div>
    {/if}
</div>

