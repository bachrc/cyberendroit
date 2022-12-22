import type {Content} from "../models";
import {parseMetadataInPath} from "./svx";
import {fromMetadataToArticle} from "../articles";

export async function loadArticlesInSuite(source: object): Promise<Content[]> {
    const svxs = await parseMetadataInPath(source);
    const articles = svxs.map(fromMetadataToArticle);

    articles.sort((e1, e2) => e2.publication_date.valueOf() - e1.publication_date.valueOf())

    return articles;
}
