import {ArticleMetadata, SuiteMetadata} from "./models";
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
        svx.metadata.pouet_url
    )
}
export function fromMetadataToSuite(svx: SvxInfo) : SuiteMetadata {
    return new SuiteMetadata(
        svx.metadata.description!,
        new Date(svx.metadata.publication_date),
        svx.metadata.tags.split(','),
        svx.metadata.title!,
        urlFromPath(svx.path)!!,
        svx.metadata.image,
    );
}
