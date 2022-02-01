import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button, Loader } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { RouteNames } from 'routes'
import { declOfNum, getDeclOfArray } from 'utils'

const CoursesItem = () => {
    const { courseId } = useParams()
    const { toError } = useNavigate()
    const { setCourse, setInfo, setModules, fetchCourse, fetchInfo, fetchModules } = useDispatch()
    const course = useSelector(({ courses }) => courses.course)
    const modules = useSelector(({ courses }) => courses.modules)
    const info = useSelector(({ courses }) => courses.info)

    const fetchCourseRequest = useRequest({
        request: fetchCourse,
        error: ({ error }) => error.status === 404 && toError(),
    })
    const fetchInfoRequest = useRequest({
        request: fetchInfo,
    })
    const fetchModulesRequest = useRequest({
        request: fetchModules,
    })
    useEffect(() => {
        fetchCourseRequest.call({ courseId })
        fetchInfoRequest.call({ courseId })
        fetchModulesRequest.call({ courseId })
        return () => {
            setCourse({})
            setInfo({})
            setModules({})
        }
    }, [])

    return (
        <>
            {fetchCourseRequest.isLoading ? (
                <Loader />
            ) : (
                <section className='lkt-course'>
                    <div className='container'>
                        <div className='lkt-course__inner'>
                            <div className='breadcrumbs'>
                                <Link to={RouteNames.CABINET_COURSES} className='breadcrumbs__item'>
                                    Мои курсы
                                </Link>
                            </div>
                            <div className='lkt-course__top'>
                                <h1 className='lkt-course__title display-3'>{course.name}</h1>
                                <div className='lkt-course__nav'>
                                    <button className='lkt-course__history'>История редактирования</button>
                                    <Button to={`${RouteNames.CABINET_COURSES}/${courseId}/edit`} className='lkt-course__edit' outline link>
                                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                            <path d='M9.13281 13.2655H13.3841' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path
                                                fillRule='evenodd'
                                                clipRule='evenodd'
                                                d='M8.57046 3.3039C9.06179 2.6779 9.85579 2.71057 10.4825 3.2019L11.4091 3.92857C12.0358 4.4199 12.2578 5.1819 11.7665 5.80923L6.24046 12.8592C6.05579 13.0952 5.77379 13.2346 5.47379 13.2379L3.34246 13.2652L2.85979 11.1886C2.79179 10.8972 2.85979 10.5906 3.04446 10.3539L8.57046 3.3039Z'
                                                stroke='#1B2C3E'
                                                strokeWidth='1.5'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            />
                                            <path d='M7.53516 4.62427L10.7312 7.1296' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        </svg>
                                        <span>Редактировать курс</span>
                                    </Button>
                                </div>
                            </div>
                            <div className='lkt-course__tabs'>
                                <div className='lkt-course__tab lkt-course__tab--active'>
                                    <span>Уроки</span>
                                    <i></i>
                                </div>
                                <div className='lkt-course__tab'>
                                    <span>Ученики</span>
                                    <i></i>
                                </div>
                                <div className='lkt-course__tab'>
                                    <span>Статистика</span>
                                    <i></i>
                                </div>
                                <div className='lkt-course__tab lkt-course__tab--notification'>
                                    <span>Уведомления</span>
                                    <i>1</i>
                                </div>
                            </div>
                            <div data-tab-path='1' className='lkt-course__content lkt-course__content--active'>
                                <div className='lessons-tab'>
                                    <div className='lessons-tab__left'>
                                        {modules.data?.map(({ name, lessonsshort }, index) => (
                                            <div key={index} className='lessons-tab__module'>
                                                <div className='lessons-tab__module-top'>
                                                    <div className='lessons-tab__module-title'>{name}</div>
                                                    <div className='lessons-tab__module-num'>
                                                        {' '}
                                                        {lessonsshort?.length} {declOfNum(lessonsshort?.length, getDeclOfArray['lessons'])}
                                                    </div>
                                                </div>
                                                <div className='lessons-tab__module-items'>
                                                    {lessonsshort?.map(({ id, name }) => (
                                                        <div key={id} className='lessons-tab__module-item'>
                                                            <span className='lessons-tab__module-item-num'>01</span>
                                                            <span className='lessons-tab__module-item-title'>{name}</span>
                                                            {/* <span className='lessons-tab__module-item-notification'>1</span> */}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='lessons-tab__right'>
                                        <div className='lessons-tab__comments'>
                                            <div className='lessons-tab__comments-top'>
                                                <div className='lessons-tab__comments-title'>Комментарии</div>
                                                <div className='lessons-tab__comments-new'>2 новых</div>
                                            </div>
                                            <div className='lessons-tab__comments-items'>
                                                <div className='lessons-tab__comments-item lessons-tab__comments-item--new'>
                                                    <div className='lessons-tab__comments-item-top'>
                                                        <div className='lessons-tab__comments-item-user'>
                                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                                            <span>Мария Мариева</span>
                                                        </div>
                                                        <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                                                    </div>
                                                    <div className='lessons-tab__comments-item-text'>
                                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis
                                                        volutpat etiam lorem turpis?
                                                    </div>
                                                    <div className='lessons-tab__comments-item-title'>
                                                        <span>01</span>
                                                        <span>Название урока</span>
                                                    </div>
                                                </div>
                                                <div className='lessons-tab__comments-item lessons-tab__comments-item--new'>
                                                    <div className='lessons-tab__comments-item-top'>
                                                        <div className='lessons-tab__comments-item-user'>
                                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                                            <span>Мария Мариева</span>
                                                        </div>
                                                        <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                                                    </div>
                                                    <div className='lessons-tab__comments-item-text'>
                                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis
                                                        volutpat etiam lorem turpis?
                                                    </div>
                                                    <div className='lessons-tab__comments-item-title'>
                                                        <span>01</span>
                                                        <span>Название урока</span>
                                                    </div>
                                                </div>
                                                <div className='lessons-tab__comments-item'>
                                                    <div className='lessons-tab__comments-item-top'>
                                                        <div className='lessons-tab__comments-item-user'>
                                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                                            <span>Мария Мариева</span>
                                                        </div>
                                                        <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                                                    </div>
                                                    <div className='lessons-tab__comments-item-text'>
                                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis
                                                        volutpat etiam lorem turpis?
                                                    </div>
                                                    <div className='lessons-tab__comments-item-title'>
                                                        <span>01</span>
                                                        <span>Название урока</span>
                                                    </div>
                                                </div>
                                                <div className='lessons-tab__comments-item'>
                                                    <div className='lessons-tab__comments-item-top'>
                                                        <div className='lessons-tab__comments-item-user'>
                                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                                            <span>Мария Мариева</span>
                                                        </div>
                                                        <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                                                    </div>
                                                    <div className='lessons-tab__comments-item-text'>
                                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis
                                                        volutpat etiam lorem turpis?
                                                    </div>
                                                    <div className='lessons-tab__comments-item-title'>
                                                        <span>01</span>
                                                        <span>Название урока</span>
                                                    </div>
                                                </div>
                                                <div className='lessons-tab__comments-item'>
                                                    <div className='lessons-tab__comments-item-top'>
                                                        <div className='lessons-tab__comments-item-user'>
                                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                                            <span>Мария Мариева</span>
                                                        </div>
                                                        <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                                                    </div>
                                                    <div className='lessons-tab__comments-item-text'>
                                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis
                                                        volutpat etiam lorem turpis?
                                                    </div>
                                                    <div className='lessons-tab__comments-item-title'>
                                                        <span>01</span>
                                                        <span>Название урока</span>
                                                    </div>
                                                </div>
                                                <div className='lessons-tab__comments-item'>
                                                    <div className='lessons-tab__comments-item-top'>
                                                        <div className='lessons-tab__comments-item-user'>
                                                            <img src='/assets/img/avatar2.jpg' alt='' />
                                                            <span>Мария Мариева</span>
                                                        </div>
                                                        <div className='lessons-tab__comments-item-date'>12 сен в 12:40</div>
                                                    </div>
                                                    <div className='lessons-tab__comments-item-text'>
                                                        Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis
                                                        volutpat etiam lorem turpis?
                                                    </div>
                                                    <div className='lessons-tab__comments-item-title'>
                                                        <span>01</span>
                                                        <span>Название урока</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='lessons-tab__comments-bottom'>
                                                <button className='lessons-tab__comments-more btn'>
                                                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                        <path d='M12.6673 5.66675L8.00065 10.3334L3.33398 5.66675' stroke='#7481E0' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                    </svg>
                                                    <span>Показать больше</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-tab-path='2' className='lkt-course__content'>
                                <div className='students-tab'>
                                    <div className='students-tab__top'>
                                        <div className='students-tab__title'>11 учеников</div>
                                        <button className='students-tab__btn'>
                                            <span>Сначала новые</span>
                                            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M11.2258 13.4428V4.36426' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path d='M13.9448 10.7119L11.2263 13.443L8.50781 10.7119' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path d='M4.6067 2.55518V11.6337' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                <path d='M1.88867 5.2858L4.60719 2.55469L7.32571 5.2858' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='students-tab__items'>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar3.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>01</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>13 сен</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar2.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>09</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>5 мар 2019</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar4.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>01</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>13 сен</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar5.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>01</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>13 сен</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar3.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>01</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>13 сен</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar2.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>09</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>5 мар 2019</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar4.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>01</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>13 сен</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar5.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>01</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>13 сен</div>
                                        </div>
                                        <div className='students-tab__item'>
                                            <div className='students-tab__item-img'>
                                                <img src='/assets/img/avatar5.jpg' alt='' />
                                            </div>
                                            <div className='students-tab__item-content'>
                                                <div className='students-tab__item-name'>Иван Иванов</div>
                                                <div className='students-tab__item-title'>
                                                    <span>01</span>
                                                    <span>Название урока</span>
                                                </div>
                                            </div>
                                            <div className='students-tab__item-date'>13 сен</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-tab-path='3' className='lkt-course__content'>
                                <div className='course-report'>
                                    <h3 className='course-report__title display-3'>Отчет по курсу</h3>
                                    <div className='course-report__top card-bg'>
                                        <div className='course-report__top-form-group form-group'>
                                            <label>Курс</label>
                                            <select>
                                                <option defaultValue hidden>
                                                    Курс
                                                </option>
                                                <option>Курс 1</option>
                                                <option>Курс 2</option>
                                            </select>
                                        </div>
                                        <div className='course-report__items'>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Начало курса</span>
                                                <div className='course-report__item-desc'>12.10.2021</div>
                                            </div>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Дней со старта</span>
                                                <div className='course-report__item-desc'>50 дней</div>
                                            </div>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Всего уроков</span>
                                                <div className='course-report__item-desc'>24 урока</div>
                                            </div>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Всего учеников</span>
                                                <div className='course-report__item-desc'>35 учеников</div>
                                            </div>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Процент завершивших</span>
                                                <div className='course-report__item-desc yellow-text'>63%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='course-report__nav'>
                                        <div className='course-report__tabs'>
                                            <div data-tab-path='1' className='course-report__tab course-report__tab--active'>
                                                Ученики
                                            </div>
                                            <div data-tab-path='2' className='course-report__tab'>
                                                Динамика курса
                                            </div>
                                        </div>
                                        <div className='course-report__selects'>
                                            <select>
                                                <option>Все статусы</option>
                                                <option>Все статусы 2</option>
                                            </select>
                                            <select>
                                                <option>За месяц</option>
                                                <option>За месяц 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div data-tab-path='1' className='course-report__content  course-report__content--active'>
                                        <div className='course-report__items course-report__items--num card-bg'>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Количество учеников</span>
                                                <div className='course-report__item-desc'>11 учеников</div>
                                            </div>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Процент завершивших</span>
                                                <div className='course-report__item-desc green-text'>75%</div>
                                            </div>
                                        </div>

                                        <div className='course-report__table card-bg'>
                                            <div className='course-report__table-inner'>
                                                <div className='course-report__table-head'>
                                                    <div className='course-report__table-head-col'>Ученик</div>
                                                    <div className='course-report__table-head-col'>Статус</div>
                                                </div>
                                                <div className='course-report__table-items'>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-user'>
                                                                <div className='course-report__table-avatar'>
                                                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                                                </div>
                                                                <div className='course-report__table-info'>
                                                                    <div className='course-report__table-name'>Мария Мариева</div>
                                                                    <div className='course-report__table-lesson'>
                                                                        <span>01</span>
                                                                        <span>Название урока</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-status yellow-text'>Не приступил</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-user'>
                                                                <div className='course-report__table-avatar'>
                                                                    <img src='/assets/img/avatar5.jpg' alt='' />
                                                                </div>
                                                                <div className='course-report__table-info'>
                                                                    <div className='course-report__table-name'>Мария Мариева</div>
                                                                    <div className='course-report__table-lesson'>
                                                                        <span>01</span>
                                                                        <span>Название урока</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-status green-text'>Пройден</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-user'>
                                                                <div className='course-report__table-avatar'>
                                                                    <img src='/assets/img/avatar3.jpg' alt='' />
                                                                </div>
                                                                <div className='course-report__table-info'>
                                                                    <div className='course-report__table-name'>Мария Мариева</div>
                                                                    <div className='course-report__table-lesson'>
                                                                        <span>02</span>
                                                                        <span>Название урока</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-status'>Завершен 20.12.2021</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-user'>
                                                                <div className='course-report__table-avatar'>
                                                                    <img src='/assets/img/avatar2.jpg' alt='' />
                                                                </div>
                                                                <div className='course-report__table-info'>
                                                                    <div className='course-report__table-name'>Мария Мариева</div>
                                                                    <div className='course-report__table-lesson'>
                                                                        <span>01</span>
                                                                        <span>Название урока</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-status yellow-text'>Не приступил</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-user'>
                                                                <div className='course-report__table-avatar'>
                                                                    <img src='/assets/img/avatar5.jpg' alt='' />
                                                                </div>
                                                                <div className='course-report__table-info'>
                                                                    <div className='course-report__table-name'>Мария Мариева</div>
                                                                    <div className='course-report__table-lesson'>
                                                                        <span>01</span>
                                                                        <span>Название урока</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-status green-text'>Пройден</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-user'>
                                                                <div className='course-report__table-avatar'>
                                                                    <img src='/assets/img/avatar3.jpg' alt='' />
                                                                </div>
                                                                <div className='course-report__table-info'>
                                                                    <div className='course-report__table-name'>Мария Мариева</div>
                                                                    <div className='course-report__table-lesson'>
                                                                        <span>02</span>
                                                                        <span>Название урока</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-status'>Завершен 20.12.2021</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-path='2' className='course-report__content'>
                                        <div className='course-report__items course-report__items--num card-bg'>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Количество учеников</span>
                                                <div className='course-report__item-desc'>11 учеников</div>
                                            </div>
                                            <div className='course-report__item'>
                                                <span className='course-report__item-title'>Среднее прохождение урока</span>
                                                <div className='course-report__item-desc'>1.5 дня</div>
                                            </div>
                                        </div>

                                        <div className='course-report__table course-report__table2 card-bg'>
                                            <div className='course-report__table-inner'>
                                                <div className='course-report__table-head'>
                                                    <div className='course-report__table-head-col'>№</div>
                                                    <div className='course-report__table-head-col'>Название</div>
                                                    <div className='course-report__table-head-col'>Прохождение</div>
                                                </div>
                                                <div className='course-report__table-items'>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-num'>01</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-title'>Название урока</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-duration'>1 день</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-num'>01</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-title'>Название урока</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-duration'>1 день</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-num'>01</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-title'>Название урока</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-duration'>1 день</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-num'>01</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-title'>Название урока</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-duration'>1 день</div>
                                                        </div>
                                                    </div>
                                                    <div className='course-report__table-item'>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-num'>01</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-title'>Название урока</div>
                                                        </div>
                                                        <div className='course-report__table-item-col'>
                                                            <div className='course-report__table-duration'>1 день</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-tab-path='4' className='lkt-course__content'>
                                <div className='notification-tab'>
                                    <div className='notification-tab__top'>
                                        <div className='notification-tab__title'>1 непрочитенное уведомление</div>
                                    </div>
                                    <div className='notification-tab__items'>
                                        <div className='notification-tab__item notification-tab__item--new'>
                                            <div className='notification-tab__item-top'>
                                                <div className='notification-tab__item-title'>
                                                    <i></i>
                                                    <span>Заголовок уведомления</span>
                                                </div>
                                                <div className='notification-tab__item-date'>12 сен в 12:40</div>
                                            </div>
                                            <div className='notification-tab__item-text'>
                                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat
                                                etiam lorem turpis?
                                            </div>
                                        </div>
                                        <div className='notification-tab__item'>
                                            <div className='notification-tab__item-top'>
                                                <div className='notification-tab__item-title'>
                                                    <i></i>
                                                    <span>Заголовок уведомления</span>
                                                </div>
                                                <div className='notification-tab__item-date'>12 сен в 12:40</div>
                                            </div>
                                            <div className='notification-tab__item-text'>
                                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat
                                                etiam lorem turpis?
                                            </div>
                                        </div>
                                        <div className='notification-tab__item'>
                                            <div className='notification-tab__item-top'>
                                                <div className='notification-tab__item-title'>
                                                    <i></i>
                                                    <span>Заголовок уведомления</span>
                                                </div>
                                                <div className='notification-tab__item-date'>12 сен в 12:40</div>
                                            </div>
                                            <div className='notification-tab__item-text'>
                                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat
                                                etiam lorem turpis?
                                            </div>
                                        </div>
                                        <div className='notification-tab__item'>
                                            <div className='notification-tab__item-top'>
                                                <div className='notification-tab__item-title'>
                                                    <i></i>
                                                    <span>Заголовок уведомления</span>
                                                </div>
                                                <div className='notification-tab__item-date'>12 сен в 12:40</div>
                                            </div>
                                            <div className='notification-tab__item-text'>
                                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat
                                                etiam lorem turpis?
                                            </div>
                                        </div>
                                        <div className='notification-tab__item'>
                                            <div className='notification-tab__item-top'>
                                                <div className='notification-tab__item-title'>
                                                    <i></i>
                                                    <span>Заголовок уведомления</span>
                                                </div>
                                                <div className='notification-tab__item-date'>12 сен в 12:40</div>
                                            </div>
                                            <div className='notification-tab__item-text'>
                                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat
                                                etiam lorem turpis?
                                            </div>
                                        </div>
                                        <div className='notification-tab__item'>
                                            <div className='notification-tab__item-top'>
                                                <div className='notification-tab__item-title'>
                                                    <i></i>
                                                    <span>Заголовок уведомления</span>
                                                </div>
                                                <div className='notification-tab__item-date'>12 сен в 12:40</div>
                                            </div>
                                            <div className='notification-tab__item-text'>
                                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat
                                                etiam lorem turpis?
                                            </div>
                                        </div>
                                        <div className='notification-tab__item'>
                                            <div className='notification-tab__item-top'>
                                                <div className='notification-tab__item-title'>
                                                    <i></i>
                                                    <span>Заголовок уведомления</span>
                                                </div>
                                                <div className='notification-tab__item-date'>12 сен в 12:40</div>
                                            </div>
                                            <div className='notification-tab__item-text'>
                                                Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat
                                                etiam lorem turpis?
                                            </div>
                                        </div>
                                    </div>
                                    <div className='notification-tab__bottom'>
                                        <Button className='notification-tab__more'>
                                            <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M12.6673 5.66675L8.00065 10.3334L3.33398 5.66675' stroke='#7481E0' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                            <span>Показать больше</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default CoursesItem
