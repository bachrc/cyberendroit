import type {ArticleMetadata, ArticlesFromServer} from "$lib/models";

// export const prerender = true
export const prerender = true

export async function load(): Promise<ArticlesFromServer> {
    const res = await fetch(`/articles.json`)
    if (res.ok) {
        const articles: ArticleMetadata[] = await res.json()
        return { articles }
    }

    return {articles: []}
}