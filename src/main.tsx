import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import App from './pages/index.tsx'
import Charathers from './pages/charathers.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/charathers.tsx' element={<Charathers />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
