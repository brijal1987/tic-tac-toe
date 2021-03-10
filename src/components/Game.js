import React, { useState } from 'react';
import Board from "./Board";

const Game = () => {
    const [draw, setDraw] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
        setDraw(!boardCopy.some(function(i) { return i === null; }))
    };
    const handleRestart = () => {
        setDraw(false)
        setBoard(Array(9).fill(null))
        setXisNext(true)
    }
    const winner = calculateWinner(board);
    const resultStyle = {
        color: "blue",
        fontWeight: 900,
        display: "grid",
        margin: "15px auto",
	    display: "grid",
        marginTop: "10px"
    }
    const btnStyle = {
        border: "2px solid blue",
        borderRadius: "10px",
        width: "200px",
        height: "50px",
        margin: "15px auto",
        fontWeight:"700",
        cursor: "pointer",
        fontSize: "25px",
    }
    const spanStyle = {
        border: "2px solid blue",
        borderRadius: "10px",
        width: "200px",
        height: "30px",
        margin: "0 auto",
        fontWeight:"700",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "25px",

    }
    return (
        <>
        <h1 style={{color: "#99004C", width: "100%", display: "block", textAlign:"center", margin:"20px auto", textTransform: "uppercase"}}>Tic Tac Toe Game</h1>
        <Board squares={board} onClick={handleClick} />
        <div style={resultStyle}>
            {draw && !winner && (<button style={btnStyle} onClick={handleRestart}>Restart Game</button>)}
            <span style={spanStyle}>
                {draw && !winner ? <span style={{color: "red"}}>Draw</span> : winner ? <span style={{color: "green"}}>Winner: {winner}</span> : "Next Player: " + (xIsNext ? "X" : "O")}
            </span>
        </div>
        </>
    );
 }

export default Game;