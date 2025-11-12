export default interface Props {
    handleNextPage?: () => void;
    handlePrevPage?: () => void;
    page: number;
    totalPages: number;
    showtitlePage: boolean;
    title: string | null;
    row: boolean;
    col: boolean;
}