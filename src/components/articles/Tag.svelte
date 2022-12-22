<script lang="ts">
    export let name: string;
</script>

<div>
    <img src="/tag_icon.svg" alt="Icon of a tag" />
    <a href="/blog/tags/{name}"><span>{name}</span></a>
</div>

<style>
    div {
        height: 1.5rem;
        border-radius: 3px;
        padding: 2px 6px;
        background-color: rgba(255, 255, 255, 0.2);
        display: flex;
        flex-direction: row;
        width: auto;
    }

    img {
        max-height: 80%;
        width: auto;
    }
</style>
