import React from "react";
import './outputData.css'

interface IProps{
currentPrice: string;
currentAmount: string
result: number
}

const OutputData:React.FC<IProps>=({currentPrice, currentAmount, result})=>{
    
    return(
        <div className="display">
            {currentPrice}руб*{currentAmount}шт={result}
        </div>
    )
}

export default OutputData