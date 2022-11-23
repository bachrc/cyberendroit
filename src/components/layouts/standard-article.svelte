<script>
    import {prettyDateFromIsoString} from "$lib/dates";
    export let title
    export let publication_date
</script>
<div class="container mx-auto">
    <article class="mt-12 mx-auto flex flex-col prose prose-xl prose-p:mt-2 font-serif prose-p:mb-2 px-4">
        <h1 class="text-2xl md:text-6xl font-['Serpentine'] text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-green-400 self-center">{title}</h1>
        <span class="text-sm">Publié le {prettyDateFromIsoString(publication_date)}</span>
        <slot></slot>
    </article>
</div>
