import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button, Loader } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { RouteNames } from 'routes'
import { Tabs } from 'components'
import CoursesTabsLessons from 'components/CoursesTabs/CoursesTabsLessons'
import CoursesTabsStudents from 'components/CoursesTabs/CoursesTabsStudents'
import CoursesTabsReport from 'components/CoursesTabs/CoursesTabsReport'
import CoursesTabsNotifications from 'components/CoursesTabs/CoursesTabsNotifications'

const CoursesItem = () => {
    const { courseId } = useParams()
    const { toError } = useNavigate()
    const { setCourse, setInfo, setModules, fetchCourse, fetchInfo, fetchModules } = useDispatch()
    const course = useSelector(({ courses }) => courses.course)
    const modules = useSelector(({ courses }) => courses.modules)
    const info = useSelector(({ courses }) => courses.info)

    const fetchCourseRequest = useRequest({
        request: fetchCourse,
        error: ({ error }) => {
            console.log('2')
            return

            error.status === 404 && toError()
        },
    })
    const fetchInfoRequest = useRequest({
        request: fetchInfo,
    })
    const fetchModulesRequest = useRequest({
        request: fetchModules,
    })
    useEffect(() => {
        fetchCourseRequest.call({ courseId })
        fetchInfoRequest.call({ courseId })
        fetchModulesRequest.call({ courseId })
        return () => {
            setCourse({})
            setInfo({})
            setModules({})
        }
    }, [])

    const tabItems = {
        items: [
            { title: 'Уроки', notifications: 0, isAvaible: true, component: <CoursesTabsLessons /> },
            { title: 'Ученики', notifications: 0, isAvaible: true, component: <CoursesTabsStudents /> },
            { title: 'Статистика', notifications: 0, isAvaible: true, component: <CoursesTabsReport /> },
            { title: 'Уведомления', notifications: 1, isAvaible: true, component: <CoursesTabsNotifications /> },
        ],
        indexActive: 0,
    }

    return (
        <>
            {fetchCourseRequest.isLoading ? (
                <Loader />
            ) : (
                <section className='lkt-course'>
                    <div className='container'>
                        <div className='lkt-course__inner'>
                            <div className='breadcrumbs'>
                                <Link to={RouteNames.CABINET_COURSES} className='breadcrumbs__item'>
                                    Мои курсы
                                </Link>
                            </div>
                            <div className='lkt-course__top'>
                                <h1 className='lkt-course__title display-3'>{course.name}</h1>
                                <div className='lkt-course__nav'>
                                    <button className='lkt-course__history'>История редактирования</button>
                                    <Button to={`${RouteNames.CABINET_COURSES}/${courseId}/edit`} className='lkt-course__edit' outline link>
                                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M9.13281 13.2655H13.3841' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M8.57046 3.3039C9.06179 2.6779 9.85579 2.71057 10.4825 3.2019L11.4091 3.92857C12.0358 4.4199 12.2578 5.1819 11.7665 5.80923L6.24046 12.8592C6.05579 13.0952 5.77379 13.2346 5.47379 13.2379L3.34246 13.2652L2.85979 11.1886C2.79179 10.8972 2.85979 10.5906 3.04446 10.3539L8.57046 3.3039Z'
                                                stroke='#1B2C3E'
                                                strokeWidth='1.5'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            />
                                            <path d='M7.53516 4.62427L10.7312 7.1296' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        </svg>
                                        <span>Редактировать курс</span>
                                    </Button>
                                </div>
                            </div>

                            <Tabs items={tabItems} classPrefix='lkt-course' />
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default CoursesItem
