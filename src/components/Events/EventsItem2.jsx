import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import { declOfNum, getDeclOfArray, getURL } from 'utils'

const EventsItem2 = ({ id, image, edate = '', etime = '', name = '', all_users = 0, new_users = 0 }) => {
   const role = useSelector(({ auth }) => auth.role)

   return (
      <Link to={getURL.cabinetEventsItem({ eventsId: id }, role)} className='event-card2'>
         <div className='event-card2__img img img--md img-cover'>
            <img src={getURL.img(image)} alt='' />
         </div>
         <div className='event-card2__content'>
            <div className='event-card2__time'>
               <span className='event-card2__time-day'>{edate}</span>
               <span className='event-card2__time-hour'>{etime}</span>
            </div>
            <h3 className='event-card2__title'>{name}</h3>
            <div className='event-card2__bottom'>
               <div className='event-card2__students'>
                  <div className='event-card2__students-title'>
                     {all_users} {declOfNum(all_users, getDeclOfArray['users'])}
                  </div>
                  <div className='event-card2__students-new'>{new_users} новых</div>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default EventsItem2
