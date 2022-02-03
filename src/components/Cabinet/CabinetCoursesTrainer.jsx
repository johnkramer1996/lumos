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
            <CabinetTitle title={'Мои курсы'} isBtnAll={false} />
            <CabinetNav />
            <CoursesItemWrapper items={courses} isLoading={isLoading} numberComponent={2} className={`cabinet-page__items cabinet-page__items--${typeShow}`} />
        </div>
    )
}

export default CabinetTrainer
