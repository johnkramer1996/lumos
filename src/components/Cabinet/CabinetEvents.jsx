import React from 'react'
import { EventsItem2 } from 'components'
import { useSelector } from 'react-redux'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'

const CabinetEvents = ({ isLoading }) => {
    const { data: courses = [] } = useSelector(({ courses }) => courses.courses)
    const typeShow = useSelector(({ settings }) => settings.typeShow)

    return (
        <div className='cabinet-page__group'>
            <CabinetTitle title={'Мои мероприятия'} type={'events'} visibleBtn={false} />
            <CabinetNav type={'events'} />
            <CoursesItemWrapper items={courses} isLoading={isLoading} className={`cabinet-page__items--${typeShow}`} />
            <div className='cabinet-page__items'>
                {courses.map((props) => (
                    <EventsItem2 key={props.id} {...props} />
                ))}
            </div>
        </div>
    )
}

export default CabinetEvents
