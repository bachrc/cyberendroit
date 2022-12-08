<script>
    export let publication_date
</script>
<div class="container-centre">
    <article>
        <slot></slot>
    </article>
</div>

<style>
    article :global(h1) {
        font-size: 6rem;
        line-height: 2rem;
    }
    article {
        margin-left: auto;
        margin-right: auto;
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        max-width: 828px;
    }
</style>
