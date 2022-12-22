import {loadArticlesAndSuites} from "$lib/server/articles";
import type {ContentFromServer} from "$lib/models";

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load(): Promise<ContentFromServer> {
    let content = await loadArticlesAndSuites();

    return {
        content: content.map(oui =>  {return {...oui}})
    }
}
