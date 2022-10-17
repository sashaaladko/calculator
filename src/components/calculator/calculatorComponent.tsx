import React, { useState } from "react";
import OutputData from "../outputData/outputData";
import Button from "../buttonComponent/button";
import './calculator.css'
import Operations from '../operations/operations'
import Calculator from "./calculator";


function CalculatorComponent(){
    const[currentPrice, setcurrentPrice] = useState<string>('')
    const[currentAmount, setcurrentAmount]=useState<string>('')
    const [multiplication, setmultiplication] = useState<boolean>(false)
    const[result, setresult] = useState<number>(0)
    let outputNumber: number = + currentPrice
    let outputAmount: number = + currentAmount

    const btnHandler=(e:any)=>{
        if(multiplication==false){
            if(currentPrice.includes('.')){
                if(e=='.'||currentPrice.split('.')[1].length>1){
                    setcurrentPrice(currentPrice)
                }
                else setcurrentPrice(currentPrice+e)
            }
            else setcurrentPrice(currentPrice+e)
        }
        if(multiplication==true){
         if (currentAmount.includes('.')){
            if(e=='.'||currentAmount.split('.')[1].length>2){
                setcurrentAmount(currentAmount)
            }
            else setcurrentAmount(currentAmount+e)
            }
        else setcurrentAmount(currentAmount+e)
        }
    }

    function btnHandlerClear(){
        setcurrentPrice('')
        setcurrentAmount('')
        setmultiplication(false)
        setresult(0)
    }

    function multiplicationHandler(){
        setmultiplication(true)
    }

    function equalHandler(){
        let resultPrice = + (outputAmount*outputNumber).toFixed(2)
        setresult(resultPrice)
    }
    
   
    return(
        <>
        <Calculator btnHandler={btnHandler} btnHandlerClear={btnHandlerClear} currentPrice={currentPrice} currentAmount={currentAmount} result={result}
        multiplicationHandler={multiplicationHandler} equalHandler={equalHandler}/>
        </>
        
        
    )
}

export default CalculatorComponent