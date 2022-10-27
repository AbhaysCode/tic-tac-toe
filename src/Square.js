import './App.css';
import {useState} from 'react';
function Square(props){
    
    return(
        <div className="square" onClick={()=>{props.handleClick(props.num)}} >
        {props.value}
      </div>
    )
}
export default Square;