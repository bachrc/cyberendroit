import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkHeadings from '@vcarl/remark-headings'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		articles: "./src/components/layouts/standard-article.svelte",
		editos: "./src/components/layouts/edito.svelte"
	},
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [headings],
	rehypePlugins: []
});

/**
 * Parses headings and includes the result in metadata
 */
function headings() {
	return function transformer(tree, vfile) {
		// run remark-headings plugin
		remarkHeadings()(tree, vfile)

		// include the headings data in mdsvex frontmatter
		vfile.data.fm ??= {}
		vfile.data.fm.headings = vfile.data.headings.map((heading) => ({
			...heading,
			// slugify heading.value
			id: heading.value
				.toLowerCase()
				.replace(/\s/g, '-')
				.replace(/[^a-z0-9-]/g, '')
		}))
	}
}

export default config;
