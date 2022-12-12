<script lang="ts">
    import CyberContainer from "$components/CyberContainer.svelte";
    import type {Edito, EditosFromServer} from "$lib/models.js";
    import EditoLayout from "$components/layouts/edito.svelte"

    export let data: EditosFromServer;
    const editos: Edito[] = data.editos
</script>

<main>
    <div class="editos">
        {#each editos as edito}
            <CyberContainer title={edito.metadata.title} url={`/editos/${edito.metadata.slug}`}>
                <EditoLayout publication_date={edito.metadata.publication_date}>{@html edito.content}</EditoLayout>
            </CyberContainer>
        {/each}
    </div>
    <aside>
        <CyberContainer title="Futur" theme="cyan">
            <blockquote>Je me suis cyber-perdu</blockquote>
        </CyberContainer>
        <CyberContainer title="Musique pour vous accompagner" theme="cyan">
            <div class="musique">
                <iframe title="Fia" style="border: 0; width: auto; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=189105059/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/track=884844578/transparent=true/" seamless><a href="https://blood-music.bandcamp.com/album/corpo-mente">Corpo-Mente by Corpo-Mente</a></iframe>
                <span>Cette musique sent le froid et l'hiver. Le temps est grisâtre, la terre aride et l'horizon infini.</span>
            </div>
        </CyberContainer>
    </aside>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .editos {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
    }

    aside {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%
    }

    .musique {
        display: flex;
        flex-direction: column;
        font-style: italic;
    }

    @media only screen and (min-width: 768px) {
        main {
            flex-direction: row;
        }

        .editos {
            width: 75%;
        }

        aside {
            width: 25%;
        }
    }
</style>
