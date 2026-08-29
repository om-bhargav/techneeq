import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Loader from './components/global/Loader.tsx'
document.documentElement.classList.remove("dark");
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Loader/>
  </StrictMode>,
)
