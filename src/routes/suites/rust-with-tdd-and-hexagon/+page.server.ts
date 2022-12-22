import type {ContentFromServer} from "$lib/models";
import {loadArticlesInSuite} from "../../../lib/server/suites";

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load(): Promise<ContentFromServer> {
    const source = import.meta.glob("$suites/rust-with-tdd-and-hexagon/*/*.{md,svx,svelte.md}");
    let content = await loadArticlesInSuite(source);

    return {
        content: content.map(oui => {return {...oui}})
    }
}
