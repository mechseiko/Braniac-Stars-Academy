import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cursor from '../src/components/Cursor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cursor />
  </StrictMode>,
)
