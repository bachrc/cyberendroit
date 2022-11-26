<script lang="ts">
    import CyberContainer from "$components/CyberContainer.svelte";
    import type {Edito, EditosFromServer} from "$lib/models.js";
    import CyberContainer2 from "$components/CyberContainer2.svelte";
    import EditoLayout from "$components/layouts/edito.svelte"

    export let data: EditosFromServer;
    const editos: Edito[] = data.editos
</script>

<div class="container mx-auto flex flex-col md:flex-row gap-2 px-4">
    <div class="md:w-3/4 flex flex-col gap-4">
        {#each editos as edito}
            <CyberContainer title={edito.metadata.title} url={`/editos/${edito.metadata.slug}`}>
                <EditoLayout publication_date={edito.metadata.publication_date}>{@html edito.content}</EditoLayout>
            </CyberContainer>
        {/each}
    </div>
    <div class="md:w-1/4 flex flex-col gap-2">
        <CyberContainer2 title="Futur">
            <blockquote>Puisque les jours se suivent sans s'améliorer, je préfère regarder en arrière parce que dans le temps, même le futur était mieux.</blockquote>
        </CyberContainer2>
        <CyberContainer2 title="Oui">
            Prends ton siège billy
        </CyberContainer2>
    </div>
</div>
