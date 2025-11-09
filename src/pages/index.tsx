import './../styles/global.css'
import { POSTER, LOGO } from './../assets/index.ts'
import AppStyle from './../styles/app.module.css'
import { Link } from 'react-router-dom'
import { NAV } from './../components/index.ts'

export default function App() {

  return (
    <main>
        <div>
            <NAV />
        </div>
      <div className={AppStyle.container}>
        <div className={AppStyle.poster}>
          <img src={POSTER} alt='Poster de la famila'/>
        </div>
        <div className={AppStyle.logoContainer}>
          <div className={AppStyle.logo}>
            <img src={LOGO} alt='Logo de la serien animada'/>
          </div>
          <div className={AppStyle.text}>
            <Link to='./charathers.tsx'>Explore</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
