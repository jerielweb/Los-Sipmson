import CardStyle from './../../styles/cards.module.css';
import type Props from '../../types/pageCounter.types.ts';

export default function PAGE_COUNTER({ handleNextPage, handlePrevPage, page = 1, totalPages, showtitlePage = true }: Props) {
    return(
        <div className={CardStyle.header}>
            { showtitlePage && (
                <h1 className={CardStyle.title}>Popular Characters</h1>
            )
            }
            <div className={CardStyle.buttons}>
                <button onClick={handlePrevPage} className={CardStyle.button} disabled={page === 1}>
                    Previous page
                </button>
                <button onClick={handleNextPage} className={CardStyle.button} disabled={page === totalPages}>
                    Next Page
                </button>
            </div>
            <div className={CardStyle.pagination}>
                <p>Page {page} of {totalPages}</p>
            </div>
        </div>
    )
}