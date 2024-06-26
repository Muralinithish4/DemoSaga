import React, { useState, useEffect } from 'react';
import './App.css';

const TicTacToe = () => {
  const initialBoard = JSON.parse(localStorage.getItem('ticTacToeBoard')) || Array(5).fill(Array(5).fill(null));
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  useEffect(() => {
    localStorage.setItem('ticTacToeBoard', JSON.stringify(board));
  }, [board]);

  const handleClick = (row, col) => {
    if (board[row][col] || calculateWinner(board)) {
      return;
    }

    const newBoard = board.map((rowArray, rowIndex) =>
      rowIndex === row
        ? rowArray.map((cell, colIndex) => (colIndex === col ? (xIsNext ? 'X' : 'O') : cell))
        : rowArray
    );

    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderCell = (row, col) => (
    <div className="cell" onClick={() => handleClick(row, col)}>
      {board[row][col]}
    </div>
  );

  const calculateWinner = (squares) => {
    // Logic to check for a winner goes here
    // You can implement your own logic to check for a winner in a 5x5 grid
  };

  const status = calculateWinner(board)
    ? `Winner: ${calculateWinner(board)}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="App">
      <div className="status">{status}</div>
      <div className="board">
        {board.map((rowArray, rowIndex) => (
          <div key={rowIndex} className="row">
            {rowArray.map((cell, colIndex) => (
              <div key={colIndex}>{renderCell(rowIndex, colIndex)}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
