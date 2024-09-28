import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './Board'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Board/>
  </StrictMode>,
)
