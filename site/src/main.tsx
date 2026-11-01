import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// The build prerenders the page into #root, the dev server serves it empty.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
