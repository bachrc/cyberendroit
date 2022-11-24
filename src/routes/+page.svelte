<script lang="ts">
    import CyberContainer from "../components/CyberContainer.svelte";
    import type {Edito, EditosFromServer} from "$lib/models.js";
    import CyberContainer2 from "../components/CyberContainer2.svelte";

    export let data: EditosFromServer;
    const editos: Edito[] = data.editos
</script>

<div class="container mx-auto flex flex-col md:flex-row gap-2 px-4">
    <div class="md:w-3/4 flex flex-col gap-4">
        <CyberContainer title="cyber bonjour">
            <p>Eh bien soyez les bienvenus sur mon site Internet ORIGINAL.</p>
            <p>Bientôt on espère du contenu.</p>
        </CyberContainer>
        {#each editos as edito}
            <CyberContainer title={edito.metadata.title}>
                {@html edito.content}
            </CyberContainer>
        {/each}
    </div>
    <div class="md:w-1/4 flex flex-col gap-2">
        <CyberContainer2 title="Futur" >
            Bienvenue dans le futur
        </CyberContainer2>
        <CyberContainer2 title="Oui">
            Prends ton siège billy
        </CyberContainer2>
    </div>
</div>
