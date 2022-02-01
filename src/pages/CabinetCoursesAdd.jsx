import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button, Loader } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks/'
import { AddCourseTabMain, AddCourseTabLesson, AddCourseTabDescription, Tabs } from 'components'
import { useParams } from 'react-router-dom'

const CabinetAddCourse = () => {
    const { courseId } = useParams()
    const isEditPage = !!courseId
    const { toCabinetItemsItem, toCabinetItemsEdit, toCabinetItems, toError } = useNavigate()
    const { setCourse, setInfo, setModules, fetchCourse, addCourse, putCourse, fetchInfo, editInfo, fetchModules, addModulesMass } = useDispatch()

    const fetchCourseRequest = useRequest({
        request: fetchCourse,
        error: ({ error }) => error.status === 404 && toError(),
    })
    const addCourseRequest = useRequest({
        request: addCourse,
        success: ({ dispatch, response, data }) => (refTabs.current.nextTabItems(), toCabinetItemsEdit({ courseId: data.course.id })),
    })
    const putCourseRequest = useRequest({
        request: putCourse,
    })
    const fetchInfoRequest = useRequest({
        request: fetchInfo,
    })
    const editInfoRequest = useRequest({
        request: editInfo,
        success: ({ dispatch, response, data }) => toCabinetItems(),
        error: (data) => console.log(data),
    })
    const fetchModulesRequest = useRequest({
        request: fetchModules,
    })
    const addModulesMassRequest = useRequest({
        request: addModulesMass,
        success: ({ dispatch, response, data }) => {
            fetchModulesRequest.call({ courseId })
            refTabs.current.nextTabItems()
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

    const refTabs = useRef()
    const refTabMain = useRef()
    const refTabLesson = useRef()
    const refTabDescription = useRef()

    const tabItems = useMemo(
        () => ({
            items: [
                { title: 'Основная информация', isAvaible: isEditPage, component: <AddCourseTabMain ref={refTabMain} /> },
                { title: 'Уроки', isAvaible: isEditPage, component: <AddCourseTabLesson ref={refTabLesson} /> },
                { title: 'Страница курса', isAvaible: isEditPage, component: <AddCourseTabDescription ref={refTabDescription} /> },
            ],
            indexActive: 0,
        }),
        [],
    )

    const onSave = useCallback(
        (e) => {
            e.preventDefault()

            const tabItems = refTabs.current.getItems()
            if (!tabItems) return

            const tabHandlers = [
                {
                    ref: refTabMain,
                    call: (body) => (courseId ? putCourseRequest.call({ courseId, body }) : addCourseRequest.call({ body })),
                },
                {
                    ref: refTabLesson,
                    call: (body) => addModulesMassRequest.call({ courseId, body }),
                },
                {
                    ref: refTabDescription,
                    call: (body) => editInfoRequest.call({ courseId, body }),
                },
            ]

            const { body = {}, isError } = tabHandlers[tabItems.indexActive]?.ref?.current.getData() || {}
            if (isError) return
            tabHandlers[tabItems.indexActive]?.call(body)
        },
        [courseId, addCourseRequest, addModulesMassRequest, editInfoRequest, putCourseRequest],
    )
    const onCancel = useCallback(() => toCabinetItemsItem({ courseId }), [courseId, toCabinetItemsItem])

    return (
        <section className='course-edit'>
            <div className='container'>
                <div className='course-edit__inner'>
                    <div className='course-edit__left'>
                        <h1 className='course-edit__title display-3'>
                            <span>{isEditPage ? 'Редактирование' : 'Добавление'} курса</span>
                        </h1>
                        <Tabs ref={refTabs} items={tabItems} classPrefix={'course-edit'} isLoading={fetchCourseRequest.isLoading} />

                        {/* <div className='course-edit__tabs'>
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
                                    <AddCourseTab1 ref={refTabMain} />
                                </div>
                                <div className={`course-edit__content${tabItems.indexActive === 1 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab2 ref={refTabLesson} />
                                </div>
                                <div className={`course-edit__content${tabItems.indexActive === 2 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab3 ref={refTabDescription} />
                                </div>
                            </>
                        )} */}
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

export default CabinetAddCourse