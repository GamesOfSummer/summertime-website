export interface Picture {
    url: string;
}

export interface Pictures {
    pictures: Array<Picture>;
}

export function DefaultPictures(): Pictures {
    return { pictures: [] };
}
