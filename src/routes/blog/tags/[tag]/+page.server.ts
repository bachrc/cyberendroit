import type {ArticleMetadata, ArticlesFromServer, Content} from "$lib/models";
import { loadArticlesWithTag } from "$lib/server/articles";
import type { ServerLoadEvent } from "@sveltejs/kit";

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent): Promise<ArticlesFromServer> {
    let tag = event.params.tag!!;
    const content: Content[] = await loadArticlesWithTag(tag)

    return { content: content.map(article => {return {...article}}), tag }
}
