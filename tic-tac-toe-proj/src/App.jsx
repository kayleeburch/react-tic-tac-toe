import './App.css'
import Square from './components/Square'
import { useState } from 'react'

function App() {

    //creates a state for squares and initiates it to an empty array len 9 with null for each value
  const [ squares, setSquares ] = useState(Array(9).fill(null));

  //one line of code for setting square 
  const renderSquare = (i) => {
    return <Square
      value={squares[i]}
      onClick={() => {
        squares[i] = 'X';
        setSquares(squares)
      }}
      />;
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
