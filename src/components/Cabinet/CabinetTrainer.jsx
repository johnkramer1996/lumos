import { Button } from 'components/ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from 'routes'

const CabinetTrainer = () => {
    const navigate = useNavigate()
    const toAddCourse = () => navigate(RouteNames.ADD_COURSE)

    return (
        <div className='lkt-courses'>
            <div className='cabinet-page__top'>
                <h1 className='lkt-courses__title display-3'>Мои курсы</h1>
                <Button className='lkt-courses__add' onClick={toAddCourse} outline>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <span>Добавить</span>
                </Button>
            </div>
            <div className='cabinet-page__nav lkt-courses__nav'>
                <div className='cabinet-page__nav-title'>4 курса</div>
                <div className='cabinet-page__nav-wrap'>
                    <button className='cabinet-page__nav-item cabinet-page__nav-item--col cabinet-page__nav-item--active'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='1' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='17' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='1' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='17' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                        </svg>
                    </button>
                    <button className='cabinet-page__nav-item cabinet-page__nav-item--row'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect x='1' y='5' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='5' width='14' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='1' y='13' width='6' height='6' rx='2' fill='#C6D0DD' />
                            <rect x='9' y='13' width='14' height='6' rx='2' fill='#C6D0DD' />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='cabinet-page__items'>
                <div className='cabinet-page__item'>
                    <div className='course-card3'>
                        <div className='course-card3__img'>
                            <img src='./assets/img/course.jpg' alt='' />
                        </div>
                        <div className='course-card3__content'>
                            <div className='course-card3__title truncate'>Название курса в нескольких строках Название курса в нескольких строках</div>
                            <div className='course-card3__bottom'>
                                <div className='course-card3__students'>
                                    <div className='course-card3__students-title'>48 учеников</div>
                                    <div className='course-card3__students-new'>8 новых</div>
                                </div>
                                <div className='course-card3__num'>2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cabinet-page__item'>
                    <div className='course-card3'>
                        <div className='course-card3__img'>
                            <img src='./assets/img/course2.jpg' alt='' />
                        </div>
                        <div className='course-card3__content'>
                            <div className='course-card3__title truncate'>Название курса в нескольких строках оооо</div>
                            <div className='course-card3__bottom'>
                                <div className='course-card3__students'>
                                    <div className='course-card3__students-title'>48 учеников</div>
                                    <div className='course-card3__students-new'>8 новых</div>
                                </div>
                                <div className='course-card3__num'>2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cabinet-page__item'>
                    <div className='course-card3'>
                        <div className='course-card3__img'>
                            <img src='./assets/img/course3.jpg' alt='' />
                        </div>
                        <div className='course-card3__content'>
                            <div className='course-card3__title truncate'>Название курса в нескольких строках оооо</div>
                            <div className='course-card3__bottom'>
                                <div className='course-card3__students'>
                                    <div className='course-card3__students-title'>48 учеников</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cabinet-page__item'>
                    <div className='course-card3'>
                        <div className='course-card3__img'>
                            <img src='./assets/img/course4.jpg' alt='' />
                        </div>
                        <div className='course-card3__content'>
                            <div className='course-card3__title truncate'>Название курса в нескольких строках оооо</div>
                            <div className='course-card3__bottom'>
                                <div className='course-card3__students'>
                                    <div className='course-card3__students-status'>На модерации</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CabinetTrainer
