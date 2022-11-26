import type {ArticleMetadata, EditoMetadata} from "../models";
import {fromMetadataToArticle, parseEditoMetadata, slugFromPath} from "../articles";
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
        .map(it => it.slug)
        .map(loadEditoFromSlug)

    return Promise.all(recentEditos);
}

export async function loadEditoFromSlug(slug: string) : Promise<Edito> {
    try {
        const editoResolver = EDITOS_BY_SLUG.get(slug)

        if(!editoResolver) {
            throw error(404, "Invalid edito identifier")
        }

        const svxEdito = await editoResolver();
        const metadata = svxEdito.metadata
        metadata.slug = slug

        return {
            content: svxEdito.default.render().html,
            metadata
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }
}

export async function loadArticle(slug: string): Promise<Article> {
    try {
        const articleResolver = ARTICLES_BY_SLUG.get(slug)

        if(!articleResolver) {
            throw error(404, "Invalid article")
        }

        const article = await articleResolver();

        return {
            html: article.default.render().html,
            metadata: article.metadata
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }
}
