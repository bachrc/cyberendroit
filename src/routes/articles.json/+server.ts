import {loadArticles} from "$lib/articles";

export const prerender = true;

export async function GET() {
    const posts = await loadArticles()

    return new Response(JSON.stringify(posts, null, 2))
}