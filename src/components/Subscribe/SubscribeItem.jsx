import React from 'react'
import { declOfNum, getDeclOfArray } from 'utils'

const SubscribeItem = ({ title, number, price, color }) => {
    return (
        <div className='sub__item'>
            <div className='sub__item-title'>{title}</div>
            <div className='sub__item-num'>
                {number} {declOfNum({ number }, getDeclOfArray['course'])}
            </div>
            <div className={`sub__item-price sub__item-price--${color}`}>{price}</div>
            <a href='' className='sub__item-link'>
                Посмотреть список курсов
            </a>
            <button className='sub__item-btn btn btn-blue'>Выбрать</button>
        </div>
    )
}

export default SubscribeItem
