export interface IGripe {
    id: number;
    name: string;
    date: Date;
    reference?: string;
    tags?: string;
    body: string;
    comment?: IComment[];
}

export interface IComment {
    id: number;
    name: string;
    date: Date;
    reference?: string;
    tags: string;
    body: string;
    voters: string[];
}
