import type {Rendered, Resolver} from "../models";

export const EDITO_SOURCE = import.meta.glob('$editos/**/*.{md,svx,svelte.md}');
export const ARTICLES_SOURCE = import.meta.glob('$articles/**/*.{md,svx,svelte.md}');

export async function parseMetadataInPath(modules: object): Promise<SvxInfo[]> {
    const postPromises = [];

    for (let [path, resolver] of Object.entries(modules)) {
        const promise = resolver().then((post: any): SvxInfo => ({
            path,
            metadata: post.metadata,
            resolver
        }));

        postPromises.push(promise);
    }

    return Promise.all(postPromises)

}

export interface SvxInfo {
    path: string,
    resolver: Resolver,
    metadata: any
}

export class Renderable<MetadataType> {
    constructor(
        public metadata: MetadataType,
        public resolver: Resolver
    ) {
    }

    async render(): Promise<Rendered<MetadataType>> {
        let svx = await this.resolver();

        return {
            content: svx.default.render().html,
            metadata: this.metadata
        }
    }
}
