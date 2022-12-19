import type {ArticleMetadata, Edito, EditoMetadata} from "./models";
import type {SvxInfo} from "./server/svx";

const urlPattern = /\/src\/routes\/(.*)\/\+page.svx$/
export const urlFromPath = (path: string) => path.match(urlPattern)?.[1] ?? null;

export function fromMetadataToArticle(svx: SvxInfo) : ArticleMetadata {
    return {
        description: svx.metadata.description!,
        published: svx.metadata.published!,
        tags: svx.metadata.tags.split(','),
        url: urlFromPath(svx.path)!!,
        title: svx.metadata.title!,
        image: svx.metadata.image,
        publication_date: new Date(svx.metadata.publication_date),
        pouet_url: svx.metadata.pouet_url
    }
}

export function parseEditoMetadata(svx: SvxInfo) : EditoMetadata {
    return {
        title: svx.metadata.title,
        publication_date: new Date(svx.metadata.publication_date),
        content_resolver: svx.resolver,
        url: urlFromPath(svx.path)!!
    }
}
