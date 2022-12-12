<script lang="ts">
    export let title;
    export let url: string | undefined = undefined;
    export let theme: "purple" | "cyan" = "purple"

    let purpleTheme = theme === "purple"
    let cyanTheme = theme === "cyan"
</script>

<div class="cyber-container" class:purple-container="{purpleTheme}" class:cyan-container="{cyanTheme}">
    <div class="cyber-header" class:purple-header="{purpleTheme}" class:cyan-header="{cyanTheme}">
        <span class="header-text">
            {#if (url)}
                <a href={url}>{title}</a>
            {:else}
                {title}
            {/if}
        </span>
    </div>
    <div class="content" class:purple-content="{purpleTheme}" class:cyan-content="{cyanTheme}">
        <slot>POUETPOUET</slot>
    </div>
</div>

<style>
    .cyber-container {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: 2px;
        border-radius: 0.125rem;
        overflow: hidden;
        box-shadow: 4px 4px 6px 1px rgba(40, 51, 98, 0.4);
    }

    .purple-container {
        border-color: rgb(165 180 252);
    }

    .cyan-container {
        border-color: #a5f3fc;
    }

    .cyber-header {
        padding: 0.5rem 0.5rem;
    }

    .purple-header {
        background-color: rgb(165 180 252);
    }

    .cyan-header {
        background-color: #a5f3fc;
    }

    .header-text {
        font-family: "Good Timing", serif;
        filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    }

    .content {
        padding: 0.5rem;
    }

    .purple-container {
        background-color: #e0e7ff;
    }

    .cyan-container {
        background-color: #ecfeff;
    }
</style>
