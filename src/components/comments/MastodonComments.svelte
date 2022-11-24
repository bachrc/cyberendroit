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
<div class="flex flex-col">
    <h1 class="text-5xl pb-8 font-['Serpentine']">Commentaires</h1>
    <div class="flex flex-col gap-4">
        {#await fetchResponsePouets(pouetUrl)}
            <p>loading</p>
        {:then pouets}
            {#each pouets as pouet}
                <Comment pouet={pouet}/>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
    <span class="italic my-4">Vous pouvez ajouter un commentaire en <a class="underline underline-offset-4" href={pouetUrl}>répondant sur Mastodon</a> !</span>
</div>
