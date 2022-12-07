import {generateFeed} from "$lib/server/atom-feeds";

export const prerender = true;

export async function GET() {
    const body = await generateFeed()

    return new Response(body, {
        headers : {
            'Cache-Control': 'max-age=0, s-maxage=3600',
            'Content-Type': 'application/xml',
        }
    });
}
