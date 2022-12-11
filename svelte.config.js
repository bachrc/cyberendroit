import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex(mdsvexConfig),
	],

	kit: {
		adapter: adapter(),
		alias: {
			$articles: resolve('./src/articles'),
			$editos: resolve('./src/editos'),
			$components: resolve('./src/components'),
		},
	}
};

export default config;
