<script lang="ts">
    import type {Pouet} from "../../lib/comments";

    export let pouet: Pouet;

    const formatted_date = pouet.posted_date.toLocaleDateString('fr-FR', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: "numeric"
    })
</script>
<div class="flex flex-col gap-2">
    <div class="flex flex-row items-center">
        <img alt="Image de profil de {pouet.display_name}" src={pouet.avatar_url} class="rounded-xl h-12 w-12"/>
        <div class="flex flex-col ml-2">
            <span class="font-bold text-xl"><a href={pouet.profile_url}>{pouet.display_name}</a></span>
            <span class="text-gray-500">{pouet.actor}</span>
        </div>
    </div>
    <div>
        {@html pouet.content}
    </div>
    <div>
        <span class="text-xs"><a href="{pouet.toot_url}">Posté le {formatted_date}</a> </span>
    </div>
</div>

