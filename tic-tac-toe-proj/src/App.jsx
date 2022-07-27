import './App.css'
import Square from './components/Square'
import { useState } from 'react'

function App() {

    //creates a state for squares and initiates it to an empty array len 9 with null for each value
  const [ squares, setSquares ] = useState(Array(9).fill(null));

  //is x next boolean
  const [ isXNext, setIsXNext ] = useState(true);

  const [xArr, setXArr] = useState([])
  const [oArr, setOArr] = useState([])
  const [won, setWon] = useState(false)

  //one line of code for setting square 
  const renderSquare = (i) => {
    return <Square
      value={squares[i]}
      onClick={() => {
        //creating a copy of the array 
        const nextSquares = squares.slice()
        //changing value of one element in the array to either 'x' or 'o'
        nextSquares[i] = isXNext ? "X" : "O";

        let nextIndex = []

        if(isXNext){
          //append i to xArr list and set to nextIndex
          nextIndex = [...xArr, i];
          //set XArr to new array 
          setXArr(nextIndex);
        } else {
          nextIndex = [...oArr, i];
          setOArr(nextIndex);
        }

        //updating the whole array with element change 
        setSquares(nextSquares)
        //change the value to opposite of what current value is
        setIsXNext(!isXNext);

        console.log('xArr:', xArr, 'oArr:', oArr, 'nextIndex:', nextIndex)
        //if length of either x or o array >= 3, run checkWin()
        if(xArr.length >= 3 || oArr.length >= 3){
          checkWin(i)
          console.log('result of checkwin:', checkWin(i))
        }
      }}
      />;
  }

  //[1,2,4]
  const checkWin = (i) => {
    console.log('INSIDE OF CHECK WIN FUNC')
    if(xArr.includes(i)){
      for(let i = 0; i < xArr.length; i++){
        if(xArr.includes(i + 3) && xArr.includes(i - 3)){
          console.log('plus 3', xArr.includes(i + 3))
          console.log('minus 3', xArr.includes(i - 3))
          console.log('i', i)
          return true
        }
      }
    }
    // console.log(won)
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
