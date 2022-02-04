import React, { useEffect, useMemo, useState } from 'react'
import { Courses as CoursesComponent, Filter } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import CabinetTitle from 'components/Cabinet/CabinetTitle'

const Courses = () => {
    const { fetchFrontCourses, fetchCourses } = useDispatch()
    const { data: allFrontCourses = [] } = useSelector(({ frontCourses }) => frontCourses.courses)
    const { data: allCourses = [] } = useSelector(({ courses }) => courses.courses)
    const filter = useSelector(({ settings }) => settings.filter)

    const fetchFrontCoursesRequest = useRequest({
        request: fetchFrontCourses,
    })
    useEffect(() => fetchFrontCoursesRequest.call(), [])
    useEffect(() => fetchCourses.call(), [])

    const filteredCourses = useMemo(
        () =>
            allCourses.filter(({ category_id, type_study, format_study, difficulty_level }) => {
                const filter1 = filter.themes.length ? filter.themes.find((id) => +id === +category_id) : true
                const filter2 = filter.type_study.length ? filter.type_study.find((id) => +id === +type_study) : true
                const filter3 = filter.format_study.length ? filter.format_study.find((id) => +id === +format_study) : true
                const filter4 = filter.difficulty.length ? filter.difficulty.find((id) => +id === +difficulty_level) : true
                return filter1 && filter2 && filter3 && filter4
            }),
        [filter],
    )

    return (
        <>
            <section className='categories-page'>
                <div className='container'>
                    <div className='categories-page__inner'>
                        <aside className='categories-page__sidebar'>
                            <Filter />
                        </aside>
                        <main className='categories-page__main'>
                            <div className='courses'>
                                <CabinetTitle title={'Популярные курсы'} btnHref={'/'} />

                                <CoursesItemWrapper items={filteredCourses} isLoading={fetchCourses.isLoading} numberComponent={1} className={'courses__items'} />
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses
