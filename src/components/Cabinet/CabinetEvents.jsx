import React, { useEffect } from 'react'
import { EventsItem2 } from 'components'
import { useSelector } from 'react-redux'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import { useDispatch, useRequest } from 'hooks'

const CabinetEvents = () => {
    const { fetchEvents } = useDispatch()
    const { data: events = [], total } = useSelector(({ events }) => events.events)
    const fetchEventsRequest = useRequest({
        request: fetchEvents,
        isLoadingDefault: true,
    })
    useEffect(() => fetchEventsRequest.call({ page: 1, limit: 1000 }), [])

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
