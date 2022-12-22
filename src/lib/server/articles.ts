import type {ArticleMetadata, Content, EditoMetadata, Rendered, SuiteMetadata} from "../models";
import {fromMetadataToArticle, fromMetadataToSuite} from "../articles";

import {ARTICLES_SOURCE, parseMetadataInPath, Renderable, SUITES_SOURCE} from "./svx";
import {loadEditos} from "./edito";

export async function loadArticlesAndSuites(): Promise<Content[]> {
    const articles = loadArticles()
    const suites = loadSuites()

    let activities = await Promise.all([articles, suites]).then(a => a.flat());

    activities.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    return activities
}

export async function loadSuites(): Promise<SuiteMetadata[]> {
    let suites = await parseMetadataInPath(SUITES_SOURCE);

    return suites.map(fromMetadataToSuite);
}

export async function loadArticles(): Promise<ArticleMetadata[]> {
    return (await parseMetadataInPath(ARTICLES_SOURCE))
        .map(fromMetadataToArticle);
}

export async function loadArticlesWithTag(tag: string): Promise<Content[]> {
    return (await loadArticlesAndSuites())
        .filter(article => article.tags.includes(tag))
}

export async function loadRenderedEditos() : Promise<Rendered<EditoMetadata>[]> {
    const posts: Renderable<EditoMetadata>[] = await loadEditos();

    const recentEditos = posts.slice(0,5)
        .map(edito => edito.render())

    return await Promise.all(recentEditos);
}
