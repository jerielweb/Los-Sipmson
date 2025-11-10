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
    occupation: string[] | undefined;
}

export interface PageCharacterProps {
    handleNextPage?: () => void;
    handlePrevPage?: () => void;
    page: number;
    totalPages: number;
    showtitlePage: boolean;
}