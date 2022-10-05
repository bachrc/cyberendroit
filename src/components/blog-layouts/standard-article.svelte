<script>
    export let title
</script>

<div class="container mx-auto">
    <article class="prose lg:prose-xl">
        <h1>{title}</h1>
        <slot></slot>
    </article>
</div>
