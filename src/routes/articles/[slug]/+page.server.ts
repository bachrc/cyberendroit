import type {ArticleContent, ArticlesFromServer} from "../../../lib/models";
import type {ServerLoadEvent} from "@sveltejs/kit";
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent): Promise<ArticleContent> {
    try {
        const article = await import(`../../../articles/${event.params.slug}.svx`)

        return {
            html: article.default.render().html,
            metadata: article.metadata
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }
}