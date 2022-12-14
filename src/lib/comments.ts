interface Pouet {
    pouet_id: string,
    in_replay_to_id: string,
    avatar_url: string,
    display_name: string,
    actor: string,
    profile_url: string,
    toot_url: string,
    posted_date: Date,
    content: string
}

export function pouetsFromResponse(response: Array<any>): Pouet[] {
    return response.map(it => { return {
        actor: it["account"]["acct"],
        avatar_url: it["account"]["avatar"],
        content: it["content"],
        display_name: it["account"]["display_name"],
        in_replay_to_id: it["in_reply_to_id"],
        posted_date: new Date(it["created_at"]),
        pouet_id: it["id"],
        profile_url: it["account"]["url"],
        toot_url: it["url"]
    }})
}

export type {Pouet}
