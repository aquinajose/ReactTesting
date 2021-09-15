import React,{useState} from 'react';
import './Counter.css';
const Counter = () => {
    const [counter,setCounter]=useState(0);
    const [inputValue,setInputValue]=useState(1);
    
    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <p data-testid="counter" className={`${counter>100?"green":`${counter<0?"red":""}`}`}>{counter}</p>
            <button data-testid="subtract-btn" onClick={()=> setCounter(counter-parseInt(inputValue))}>-</button>
            <input className="text-center" onChange={(e)=>{setInputValue(e.target.value)}} type="number" data-testid="input" value={inputValue} />
            <button data-testid="add-btn" onClick={()=> setCounter(counter+parseInt(inputValue))}>+</button>
        </div>
    )
}

export default Counter;
