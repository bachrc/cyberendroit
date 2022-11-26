<script lang="ts">
    export let title;
    export let url: string | undefined;
</script>

<div class="rounded-sm flex flex-col border-solid border-2 border-indigo-300 overflow-hidden">
    <div class="bg-indigo-300 w-full py-1 px-2">
        <span class="font-['Good_Timing'] drop-shadow-md">
            {#if (url)}
                <a href={url}>{title}</a>
            {:else}
                {title}
            {/if}
        </span>
    </div>
    <div class="p-2 bg-indigo-100">
        <slot>POUETPOUET</slot>
    </div>
</div>
