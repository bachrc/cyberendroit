<script>
    import {prettyDateFromIsoString} from "$lib/dates";

    export let publication_date
</script>

<article class="flex flex-col prose">
    <span class="text-sm">Publié le {prettyDateFromIsoString(publication_date)}</span>
    <slot></slot>
</article>
