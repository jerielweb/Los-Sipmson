import { useState, useEffect } from "react"
import type { ApiResponse, Character } from "../types/charathers.types.ts"
import CardStyle from './../styles/cards.module.css'
import { NAV, LOADING } from './../components/index.ts'
import PAGE_CHARACTER from "../components/ui/Page.Characters.tsx"

export default function Characters() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const totalPages = 60

    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true);
            try {
                const apiCharacters = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
                const dataCharacters = await apiCharacters.json() as ApiResponse

                if (dataCharacters.results && Array.isArray(dataCharacters.results)) {
                    setCharacters(dataCharacters.results)
                }
            } finally {
                setLoading(false)
            }
        }
        getCharacters()
    }, [page])

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    }

    return (
        <>
        <main>
            <div>
                <NAV />
            </div>
            <div className={CardStyle.container}>
            <PAGE_CHARACTER
            showtitlePage={true}
            page={page}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            />
                <div className={CardStyle.cards}>
                {!loading && Array.isArray(characters) && characters.length > 0 ? (
                    characters.map((character, i) => (
                        <article key={i} className={CardStyle.card}>
                            <div>
                                <h2 className={CardStyle.name}>{character.name}</h2>
                                <p>{character.occupation}</p>
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
                    <LOADING />
                )}
                </div>
            <PAGE_CHARACTER
            showtitlePage={false}
            page={page}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            />
            </div>
        </main>
    </>
    )
}