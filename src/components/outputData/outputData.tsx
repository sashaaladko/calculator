import React from "react";
import './outputData.css'

interface IProps{
    currentPrice: string;
    currentAmount: string
    result: number
    discount: string
}

const OutputData:React.FC<IProps>=({currentPrice, currentAmount, result, discount})=>{
    
    return(
        <div className="display">
            <div className="price">
                {currentPrice}руб*{currentAmount}шт={result}руб
            </div>
            <div className="discount">
                {discount}%
            </div>
        </div>
    )
}

export default OutputData