import { NAV, EXPLORER } from './../components/index.ts'
import { Link } from 'react-router-dom'
import ExplorerStyle from './../styles/explorer.module.css'
import { IMAGE } from './../components/index.ts'
export default function EXPOLRER() {
    return (
        <main>
                <NAV
                showExplorerButton={false}
                />
            <div className={ExplorerStyle.container}>
            <h1>Explorer</h1>
            <div className={ExplorerStyle.cardsContainer}>
                {EXPLORER.map((item, ex) => (
                    <div key={ex} className={ExplorerStyle.card}>
                        <Link to={item.src}>
                            <h2>{item.title}</h2>
                            <div className={ExplorerStyle.image}>
                                <IMAGE
                                src={item.imgsrc}
                                alt={item.title}
                                showtext={false}
                                />
                            </div>
                            <span>Click To Open</span>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </main>
    )
}