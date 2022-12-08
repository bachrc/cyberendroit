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

<div class="background-panel">
    <div class="front-panel">
        <div class="illu">
            <slot name="illu">{defaultIllu}</slot>
        </div>
        <span class="content">
            <slot name="content"></slot>
        </span>
    </div>
</div>

<style>
    .background-panel {
        margin-top: 1rem;
        margin-bottom: 1rem;
        transform: rotate(-3deg);
    }

    .front-panel {
        transform: rotate(3deg);
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 1rem 2rem;
        align-items: center;
        width: 100%;
        border-radius: 0.75rem;
        border-style: solid;
    }

    .illu {
        font-size: 3.75rem;
        line-height: 1;
        text-align: center;
    }

    .content {
        line-height: 2rem;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        text-align: left;
    }
</style>
