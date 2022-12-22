import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		articles: "./src/components/layouts/standard-article.svelte",
		editos: "./src/components/layouts/edito.svelte",
		suites: "./src/components/layouts/suite.svelte"
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
