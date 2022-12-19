import type {ArticleMetadata, EditoMetadata} from "../models";
import {fromMetadataToArticle, parseEditoMetadata} from "../articles";
import type {Edito} from "../models";
import {
    error,
} from "@sveltejs/kit";

import {ARTICLES_SOURCE, EDITO_SOURCE, parseMetadataInPath, type SvxInfo} from "./svx";

enum ActivityType {
    ARTICLE, EDITO, SUITE
}

interface Activity {
    title: string,
    summary: string,
    url: string,
    type: ActivityType,
    date: Date,
    tags: string[]
}

export async function loadActivity(): Promise<Activity[]> {
    const activitiesArticles = loadArticles().then(
        articles => articles.map(articleToActivity)
    );

    const activitiesEditos = loadEditos().then(
        editos => editos.map(editoToActivity)
    );

    let activities = await Promise.all([activitiesArticles, activitiesEditos]).then(a => a.flat());

    activities.sort((e1, e2) => e2.date.valueOf() - e1.date.valueOf())

    return activities
}

function articleToActivity(article: ArticleMetadata): Activity {
    return {
        title: article.title,
        summary: article.description,
        url: `https://cyberendroit.net/${article.url}`,
        date: article.publication_date,
        tags: article.tags,
        type: ActivityType.ARTICLE
    }
}

function editoToActivity(edito: EditoMetadata): Activity {
    return {
        date: edito.publication_date,
        summary: "Edito",
        title: edito.title,
        url: `https://cyberendroit.net/${edito.url}`,
        tags: [],
        type: ActivityType.EDITO
    }
}

export async function loadArticles(): Promise<ArticleMetadata[]> {
    const svxs: SvxInfo[] = await parseMetadataInPath(ARTICLES_SOURCE);

    const posts: ArticleMetadata[] = svxs.map(fromMetadataToArticle);
    posts.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    return posts.filter((post) => post.published);
}

export async function loadArticlesWithTag(tag: string): Promise<ArticleMetadata[]> {
    const articles = await loadArticles();

    return articles.filter(article => article.tags.includes(tag))
}

export async function loadEditos() : Promise<EditoMetadata[]> {
    const svxs: SvxInfo[] = await parseMetadataInPath(EDITO_SOURCE);

    const posts: EditoMetadata[] = svxs.map(parseEditoMetadata);
    posts.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    return posts;
}

export async function loadRenderedEditos() : Promise<Edito[]> {

    const posts: EditoMetadata[] = await loadEditos();

    const recentEditos = posts.slice(0,5)
        .map(renderEdito)

    return Promise.all(recentEditos);
}

export async function renderEdito(edito: EditoMetadata) : Promise<Edito> {
    try {
        const editoResolver = edito.content_resolver

        const svxEdito = await editoResolver();
        const metadata = svxEdito.metadata

        return {
            content: svxEdito.default.render().html,
            metadata
        }

    } catch (err) {
        console.log(err)
        throw error(404, (err as Error).message)
    }
}
