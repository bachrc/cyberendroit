import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import { resolve } from 'path';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', ...mdsvexConfig.extensions],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        mdsvex(mdsvexConfig),
    ],

    kit: {
        adapter: adapter({ out: 'build' }),
        alias: {
            $articles: resolve('./src/routes/articles'),
            $lib: resolve('./src/lib'),
            $editos: resolve('./src/routes/editos'),
            $components: resolve('./src/components'),
        },
    }
};

export default config;
