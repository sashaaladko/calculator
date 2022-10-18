import React, { useState } from "react";
import OutputData from "../outputData/outputData";
import Button from "../buttonComponent/button";
import './calculator.css'
import Operations from '../operations/operations'
import TableOfProducts from '../tableOfProducts/tableOfProducts'

interface IProps{
    btnHandler:(e:string)=>void;
    btnHandlerClear:()=>void
    currentPrice: string;
    currentAmount: string
    result: number;
    multiplicationHandler:()=>void
    equalHandler:()=>void
    arrayOfNumbers: string[]
    addHandler:()=>void
    addBtn: boolean
    backHandler:()=>void
    discountHandler: ()=>void
    isDiscount: boolean
    discount: string 
}

const Calculator:React.FC<IProps>=({btnHandler, btnHandlerClear, currentAmount, currentPrice, result, multiplicationHandler, equalHandler, 
    arrayOfNumbers, addHandler, addBtn, backHandler, discountHandler, isDiscount, discount})=>{
   
    return (addBtn&&result!=0) ? (
        <>
        <TableOfProducts currentAmount={currentAmount} currentPrice={currentPrice} result={result} discount={discount}/>
        <button onClick={backHandler}>Назад</button>
        </>
    ) : (
        <>
       
        <div className="calculator">
        {isDiscount && <div>Введите скидку</div>}
            <div className="mainComponents">
            <OutputData currentPrice={currentPrice} currentAmount={currentAmount} result={result} discount={discount}/>
            <div className="btns">
                <div className="numbers">
                    {arrayOfNumbers.map((e:string)=>(
                        <button onClick={()=>btnHandler(e)}>{e}</button>
                    ))}
                    <button onClick={btnHandlerClear}>C</button>
                </div>
                <Operations multiplicationHandler={multiplicationHandler} equalHandler={equalHandler} discountHandler={discountHandler}/>
            </div>
            <button className="add" onClick={addHandler}>добавить</button>
            </div>
        </div>
        </>
    )
}

export default Calculator