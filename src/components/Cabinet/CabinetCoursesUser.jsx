import React from 'react'
import { CabinetGreet } from 'components'
import { useNavigate } from 'hooks'
import { useSelector } from 'react-redux'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'

const CabinetUser = ({ isLoading }) => {
    const { toCabinetItemsAdd } = useNavigate()
    const { data: courses = [] } = useSelector(({ courses }) => courses.courses)
    const typeShow = useSelector(({ settings }) => settings.typeShow)

    return (
        <>
            <CabinetGreet />
            <CoursesItemWrapper items={courses} isLoading={isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} />
        </>
    )
}

export default CabinetUser
