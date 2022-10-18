import React from "react";
import './tableOfProducts.css'

interface IProps{
    currentAmount: string
    currentPrice: string
    result: number
    discount: string
}

const TableOfProducts:React.FC<IProps>=({currentAmount, currentPrice, result, discount})=>{
    let discountNumber: number = + discount
    let priceWithDiscount =(result - (result/100 * discountNumber)).toFixed(2)
    return(
        <div className="products">
            <span>Цена за 1 штуку: {currentPrice} руб</span>
            <span>Количество: {currentAmount} шт</span>
            <span>Скидка: {discount}</span>
            <span>Сумма без скидки: {result} руб</span>
            <span>Сумма со скидкой: {priceWithDiscount}</span>
        </div>
    )
}

export default TableOfProducts