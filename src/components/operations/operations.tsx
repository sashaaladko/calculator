import React, { useState } from "react";
import Button from "../buttonComponent/button";
import './operations.css'

interface IProps{
    multiplicationHandler:()=>void
    equalHandler:()=>void
    discountHandler:()=>void
}

const Operations:React.FC<IProps>=({multiplicationHandler, equalHandler, discountHandler})=>{

    return(
        <div className="operations">
            <button onClick={multiplicationHandler}>*</button>
            <button onClick={discountHandler}>%</button>
            <button onClick={equalHandler}>=</button>
        </div>
        
    )
}

export default Operations