import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Button } from 'components/ui'
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
        success: ({ dispatch, response, data }) => {
            refTabs.current.nextItems()
            toCabinetItemsEdit({ courseId: data.course.id })
        },
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
            refTabs.current.nextItems()
            fetchModulesRequest.call({ courseId })
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
