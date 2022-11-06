import type {ArticleContent} from "../../../lib/models";
import type {ServerLoadEvent} from "@sveltejs/kit";
import {loadArticle} from "../../../lib/server/articles";

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent): Promise<ArticleContent> {
    return loadArticle(event.params.slug!!);
}
