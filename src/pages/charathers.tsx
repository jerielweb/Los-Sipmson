import { useState, useEffect } from "react"
import type { ApiResponse, Character } from "../types.d.ts"
import CardStyle from './../styles/charather.module.css'
import { NAV, PAGE_COUNTER, LOADING } from './../components/index.ts'
import { IMAGE } from "../components/index.ts"

export default function Characters() {
    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const totalPages = 60
    useEffect(() => {
        document.title = 'Characters | The Simpson'
    }, [])
    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true);
            try {
                const apiCharacters = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
                const dataCharacters = await apiCharacters.json() as ApiResponse

                if (dataCharacters.results && Array.isArray(dataCharacters.results)) {
                    setCharacters(dataCharacters.results)
                }
            }
            catch (error) {
                console.log(error)
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
        <main>
            <NAV />
            <div className={CardStyle.container}>
            <PAGE_COUNTER
            col={true}
            row={false}
            title="Popular Characters"
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
                            <div className={CardStyle.image}>
                                <h2 className={CardStyle.name}>{character.name}</h2>
                                <p>{character.occupation}</p>
                                <div className={CardStyle.imageContainer}>
                                    <IMAGE src={`https://cdn.thesimpsonsapi.com/200${character.portrait_path}`} alt={character.name} showtext={false}/>
                                </div>
                            </div>
                            <div className={CardStyle.info}>
                                <p>Age: {character.age === null ? 'Unknown' : character.age}</p>
                                <span>{character.gender}</span>
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
            <PAGE_COUNTER
            col={false}
            row={true}
            title={null}
            showtitlePage={false}
            page={page}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
            />
            </div>
        </main>
    )
}