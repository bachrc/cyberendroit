import {EDITO_SOURCE, parseMetadataInPath, Renderable, type SvxInfo} from "./svx";
import {EditoMetadata} from "../models";
import {urlFromPath} from "../articles";

export function parseEditoInSvx(svx: SvxInfo) : Renderable<EditoMetadata> {
    const metadata = new EditoMetadata(
        svx.metadata.description!,
        new Date(svx.metadata.publication_date),
        svx.metadata.tags?.split(','),
        svx.metadata.title!,
        urlFromPath(svx.path)!!,
        svx.metadata.image,
        svx.metadata.pouet_url
    )

    return new Renderable<EditoMetadata>(
        metadata,
        svx.resolver
    )
}


export async function loadEditos() : Promise<Renderable<EditoMetadata>[]> {
    const svxs: SvxInfo[] = await parseMetadataInPath(EDITO_SOURCE);

    const posts: Renderable<EditoMetadata>[] = svxs.map(parseEditoInSvx);
    posts.sort((e1, e2) => e2.metadata.publication_date.valueOf() - e1.metadata.publication_date.valueOf())

    return posts;
}
