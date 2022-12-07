import {loadActivity} from "./articles";

export async function generateFeed(): Promise<string> {
    const activities = await loadActivity()

    return `
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>cyberendroit</title>
    <link href="https://cyberendroit.net/"/>
    <updated>2022-12-06T18:30:02Z</updated>
    <author>
        <name>pacha</name>
    </author>
    <id>https://cyberendroit.net</id>
    
    ${activities.map(activity => {
        return `
            <entry>
                <title>${activity.title}</title>
                <link href="${activity.url}"/>
                <id>${activity.url}</id>
                <updated>${activity.date.toISOString()}</updated>
                <summary>${activity.summary}</summary>
            </entry>
    `})}
    

</feed>
`
}
