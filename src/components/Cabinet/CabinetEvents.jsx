import React, { useEffect, useMemo } from 'react'
import { EventsCardCabinet } from 'components'
import { useSelector } from 'react-redux'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import { useDispatch, useQuery, useRequest } from 'hooks'
import { authSelectors, eventsSelectors } from 'store/selectors'
import { getRequest } from 'utils'
import { Loader, LoaderWrapper } from 'components/ui'
import { useLocation } from 'react-router-dom'

const CabinetEvents = () => {
   const location = useLocation()
   const query = useQuery()
   const { resetEvents, fetchEvents, fetchUserEvents } = useDispatch()
   const { setFilter } = useDispatch()
   const filter = useSelector(({ settings }) => settings.filter)
   const rolesId = useSelector(authSelectors.getRolesId)
   const events = useSelector(eventsSelectors.getEvents)
   const data = useSelector(eventsSelectors.getData)

   const roleRequest = useMemo(() => getRequest([fetchUserEvents, fetchEvents], rolesId), [])
   const fetchEventsRequest = useRequest({
      request: roleRequest,
   })

   useEffect(() => {
      const _features = query.getAll('features') ?? []
      const _ended = query.getAll('ended') ?? []
      const _nomoderated = query.getAll('nomoderated') ?? []
      const _moderated = query.getAll('moderated') ?? []
      fetchEventsRequest.call({ page: 1, _limit: 30, _features, _ended, _nomoderated, _moderated })

      setFilter({ ...filter, _features, _ended, _nomoderated, _moderated })
      return () => {
         setFilter({})
         resetEvents()
      }
   }, [location])

   return (
      <div className='cabinet-page__group'>
         <CabinetTitle title={'Мои мероприятия'} type={'events'} isBtnAll={false} />
         <CabinetNav type={'events'} total={data.total} visibleTypeShow={false} />
         <LoaderWrapper isLoading={fetchEventsRequest.isLoading}>
            <div className='cabinet-page__items'>
               {events.map((props) => (
                  <EventsCardCabinet key={props.id} {...props} />
               ))}
            </div>
            {/* <CoursesItemWrapper items={events} isLoading={fetchEventsRequest.isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} /> */}
         </LoaderWrapper>
      </div>
   )
}

export default CabinetEvents
