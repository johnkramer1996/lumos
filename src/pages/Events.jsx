import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest } from 'hooks'
import EventsItem from 'components/Events/EventsItem'
import { ReactComponent as CalendarSvg } from 'svg/calendar.svg'
import CoursesItemLoader from 'components/Courses/CoursesItemLoader'
import { CoursesEmpty } from 'components'

const Events = () => {
    const { fetchFrontEvents } = useDispatch()
    const events = useSelector(({ frontEvents }) => frontEvents.events)

    const fetchFrontEventsRequest = useRequest({
        request: fetchFrontEvents,
    })
    useEffect(() => fetchFrontEventsRequest.call(), [])

    return (
        <section className='events'>
            <div className='container'>
                <div className='events__top'>
                    <h1 className='events__title display-3'>Мероприятия</h1>
                    <button className='events__cal btn btn-outline'>
                        <CalendarSvg />
                        <span>Календарь мероприятий</span>
                    </button>
                </div>
                {/* <CoursesItemWrapper items={allFrontEvents} isLoading={fetchFrontEventsRequest.isLoading} numberComponent={1} className={'events__items'} /> */}
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
                            <EventsItem key={props.id} {...props} />
                        ))}
                    </div>
                ) : (
                    <CoursesEmpty />
                )}
                <div className='events__items'></div>
                <button className='events__all btn btn-outline'>Показать больше</button>
            </div>
        </section>
    )
}

export default Events
