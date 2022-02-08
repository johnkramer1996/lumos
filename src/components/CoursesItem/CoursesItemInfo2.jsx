import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RouteNames } from 'routes'
import { getImgUrl } from 'utils'

const CoursesItemInfo = () => {
    const { courseId } = useParams()
    const { descriptions = [], description, result_learn_text, moduls = [], lessons = [] } = useSelector(({ frontCourses }) => frontCourses.course)
    const course = useSelector(({ frontCourses }) => frontCourses.course)
    const { themes = [], type_study = [], difficulty = [], format = [], event_types = [] } = useSelector(({ system }) => system.references)
    console.log(course)

    return (
        <section className='course-info2'>
            <div className='container'>
                <div className='course-info2__inner'>
                    <div className='course-info2__left'>
                        <div className='course-about course-info2__group'>
                            <div className='course-info2__group-show'>
                                <h3 className='course-info2__title'>О курсе</h3>
                                <div className='course-about__desc'>
                                    <p>{description}</p>
                                </div>
                            </div>
                            {/* // TODO MODILE VERSION */}
                            {descriptions.map(({ name, text, image }, index) => (
                                <div key={index} className='course-info2__group-hidden'>
                                    <h3 className='course-info2__title'>{name}</h3>
                                    <div className='course-about__img'>
                                        <img src={getImgUrl(image)} alt='' />
                                    </div>
                                    <div className='course-about__desc'>
                                        <p>{text}</p>
                                    </div>
                                </div>
                            ))}
                            <button className='course-info2__show'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M19 8.5L12 15.5L5 8.5' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                                <span className='course-info2__show-open'>Показать больше</span>
                                <span className='course-info2__show-close'>Скрыть</span>
                            </button>
                        </div>
                        <div className='course-whom course-info2__group'>
                            <h3 className='course-info2__title'>Кому подойдет курс</h3>
                            {/* // TODO MODILE VERSION */}
                            {descriptions.map(({ name, text, image }, index) => (
                                <div key={index} className='course-info2__group-hidden'>
                                    <div className='course-whom__item'>
                                        <div className='course-whom__item-img'>
                                            <img src={getImgUrl(image)} alt='' />
                                        </div>
                                        <div className='course-whom__item-content'>
                                            <div className='course-whom__item-title truncate'>{name}</div>
                                            <div className='course-whom__item-desc'>{text}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button className='course-info2__show'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M19 8.5L12 15.5L5 8.5' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                </svg>
                                <span className='course-info2__show-open'>Показать больше</span>
                                <span className='course-info2__show-close'>Скрыть</span>
                            </button>
                        </div>
                        <div className='course-result course-info2__group'>
                            <h3 className='course-info2__title'>Результаты обучения</h3>
                            <div className='course-result__wrap'>
                                {[...new Array(6).fill(...(result_learn_text || []))].map((item, index) => (
                                    <div key={index} className='course-result__item'>
                                        <i></i>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='course-programm course-info2__group'>
                            <h3 className='course-info2__title'>Программа курса</h3>
                            <div className='course-programm__wrap'>
                                {moduls.map(({ id, name }, index) => (
                                    <div key={id || index} className='course-programm__group'>
                                        <div className='course-programm__title'>{name}</div>
                                        <ol className='course-programm__list'>
                                            {console.log(lessons, id)}
                                            {lessons
                                                .filter(({ modul_id }) => modul_id === id)
                                                .map(({ id, name }, index) => (
                                                    <li key={id || index} className='course-programm__item'>
                                                        <Link to={`${RouteNames.COURSES}/${courseId}/lessons/${id}`}>{name}</Link>
                                                    </li>
                                                ))}
                                        </ol>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='course-info2__right'>
                        <div className='course-info2__cart'>
                            <div className='course-info2__cart-top'>
                                <div className='course-info2__cart-prices'>
                                    <div className='course-info2__cart-prices-new'>4 970 руб.</div>
                                    <div className='course-info2__cart-prices-old'>9 970 руб.</div>
                                </div>
                                <div className='course-info2__cart-buttons'>
                                    <button className='course-info2__cart-btn btn btn-blue'>Записаться</button>
                                    <button className='course-info2__cart-btn course-info2__cart-btn--free btn btn-outline'>Пройти бесплатный урок</button>
                                </div>
                            </div>
                            <div className='course-info2__timer'>
                                <div className='course-info2__timer-title'>Скидка исчезнет через</div>
                                <div className='course-info2__timer-wrap'>
                                    <div className='course-info2__timer-item'>11</div>
                                    <div className='course-info2__timer-separate'>:</div>
                                    <div className='course-info2__timer-item'>29</div>
                                    <div className='course-info2__timer-separate'>:</div>
                                    <div className='course-info2__timer-item course-info__timer-item--sek'>59</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesItemInfo
