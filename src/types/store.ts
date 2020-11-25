import { DefaultPicture, Picture } from './picture';

export interface Store {
    picture: Picture;
}

export function DefaultStore(): Store {
    return { picture: DefaultPicture() };
}
