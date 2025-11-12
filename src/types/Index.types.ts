export interface ApiResponse {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: Character[] & Episode[];
    id: number;
}
export interface Episode {
    id: number;
    name: string;
    airdate: string;
    episode_number: number;
    image_path: string;
    synopsis: string;
    season: number;
}
export interface Character {
    id: number;
    name: string;
    portrait_path: string;
    age: number | string;
    gender: string;
    status: string | undefined;
    occupation: string[] | undefined;
}