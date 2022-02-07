import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest } from 'hooks'
import EventsItem from 'components/Events/EventsItem'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import { ReactComponent as CalendarSvg } from 'svg/calendar.svg'
import CoursesItemLoader from 'components/Courses/CoursesItemLoader'
import { CoursesEmpty } from 'components'

const Events = () => {
    const { fetchFrontEvents } = useDispatch()
    const { data: allFrontEvents = [] } = useSelector(({ frontEvents }) => frontEvents.events)

    const fetchFrontEventsRequest = useRequest({
        request: fetchFrontEvents,
        isLoadingDefault: true,
    })
    useEffect(() => fetchFrontEventsRequest.call(), [])

    const items = [
        {
            id: 1,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: '/assets/img/event1.jpg',
            name: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
        {
            id: 2,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: '/assets/img/event1.jpg',
            name: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
        {
            id: 3,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: '/assets/img/event1.jpg',
            name: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
        {
            id: 4,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: '/assets/img/event1.jpg',
            name: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
    ]

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
                ) : allFrontEvents.length ? (
                    <div className='events__items'>
                        {allFrontEvents.map((props) => (
                            <EventsItem key={props.id} {...props} />
                        ))}
                    </div>
                ) : (
                    <div className='events__items'>
                        {items.map((props) => (
                            <EventsItem key={props.id} {...props} />
                        ))}
                    </div>
                )}
                <div className='events__items'></div>
                <button className='events__all btn btn-outline'>Показать больше</button>
            </div>
        </section>
    )
}

export default Events
