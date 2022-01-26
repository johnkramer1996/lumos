import React, { useEffect } from 'react'
import { CabinetGreet } from 'components'
import { Button } from 'components/ui'
import { useDispatch, useSelector, useNavigate } from 'hooks'
import { declOfNum, getDeclOfArray } from 'utils'

const CabinetUser = () => {
    const { toAddCourse } = useNavigate()
    const { fetchCourses } = useDispatch()
    const { courses, total } = useSelector()

    useEffect(() => fetchCourses({ page: 1, limit: 3 }), [])

    return (
        <>
            <CabinetGreet />
            <div className='cabinet-page__group'>
                <div className='cabinet-page__top'>
                    <div>
                        <h1 className='cabinet-page__group-title'>Мои курсы</h1>
                        <div className='cabinet-page__nav-title'>
                            {total} {declOfNum(total, getDeclOfArray['course'])}
                        </div>
                    </div>
                    <Button className='lkt-courses__add' onClick={toAddCourse} outline>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <span>Добавить</span>
                    </Button>
                </div>
                <div className='cabinet-page__items'>
                    {courses.map(({ id, image, name }) => (
                        <div className='cabinet-page__item' key={id}>
                            <div className='course-card3'>
                                <div className='course-card3__img'>
                                    <img src='./assets/img/course2.jpg' alt='' />
                                </div>
                                <div className='course-card3__content'>
                                    <div className='course-card3__info'>
                                        <div className='course-card3__buy'>Куплен</div>
                                        <div className='course-card3__progress'>5 из 10</div>
                                    </div>
                                    <div className='course-card3__title truncate'>{name}</div>
                                    <div className='course-card3__bottom'>
                                        <div className='course-card3__students'>
                                            <div className='course-card3__students-name'>Иван Иванов</div>
                                        </div>
                                        <div className='course-card3__bookmark'>
                                            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    fillRule='evenodd'
                                                    clipRule='evenodd'
                                                    d='M9.72238 15.5262L4.77959 18.2341C4.38495 18.4392 3.89876 18.294 3.68119 17.9061V17.9061C3.61825 17.7859 3.58429 17.6527 3.58203 17.5171V5.5186C3.58203 3.23027 5.14572 2.31494 7.39591 2.31494H12.682C14.8635 2.31494 16.4958 3.16925 16.4958 5.36605V17.5171C16.4958 17.7335 16.4098 17.9411 16.2568 18.0942C16.1037 18.2473 15.8961 18.3332 15.6797 18.3332C15.5416 18.3311 15.4059 18.2971 15.283 18.2341L10.3097 15.5262C10.1265 15.4272 9.90565 15.4272 9.72238 15.5262Z'
                                                    stroke='#D4DBE7'
                                                    strokeWidth='1.5'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='cabinet-page__group'>
                <div className='cabinet-page__top'>
                    <div>
                        <h1 className='cabinet-page__group-title'>Мои мероприятия</h1>
                        <div className='cabinet-page__nav-title'>
                            {total} {declOfNum(total, getDeclOfArray['event'])}
                        </div>
                    </div>
                    <Button className='lkt-courses__add' onClick={toAddCourse} outline>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <span>Добавить</span>
                    </Button>
                </div>
                <div className='cabinet-page__items'>
                    <div className='cabinet-page__item'>
                        <div className='event-card2'>
                            <div className='event-card2__img'>
                                <img src='./assets/img/event1.jpg' alt='' />
                            </div>
                            <div className='event-card2__content'>
                                <div className='event-card2__time'>
                                    <span className='event-card2__time-day'>14 сен</span>
                                    <span className='event-card2__time-hour'>в 20:00</span>
                                </div>
                                <a href='' className='event-card2__title'>
                                    Название курса в нескольких строках Название курса в нескольких строках
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='cabinet-page__item'>
                        <div className='event-card2'>
                            <div className='event-card2__img'>
                                <img src='./assets/img/event2.jpg' alt='' />
                            </div>
                            <div className='event-card2__content'>
                                <div className='event-card2__time'>
                                    <span className='event-card2__time-day'>14 сен</span>
                                    <span className='event-card2__time-hour'>в 20:00</span>
                                </div>
                                <a href='' className='event-card2__title'>
                                    Название курса в нескольких строках Название курса в нескольких строках
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='cabinet-page__item'>
                        <div className='event-card2'>
                            <div className='event-card2__img'>
                                <img src='./assets/img/event3.jpg' alt='' />
                            </div>
                            <div className='event-card2__content'>
                                <div className='event-card2__time'>
                                    <span className='event-card2__time-day'>14 сен</span>
                                    <span className='event-card2__time-hour'>в 20:00</span>
                                </div>
                                <a href='' className='event-card2__title'>
                                    Название курса в нескольких строках Название курса в нескольких строках
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CabinetUser
