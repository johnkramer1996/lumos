import React from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import { declOfNum, getDeclOfArray } from 'utils'

const SubscribeItem = ({ title, number, price, color }) => {
    return (
        <div className='sub__item'>
            <div className='sub__item-title'>{title}</div>
            <div className='sub__item-num'>
                {number} {declOfNum({ number }, getDeclOfArray['courses'])}
            </div>
            <div className={`sub__item-price sub__item-price--${color}`}>{price}</div>
            <Link to={RouteNames.COURSES} className='sub__item-link'>
                Посмотреть список курсов
            </Link>
            <button className='sub__item-btn btn btn-blue'>Выбрать</button>
        </div>
    )
}

export default SubscribeItem
