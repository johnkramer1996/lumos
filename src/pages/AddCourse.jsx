import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useFetching, useNavigate, useSelector } from 'hooks/'
import { AddCourseTab1, AddCourseTab2, AddCourseTab3 } from 'components'
import { useParams } from 'react-router-dom'
import { CoursesService } from 'api'

const AddCourse = () => {
    const { courseId: paramsCourseId } = useParams()
    const { toCourse, toAddCourse, toAddCourseById } = useNavigate()
    const { setCourse } = useDispatch()
    const [tabActive, setTabActive] = useState(0)
    const [tabAvailable, setTabAvailabel] = useState(0)
    const tabItems = ['Основная информация', 'Уроки', 'Страница курса']
    const forwardRefTab1 = useRef()
    const forwardRefTab2 = useRef()
    const [courseId, setCourseId] = useState(paramsCourseId)
    const forwardRefTab3 = useRef()
    const [modules, setModules] = useState([])
    const [info, setInfo] = useState([])
    // toAddCourseById(response.data?.data?.id)

    const [fetchCourse, isfetchCourseLoading, isfetchCourseError] = useFetching(
        async (data) => await CoursesService.fetchCourse(data),
        (response) => setCourse(response.data?.data),
        (error) => {
            error.status === 404 && toAddCourse()
            setCourseId(undefined)
        },
    )

    const [addCourse, isAddCourseLoading, isAddCourseError] = useFetching(
        async (data) => await CoursesService.addCourse(data),
        (response) => {
            alert('Курс добавлен')
            setTabActive(1)
            setTabAvailabel(1)
            toAddCourseById(response.data.course.id)
            setCourseId(response.data.course.id)
        },
        (error) => {},
    )

    const [putCourse, isPutCourseLoading, isPutCourseError] = useFetching(
        async (data) => await CoursesService.putCourse(data),
        (response) => {
            alert('Курс Обновлен')
            setTabActive(1)
        },
        (error) => {},
    )

    const [addModulesMass, isaddModulesMassLoading, isaddModulesMassError] = useFetching(
        async (data) => await CoursesService.addModulesMass(data),
        (response) => {
            fetchModules({ course: courseId })
            alert('Добавленно')
            setTabActive(2)
            setTabAvailabel(2)
        },
        (error) => {
            console.log(error)
        },
    )

    const [editInfo, iseditInfoLoading, iseditInfoError] = useFetching(
        async (data) => await CoursesService.editInfo(data),
        (response) => {
            getInfo({ course: courseId })
            alert('Добавленно')
            toCourse(0)
        },
        (error) => {
            getInfo({ course: courseId })
            alert('Добавленно')
        },
    )

    const [fetchModules, isfetchModulesLoading, isfetchModulesError] = useFetching(
        async (data) => await CoursesService.fetchModules(data),
        (response) => {
            setModules([...response.data?.data?.data.map((item) => ({ ...item, lessons: item.lessonsshort }))].reverse())
        },
        (error) => {},
    )

    const [getInfo, isgetInfoLoading, isgetInfoError] = useFetching(
        async (data) => await CoursesService.getInfo(data),
        (response) => {
            setInfo(response.data?.data?.course)
        },
        (error) => {},
    )

    useEffect(() => {
        paramsCourseId === courseId && courseId !== undefined ? fetchCourse({ course: courseId }) : setCourseId(undefined)
        if (courseId) {
            setTabAvailabel(tabItems.length)
            courseId && fetchModules({ course: courseId })
            courseId && getInfo({ course: courseId })
        }
        return () => {
            // setCourse({})
        }
    }, [])

    const onSave = (e) => {
        e.preventDefault()

        if (tabActive === 0) {
            const { body = {}, isError } = forwardRefTab1?.current() || {}
            if (isError) return
            courseId ? putCourse({ course: courseId, body }) : addCourse({ body })
        }
        if (tabActive === 1) {
            const { body = {}, isError } = forwardRefTab2?.current() || {}
            console.log(body)
            return !isError && addModulesMass({ course: courseId, body })
        }
        if (tabActive === 2) {
            const { body = {}, isError } = forwardRefTab3?.current() || {}
            if (isError) return
            editInfo({ course: courseId, body })
        }
    }

    const changeTab = (index) => {
        index <= tabAvailable && setTabActive(index)
    }

    return (
        <section className='course-edit'>
            <div className='container'>
                <div className='course-edit__inner'>
                    <div className='course-edit__left'>
                        <h1 className='course-edit__title display-3'>
                            <span>Добавление курса</span>
                        </h1>
                        <div className='course-edit__tabs'>
                            {tabItems.map((title, index) => (
                                <div
                                    key={index}
                                    className={`course-edit__tab${tabActive === index ? ' course-edit__tab--active' : ''}`}
                                    onClick={() => changeTab(index)}
                                    // style={{ pointerEvents: courseId === undefined ? 'none' : '' }}
                                >
                                    {title}
                                </div>
                            ))}
                        </div>
                        {isfetchCourseLoading ? (
                            'loading...'
                        ) : (
                            <>
                                <div className={`course-edit__content${tabActive === 0 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab1 ref={forwardRefTab1} />
                                </div>
                                <div className={`course-edit__content${tabActive === 1 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab2 ref={forwardRefTab2} modules={modules} setModules={setModules} />
                                </div>
                                <div className={`course-edit__content${tabActive === 2 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab3 ref={forwardRefTab3} modules={modules} setModules={setModules} info={info} />
                                </div>
                            </>
                        )}
                    </div>
                    <div className='course-edit__right'>
                        <div className='course-edit__hint'>
                            <Button className='course-edit__hint-btn' onClick={onSave} color={'blue'}>
                                Добавить
                            </Button>
                            {/* <Button className='course-edit__hint-cancel' onClick={() => {}} outline>
                                <span>Отменить</span>
                            </Button> */}
                            {/* <div className='course-edit__hint-desc'>Ваши изменения будут отправлены на модерацию.</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCourse
