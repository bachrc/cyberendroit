import {loadOrderedArticles} from "$lib/server/articles";
import type {ContentFromServer} from "$lib/models";
import type {ServerLoadEvent} from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load(params: ServerLoadEvent): Promise<ContentFromServer> {
    let tagSearched = params.url.searchParams.get("tag") ?? undefined;

    let content = await loadOrderedArticles(tagSearched);

    return {
        content: content.map(oui =>  {return {...oui}})
    }
}
