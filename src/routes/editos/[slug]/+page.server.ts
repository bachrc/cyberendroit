import type {Edito} from "../../../lib/models";
import type {ServerLoadEvent} from "@sveltejs/kit";
import {loadEditoFromSlug} from "../../../lib/server/articles";

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent): Promise<Edito> {
    return loadEditoFromSlug(event.params.slug!!);
}
