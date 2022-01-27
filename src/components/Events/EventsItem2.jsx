import { SITE_URL } from 'api/URLS'
import React from 'react'
import { Link } from 'react-router-dom'

const EventsItem2 = ({ image, day, time, name }) => {
    return (
        <div className='event-card2'>
            <div className='event-card2__img'>
                <img src={SITE_URL + image} alt='' />
            </div>
            <div className='event-card2__content'>
                <div className='event-card2__time'>
                    <span className='event-card2__time-day'>{day}</span>
                    <span className='event-card2__time-hour'>{time}</span>
                </div>
                <Link to={''} className='event-card2__title'>
                    {name}
                </Link>
            </div>
        </div>
    )
}

export default EventsItem2
