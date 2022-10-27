import Square from './Square.js';
import './App.css';
import {useState} from 'react';

function Board(){
    const [squares,setSquares] = useState([null,null,null,null,null,null,null,null,null])
    const [xIsNext,setxIsNext] = useState(true);
    let winner = calculateWinner(squares);
    let status;
    if(winner){
         status = "Winner is "+winner;
    }
    else{
        status = xIsNext?'Next player: X':'Next player: 0';
    }
    function handleClick(pos){
        if(calculateWinner(squares)||squares[pos]){
            return ;
        }
        setSquares(prev=>{
            const modifiedSquare = [...prev];
            modifiedSquare[pos] = xIsNext?"X":"0";
            const chance = xIsNext;
            // console.log("chance is",chance);
            // console.log("!chance is",!chance);
            setxIsNext(!chance);
            return modifiedSquare;
        });
        console.log(squares);
        console.log("Clicked !!");
    }
    function calculateWinner(squares){
        let lines =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<lines.length;i++){
            console.log("In the Loop")
            const [a,b,c] = lines[i];
            console.log(squares[a]);
            if(squares[a]&&squares[a] === squares[b]&& squares[b]===squares[c]){
                return squares[a];
            }
        }
        return ;
    }
    return(
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square num={0} value={squares[0]} handleClick={handleClick}/>
          <Square num={1} value={squares[1]} handleClick={handleClick}/>
          <Square num={2} value={squares[2]} handleClick={handleClick}/>
        </div>
        <div className="board-row">
          <Square num={3} value={squares[3]} handleClick={handleClick}/>
          <Square num={4} value={squares[4]} handleClick={handleClick}/>
          <Square num={5} value={squares[5]} handleClick={handleClick}/>
        </div>
        <div className="board-row">
          <Square num={6} value={squares[6]} handleClick={handleClick}/>
          <Square num={7} value={squares[7]} handleClick={handleClick}/>
          <Square num={8} value={squares[8]} handleClick={handleClick}/>
        </div>
      </div>
    );
}
export default Board;