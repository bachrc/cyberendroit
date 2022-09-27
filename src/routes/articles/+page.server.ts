
export interface ArticleMetadata {
    title: string,
    description: string,
    image?: string,
    published: Date,
    tags: string[],
    url: string
}


function fromMetadataToArticle(metadata: any) : ArticleMetadata {
    return {
        description: metadata.description!,
        published: metadata.published!,
        tags: metadata.tags.split(','),
        url: `articles/${metadata.slug}`,
        title: metadata.title!,
        image: metadata.image,
    }
}

const slugPattern = /([\w-]+)\/\+page\.(svelte\.md|md|svx)$/
const slugFromPath = (path: string) => path.match(slugPattern)?.[1] ?? null;

async function loadArticles() {
    const modules = import.meta.glob('./**/*.{md,svx,svelte.md}');

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

export const prerender = true;
export async function load() {
    let articleMetadata = await loadArticles();
    console.log("PAS ENVIE")
    console.log(articleMetadata)
    return {
        articles : articleMetadata
    };
}