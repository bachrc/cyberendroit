interface ArticleMetadata {
    title: string,
    description: string,
    image?: string,
    published: boolean,
    tags: string[],
    url: string,
    publication_date: string
}

interface ArticlesFromServer {
    articles : ArticleMetadata[]
}

export type {ArticlesFromServer, ArticleMetadata}