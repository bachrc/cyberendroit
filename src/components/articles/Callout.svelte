<script lang="ts">
    export let type : "WARN" | "INFO" | "QUESTION" = "WARN"

    const colors = {
        "WARN" : {
            "bg-color" : "#fef3c7",
            "border-color" : "#fde68a",
            "default-illu" : "⚠️"
        },
        "INFO" : {
            "bg-color" : "#c4b5fd",
            "border-color": "#a78bfa",
            "default-illu" : "💻"
        },
        "QUESTION" : {
            "bg-color" : "#ffedd5",
            "border-color" : "#fed7aa",
            "text-style" : "font-size: 1.1em; font-weight: 500;",
            "default-illu" : "🤔"
        }
    }

    $: backgroundColor = colors[type]["bg-color"];
    $: borderColor = colors[type]["border-color"]
    $: textStyle = colors[type]["text-style"]
    $: defaultIllu = colors[type]["default-illu"]
</script>

<div class="background-panel" style="background-color: {borderColor}">
    <div class="front-panel" style="background-color: {backgroundColor}">
        <div class="illu">
            <slot name="illu">{defaultIllu}</slot>
        </div>
        <span class="content" style="{textStyle}">
            <slot name="content"></slot>
        </span>
    </div>
</div>

<style>
    .background-panel {
        transform: rotate(-3deg);
        border-radius: 0.75rem;
        margin: 1em 1em 2em;
    }

    .front-panel {
        transform: rotate(3deg);
        display: flex;
        flex-direction: row;
        gap: 1em;
        padding: 1em;
        align-items: center;
        border-radius: 0.75rem;
        border-style: solid;
    }

    .illu {
        font-size: 2em;
        line-height: 1;
        text-align: center;
    }

    .content {
        font-size: 1.1rem;
        line-height: 1.4rem;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        text-align: left;
    }

    .content :global(a) {
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    @media only screen and (min-width: 768px) {
        .illu {
            font-size: 3.75rem;
            line-height: 1;
            text-align: center;
        }

        .content {
            line-height: 2rem;
        }

        .front-panel {
            gap: 2rem;
            padding: 1rem 2rem;
        }
    }
</style>
