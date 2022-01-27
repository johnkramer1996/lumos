import { CoursesItem3 } from 'components'
import React from 'react'
import { declOfNum, getDeclOfArray } from 'utils'

const CabinetEmployee = ({ items = [], total }) => {
    return (
        <div className='lks-course'>
            <div className='lks-course__top'>
                <h1 className='lks-course__title display-3'>Все курсы</h1>
                <div className='lks-course__top-buttons'>
                    <button className='lks-course__create btn btn-outline'>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M10.5703 5.41407L6.7944 9.21516L2.37376 6.49431C1.79451 6.13772 1.91191 5.25798 2.56447 5.06858L13.0015 2.03162C13.595 1.85985 14.1438 2.4163 13.966 3.01259L10.8693 13.4388C10.6754 14.0913 9.80549 14.2043 9.45392 13.6217L6.7944 9.21516'
                                stroke='#1B2C3E'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        <span>Создать рассылку</span>
                    </button>
                    <button className='lks-course__add btn btn-blue'>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8.02858 2.66699V13.3337' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M13.3347 8.02597H2.66797' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <span>Добавить</span>
                    </button>
                </div>
            </div>
            <div className='cabinet-page__group'>
                <div className='cabinet-page__top'>
                    <div>
                        <h3 className='cabinet-page__group-title'>На модерации</h3>
                        <div className='cabinet-page__nav-title'>3 курса</div>
                    </div>
                    <button className='lkt-courses__show btn btn-outline'>Показать все</button>
                </div>
                <div className='cabinet-page__items'>
                    <div className='cabinet-page__item'>
                        <div className='course-card3'>
                            <div className='course-card3__img'>
                                <img src='img/course.jpg' alt='' />
                            </div>
                            <div className='course-card3__content'>
                                <div className='course-card3__title truncate'>Название курса в нескольких строках Название курса в нескольких строках</div>
                                <div className='course-card3__user'>
                                    <img src='img/avatar2.jpg' alt='' />
                                    <span>Ольга Олеговна</span>
                                </div>
                                <div className='course-card3__status'>
                                    <span>Новый</span>
                                    <span>23 ч</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cabinet-page__item'>
                        <div className='course-card3'>
                            <div className='course-card3__img'>
                                <img src='img/course2.jpg' alt='' />
                            </div>
                            <div className='course-card3__content'>
                                <div className='course-card3__title truncate'>Название курса в нескольких строках оооо</div>
                                <div className='course-card3__user'>
                                    <img src='img/avatar2.jpg' alt='' />
                                    <span>Ольга Олеговна</span>
                                </div>
                                <div className='course-card3__status'>
                                    <span>Новый</span>
                                    <span>23 ч</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cabinet-page__item'>
                        <div className='course-card3'>
                            <div className='course-card3__img'>
                                <img src='img/course3.jpg' alt='' />
                            </div>
                            <div className='course-card3__content'>
                                <div className='course-card3__title truncate'>Название курса в нескольких строках оооо</div>
                                <div className='course-card3__user'>
                                    <img src='img/avatar2.jpg' alt='' />
                                    <span>Ольга Олеговна</span>
                                </div>
                                <div className='course-card3__status'>
                                    <span>Новый</span>
                                    <span>23 ч</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cabinet-page__group'>
                <div className='cabinet-page__top'>
                    <div>
                        <h3 className='cabinet-page__group-title'>Активные</h3>
                        <div className='cabinet-page__nav-title'>
                            {total} {declOfNum(total, getDeclOfArray['course'])}
                        </div>
                    </div>
                    <button className='lkt-courses__show btn btn-outline'>Показать все</button>
                </div>
                <div className='cabinet-page__items'>
                    {items.map(({ id, ...props }) => (
                        <CoursesItem3 key={id} {...props} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CabinetEmployee
