<script lang="ts">
    export let type : "WARN" | "INFO" | "QUESTION" = "WARN"

    const colors = {
        "WARN" : {
            "bg-color" : "bg-amber-100",
            "border-color" : "bg-amber-200",
            "default-illu" : "⚠️"
        },
        "INFO" : {
            "bg-color" : "bg-violet-300",
            "border-color": "bg-violet-400",
            "default-illu" : "💻"
        },
        "QUESTION" : {
            "bg-color" : "bg-orange-100",
            "border-color" : "bg-orange-200",
            "text-style" : "text-xl font-bold",
            "default-illu" : "⁉️"
        }
    }

    $: backgroundColor = colors[type]["bg-color"];
    $: borderColor = colors[type]["border-color"]
    $: textStyle = colors[type]["text-style"]
    $: defaultIllu = colors[type]["default-illu"]
</script>

<div class="my-4 -rotate-3 rounded-xl {borderColor}">
    <div class="rotate-3 flex flex-row py-2 px-8 py-4 gap-8 items-center w-full rounded-xl border-solid {backgroundColor}">
        <div class="text-6xl text-center">
            <slot name="illu">{defaultIllu}</slot>
        </div>
        <span class="leading-8 font-sans text-left {textStyle}">
            <slot name="content"></slot>
        </span>
    </div>
</div>
