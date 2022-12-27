import type {Content, EditoMetadata, Rendered} from "../models";
import {fromMetadataToArticle} from "../articles";

import {ARTICLES_SOURCE, parseMetadataInPath, Renderable} from "./svx";
import {loadEditos} from "./edito";
import type {ArticleMetadata} from "../models";

export async function loadOrderedArticles(): Promise<Content[]> {
    const articles = await loadArticles()

    articles.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    return articles
}

export async function loadArticles(): Promise<ArticleMetadata[]> {
    return (await parseMetadataInPath(ARTICLES_SOURCE))
        .map(fromMetadataToArticle)
}

export async function loadArticlesWithTag(tag: string): Promise<Content[]> {
    return (await loadOrderedArticles())
        .filter(article => article.tags.includes(tag))
}

export async function loadRenderedEditos() : Promise<Rendered<EditoMetadata>[]> {
    const posts: Renderable<EditoMetadata>[] = await loadEditos();

    const recentEditos = posts.slice(0,5)
        .map(edito => edito.render())

    return await Promise.all(recentEditos);
}
