/* eslint-disable no-eval */
import React, { useState } from "react";
import './Calculator.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Calculator(){
    const [num, setNum] = useState('')

    function inputNum(e){ 
        var input = e.target.value 
        setNum(num + input)       
    }
  
    function changeSign(){
        if(num > 0){
            setNum(-num)  
        } else {
            setNum(Math.abs(num))
        }
        
    }
    
    function calculate (){
        let result = eval(num)
        setNum(result)
    }
    
    function clear(){
        setNum('')
    }

    function del () {
        setNum(num.slice(0,-1)) 
    }

    return (
      <div>
          <Box m={5}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={12}/>
                    <h1 className="result">{num}</h1>
                   <button className="orangeRed" onClick={clear}>AC</button>
                   <button onClick={changeSign}>+/-</button>
                   <button onClick={del}>&laquo;</button>
                   <button className="red"  onClick={inputNum} value={'/'}>/</button>
                   <button className="grey" onClick={inputNum} value={7}>7</button>
                   <button className="grey" onClick={inputNum} value={8}>8</button>
                   <button className="grey" onClick={inputNum} value={9}>9</button>
                   <button className="red"  onClick={inputNum} value={'*'}>X</button>
                   <button className="grey" onClick={inputNum} value={4}>4</button>
                   <button className="grey" onClick={inputNum} value={5}>5</button>
                   <button className="grey" onClick={inputNum} value={6}>6</button>
                   <button className="red"  onClick={inputNum} value={'-'}>-</button>
                   <button className="grey" onClick={inputNum} value={1}>1</button>
                   <button className="grey" onClick={inputNum} value={2}>2</button>
                   <button className="grey" onClick={inputNum} value={3}>3</button>
                   <button className="red"  onClick={inputNum} value={'+'}>+</button>
                   <button id="btnZero" className="grey" onClick={inputNum} value={0}>0</button>
                   <button onClick={inputNum} value={'.'}>.</button>
                   <button className="orangeRed" onClick={calculate}>=</button>
                </div>
            </Container>
      </div>
    )
}