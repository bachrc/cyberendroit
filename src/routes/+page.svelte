<script lang="ts">
    import CyberContainer from "$components/CyberContainer.svelte";
    import type {Edito, EditosFromServer} from "$lib/models.js";
    import EditoLayout from "$components/layouts/edito.svelte"

    export let data: EditosFromServer;
    const editos: Edito[] = data.editos
</script>

<div class="flex flex-col md:flex-row gap-2 px-4">
    <div class="md:w-3/4 flex flex-col gap-4">
        {#each editos as edito}
            <CyberContainer title={edito.metadata.title} url={`/editos/${edito.metadata.slug}`}>
                <EditoLayout publication_date={edito.metadata.publication_date}>{@html edito.content}</EditoLayout>
            </CyberContainer>
        {/each}
    </div>
    <div class="md:w-1/4 flex flex-col gap-2">
        <CyberContainer title="Futur" theme="cyan">
            <blockquote>Puisque les jours se suivent sans s'améliorer, je préfère regarder en arrière parce que dans le temps, même le futur était mieux.</blockquote>
        </CyberContainer>
        <CyberContainer title="Musique pour vous accompagner" theme="cyan">
            <div class="flex flex-col">
                <iframe title="Fia" style="border: 0; width: 100%; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=189105059/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/track=884844578/transparent=true/" seamless><a href="https://blood-music.bandcamp.com/album/corpo-mente">Corpo-Mente by Corpo-Mente</a></iframe>
                <p class="italic">
                    Cette musique sent le froid et l'hiver. Le temps est grisâtre, la terre aride et l'horizon infini.
                </p>
            </div>
        </CyberContainer>
    </div>
</div>
