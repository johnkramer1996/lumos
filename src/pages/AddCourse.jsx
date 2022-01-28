import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useFetching, useSelector } from 'hooks/'
import { AddCourseTab1, AddCourseTab2, AddCourseTab3 } from 'components'
import { useParams } from 'react-router-dom'
import { CoursesService } from 'api'

const AddCourse = () => {
    const { courseId: paramsCourseId } = useParams()
    const { setCourse } = useDispatch()
    const { course } = useSelector()
    const [tabActive, setTabActive] = useState(1)
    const tabItems = ['Основная информация', 'Уроки', 'Страница курса']
    const forwardRefTab1 = useRef()
    const forwardRefTab2 = useRef()
    const [courseId, setCourseId] = useState(paramsCourseId)
    const forwardRefTab3 = useRef()
    // toAddCourseById(response.data?.data?.id)

    const [fetchCourse, isfetchCourseLoading, isfetchCourseError] = useFetching(
        async (data) => await CoursesService.fetchCourse(data),
        (response) => setCourse(response.data?.data),
        (error) => {},
        true,
    )

    const [addCourse, isAddCourseLoading, isAddCourseError] = useFetching(
        async (data) => await CoursesService.addCourse(data),
        (response) => {
            alert('Курс добавлен')
            setCourseId(response.data.course.id)
        },
        (error) => {},
    )

    const [putCourse, isPutCourseLoading, isPutCourseError] = useFetching(
        async (data) => await CoursesService.putCourse(data),
        (response) => {
            alert('Курс Обновлен')
        },
        (error) => {},
    )

    const [addModulesMass, isaddModulesMassLoading, isaddModulesMassError] = useFetching(
        async (data) => await CoursesService.addModulesMass(data),
        (response) => {
            alert('Добавленно')
        },
        (error) => {
            console.log(error)
        },
    )

    const [editInfo, iseditInfoLoading, iseditInfoError] = useFetching(
        async (data) => await CoursesService.editInfo(data),
        (response) => {
            alert('Добавленно')
        },
        (error) => {
            console.log(error)
        },
    )

    useEffect(() => {
        courseId && fetchCourse({ course: courseId })
    }, [])

    const onAdd = (e) => {
        e.preventDefault()

        const { body, isError } = forwardRefTab1?.current()
        if (isError) return
        addCourse({ body })
    }

    const onSave = (e) => {
        e.preventDefault()

        if (tabActive === 0) {
            const { body, isError } = forwardRefTab1?.current()
            if (isError) return
            putCourse({ course: courseId, body })
        }
        if (tabActive === 1) {
            const { body, isError } = forwardRefTab2?.current()
            if (isError) return
            addModulesMass({ course: courseId, body })
        }
        if (tabActive === 2) {
            const { body, isError } = forwardRefTab3?.current()
            if (isError) return
            console.log(body)
            editInfo({ course: courseId, body })
        }
    }

    const onTabsChange = (index) => setTabActive(index)

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
                                <div key={index} className={`course-edit__tab${tabActive === index ? ' course-edit__tab--active' : ''}`} onClick={() => onTabsChange(index)}>
                                    {title}
                                </div>
                            ))}
                        </div>
                        {isfetchCourseLoading ? (
                            'loading...'
                        ) : (
                            <>
                                <div className={`course-edit__content${tabActive === 0 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab1 ref={forwardRefTab1} course={course} />
                                </div>
                                <div className={`course-edit__content${tabActive === 1 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab2 ref={forwardRefTab2} />
                                </div>
                                <div className={`course-edit__content${tabActive === 2 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab3 ref={forwardRefTab3} />
                                </div>
                            </>
                        )}
                    </div>
                    <div className='course-edit__right'>
                        <div className='course-edit__hint'>
                            {courseId ? (
                                <Button className='course-edit__hint-btn' onClick={onSave} color={'blue'}>
                                    Сохранить
                                </Button>
                            ) : (
                                <Button className='course-edit__hint-btn' onClick={onAdd} color={'blue'}>
                                    Добавить
                                </Button>
                            )}

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
