export interface ApiResponse {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: Character[];
    id: number;
}

export interface Character {
    id: number;
    name: string;
    portrait_path: string;
    age: number | string | undefined;
    gender: string | undefined;
    status: string | undefined;
}