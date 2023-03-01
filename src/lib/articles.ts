import {ArticleMetadata, type Content, type TagOccurrencies} from "./models";
import type {SvxInfo} from "./server/svx";

const urlPattern = /\/src\/routes\/(.*)\/\+page.svx$/
export const urlFromPath = (path: string) => `/${path.match(urlPattern)?.[1]}` ?? null;

export function fromMetadataToArticle(svx: SvxInfo) : ArticleMetadata {
    return new ArticleMetadata(
        svx.metadata.description!,
        new Date(svx.metadata.publication_date),
        svx.metadata.tags.split(','),
        svx.metadata.title!,
        urlFromPath(svx.path)!!,
        svx.metadata.image,
        svx.metadata.toot_url
    )
}

export function tagsOccurrencies(allContent: Content[]): TagOccurrencies[] {
    let occurencies: TagOccurrencies[] = []
    allContent
        .flatMap(content => content.tags)
        .reduce((acc: Map<string, number>, currentTag: string) => acc.set(currentTag, (acc.get(currentTag) ?? 0) + 1), new Map())
        .forEach((value, key) => {
            occurencies.push({tag: key, contained: value})
        });

    occurencies.sort((t1, t2) => t2.contained - t1.contained)

    return occurencies;

}
