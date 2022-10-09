import type {EditosFromServer} from "$lib/models";
import {loadEditos} from "../lib/server/articles";

// export const prerender = true
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load(): Promise<EditosFromServer> {
    const editos = await loadEditos();

    return {editos}
}