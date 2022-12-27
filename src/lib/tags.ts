export interface SpecialTags {
    [id: string]: SpecialTag
}

export interface SpecialTag {
    icon ?: string,
    name?: string,
    description?: string,
    bgColor?: string,
    textColor?: string
}

export const tags: SpecialTags = {
    "rust" : {
        name: "Rust",
        description: "Ais-je fini de saoûler tout le monde avec ce langage ? Absolument pas."
    },
    "rust-archi-hexa" : {
        name: "Suite sur Rust en archi hexagonale et en TDD",
        description: "Trilogie d'articles sur l'apprentissage de Rust via de l'Archi Hexagonale et du TDD !"
    }
}
