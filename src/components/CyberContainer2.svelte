<script>
    export let title;
</script>

<div class="rounded-sm flex flex-col border-solid border-2 border-cyan-200 overflow-hidden">
    <div class="bg-cyan-200 w-full py-1 px-2"><span class="font-['Good_Timing'] drop-shadow-md">{title}</span></div>
    <div class="px-2 py-2 bg-cyan-50">
        <slot>POUETPOUET</slot>
    </div>
</div>