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

const CabinetCoursesLesson = () => {
    const { courseId, lessonId } = useParams()
    const { fetchLesson, setLesson, setLessonQuestions, setLessonFiles, putLesson, fetchCourse } = useDispatch()
    const { description } = useSelector(coursesSelectors.getLesson)
    const { id } = useSelector(coursesSelectors.getLesson)
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
                    <a href='' className='breadcrumbs__item'>
                        Мои курсы
                    </a>
                    <a href='' className='breadcrumbs__item'>
                        Название курса
                    </a>
                </div>
                <div className='lesson-page__top'>
                    <div className='lesson-page__top-left'>
                        <a href='' className='lesson-page__top-link'>
                            Предыдущий урок
                        </a>
                        <div className='lesson-page__top-subtitle'>
                            <span>05</span>
                            <strong>Название урока</strong>
                        </div>
                    </div>
                    <div className='lesson-page__top-center'>
                        <div className='lesson-page__top-title'>Название урока</div>
                        <div className='lesson-page__top-num'>6 из 24</div>
                    </div>
                    <div className='lesson-page__top-right'>
                        <a href='' className='lesson-page__top-link'>
                            Следующий урок
                        </a>
                        <div className='lesson-page__top-subtitle'>
                            <span>07</span>
                            <strong>Название урока</strong>
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
                                            <div className='lesson-page__files-item-weight'>{file_size}</div>
                                        </div>
                                    </div>
                                ))}

                                <div className='lesson-page__files-item'>
                                    <i className='lesson-page__files-item-icon'>
                                        <img src='/assets/img/document.svg' alt='' />
                                    </i>
                                    <div className='lesson-page__files-item-info'>
                                        <div className='lesson-page__files-item-name'>file_name.pdf</div>
                                        <div className='lesson-page__files-item-weight'>1.2 Мб</div>
                                    </div>
                                </div>
                                <div className='lesson-page__files-item'>
                                    <i className='lesson-page__files-item-icon'>
                                        <img src='/assets/img/document.svg' alt='' />
                                    </i>
                                    <div className='lesson-page__files-item-info'>
                                        <div className='lesson-page__files-item-name'>file_name.pdf</div>
                                        <div className='lesson-page__files-item-weight'>1.2 Мб</div>
                                    </div>
                                </div>
                            </div>
                            <Button className='lesson-page__files-btn' outline>
                                <DownloadSvg />
                                <span>Скачать все (3.6 Мб)</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='blog-comments'>
                    <h2 className='blog-comments__title'>10 комментариев</h2>
                    <div className='blog-comments__inner'>
                        <div className='blog-comments__top'>
                            <div className='blog-comments__avatar'>
                                <img src='/assets/img/avatar2.jpg' alt='' />
                            </div>
                            <textarea placeholder='Написать комментарий или задать вопрос...'></textarea>
                        </div>
                        <div className='blog-comments__group'>
                            <div className='blog-comments__main'>
                                <div className='blog-comments__item'>
                                    <div className='blog-comments__avatar'>
                                        <img src='/assets/img/avatar3.jpg' alt='' />
                                    </div>
                                    <div className='blog-comments__item-content'>
                                        <div className='blog-comments__item-top'>
                                            <div className='blog-comments__item-name'>Мария Мариева</div>
                                        </div>
                                        <div className='blog-comments__item-text'>
                                            Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam
                                            lorem turpis?
                                        </div>
                                        <div className='blog-comments__item-bottom'>
                                            <div className='blog-comments__item-date'>10 сен 2020</div>
                                            <button className='blog-comments__item-btn'>Ответить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-comments__sub'>
                                <div className='blog-comments__item'>
                                    <div className='blog-comments__avatar'>
                                        <img src='/assets/img/avatar4.jpg' alt='' />
                                    </div>
                                    <div className='blog-comments__item-content'>
                                        <div className='blog-comments__item-top'>
                                            <div className='blog-comments__item-name'>Мария Мариева</div>
                                            <div className='blog-comments__item-badge'>Автор</div>
                                        </div>
                                        <div className='blog-comments__item-text'>
                                            Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam
                                            lorem turpis?
                                        </div>
                                        <div className='blog-comments__item-bottom'>
                                            <div className='blog-comments__item-date'>10 сен 2020</div>
                                            <button className='blog-comments__item-btn'>Ответить</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-comments__item'>
                                    <div className='blog-comments__avatar'>
                                        <img src='/assets/img/avatar5.jpg' alt='' />
                                    </div>
                                    <div className='blog-comments__item-content'>
                                        <div className='blog-comments__item-top'>
                                            <div className='blog-comments__item-name'>Мария Мариева</div>
                                        </div>
                                        <div className='blog-comments__item-text'>
                                            Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam
                                            lorem turpis?
                                        </div>
                                        <div className='blog-comments__item-bottom'>
                                            <div className='blog-comments__item-date'>10 сен 2020</div>
                                            <button className='blog-comments__item-btn'>Ответить</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-comments__item'>
                                    <div className='blog-comments__avatar'>
                                        <img src='/assets/img/avatar4.jpg' alt='' />
                                    </div>
                                    <div className='blog-comments__item-content'>
                                        <div className='blog-comments__item-top'>
                                            <div className='blog-comments__item-name'>Мария Мариева</div>
                                            <div className='blog-comments__item-badge'>Автор</div>
                                        </div>
                                        <div className='blog-comments__item-text'>
                                            Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam
                                            lorem turpis?
                                        </div>
                                        <div className='blog-comments__item-bottom'>
                                            <div className='blog-comments__item-date'>10 сен 2020</div>
                                            <button className='blog-comments__item-btn'>Ответить</button>
                                        </div>
                                    </div>
                                </div>
                                <button className='blog-comments__more'>
                                    <ArrowDownSvg />
                                    <span>Показать еще 4 комментария</span>
                                </button>
                            </div>
                        </div>
                        <div className='blog-comments__group'>
                            <div className='blog-comments__main'>
                                <div className='blog-comments__item'>
                                    <div className='blog-comments__avatar'>
                                        <img src='/assets/img/avatar3.jpg' alt='' />
                                    </div>
                                    <div className='blog-comments__item-content'>
                                        <div className='blog-comments__item-top'>
                                            <div className='blog-comments__item-name'>Мария Мариева</div>
                                        </div>
                                        <div className='blog-comments__item-text'>
                                            Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam
                                            lorem turpis?
                                        </div>
                                        <div className='blog-comments__item-bottom'>
                                            <div className='blog-comments__item-date'>10 сен 2020</div>
                                            <button className='blog-comments__item-btn'>Ответить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-comments__sub'>
                                <div className='blog-comments__item'>
                                    <div className='blog-comments__avatar'>
                                        <img src='/assets/img/avatar4.jpg' alt='' />
                                    </div>
                                    <div className='blog-comments__item-content'>
                                        <div className='blog-comments__item-top'>
                                            <div className='blog-comments__item-name'>Мария Мариева</div>
                                            <div className='blog-comments__item-badge'>Автор</div>
                                        </div>
                                        <div className='blog-comments__item-text'>
                                            Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam
                                            lorem turpis?
                                        </div>
                                        <div className='blog-comments__item-bottom'>
                                            <div className='blog-comments__item-date'>10 сен 2020</div>
                                            <button className='blog-comments__item-btn'>Ответить</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-comments__item'>
                                    <div className='blog-comments__avatar'>
                                        <img src='/assets/img/avatar5.jpg' alt='' />
                                    </div>
                                    <div className='blog-comments__item-content'>
                                        <div className='blog-comments__item-top'>
                                            <div className='blog-comments__item-name'>Мария Мариева</div>
                                        </div>
                                        <div className='blog-comments__item-text'>
                                            Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam
                                            lorem turpis?
                                        </div>
                                        <div className='blog-comments__item-bottom'>
                                            <div className='blog-comments__item-date'>10 сен 2020</div>
                                            <button className='blog-comments__item-btn'>Ответить</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CabinetCoursesLesson
