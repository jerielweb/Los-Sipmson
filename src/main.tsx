import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import './assets/fonts/index.css'
import App from './pages/index.tsx'
import Charathers from './pages/charathers.tsx'
import Explorer from './pages/explorer.tsx'
import NotFound from './pages/404.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/charathers' element={<Charathers />} />
        <Route path='/explorer' element={<Explorer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
