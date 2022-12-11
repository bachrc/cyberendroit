<script>
    // Si on importe pas ça ici, le style du Callout n'est pas chargé par Vite, je comprends pas
    // noinspection ES6UnusedImports
    import Callout from "$components/articles/Callout.svelte";
</script>

<article>
    <slot></slot>
</article>

<style>
    article > :global(h1), :global(h2), :global(h3), :global(h4), :global(h5) {
        font-family: Serpentine, serif;
    }

    article :global(h1) {
        font-size: 2.2rem;
        line-height: 2.5rem;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }

    article :global(h2) {
        font-size: 2rem;
        line-height: 2.5rem;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }

    article :global(h3) {
        font-size: 1.8rem;
        line-height: 2.3rem;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }
    article :global(h4) {
        font-size: 1.6rem;
        line-height: 2.2rem;
        margin-bottom: 1rem;
    }

    article :global(h5) {
        font-size: 1.4rem;
        line-height: 2rem;
        margin-bottom: 1rem;
    }

    article > :global(*) {
        margin-bottom: 1rem;
    }

    article :global(p), :global(li) {
        color: #343434;
        font-size: 1.2rem;
        line-height: 2rem;
    }

    article :global(code) {
        font-size: 1rem;
        font-family: monospace;
        background-color: rgba(10, 10, 208, 0.05);
        border-radius: 5px;
        padding: 3px;
    }

    article :global(strong) {
        font-weight: bold;
    }

    article :global(pre) {
        border-radius: 10px;
    }

    article :global(table) {
        width: 100%;
        border-collapse: collapse;
    }

    article :global(table) :global(tbody) {
        background-color: rgba(255, 255, 255, 0.1);
    }

    article :global(tr):nth-child(even) {
        background-color: rgba(56, 197, 56, 0.1);
    }

    article :global(tr):nth-child(odd) {

    }

    article :global(thead) {
        background-color: rgba(56, 197, 56, 0.3)
    }

    article :global(th), :global(td) {
        padding: 5px 10px;
    }

    article :global(th) {
        font-weight: bold;
    }

    article :global(ul) {
        list-style: square inside;
    }

    article {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        font-family: "Merriweather", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        max-width: 828px;
    }
</style>
