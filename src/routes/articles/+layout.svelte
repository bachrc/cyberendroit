<script context="module">
    // export const prerender = true;
</script>
<style>
    @tailwind base;

    @layer base {
        h1 {
            @apply text-2xl;
        }

        h2 {
            @apply text-xl;
        }
    }
</style>

<div class="container mx-auto font-serif">
    <slot></slot>
</div>