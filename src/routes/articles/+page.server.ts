import type {ArticleMetadata, ArticlesFromServer} from "$lib/models";
import {loadArticles} from "../../lib/server/articles";

// export const prerender = true
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load(): Promise<ArticlesFromServer> {
    const articles : ArticleMetadata[] = await loadArticles()

    return {articles}
}