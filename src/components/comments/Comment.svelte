<script lang="ts">
    import type {Pouet} from "../../lib/comments";

    export let pouet: Pouet;

    const formatted_date = pouet.posted_date.toLocaleDateString('fr-FR', {
        year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: "numeric"
    })
</script>
<div class="container">
    <div class="poster">
        <img alt="Image de profil de {pouet.display_name}" src={pouet.avatar_url} class="profile-image"/>
        <div class="poster-names">
            <span class="poster-display-name"><a href={pouet.profile_url}>{pouet.display_name}</a></span>
            <span class="poster-handle">{pouet.actor}</span>
        </div>
    </div>
    <div>
        {@html pouet.content}
    </div>
    <div>
        <span class="comment">
            <a href="{pouet.toot_url}">Posté le {formatted_date}</a>
        </span>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .poster {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .profile-image {
        border-radius: 0.75rem;
        height: 3rem;
        width: 3rem;
    }

    .poster-names {
        display: flex;
        flex-direction: column;
        margin-left: 0.5rem;
    }

    .poster-display-name {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    .poster-handle {
        color: rgb(107 114 128)
    }

    .comment {
        font-size: 0.75rem;
        line-height: 1rem;
    }

</style>
