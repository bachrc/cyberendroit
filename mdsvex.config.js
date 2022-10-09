import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		_ : "./src/components/layouts/standard-article.svelte",
		article : "./src/components/layouts/standard-article.svelte",
		edito : "./src/components/layouts/edito.svelte"
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
