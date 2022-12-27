export type Resolver = () => Promise<any>;

export type EditosFromServer = {editos: Rendered<EditoMetadata>[]}
export type ContentFromServer = {content: Content[]}

interface TagOccurrencies {
    tag: string,
    contained: number
}

interface Content {
    title: string,
    description: string,
    tags: string[],
    url: string,
    publication_date: Date,
    image?: string,
    type: ContentType
}

interface Rendered<T> {
    metadata: T,
    content: string
}

class ArticleMetadata implements Content {
    public type: ContentType = ContentType.Article;

    constructor(
        public description: string,
        public publication_date: Date,
        public tags: string[],
        public title: string,
        public url: string,
        public image?: string,
        public pouet_url?: string
    ) {}
}

class EditoMetadata implements Content {
    public type: ContentType = ContentType.Edito;

    constructor(
        public description: string,
        public publication_date: Date,
        public tags: string[],
        public title: string,
        public url: string,
        public image?: string,
        public pouet_url?: string,
    ) {}
}

interface ArticlesFromServer {
    content : Content[],
    tag? : string
}

interface Article {
    html: string,
    metadata: ArticleMetadata
}

enum ContentType {
    Article, Edito, Suite
}

export {type ArticlesFromServer, type Content, type Rendered, ContentType, type TagOccurrencies, ArticleMetadata, type Article, EditoMetadata}
