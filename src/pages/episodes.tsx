import { NAV, LOADING, PAGE_COUNTER, IMAGE } from './../components/index.ts'
import { useEffect, useState } from 'react'
import type { Episode, ApiResponse } from '../types.d.ts'
import EpisodeStyle from './../styles/episode.module.css'

export default function EPISODES() {
    const [episodes, setEpisodes] = useState<Episode[]>([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    const totalPages = 39

    useEffect(() => {
        document.title = 'Episodes | The Simpson'
    }, [])

    useEffect(() => {
        const getEpisodes = async () => {
            setLoading(true);
            try {
                const apiEpisodes = await fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`)
                const dataEpisodes = await apiEpisodes.json() as ApiResponse

                if (dataEpisodes.results && Array.isArray(dataEpisodes.results)) {
                    setEpisodes(dataEpisodes.results)
                }
            }
            catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getEpisodes()
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
            <div className={EpisodeStyle.container}>
                <PAGE_COUNTER
                col={true}
                row={false}
                title="Episodes"
                showtitlePage={true}
                page={page}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                totalPages={totalPages}
                />
                <div className={EpisodeStyle.cardsContainer}>
                    {!loading && Array.isArray(episodes) && episodes.length > 0 ? (
                        episodes.map((episode, i) => (
                            <article key={i} className={EpisodeStyle.card}>
                                <div className={EpisodeStyle.image}>
                                    <h2>{episode.name}</h2>
                                    <div className={EpisodeStyle.imageContainer}>
                                        <IMAGE
                                        src={`https://cdn.thesimpsonsapi.com/500${episode.image_path}`}
                                        alt={episode.name}
                                        showtext={false}
                                        />
                                    </div>
                                </div>
                                <div className={EpisodeStyle.info}>
                                    <p>
                                        <strong>Air Date:&nbsp;</strong>
                                        <span>{episode.airdate === '' ? 'Unknown' : episode.airdate}</span>
                                    </p>
                                    <p>
                                        <strong>Season:&nbsp;</strong><span>{episode.season}</span>&nbsp;
                                        <strong>Episode:&nbsp;</strong><span>{episode.episode_number}</span>
                                    </p>
                                </div>
                            </article>
                        ))
                    ) : (
                        <LOADING />
                    )}
                </div>
            </div>
                <PAGE_COUNTER
                col={false}
                row={true}
                title="Episodes"
                showtitlePage={false}
                page={page}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                totalPages={totalPages}
                />
        </main>
    )
}