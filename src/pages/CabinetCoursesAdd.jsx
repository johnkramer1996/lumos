import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks/'
import { AddCourseTabMain, AddCourseTabLesson, AddCourseTabDescription, Tabs } from 'components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isActiveClass } from 'utils'

const CabinetAddCourse = () => {
    const { courseId } = useParams()
    const isEditPage = !!courseId
    const { toCabinetItemsItem, toError } = useNavigate()
    const { setIsShow, setContent, setCourse, setInfo, setModules, fetchCourse, fetchInfo, fetchModules } = useDispatch()
    const course = useSelector(({ courses }) => courses.course)
    const modules = useSelector(({ courses }) => courses.modules)
    const info = useSelector(({ courses }) => courses.info)
    const hasCourse = !(Object.keys(course).length === 0)
    const hasModuls = !(Object.keys(modules).length === 0)
    const hasInfo = !(Object.keys(info).length === 0)
    const [hasSave, setHasSave] = useState(false)

    const fetchCourseRequest = useRequest({
        request: fetchCourse,
        error: ({ error }) => error.status === 404 && toError(),
    })
    const fetchModulesRequest = useRequest({
        request: fetchModules,
    })
    const fetchInfoRequest = useRequest({
        request: fetchInfo,
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
    const refsTab = useMemo(() => [refTabMain, refTabLesson, refTabDescription], [])

    const onSave = useCallback(
        (e) => {
            e.preventDefault()
            const tabItems = refTabs.current.getItems()
            if (!tabItems) return
            if (!refsTab[tabItems.indexActive]?.current.check()) {
                setIsShow(true)
                setContent({ title: 'Заполните все поля' })
                return
            }
            refsTab[tabItems.indexActive]?.current.send()
            setHasSave(false)
        },
        [courseId],
    )

    const onCancel = () => {
        setCourse({ ...course })
        setInfo({ ...info })
        setModules({ ...modules })
        setHasSave(false)
        setTimeout(() => refsTab[tabItems.indexActive]?.current.check(), 0)

        // toCabinetItemsItem({ courseId })
    }

    const inputCallbackHandler = (event, payload) => {
        if (event === 'change') setHasSave(true)
        if (event === 'delete') setHasSave(true)
    }

    const tabsCallbackHandler = (event, payload) => {
        if (event === 'changeTab') setHasSave(false)
    }

    const tabItems = useMemo(
        () => ({
            items: [
                {
                    title: 'Основная информация',
                    isAvaible: !hasSave && true,
                    component: <AddCourseTabMain ref={refTabMain} callbackHandler={{ inputCallbackHandler }} refTabs={refTabs} />,
                },
                {
                    title: 'Уроки',
                    isAvaible: !hasSave && hasCourse,
                    component: <AddCourseTabLesson ref={refTabLesson} callbackHandler={{ inputCallbackHandler }} refTabs={refTabs} />,
                },
                {
                    title: 'Страница курса',
                    isAvaible: !hasSave && hasModuls,
                    component: <AddCourseTabDescription ref={refTabDescription} callbackHandler={{ inputCallbackHandler }} refTabs={refTabs} />,
                },
            ],
            indexActive: 0,
        }),
        [],
    )
    useEffect(() => {
        tabItems.items.forEach((item, index) => {
            if (index === 0) item.isAvaible = !hasSave && true
            if (index === 1) item.isAvaible = !hasSave && hasCourse
            if (index === 2) item.isAvaible = !hasSave && hasModuls
        })
    }, [hasCourse, hasModuls, hasSave, tabItems])

    // useEffect(() => refTabs.current.nextItems(), [])

    return (
        <section className='course-edit'>
            <div className='container'>
                <div className='course-edit__inner'>
                    <div className='course-edit__left'>
                        <h1 className='course-edit__title display-3'>
                            <span>{isEditPage ? 'Редактирование' : 'Добавление'} курса</span>
                        </h1>
                        <Tabs ref={refTabs} items={tabItems} classPrefix={'course-edit'} isLoading={fetchCourseRequest.isLoading} callbackHandler={tabsCallbackHandler} />
                    </div>
                    <div className='course-edit__right'>
                        <div className='course-edit__hint'>
                            <Button className={`course-edit__hint-btn${isActiveClass(!hasSave, 'btn--disabled')}`} onClick={onSave}>
                                {hasCourse ? 'Сохранить' : 'Добавить'}
                            </Button>
                            {isEditPage && hasSave && (
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
