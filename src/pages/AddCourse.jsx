import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { useDispatch, useNavigate, useSelector } from 'hooks/'
import { AddCourseTab1, AddCourseTab2, AddCourseTab3 } from 'components'
import { useParams } from 'react-router-dom'

const AddCourse = () => {
    const { id } = useParams()
    const { addCourse, getCourse, putCourse, addModulesMass, fetchModules, fetchLessons } = useDispatch()
    const { course } = useSelector()
    const [tasbActive, setTabsActive] = useState(0)
    const { toAddCourseById } = useNavigate()
    const tabsItem = ['Основная информация', 'Уроки', 'Страница курса']
    const forwardRefTab1 = useRef()
    const forwardRefTab2 = useRef()
    const forwardRefTab3 = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingModules, setIsLoadingModules] = useState(true)

    useEffect(() => {
        if (id) {
            getCourse({ id }, () => setIsLoading(false))
        } else setIsLoading(false)

        if (id) {
            fetchModules({ course: id }, () => setIsLoadingModules(false))
            // fetchLessons({ course: id })
        } else setIsLoadingModules(false)
    }, [])

    const checkFields = () => {
        const dataTab1 = forwardRefTab1.current()

        const error = []
        for (const [key, value] of dataTab1.entries()) if (value === '' || value === 'undefined' || value === '0') error.push(key)
        return error
    }

    const add = () => {
        if (!id) {
            const errors = checkFields()
            if (!errors.length) {
                addCourse(forwardRefTab1?.current(), (id) => {
                    toAddCourseById(id)
                })
            } else {
                alert('Обязательные поля - ' + errors.join(', '))
            }
        }
    }

    const onTabsChange = (index) => {
        //add course
        if (!id) add()
        //edit course
        else setTabsActive(index)
    }

    console.log(course)

    const onSave = (e) => {
        e.preventDefault()

        if (!id) return add()

        if (tasbActive === 0) {
            const body = forwardRefTab1.current()
            putCourse({ id, body })
        }
        if (tasbActive === 1) {
            const body = forwardRefTab2.current()
            // forwardRefTab2.current()
            // const body = {
            //     short_desc: 'Короткое описание111',
            //     moduls: [
            //         {
            //             name: 'Модуль с ИД2 111',
            //             lessons: [
            //                 {
            //                     name: 'Урок 111',
            //                 },
            //                 {
            //                     name: 'Урок 112',
            //                 },
            //                 {
            //                     name: 'Урок 113',
            //                 },
            //             ],
            //         },
            //         {
            //             name: 'Модуль с безйд11',
            //             lessons: [
            //                 {
            //                     name: 'Урок 4111',
            //                 },
            //                 {
            //                     name: 'Урок 511',
            //                 },
            //                 {
            //                     name: 'Урок 1111',
            //                 },
            //             ],
            //         },
            //         {
            //             name: 'Модуль с sdd11',
            //             lessons: [
            //                 {
            //                     name: 'Урок 114',
            //                 },
            //                 {
            //                     name: 'Урок 1115',
            //                 },
            //                 {
            //                     name: 'Урок 116',
            //                 },
            //             ],
            //         },
            //     ],
            // }

            addModulesMass({ course: id, body })
        }
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
                            {tabsItem.map((title, index) => (
                                <div key={index} className={`course-edit__tab${tasbActive === index ? ' course-edit__tab--active' : ''}`} onClick={() => onTabsChange(index)}>
                                    {title}
                                </div>
                            ))}
                        </div>
                        {isLoading ? (
                            'loading...'
                        ) : (
                            <>
                                <div className={`course-edit__content${tasbActive === 0 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab1 ref={forwardRefTab1} course={course} />
                                </div>
                                <div className={`course-edit__content${tasbActive === 1 ? ' course-edit__content--active' : ''}`}>
                                    {isLoadingModules ? 'loading...' : <AddCourseTab2 ref={forwardRefTab2} />}
                                </div>
                                <div className={`course-edit__content${tasbActive === 2 ? ' course-edit__content--active' : ''}`}>
                                    <AddCourseTab3 />
                                </div>
                            </>
                        )}
                    </div>
                    <div className='course-edit__right'>
                        <div className='course-edit__hint'>
                            <Button className='course-edit__hint-btn' onClick={onSave} color={'blue'}>
                                {id ? 'Сохранить' : 'Добавить'}
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
