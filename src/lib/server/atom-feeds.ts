export function generateFeed(): string {
    return `
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>cyberendroit</title>
    <link href="https://cyberendroit.net/"/>
    <updated>2022-12-06T18:30:02Z</updated>
    <author>
        <name>pacha</name>
    </author>
    <id>https://cyberendroit.net</id>
    
    <entry>
        <title>Amogus</title>
        <link href="http://example.org/2003/12/13/atom03"/>
        <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
        <updated>2022-12-06T18:30:02Z</updated>
        <summary>Amog</summary>
    </entry>

</feed>
`
}
