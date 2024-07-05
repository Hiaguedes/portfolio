export type ReposApiResponse = {
    id: number;
    name: string;
    html_url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    homepage?: string;
}