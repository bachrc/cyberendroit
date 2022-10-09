import type {ArticleMetadata, Edito, EditoMetadata} from "./models";
import type {SvxInfo} from "./server/svx";

const slugPattern = /\/([\w-]+)\.(svelte\.md|md|svx)$/
export const slugFromPath = (path: string) => path.match(slugPattern)?.[1] ?? null;

export function fromMetadataToArticle(svx: SvxInfo) : ArticleMetadata {
    return {
        description: svx.metadata.description!,
        published: svx.metadata.published!,
        tags: svx.metadata.tags.split(','),
        url: `articles/${slugFromPath(svx.path)}`,
        title: svx.metadata.title!,
        image: svx.metadata.image,
        publication_date: new Date(svx.metadata.publication_date)
    }
}

export function parseEditoMetadata(svx: SvxInfo) : EditoMetadata {
    return {
        title: svx.metadata.title,
        publication_date: new Date(svx.metadata.publication_date),
        slug: slugFromPath(svx.path)!!
    }
}