import React, { useEffect } from 'react'
import { EventsItem2 } from 'components'
import { Button } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { declOfNum, getDeclOfArray } from 'utils'
import { useSelector } from 'react-redux'

const CabinetEvents = () => {
    const { toCabinetCoursesAdd } = useNavigate()
    const { fetchCourses } = useDispatch()
    const { data: courses = [] } = useSelector(({ courses }) => courses.courses)
    const fetchCoursesRequest = useRequest({
        request: fetchCourses,
    })
    useEffect(() => fetchCoursesRequest.call({ page: 1, limit: 3 }), [])

    return (
        <div className='cabinet-page__group'>
            <div className='cabinet-page__top'>
                <div>
                    <h1 className='lkt-courses__title display-3'>Мои мероприятия</h1>
                    <div className='cabinet-page__nav-title'>
                        {courses.length} {declOfNum(courses.length, getDeclOfArray['event'])}
                    </div>
                </div>
                <Button className='lkt-courses__add' onClick={toCabinetCoursesAdd} outline>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить</span>
                </Button>
            </div>
            <div className='cabinet-page__items'>
                {courses.map(({ id, ...props }) => (
                    <EventsItem2 key={id} {...props} />
                ))}
            </div>
        </div>
    )
}

export default CabinetEvents
