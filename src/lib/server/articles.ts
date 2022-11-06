import type {ArticleMetadata, EditoMetadata} from "../models";
import {fromMetadataToArticle, parseEditoMetadata} from "../articles";
import type {Edito} from "../models";
import {
    error,
    type ServerLoadEvent
} from "@sveltejs/kit";
import type {ArticleContent} from "../models";
import {ARTICLES_SOURCE, EDITO_SOURCE, parseMetadataInPath, type SvxInfo} from "./svx";

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
        const svxEdito = await import(`../../editos/${edito.slug}.svx`)

        return {
            content: svxEdito.default.render().html,
            metadata: edito
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }

}

export async function loadArticle(slug: string): Promise<ArticleContent> {
    try {
        const article = await import(`../../articles/${slug}.svx`)

        return {
            html: article.default.render().html,
            metadata: article.metadata
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }
}