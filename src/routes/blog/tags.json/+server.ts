import {tagsOccurrencies} from "$lib/articles";
import {loadArticles} from "$lib/server/articles";

export const prerender = true;

export async function GET() {
    const tags = tagsOccurrencies(await loadArticles());

    return new Response(JSON.stringify(tags), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
