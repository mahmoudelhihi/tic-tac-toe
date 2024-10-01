import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './Board'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <h1>Tic-tac-toe</h1>
    <Board/>
    </StrictMode>
)
