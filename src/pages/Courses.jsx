import React, { useEffect } from 'react'
import { Courses as CoursesComponent, Filter } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import CabinetTitle from 'components/Cabinet/CabinetTitle'

const Courses = () => {
    const { fetchCourses } = useDispatch()
    const { data: allCourses = [] } = useSelector(({ frontCourses }) => frontCourses.courses)
    const fetchCoursesRequest = useRequest({
        request: fetchCourses,
    })
    useEffect(() => fetchCoursesRequest.call(), [])

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

                                <CoursesItemWrapper items={allCourses} isLoading={fetchCoursesRequest.isLoading} numberComponent={1} className={'courses__items'} />
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses
