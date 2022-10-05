import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		_ : "./src/components/blog-layouts/standard-article.svelte"
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
