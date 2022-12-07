import type {ArticleMetadata, EditoMetadata} from "../models";
import {fromMetadataToArticle, parseEditoMetadata, slugFromPath} from "../articles";
import type {Edito} from "../models";
import {
    error,
    type ServerLoadEvent
} from "@sveltejs/kit";
import type {Article} from "../models";
import {ARTICLES_BY_SLUG, ARTICLES_SOURCE, EDITO_SOURCE, EDITOS_BY_SLUG, parseMetadataInPath, type SvxInfo} from "./svx";

interface Activity {
    title: string,
    summary: string,
    url: string,
    date: Date
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
        url: article.url,
        date: article.publication_date
    }
}

function editoToActivity(edito: EditoMetadata): Activity {
    return {
        date: edito.publication_date,
        summary: "Edito",
        title: edito.title,
        url: `https://cyberendroit.net/edito/${edito.slug}`

    }
}

export async function loadArticles(): Promise<ArticleMetadata[]> {
    const svxs: SvxInfo[] = await parseMetadataInPath(ARTICLES_SOURCE);

    const posts: ArticleMetadata[] = svxs.map(fromMetadataToArticle);
    posts.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    return posts.filter((post) => post.published);
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
