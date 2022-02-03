import React from 'react'
import { useSelector } from 'react-redux'

const CoursesItemVariansts = () => {
    const course = useSelector(({ frontCourses }) => frontCourses.course)

    return (
        <section className='course-variants'>
            <div className='container'>
                <div className='course-variants__inner'>
                    <h2 className='course-variants__title display-2'>Выберите вариант участия </h2>
                    <div className='course-variants__slider'>
                        <div className='swiper-container'>
                            <div className='swiper-wrapper'>
                                <div className='swiper-slide'>
                                    <div className='tarif-card'>
                                        <div className='tarif-card__title'>Стандарт</div>
                                        <div className='tarif-card__desc'>3 месяца обучения, 31 урок</div>
                                        <div className='tarif-card__prices'>
                                            <div className='tarif-card__prices-new'>4 970 руб.</div>
                                            <div className='tarif-card__prices-old'>9 970 руб.</div>
                                        </div>
                                        <div className='tarif-card__items'>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                        </div>
                                        <button className='tarif-card__open'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M19 9L12 16L5 9' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                            <span className='tarif-card__open-show'>Показать Описание</span>
                                            <span className='tarif-card__open-hidden'>Скрыть Описание</span>
                                        </button>
                                        <button className='tarif-card__btn btn btn-blue'>Выбрать</button>
                                    </div>
                                </div>
                                <div className='swiper-slide'>
                                    <div className='tarif-card'>
                                        <div className='tarif-card__title'>Вип</div>
                                        <div className='tarif-card__desc'>4 месяца обучения, 44 урока</div>
                                        <div className='tarif-card__prices tarif-card__prices--green'>
                                            <div className='tarif-card__prices-new'>6 500 руб.</div>
                                            <div className='tarif-card__prices-old'>11 500 руб.</div>
                                        </div>
                                        <div className='tarif-card__items'>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                        </div>
                                        <button className='tarif-card__open'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M19 9L12 16L5 9' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                            <span className='tarif-card__open-show'>Показать Описание</span>
                                            <span className='tarif-card__open-hidden'>Скрыть Описание</span>
                                        </button>
                                        <button className='tarif-card__btn btn btn-blue'>Выбрать</button>
                                    </div>
                                </div>
                                <div className='swiper-slide'>
                                    <div className='tarif-card'>
                                        <div className='tarif-card__title'>Премиум</div>
                                        <div className='tarif-card__desc'>6 месяцев обучения, 55 урока</div>
                                        <div className='tarif-card__prices tarif-card__prices--blue'>
                                            <div className='tarif-card__prices-new'>8 000 руб.</div>
                                            <div className='tarif-card__prices-old'>15 000 руб.</div>
                                        </div>
                                        <div className='tarif-card__items'>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                        </div>
                                        <button className='tarif-card__open'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M19 9L12 16L5 9' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                            <span className='tarif-card__open-show'>Показать Описание</span>
                                            <span className='tarif-card__open-hidden'>Скрыть Описание</span>
                                        </button>
                                        <button className='tarif-card__btn btn btn-blue'>Выбрать</button>
                                    </div>
                                </div>
                                <div className='swiper-slide'>
                                    <div className='tarif-card'>
                                        <div className='tarif-card__title'>Премиум</div>
                                        <div className='tarif-card__desc'>6 месяцев обучения, 55 урока</div>
                                        <div className='tarif-card__prices tarif-card__prices--blue'>
                                            <div className='tarif-card__prices-new'>8 000 руб.</div>
                                            <div className='tarif-card__prices-old'>15 000 руб.</div>
                                        </div>
                                        <div className='tarif-card__items'>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                            <div className='tarif-card__item'>
                                                <i></i>
                                                <span>Metus viverra fames sem non amet in amet.</span>
                                            </div>
                                        </div>
                                        <button className='tarif-card__open'>
                                            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M19 9L12 16L5 9' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
                                            <span className='tarif-card__open-show'>Показать Описание</span>
                                            <span className='tarif-card__open-hidden'>Скрыть Описание</span>
                                        </button>
                                        <button className='tarif-card__btn btn btn-blue'>Выбрать</button>
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

export default CoursesItemVariansts
