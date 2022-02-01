import React from 'react'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import CabinetTitle from './CabinetTitle'
import { useSelector } from 'react-redux'
import CabinetNav from './CabinetNav'

const CabinetTrainer = ({ isLoading }) => {
    const { data: courses = [] } = useSelector(({ courses }) => courses.courses)
    const typeShow = useSelector(({ settings }) => settings.typeShow)

    return (
        <div className='lkt-courses'>
            <CabinetTitle title={'Мои курсы'} />
            <CabinetNav />
            <CoursesItemWrapper items={courses} isLoading={isLoading} className={`cabinet-page__items--${typeShow}`} />
        </div>
    )
}

export default CabinetTrainer
