import {loadArticles} from "./articles";
import {ArticleMetadata, ContentType, EditoMetadata, SuiteMetadata} from "../models";
import {loadEditos} from "./edito";

interface AtomActivity {
    title: string,
    summary: string,
    url: string,
    type: ContentType,
    date: Date,
    tags: string[]
}

export async function loadActivity(): Promise<AtomActivity[]> {
    const activitiesArticles = loadArticles().then(
        articles => articles.map(articleToActivity)
    );

    const activitiesEditos = loadEditos().then(
        editos => editos
            .map(edito => edito.metadata)
            .map(editoToActivity)
    );

    let activities = await Promise.all([activitiesArticles, activitiesEditos]).then(a => a.flat());

    activities.sort((e1, e2) => e2.date.valueOf() - e1.date.valueOf())

    return activities
}

function suiteToActivity(suite: SuiteMetadata): AtomActivity {
    let activity = articleToActivity(suite);
    activity.type = ContentType.Suite

    return activity;
}

function editoToActivity(edito: EditoMetadata): AtomActivity {
    return {
        date: edito.publication_date,
        summary: "Edito",
        title: edito.title,
        url: `https://cyberendroit.net/${edito.url}`,
        tags: [],
        type: ContentType.Edito
    }
}

function articleToActivity(article: ArticleMetadata): AtomActivity {
    return {
        title: article.title,
        summary: article.description,
        url: `https://cyberendroit.net/${article.url}`,
        date: article.publication_date,
        tags: article.tags,
        type: ContentType.Article
    }
}

export async function generateFeed(): Promise<string> {
    const activities = await loadActivity()

    return `
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>cyberendroit</title>
    <link href="https://cyberendroit.net/"/>
    <updated>${activities[0]?.date.toISOString()}</updated>
    <author>
        <name>pacha</name>
    </author>
    <id>https://cyberendroit.net</id>
    
    ${activities.map(activity => {
        return `
            <entry>
                <title>${activity.title}</title>
                <link href="${activity.url}"/>
                <id>${activity.url}</id>
                <updated>${activity.date.toISOString()}</updated>
                <summary>${activity.summary}</summary>
                <category term="${activity.type.toString()}" />
                ${activity.tags.map(tag => `
                <category term="${tag}" />
                `).join('')}
            </entry>
    `}).join('')}
</feed>
`
}
