<script lang="ts">
    import type {Pouet} from "$lib/comments";
    import {pouetsFromResponse} from "$lib/comments";
    import Comment from "./Comment.svelte";

    export let pouetUrl;

    async function fetchResponsePouets(pouetUrl: string) : Promise<Pouet[]> {
        const pouetPattern = /^https?:\/\/([\w.]*)\/.*\/(\d*)$/

        const match = pouetUrl.match(pouetPattern);
        const instanceName = match[1];
        const pouetId = match[2];

        return await fetch(`https://${instanceName}/api/v1/statuses/${pouetId}/context`)
            .then((response) => response.json())
            .then(response => response["descendants"])
            .then(it => pouetsFromResponse(it))
    }
</script>

<div class="container">
    <h1 class="title">Commentaires</h1>
    <div class="comments">
        {#await fetchResponsePouets(pouetUrl)}
            <p>loading comments..</p>
        {:then pouets}
            {#each pouets as pouet}
                <Comment pouet={pouet}/>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
    <span class="add-comment">Vous pouvez ajouter un commentaire en <a href={pouetUrl}>répondant sur Mastodon</a> !</span>
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
