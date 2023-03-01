import type { Maybe } from './Maybe';
import { none, some } from './Maybe';

type Toot = {
	toot_id: string;
	in_replay_to_id: string;
	avatar_url: string;
	display_name: string;
	actor: string;
	profile_url: string;
	toot_url: string;
	posted_date: Date;
	content: string;
};

const tootFromDescendant = (value: any): Toot => ({
	actor: value['account']['acct'],
	avatar_url: value['account']['avatar'],
	content: value['content'],
	display_name: value['account']['display_name'],
	in_replay_to_id: value['in_reply_to_id'],
	posted_date: new Date(value['created_at']),
	toot_id: value['id'],
	profile_url: value['account']['url'],
	toot_url: value['url']
});

export async function fetchResponseToots(tootUrl: string): Promise<Maybe<ReadonlyArray<Toot>>> {
	const tootPattern = /^https?:\/\/([\w.]*)\/.*\/(\d*)$/;
	const match = tootPattern.exec(tootUrl);

	if (match === null) return none;

	const [instanceName, tootId] = match;

	const newLocal = await fetch(`https://${instanceName}/api/v1/statuses/${tootId}/context`);

	if (!newLocal.ok) return none;

	const response = await newLocal.json();
	const descendants = response['descendants'];
	const toots = descendants.map(tootFromDescendant);
	return some(toots);
}
