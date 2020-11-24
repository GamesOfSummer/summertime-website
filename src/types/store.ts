export interface Store {
    label: string;
}

export function DefaultStore(): Store {
    return { label: '' };
}
