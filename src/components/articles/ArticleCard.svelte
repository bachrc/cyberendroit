<script>
    import {prettyDateFromIsoString} from "$lib/dates";

    export let title;
    export let description;
    export let publication_date;
    export let url;
</script>

<a href="{url}">
    <span class="text-2xl font-bold">{title}</span>
    <p class="text-lg">{description}</p>
    <span class="text-sm text-gray-700">Le {prettyDateFromIsoString(publication_date)}</span>
</a>
