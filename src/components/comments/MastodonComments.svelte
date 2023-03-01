<script lang="ts">
    import type {Toot} from "$lib/comments";
    import {tootsFromResponse} from "$lib/comments";
    import Comment from "./Comment.svelte";

    export let tootUrl;

    async function fetchResponseToots(tootUrl: string) : Promise<Toot[]> {
        const tootPattern = /^https?:\/\/([\w.]*)\/.*\/(\d*)$/

        const match = tootUrl.match(tootPattern);
        const instanceName = match[1];
        const tootId = match[2];

        return await fetch(`https://${instanceName}/api/v1/statuses/${tootId}/context`)
            .then((response) => response.json())
            .then(response => response["descendants"])
            .then(it => tootsFromResponse(it))
    }
</script>

<div class="container">
    <h1 class="title">Commentaires</h1>
    <div class="comments">
        {#await fetchResponseToots(tootUrl)}
            <p>loading comments..</p>
        {:then toots}
            {#each toots as toot}
                <Comment toot={toot}/>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
    <span class="add-comment">Vous pouvez ajouter un commentaire en <a href={tootUrl}>répondant sur Mastodon</a> !</span>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 3rem;
        line-height: 1;
        padding-bottom: 2rem;
        font-family: 'Serpentine', serif;
    }

    .comments {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .add-comment {
        font-style: italic;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .add-comment a {
        text-decoration-line: underline;
        text-underline-offset: 4px;
    }
</style>
