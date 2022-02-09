import React, { useEffect } from 'react'
import { EventsItem2 } from 'components'
import { useSelector } from 'react-redux'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import { useDispatch, useRequest } from 'hooks'

const CabinetEvents = () => {
   const { fetchEvents, fetchUserEvents, fetchFrontEvents } = useDispatch()
   const role = useSelector(({ auth }) => auth.role)
   const events = useSelector(({ events }) => events.events)
   const { total } = useSelector(({ events }) => events.data)
   const fetchEventsRequest = useRequest({
      request: fetchEvents,
   })
   const fetchUserEventsRequest = useRequest({
      request: fetchUserEvents,
   })
   const roleRequests = [fetchUserEventsRequest, fetchEventsRequest][role - 1]
   useEffect(() => {
      roleRequests.call({ page: 1, limit: 1000 })
   }, [])

   return (
      <div className='cabinet-page__group'>
         <CabinetTitle title={'Мои мероприятия'} type={'events'} isBtnAll={false} />
         <CabinetNav type={'events'} total={total} />
         {/* <CoursesItemWrapper items={events} isLoading={fetchEventsRequest.isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} /> */}
         <div className='cabinet-page__items'>
            {events.map((props) => (
               <EventsItem2 key={props.id} {...props} />
            ))}
         </div>
      </div>
   )
}

export default CabinetEvents
