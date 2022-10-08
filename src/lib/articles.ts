import type {ArticleMetadata} from "./models";

const slugPattern = /\/([\w-]+)\.(svelte\.md|md|svx)$/
const slugFromPath = (path: string) => path.match(slugPattern)?.[1] ?? null;

function fromMetadataToArticle(metadata: any) : ArticleMetadata {
    return {
        description: metadata.description!,
        published: metadata.published!,
        tags: metadata.tags.split(','),
        url: `articles/${metadata.slug}`,
        title: metadata.title!,
        image: metadata.image,
        publication_date: metadata.publication_date
    }
}

export async function loadArticles() : Promise<ArticleMetadata[]> {
    const modules = import.meta.glob('$articles/*.{md,svx,svelte.md}');

    const postPromises = [];

    for (let [path, resolver] of Object.entries(modules)) {
        const slug = slugFromPath(path);
        const promise = resolver().then((post: any) => ({
            slug,
            ...post.metadata
        }));

        postPromises.push(promise);
    }

    const posts: ArticleMetadata[] = (await Promise.all(postPromises)).map(fromMetadataToArticle);

    return posts.filter((post) => post.published);
}
