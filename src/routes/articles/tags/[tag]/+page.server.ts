import type {ArticleMetadata, ArticlesFromServer} from "$lib/models";
import {loadArticles, loadArticlesWithTag} from "$lib/server/articles";
import type {ServerLoadEvent} from "@sveltejs/kit";

// export const prerender = true
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent): Promise<ArticlesFromServer> {
    let tag = event.params.tag!!;
    const articles : ArticleMetadata[] = await loadArticlesWithTag(tag)

    return {articles, tag}
}
