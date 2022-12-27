import {loadRenderedEditos} from "$lib/server/articles";
import type {EditosFromServer} from "$lib/models";

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load(): Promise<EditosFromServer> {
    const editos = await loadRenderedEditos();

    return {editos: editos.map(edito => {return {...edito, metadata: {...edito.metadata}}})}
}
