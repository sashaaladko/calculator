import React from "react";

interface IProps{
    text: any;
    onClick?:any
}


const Button:React.FC<IProps>=({text, onClick})=>{

    return(
        <button className={``} value={text} onClick={onClick}>{text}</button>
    )
}

export default Button