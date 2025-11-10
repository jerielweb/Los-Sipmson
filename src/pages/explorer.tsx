import { NAV, EXPLORER } from './../components/index.ts'
import { Link } from 'react-router-dom'
import ExplorerStyle from './../styles/explorer.module.css'



export default function EXPOLRER() {
    return (
        <main>
            <div>
                <NAV
                showExplorerButton={false}
                />
            </div>
            <div className={ExplorerStyle.container}>
            <h1>Explorer</h1>
            <div className={ExplorerStyle.cardsContainer}>
                {EXPLORER.map((item, ex) => (
                    <div key={ex} className={ExplorerStyle.card}>
                        <Link to={item.src}>
                            <h2>{item.title}</h2>
                            <img src={item.imgsrc} alt={item.title}/>
                            <span>Click Para Abrir</span>
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </main>
    )
}