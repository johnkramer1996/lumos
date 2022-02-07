import React from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'

const EventsItem = ({ id, day, month, year, time, img, name, descr }) => {
    return (
        <div className='events__item'>
            <div className='event-card'>
                <div className='event-card__left'>
                    <div className='event-card__day'>{day}</div>
                    <div className='event-card__month'>{month}</div>
                    <div className='event-card__year'>{year}</div>
                    <div className='event-card__time'>{time}</div>
                </div>
                <div className='event-card__img'>
                    <img src={img} alt='' />
                </div>
                <div className='event-card__right'>
                    <Link to={RouteNames.EVENTS + '/' + id} className='event-card__title'>
                        {name}
                    </Link>
                    <div className='event-card__desc'>{descr}</div>
                </div>
            </div>
        </div>
    )
}

export default EventsItem
