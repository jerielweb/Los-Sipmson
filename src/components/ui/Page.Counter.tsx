import CardStyle from './../../styles/pageCounter.module.css';
import type Props from '../../types/pageCounter.types.ts';

export default function PAGE_COUNTER({ handleNextPage, handlePrevPage, page = 1, totalPages, showtitlePage = true, title, col = true, row = false }: Props) {
    return(
        <div className={CardStyle.header}>
            { showtitlePage && (
                <h1 className={CardStyle.title}>{title}</h1>
            )
            }
            { col && (
                <>
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
                </>
            )}
            { row && (
                    <div className={CardStyle.buttons_bottom}>
                        <button onClick={handlePrevPage} className={CardStyle.button} disabled={page === 1}>
                            Previous page
                        </button>
                        <div className={CardStyle.pagination_bottom}>
                            <p>Page {page} of {totalPages}</p>
                        </div>
                        <button onClick={handleNextPage} className={CardStyle.button} disabled={page === totalPages}>
                            Next Page
                        </button>
                    </div>
            )}
        </div>
    )
}