import { useState, useEffect } from 'react';
import Cell from './Cell';
import Message from './Message';
import './Board.css'

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentMove, setCurrentMove] = useState('X');
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const winner = checkWinner(board);
        if (winner) {
            setWinner(winner);  
            // setTimeout(() => 
            //     // alert(`The winner is: ${winner}`);
            // , 130);
        }
    }, [board]);

    function handleMove (i){
        if (board[i] || winner ) return;
        let newBoard = board.slice();
        newBoard[i] = currentMove;
        setBoard(newBoard);
        setCurrentMove(currentMove === 'X' ? 'O' : 'X');
    }

    function checkPossibleMove(board){
        for (let i = 0; i < board.length; i++) {
            if(board[i]) return false;
        }
        return true;
    }

    function checkWinner(board){
        let winner;
        let winCases = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        if(!checkPossibleMove(board)){
            for(const winCase of winCases){
                let [x, y, z] = winCase;
                if(board[x] == board[y] && board[y] == board[z] && board[x]){
                    winner = board[x];
                }
            }
        }
        return winner;
    }

    return (
        <>{winner && <Message winner={winner} />}
        <div className="board">
            <div className="row">
                <Cell value={board[0]} handleClick={() => {handleMove(0); }}/>
                <Cell value={board[3]} handleClick={() => {handleMove(3); }}/>
                <Cell value={board[6]} handleClick={() => {handleMove(6); }}/>
            </div>
            <div className="row">
                <Cell value={board[1]} handleClick={() => {handleMove(1); }}/>
                <Cell value={board[4]} handleClick={() => {handleMove(4); }}/>
                <Cell value={board[7]} handleClick={() => {handleMove(7); }}/>
            </div>
            <div className="row">
                <Cell value={board[2]} handleClick={() => {handleMove(2); }}/>
                <Cell value={board[5]} handleClick={() => {handleMove(5); }}/>
                <Cell value={board[8]} handleClick={() => {handleMove(8); }}/>
            </div>
        </div>
        </>
    );
}
