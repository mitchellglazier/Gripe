export interface IGripe {
    id: number;
    name: string;
    date: Date;
    reference?: string;
    tags?: string;
    body: string;
}
