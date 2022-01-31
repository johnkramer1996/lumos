import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Loader } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks/'
import { AddCourseTab1, AddCourseTab2, AddCourseTab3 } from 'components'
import { useParams } from 'react-router-dom'

const AddCourse = () => {
    const courseId = useParams().courseId
    const isEditPage = !!courseId
    const { toCabinetCoursesItem, toCabinetCoursesEdit, toCabinetCourses, toError } = useNavigate()
    const { setCourse, setInfo, setModules, fetchCourse, addCourse, putCourse, fetchInfo, editInfo, fetchModules, addModulesMass } = useDispatch()

    const [tabItems, setTabItems] = useState({
        items: [
            { title: 'Основная информация', isAvaible: isEditPage },
            { title: 'Уроки', isAvaible: isEditPage },
            { title: 'Страница курса', isAvaible: isEditPage },
        ],
        indexActive: 0,
    })

    const fetchCourseRequest = useRequest({
        request: fetchCourse,
        error: ({ error }) => error.status === 404 && toError(),
    })
    const addCourseRequest = useRequest({
        request: addCourse,
        success: ({ dispatch, response, data }) => (nextTabItems(), toCabinetCoursesEdit({ courseId: data.course.id })),
    })
    const putCourseRequest = useRequest({
        request: putCourse,
    })
    const fetchInfoRequest = useRequest({
        request: fetchInfo,
    })
    const editInfoRequest = useRequest({
        request: editInfo,
        success: ({ dispatch, response, data }) => {
            toCabinetCourses()
        },
        error: (data) => console.log(data),
    })
    const fetchModulesRequest = useRequest({
        request: fetchModules,
    })
    const addModulesMassRequest = useRequest({
        request: addModulesMass,
        success: ({ dispatch, response, data }) => {
            fetchModulesRequest.call({ courseId })
            nextTabItems()
        },
    })
    useEffect(() => {
        if (isEditPage) {
            fetchCourseRequest.call({ courseId })
            fetchInfoRequest.call({ courseId })
            fetchModulesRequest.call({ courseId })
        }
        return () => {
            setCourse({})
            setInfo({})
            setModules({})
        }
    }, [])

    const isAvaibleIndex = (index) => tabItems.items.find(({ isAvaible }, indexItems) => indexItems === index && isAvaible)
    const setTabItemsByIndex = (indexActive) => setTabItems({ ...tabItems, indexActive })
    const nextTabItems = () => setTabItemsByIndex(tabItems.indexActive + 1 >= tabItems.items.length ? 0 : tabItems.indexActive + 1)
    const changeTab = (index) => isAvaibleIndex(index) && setTabItemsByIndex(index)
    const forwardRefTab1 = useRef()
    const forwardRefTab2 = useRef()
    const forwardRefTab3 = useRef()

    const onSave = useCallback(
        (e) => {
            e.preventDefault()

            if (tabItems.indexActive === 0) {
                const { body = {}, isError } = forwardRefTab1?.current() || {}
                if (isError) return
                courseId ? putCourseRequest.call({ courseId, body }) : addCourseRequest.call({ body })

                if (courseId) {
                }
            }
            if (tabItems.indexActive === 1) {
                const { body = {}, isError } = forwardRefTab2?.current() || {}
                if (isError) return
                console.log(body)
                return addModulesMassRequest.call({ courseId, body })
            }
            if (tabItems.indexActive === 2) {
                const { body = {}, isError } = forwardRefTab3?.current() || {}
                if (isError) return
                editInfoRequest.call({ courseId, body })
            }
        },
        [tabItems, courseId],
    )

    const onCancel = useCallback(() => toCabinetCoursesItem({ courseId }), [])

    return (
        <section className='course-edit'>
            <div className='container'>
                <div className='course-edit__inner'>
                    <div className='course-edit__left'>
                        <h1 className='course-edit__title display-3'>
                            <span>{isEditPage ? 'Редактирование' : 'Добавление'} курса</span>
                        </h1>
                        <div className='course-edit__tabs'>
                            {tabItems.items.map(({ title }, index) => (
                                <div key={index} className={`course-edit__tab${tabItems.indexActive === index ? ' course-edit__tab--active' : ''}`} onClick={() => changeTab(index)}>
                                    {title}
                                </div>
                            ))}
                        </div>
                        {fetchCourseRequest.isLoading ? (
                            <Loader />
                        ) : (
                            <>
                                <div className={`course-edit__content${tabItems.indexActive === 0 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab1 ref={forwardRefTab1} />
                                </div>
                                <div className={`course-edit__content${tabItems.indexActive === 1 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab2 ref={forwardRefTab2} />
                                </div>
                                <div className={`course-edit__content${tabItems.indexActive === 2 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab3 ref={forwardRefTab3} />
                                </div>
                            </>
                        )}
                    </div>
                    <div className='course-edit__right'>
                        <div className='course-edit__hint'>
                            <Button className='course-edit__hint-btn' onClick={onSave} color={'blue'}>
                                {isEditPage ? 'Сохранить' : 'Добавить'}
                            </Button>
                            {isEditPage && (
                                <>
                                    <Button className='course-edit__hint-cancel' onClick={onCancel} outline>
                                        Отменить
                                    </Button>
                                    <div className='course-edit__hint-desc'>Ваши изменения будут отправлены на модерацию.</div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCourse
