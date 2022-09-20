<script>
    export let title;
    export let style;
</script>

<div class="rounded-sm flex flex-col border-solid border-2 border-indigo-300 overflow-hidden {style}">
    <div class="bg-indigo-300 w-full py-1 px-2"><span class="font-['Good_Timing'] drop-shadow-md">{title}</span></div>
    <div class="px-2 py-2 bg-indigo-100">
        <slot>POUETPOUET</slot>
    </div>
</div>