interface ArticleMetadata {
    title: string,
    description: string,
    image?: string,
    published: boolean,
    tags: string[],
    url: string,
    publication_date: Date,
    pouet_url: string,
}

interface EditoMetadata {
    title: string;
    publication_date: Date;
    slug: string;
    pouet_url?: string
}

interface Edito {
    metadata: EditoMetadata;
    content: string;
}

interface ArticlesFromServer {
    articles : ArticleMetadata[],
    tag? : string
}

interface EditosFromServer {
    editos : Edito[]
}

interface Article {
    html: string,
    metadata: ArticleMetadata
}

export type {ArticlesFromServer, ArticleMetadata, Article, Edito, EditoMetadata, EditosFromServer}
