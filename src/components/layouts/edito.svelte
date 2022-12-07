<script>
    import {prettyDateFromIsoString} from "$lib/dates";

    export let publication_date
</script>

<article>
    <span class="date">Publié le {prettyDateFromIsoString(publication_date)}</span>
    <div class="edito-content">
        <slot></slot>
    </div>
</article>

<style>
    .date {
        font-size: 0.8em;
        padding-bottom: 1em;
    }

    article {
        display: flex;
        flex-direction: column;
        color: #484848;
        line-height: 1.7em;
    }

    .edito-content :global(p) {
        margin-bottom: 0.8em;
    }
</style>
