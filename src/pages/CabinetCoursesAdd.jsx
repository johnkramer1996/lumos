import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks/'
import { AddCourseTabMain, AddCourseTabLesson, AddCourseTabDescription, Tabs } from 'components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isActiveClass } from 'utils'
import { coursesSelectors } from 'store/selectors'
import AddCourseLessonEdit from 'components/AddCourse/AddCourseLessonEdit'

const CabinetAddCourse = () => {
    const { courseId, lessonId } = useParams()
    const isEditPage = !!courseId
    const isLessonPage = !!lessonId
    const { toError } = useNavigate()
    const { setIsShow, setContent, setCourse, setInfo, setModules, fetchCourse, fetchInfo, fetchModules } = useDispatch()
    const course = useSelector(coursesSelectors.getCourse)
    const modules = useSelector(coursesSelectors.getModules)
    const info = useSelector(coursesSelectors.getInfo)
    const hasCourse = !(Object.keys(course).length === 0)
    const hasModules = modules && !(Object.keys(modules).length === 0)
    const hasInfo = info?.descriptions && info?.prices && !(Object.keys(info.descriptions).length === 0 && Object.keys(info.prices).length === 0)

    const [hasSave, setHasSave] = useState(false)

    const fetchCourseRequest = useRequest({
        request: fetchCourse,
        isLoadingDefault: isEditPage,
        error: ({ error }) => error.status === 404 && toError(),
    })
    const fetchModulesRequest = useRequest({
        request: fetchModules,
        isLoadingDefault: isEditPage,
    })
    const fetchInfoRequest = useRequest({
        request: fetchInfo,
        isLoadingDefault: isEditPage,
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

    const onSave = (e) => {
        e?.preventDefault()
        save()
    }

    const save = () => {
        const indexActive = refTabs.current.getIndex()
        if (!refsTab[indexActive]?.current.check()) {
            setIsShow(true)
            setContent({ title: 'Заполните все поля' })
            return
        }
        refsTab[indexActive]?.current.send()
        setHasSave(false)
    }

    const onCancel = () => {
        setCourse({ ...course })
        setInfo({ ...info })
        setModules([...modules])
        setHasSave(false)
        const indexActive = refTabs.current.getIndex()
        // TODO SETTIMEOUT
        refsTab[indexActive]?.current.update()
        onUpdateListener(-1)
    }

    const onUpdateListener = useCallback(
        (() => {
            let count = 0
            return (val = 1) => {
                count += val
                if (count > 0) {
                    setHasSave(true)
                    count = 0
                }
            }
        })(),
        [],
    )

    const tabItems = [
        {
            title: 'Основная информация',
            component: <AddCourseTabMain ref={refTabMain} onUpdateListener={onUpdateListener} refTabs={refTabs} />,
        },
        {
            title: 'Уроки',
            component: <AddCourseTabLesson ref={refTabLesson} onUpdateListener={onUpdateListener} refTabs={refTabs} />,
        },
        {
            title: 'Страница курса',
            component: <AddCourseTabDescription ref={refTabDescription} onUpdateListener={onUpdateListener} refTabs={refTabs} />,
        },
    ]

    const onChangeTabsListener = (activeIndex) => {
        setHasSave(false)
        // onUpdateListener(-1)
    }

    const isAvaibleTabIndex = (index) => {
        if (hasSave) {
            setIsShow(true)
            setContent({ title: 'Сохраните или Отмените' })
            return false
        }
        if (index === 0) return true
        if ((index === 1 || index === 2) && !hasCourse) {
            setIsShow(true)
            setContent({ title: 'Заполните курс' })
            return
        }
        if (index === 2 && !hasModules) {
            setIsShow(true)
            setContent({ title: 'Заполните уроки' })
            return
        }
        setHasSave(false)
        return true
    }

    return (
        <section className='course-edit'>
            <div className='container'>
                <div className='course-edit__inner'>
                    <div className='course-edit__left'>
                        {isLessonPage ? (
                            <AddCourseLessonEdit />
                        ) : (
                            <>
                                <h1 className='course-edit__title display-3'>
                                    <span>{isEditPage ? 'Редактирование' : 'Добавление'} курса</span>
                                </h1>
                                <Tabs
                                    ref={refTabs}
                                    items={tabItems}
                                    classPrefix={'course-edit'}
                                    isLoading={fetchCourseRequest.isLoading || fetchModulesRequest.isLoading || fetchInfoRequest.isLoading}
                                    onChangeListener={onChangeTabsListener}
                                    isAvaibleIndex={isAvaibleTabIndex}
                                />
                            </>
                        )}
                    </div>
                    <div className='course-edit__right'>
                        <div className='course-edit__hint'>
                            <Button className={`course-edit__hint-btn${isActiveClass(!hasSave, 'btn--disabled')}`} onClick={onSave}>
                                {isEditPage || hasCourse ? 'Сохранить' : 'Добавить'}
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
