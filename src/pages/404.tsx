import FoundStyles from './../styles/404.module.css'
import { Link } from 'react-router-dom'
import { NAV } from './../components/index.ts'
import { useEffect } from 'react'


export default function NotFound() {
    useEffect(() => {
        document.title = 'Page Not Found | The Simpson'
    }, [])
    return(
        <main>
            <div>
                <NAV
                showExplorerButton={true}
                />
            </div>
            <div className={FoundStyles.container}>
                <div>
                    <img src="https://purodiseno.lat/wp-content/uploads/2022/04/SIMPSONS-DESTACADA-640x621.jpg"/>
                </div>
                <div>
                    <h1>404</h1>
                    <p>Page Not Found</p>
                    <span>Please make sure you spell the directory correctly.</span>
                    <Link to='/' className={FoundStyles.button}>Go to Home</Link>
                </div>
            </div>
        </main>
    )
}