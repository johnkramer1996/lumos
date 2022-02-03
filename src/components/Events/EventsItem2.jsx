import React from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import { getImgUrl } from 'utils'

const EventsItem2 = ({ id, image, day = '14 сен', time = 'в 20:00', name }) => {
    return (
        <Link to={`${RouteNames.CABINET_EVENTS}/${id}`} className='event-card2'>
            <div className='event-card2__img'>
                <img src={getImgUrl(image)} alt='' />
            </div>
            <div className='event-card2__content'>
                <div className='event-card2__time'>
                    <span className='event-card2__time-day'>{day}</span>
                    <span className='event-card2__time-hour'>{time}</span>
                </div>
                <h3 className='event-card2__title'>{name}</h3>
                <div className='event-card2__bottom'>
                    <div className='event-card2__students'>
                        <div className='event-card2__students-title'>48 учеников</div>
                        <div className='event-card2__students-new'>8 новых</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventsItem2
