<script lang="ts">
    export let type : "WARN" | "INFO" | "QUESTION" = "WARN"

    const colors = {
        "WARN" : {
            "bg-color" : "bg-amber-100",
            "default-illu" : "⚠️"
        },
        "INFO" : {
            "bg-color" : "bg-violet-300",
            "default-illu" : "💻"
        },
        "QUESTION" : {
            "bg-color" : "bg-purple-200",
            "text-style" : "text-2xl font-bold",
            "default-illu" : "⁉️"
        }
    }

    $: backgroundClass = colors[type]["bg-color"];
    $: textStyle = colors[type]["text-style"]
    $: defaultIllu = colors[type]["default-illu"]
</script>

<div class="-rotate-1 flex flex-row w-full rounded-xl p-4 items-center gap-4 my-4 {backgroundClass}">
    <div class="w-1/6 h-full text-6xl text-center">
        <slot name="illu">{defaultIllu}</slot>
    </div>
    <span class="rotate-1 w-5/6 leading-8 font-sans text-justify {textStyle}">
        <slot name="content"></slot>
    </span>
</div>
