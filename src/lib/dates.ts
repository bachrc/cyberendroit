export function prettyDateFromIsoString(iso_string: string) {
    const date = new Date(iso_string);

    return date.toLocaleDateString('fr-FR', {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    })
}