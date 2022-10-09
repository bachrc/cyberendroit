export const EDITO_SOURCE = import.meta.glob('$editos/*.{md,svx,svelte.md}');
export const ARTICLES_SOURCE = import.meta.glob('$articles/*.{md,svx,svelte.md}');

export async function parseMetadataInPath(modules: object): Promise<SvxInfo[]> {
    const postPromises = [];

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