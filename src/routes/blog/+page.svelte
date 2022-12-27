<script lang="ts">
	import ArticleCard from '../../components/articles/ArticleCard.svelte';
	import CyberContainer from '../../components/CyberContainer.svelte';
	import type {Content, ContentFromServer} from "$lib/models";
	import {page} from "$app/stores";

	export let data: ContentFromServer;
	const contained: Content[] = data.content;


</script>

<svelte:head>
	<title>Articles du cyberespace</title>
</svelte:head>

<div class="page-container">
	<h1 class="header-text">{$page.url.searchParams.get("tag") || "Le Blogidélice."}</h1>
	<div class="articles-panel">
		<div class="articles-list">
			{#each contained as content (content.url)}
				<ArticleCard {content} />
			{/each}
		</div>
		<aside>
			<CyberContainer title="Recherche" theme="cyan">
				Bientôt ici on pourra rechercher
			</CyberContainer>
		</aside>
	</div>
</div>

<style>
	aside {
		margin-top: 20px;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		padding: 15px;
	}

	.header-text {
		align-self: center;
		gap: 0.5rem;
		margin: 2rem 0;
		font-family: 'Serpentine', serif;
		font-size: 2.5rem;
	}

	.articles-panel {
		display: flex;
		flex-direction: column;
	}

	@media only screen and (min-width: 768px) {
		.articles-panel {
			flex-direction: row;
			justify-content: space-between;
			gap: 15px;
		}

		aside {
			min-width: 400px;
		}

		.header-text {
			font-size: 3.5rem;
		}
	}

	.articles-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		flex-grow: 1;
	}
</style>
