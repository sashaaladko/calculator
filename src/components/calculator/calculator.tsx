import React, { useState } from "react";
import OutputData from "../outputData/outputData";
import Button from "../buttonComponent/button";
import './calculator.css'
import Operations from '../operations/operations'

interface IProps{
    btnHandler:(e:any)=>void;
    btnHandlerClear:()=>void
    currentPrice: string;
    currentAmount: string
    result: number;
    multiplicationHandler:()=>void
    equalHandler:()=>void

}

const Calculator:React.FC<IProps>=({btnHandler, btnHandlerClear, currentAmount, currentPrice, result, multiplicationHandler, equalHandler})=>{
   
   
    return(
        <div className="calculator">
            <div className="mainComponents">
            <OutputData currentPrice={currentPrice} currentAmount={currentAmount} result={result}/>
            <div className="btns">
                <div className="numbers">
                    <button onClick={()=>btnHandler('7')}>7</button>
                    <button onClick={()=>btnHandler('8')}>8</button>
                    <button onClick={()=>btnHandler('9')}>9</button>
                    <button onClick={()=>btnHandler('4')}>4</button>
                    <button onClick={()=>btnHandler('5')}>5</button>
                    <button onClick={()=>btnHandler('6')}>6</button>
                    <button onClick={()=>btnHandler('1')}>1</button>
                    <button onClick={()=>btnHandler('2')}>2</button>
                    <button onClick={()=>btnHandler('3')}>3</button>
                    <button onClick={()=>btnHandler('.')}>.</button>
                    <button onClick={()=>btnHandler('0')}>0</button>
                    <button onClick={btnHandlerClear}>C</button>
                </div>
                <Operations multiplicationHandler={multiplicationHandler} equalHandler={equalHandler}/>
            </div>
            <button className="add">добавить</button>
            </div>
        </div>
        
        
    )
}

export default Calculator