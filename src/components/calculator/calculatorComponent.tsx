import React, { useState } from "react";
import './calculator.css'
import Calculator from "./calculator";


function CalculatorComponent(){
    const[currentPrice, setCurrentPrice] = useState<string>('')
    const[currentAmount, setCurrentAmount]=useState<string>('')
    const[multiplication, setMultiplication] = useState<boolean>(false)
    const[result, setResult] = useState<number>(0)
    const[addBtn, setAddBtn] = useState<boolean>(false)
    const[discount, setDiscount] = useState<string>('')
    const[isDiscount, setIsDiscount] = useState<boolean>(false)
    const arrayOfNumbers: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0']
    let outputNumber: number = + currentPrice
    let outputAmount: number = + currentAmount

    const btnHandler=(e:string)=>{
        if(isDiscount){
            if(!isDiscount||discount.length==2)
            {setIsDiscount(false)}
            else setDiscount(discount+e)
        }
        else if(!multiplication){
            if(currentPrice.includes('.')){
                if(e=='.'||currentPrice.split('.')[1].length>1){
                    setCurrentPrice(currentPrice)
                }
                else setCurrentPrice(currentPrice+e)
            }
            else setCurrentPrice(currentPrice+e)
        }
        else{
         if (currentAmount.includes('.')){
            if(e=='.'||currentAmount.split('.')[1].length>2){
                setCurrentAmount(currentAmount)
            }
            else setCurrentAmount(currentAmount+e)
            }
        else setCurrentAmount(currentAmount+e)
        }
    }

    function btnHandlerClear(){
        setCurrentPrice('')
        setCurrentAmount('')
        setMultiplication(false)
        setResult(0)
        setDiscount('')
        setIsDiscount(false)
    }

    function multiplicationHandler(){
        setMultiplication(true)
    }

    function equalHandler(){
        let resultPrice = + (outputAmount*outputNumber).toFixed(2)
        setResult(resultPrice)
    }

    function discountHandler(){
        setIsDiscount(true)
    }

    function addHandler(){
        setAddBtn(true)
    }

    function backHandler(){
        setAddBtn(false)
    }
    
   
    return(
        <>
        <Calculator btnHandler={btnHandler} btnHandlerClear={btnHandlerClear} currentPrice={currentPrice} currentAmount={currentAmount} result={result}
        multiplicationHandler={multiplicationHandler} equalHandler={equalHandler} arrayOfNumbers={arrayOfNumbers} addHandler={addHandler} addBtn={addBtn}
        backHandler={backHandler} discountHandler={discountHandler} isDiscount={isDiscount} discount={discount}/>
        </>
        
        
    )
}

export default CalculatorComponent