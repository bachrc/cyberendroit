<script lang="ts">
    import CyberContainer from "$components/CyberContainer.svelte";
    import type {EditosFromServer} from "$lib/models.js";

    import EditoLayout from "$components/layouts/edito.svelte"
    import MusicContainer from "$components/MusicContainer.svelte";

    export let data: EditosFromServer;

    const editos = data.editos;
</script>

<main>
    <div class="editos">
        {#each editos as edito}
            <CyberContainer title={edito.metadata.title} url={edito.metadata.url}>
                <EditoLayout>
                    {@html edito.content}
                </EditoLayout>
            </CyberContainer>
        {/each}
    </div>
    <aside>
        <CyberContainer title="Futur" theme="cyan">
            <blockquote>Je me suis cyber-perdu</blockquote>
        </CyberContainer>
        <CyberContainer title="Musique pour vous accompagner" theme="cyan">
            <MusicContainer />
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
