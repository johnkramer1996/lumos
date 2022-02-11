import React, { useEffect } from 'react'
import { EventsItem2 } from 'components'
import { useSelector } from 'react-redux'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import { useDispatch, useRequest } from 'hooks'
import { authSelectors, eventsSelectors } from 'store/selectors'
import { getRequest } from 'utils'
import { Loader } from 'components/ui'

const CabinetEvents = () => {
   const { fetchEvents, fetchUserEvents } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const events = useSelector(eventsSelectors.getEvents)
   const data = useSelector(eventsSelectors.getData)

   const fetchEventsRequest = useRequest({
      request: fetchEvents,
   })
   const fetchUserEventsRequest = useRequest({
      request: fetchUserEvents,
   })
   const roleRequests = getRequest([fetchUserEventsRequest, fetchEventsRequest], rolesId)

   useEffect(() => {
      roleRequests.call({ page: 1, limit: 1000 })
   }, [])

   return (
      <div className='cabinet-page__group'>
         <CabinetTitle title={'Мои мероприятия'} type={'events'} isBtnAll={false} />
         {roleRequests.isloading ? (
            <Loader />
         ) : (
            <>
               <CabinetNav type={'events'} total={data.total} />
               <div className='cabinet-page__items'>
                  {events.map((props) => (
                     <EventsItem2 key={props.id} {...props} />
                  ))}
               </div>
               {/* <CoursesItemWrapper items={events} isLoading={fetchEventsRequest.isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} /> */}
            </>
         )}
      </div>
   )
}

export default CabinetEvents
