import { Button } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RouteNames } from 'routes'
import { coursesSelectors } from 'store/selectors'
import { ReactComponent as EditSvg } from 'svg/edit.svg'

const CabinetCoursesLessonTest = () => {
    const { courseId, lessonId } = useParams()
    const { fetchLesson, setLesson, setLessonQuestions, setLessonFiles, putLesson, fetchCourse } = useDispatch()
    const { id, files = [] } = useSelector(coursesSelectors.getLesson)
    const lesson = useSelector(coursesSelectors.getLesson)
    const questions = useSelector(coursesSelectors.getLessonQuestions)

    const fetchLessonRequest = useRequest({
        request: fetchLesson,
        // error: ({ error }) => error.status === 404 && toError(),
    })

    console.log(lesson)
    console.log(questions)

    useEffect(() => {
        fetchLessonRequest.call({ courseId, lessonId })
        return () => {
            setLesson({})
            setLessonFiles([])
            setLessonQuestions([])
        }
    }, [])

    return (
        <section className='test-page'>
            <div className='container'>
                <div className='breadcrumbs'>
                    <a href='' className='breadcrumbs__item'>
                        Мои курсы
                    </a>
                    <a href='' className='breadcrumbs__item'>
                        Название курса
                    </a>
                    <a href='' className='breadcrumbs__item'>
                        Название урока
                    </a>
                </div>
                <h1 className='test-page__title display-3'>Тест</h1>
                <div className='test-page__wrap'>
                    <div className='test-page__left'>
                        <div className='test-page__items'>
                            {questions.map(({ id, answers }, index) => (
                                <div key={id || index} className='test-page__item card-bg'>
                                    <div className='test-page__item-title'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nullam id tincidunt vestibulum quisque. Urna etiam nunc aliquam dolor, vitae faucibus ut?
                                    </div>
                                    <div className='test-page__item-variants'>
                                        {answers.map(({ id, ansver, is_true }, index) => (
                                            <div key={id || index} className='test-page__item-variant radio'>
                                                <input type='radio' className='radio' id={`checkbox-${id}`} defaultChecked={is_true} name={`checkbox-${id}`} />
                                                <label htmlFor={`checkbox-${id}`}>{ansver}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='test-page__right'>
                        <div className='lesson-page__nav card-bg'>
                            <Button className='lesson-page__edit' outline>
                                <EditSvg />
                                <span>Редактировать урок</span>
                            </Button>
                            <Link to={`${RouteNames.CABINET_COURSES}/${courseId}/lessons/${lessonId}`} className='lesson-page__test btn btn-light-blue'>
                                Вернуться к уроку
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CabinetCoursesLessonTest
