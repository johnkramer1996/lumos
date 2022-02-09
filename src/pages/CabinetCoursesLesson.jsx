import { Button } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { coursesSelectors } from 'store/selectors'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { ReactComponent as DownloadSvg } from 'svg/download.svg'
import { ReactComponent as ArrowDownSvg } from 'svg/arrow-down.svg'
import { ReactComponent as DocumentSvg } from 'svg/document.svg'
import { RouteNames } from 'routes'
import { addZerro, formatBytes, getImgUrl } from 'utils'
import { Comments } from 'components'

const CabinetCoursesLesson = () => {
    const { courseId, lessonId } = useParams()
    const { fetchLesson, setLesson, setLessonQuestions, setLessonFiles, putLesson, fetchCourse } = useDispatch()
    const { id, course_id, number, name, description, can_comment } = useSelector(coursesSelectors.getLesson)
    const lesson = useSelector(coursesSelectors.getLesson)
    const questions = useSelector(coursesSelectors.getLessonQuestions)
    const course = useSelector(coursesSelectors.getCourse)
    const files = useSelector(coursesSelectors.getLessonFiles)

    const fetchCourseRequest = useRequest({
        request: fetchCourse,
    })
    const fetchLessonRequest = useRequest({
        request: fetchLesson,
        // error: ({ error }) => error.status === 404 && toError(),
    })

    console.log(course)

    useEffect(() => {
        fetchLessonRequest.call({ courseId, lessonId })
        fetchCourseRequest.call({ courseId, lessonId })
        return () => {
            setLesson({})
            setLessonFiles([])
            setLessonQuestions([])
        }
    }, [])

    console.log(lesson)

    return (
        <section className='lesson-page'>
            <div className='container'>
                <div className='breadcrumbs'>
                    <Link to={`${RouteNames.CABINET_COURSES}`} className='breadcrumbs__item'>
                        Мои курсы
                    </Link>
                    <Link to={`${RouteNames.CABINET_COURSES}/${courseId}`} className='breadcrumbs__item'>
                        {course_id}
                    </Link>
                </div>
                <div className='lesson-page__top'>
                    <div className='lesson-page__top-left'>
                        <Link to='/' className='lesson-page__top-link'>
                            Предыдущий урок
                        </Link>
                        <div className='lesson-page__top-subtitle'>
                            <span>{addZerro(number)}</span>
                            <strong>{name} 0</strong>
                        </div>
                    </div>
                    <div className='lesson-page__top-center'>
                        <div className='lesson-page__top-title'>Название урока</div>
                        <div className='lesson-page__top-num'>{addZerro(number + 1)} из 24</div>
                    </div>
                    <div className='lesson-page__top-right'>
                        <Link to={'/'} className='lesson-page__top-link'>
                            Следующий урок
                        </Link>
                        <div className='lesson-page__top-subtitle'>
                            <span>{addZerro(number + 2)}</span>
                            <strong>{name} 2</strong>
                        </div>
                    </div>
                </div>
                <div className='lesson-page__wrap'>
                    <div className='lesson-page__left'>
                        <div className='blog-page__text'>
                            <p className='blog-page__text-desc'>{description}</p>
                        </div>
                    </div>
                    <div className='lesson-page__right'>
                        <div className='lesson-page__nav card-bg'>
                            <Button to={`${RouteNames.CABINET_COURSES}/${courseId}/edit/lessons/${id}`} className='lesson-page__edit' outline link>
                                <EditSvg />
                                <span>Редактировать урок</span>
                            </Button>
                            <Button to={`${RouteNames.CABINET_COURSES}/${courseId}/lessons/${id}/test`} className='lesson-page__test' link>
                                Страница теста
                            </Button>
                        </div>
                        <div className='lesson-page__files card-bg'>
                            <div className='lesson-page__files-title display-4'>Файлы</div>
                            <div className='lesson-page__files-items'>
                                {files.map(({ id, name, file, file_size }, index) => (
                                    <div key={id || index} className='lesson-page__files-item'>
                                        <i className='lesson-page__files-item-icon'>
                                            <DocumentSvg />
                                        </i>
                                        <div className='lesson-page__files-item-info'>
                                            <div className='lesson-page__files-item-name'>{name}</div>
                                            <div className='lesson-page__files-item-weight'>{formatBytes(file_size)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {console.log(files)}
                            <Button className='lesson-page__files-btn' outline>
                                <DownloadSvg />
                                <span>Скачать все ({formatBytes(files.reduce((pr, v) => pr + +v.file_size, 0))})</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {can_comment && <Comments />}
            </div>
        </section>
    )
}

export default CabinetCoursesLesson
