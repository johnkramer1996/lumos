import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest } from 'hooks'
import { ReactComponent as CalendarSvg } from 'svg/calendar.svg'
import CoursesItemLoader from 'components/Courses/CoursesItemLoader'
import { CoursesEmpty } from 'components'
import { frontEventsSelectors } from 'store/selectors'
import { Button } from 'components/ui'
import EventsCardFront from 'components/Events/EventsCardFront'

const Events = () => {
   const { fetchFrontEvents } = useDispatch()
   const events = useSelector(frontEventsSelectors.getEvents)

   const fetchFrontEventsRequest = useRequest({
      request: fetchFrontEvents,
      loading: true,
   })
   useEffect(() => fetchFrontEventsRequest.call(), [])

   return (
      <section className='events'>
         <div className='container'>
            <div className='events__top'>
               <h1 className='events__title display-3'>Мероприятия</h1>
               <Button className='events__cal' outline>
                  <CalendarSvg />
                  <span>Календарь мероприятий</span>
               </Button>
            </div>

            {fetchFrontEventsRequest.isLoading ? (
               <div className='events__items'>
                  {Array(8)
                     .fill(0)
                     .map((_, index) => (
                        <CoursesItemLoader key={index} />
                     ))}
               </div>
            ) : events.length ? (
               <div className='events__items'>
                  {events.map((props) => (
                     <EventsCardFront key={props.id} {...props} />
                  ))}
               </div>
            ) : (
               <CoursesEmpty />
            )}
            <Button className='events__all' outline>
               Показать больше
            </Button>
         </div>
      </section>
   )
}

export default Events
