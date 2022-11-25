import type {ArticleMetadata, EditoMetadata} from "../models";
import {fromMetadataToArticle, parseEditoMetadata} from "../articles";
import type {Edito} from "../models";
import {
    error,
    type ServerLoadEvent
} from "@sveltejs/kit";
import type {Article} from "../models";
import {ARTICLES_BY_SLUG, ARTICLES_SOURCE, EDITO_SOURCE, EDITOS_BY_SLUG, parseMetadataInPath, type SvxInfo} from "./svx";

export async function loadArticles(): Promise<ArticleMetadata[]> {
    const svxs: SvxInfo[] = await parseMetadataInPath(ARTICLES_SOURCE);

    const posts: ArticleMetadata[] = svxs.map(fromMetadataToArticle);
    posts.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    return posts.filter((post) => post.published);
}

export async function loadEditos() : Promise<Edito[]> {
    const svxs: SvxInfo[] = await parseMetadataInPath(EDITO_SOURCE);

    const posts: EditoMetadata[] = svxs.map(parseEditoMetadata);
    posts.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    const recentEditos = posts.slice(0,5)
        .map(renderEdito)

    return Promise.all(recentEditos);
}

async function renderEdito(edito: EditoMetadata) : Promise<Edito> {
    try {
        const editoPath = EDITOS_BY_SLUG.get(edito.slug)

        if(!editoPath) {
            throw error(404, "Invalid edito identifier")
        }

        const svxEdito = await import(editoPath)

        return {
            content: svxEdito.default.render().html,
            metadata: edito
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }
}

export async function loadArticle(slug: string): Promise<Article> {
    try {
        const articlePath = ARTICLES_BY_SLUG.get(slug)

        if(!articlePath) {
            throw error(404, "Invalid article")
        }

        const article = await import(articlePath)

        return {
            html: article.default.render().html,
            metadata: article.metadata
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }
}
