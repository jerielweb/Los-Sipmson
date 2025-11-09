import { useState, useEffect } from "react";
import type { ApiResponse, Character } from "./../types/charathers.ts";
import CardStyle from './../styles/cards.module.css';
import { NAV } from './../components/index.ts'

export default function Characters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const totalPages = 60;

    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true);
            try {
                const apiCharacters = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
                const dataCharacters = await apiCharacters.json() as ApiResponse;
                if (dataCharacters.results && Array.isArray(dataCharacters.results)) {
                    setCharacters(dataCharacters.results);
                }
            } finally {
                setLoading(false);
            }
        }
        getCharacters();
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <>
        <main>
            <div>
                <NAV />
            </div>
            <div className={CardStyle.container}>
                <div className={CardStyle.header}>
                    <h1 className={CardStyle.title}>Popular Chararthers</h1>
                    <div className={CardStyle.buttons}>
                        <button onClick={handlePrevPage} className={CardStyle.button} disabled={page === 1}>
                            Previous page
                        </button>
                        <button onClick={handleNextPage} className={CardStyle.button} disabled={page === totalPages}>
                            Next Page
                        </button>
                    </div>
                    <div className={CardStyle.pagination}>
                        <p>Pagina {page} de {totalPages}</p>
                    </div>
                </div>
                <div className={CardStyle.cards}>
                {!loading && Array.isArray(characters) && characters.length > 0 ? (
                    characters.map((character, i) => (
                        <article key={i} className={CardStyle.card}>
                            <div>
                                <h2 className={CardStyle.name}>{character.name}</h2>
                                <img src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`} alt={character.name} />
                            </div>
                            <div>
                                <p>Age: {character.age === null ? 'Unknown' : character.age}</p>
                                <p
                                className={character.status === 'Alive' ? CardStyle.alive : CardStyle.dead}
                                >{character.status === 'Alive' ? 'Alive' : 'Deceased'}</p>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className={CardStyle.loading}>
                        <div className={CardStyle.loadingItem}>
                            <div className={CardStyle.loader}></div>
                        </div>
                    </div>
                )}
                </div>
                <div>
                    <div className={CardStyle.pagination}>
                        <p>Pagina {page} de {totalPages}</p>
                    </div>
                    <div className={CardStyle.buttons}>
                        <button onClick={handlePrevPage} className={CardStyle.button} disabled={page === 1}>
                            Previous page
                        </button>
                        <button onClick={handleNextPage} className={CardStyle.button} disabled={page === totalPages}>
                            Next Page
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}