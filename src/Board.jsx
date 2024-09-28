import { useState } from 'react';
import Cell from './Cell';
import './Board.css'

var move = 'X';
export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    function handleMove (i){
        let newBoard = board.slice();
        newBoard[i] = move;
        if (move == 'X') {
            move = 'O';
        }else {
            move = 'X';
        }
        setBoard(newBoard);
        console.log(move);
    }

    return (
        <div className="board">
            <div className="row">
                <Cell value={board[0]} handleClick={() => handleMove(0)}/>
                <Cell value={board[1]} handleClick={() => handleMove(1)}/>
                <Cell value={board[2]} handleClick={() => handleMove(2)}/>
            </div>
            <div className="row">
                <Cell value={board[3]} handleClick={() => handleMove(3)}/>
                <Cell value={board[4]} handleClick={() => handleMove(4)}/>
                <Cell value={board[5]} handleClick={() => handleMove(5)}/>
            </div>
            <div className="row">
                <Cell value={board[6]} handleClick={() => handleMove(6)}/>
                <Cell value={board[7]} handleClick={() => handleMove(7)}/>
                <Cell value={board[8]} handleClick={() => handleMove(8)}/>
            </div>
        </div>
    );
}
