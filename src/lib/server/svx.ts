import {slugFromPath} from "../articles";

export const EDITO_SOURCE = import.meta.glob('$editos/**/*.{md,svx,svelte.md}');
export const ARTICLES_SOURCE = import.meta.glob('$articles/**/*.{md,svx,svelte.md}');

export const EDITOS_BY_SLUG = indexBySlug(EDITO_SOURCE);
export const ARTICLES_BY_SLUG = indexBySlug(ARTICLES_SOURCE);

function indexBySlug(modules: object): Map<string, string> {
    let referential = new Map<string, string>();
    for(let [path] of Object.entries(modules)) {
        let slug = slugFromPath(path);
        if(slug) {
            referential.set(slug, path)
        }
    }

    return referential;
}

export async function parseMetadataInPath(modules: object): Promise<SvxInfo[]> {
    const postPromises = [];
    console.log(modules)
    for (let [path, resolver] of Object.entries(modules)) {
        const promise = resolver().then((post: any): SvxInfo => ({
            path,
            metadata: post.metadata
        }));

        postPromises.push(promise);
    }

    return Promise.all(postPromises)

}

export interface SvxInfo {
    path: string,
    metadata: any
}
