import React from 'react'
import { useSelector } from 'react-redux'

const CoursesItemPopular = () => {
    const course = useSelector(({ frontCourses }) => frontCourses.course)

    return (
        <section className='course-popular'>
            <div className='container'>
                <div className='course-popular__inner'>
                    <div className='courses'>
                        <div className='courses__top'>
                            <h2 className='courses__title display-3'>Вам может быть интересно</h2>
                            <a href='' className='courses__all btn btn-outline'>
                                Показать все
                            </a>
                        </div>
                        <div className='courses__items'>
                            <div className='courses__item'>
                                <div className='course-card2'>
                                    <div className='course-card2__img'>
                                        <img src='/assets/img/course.jpg' alt='' />
                                    </div>
                                    <div className='course-card2__content'>
                                        <div className='course-card2__title truncate'>Название курса в нескольк Название курса в нескольк..</div>
                                        <div className='course-card2__info'>
                                            <div className='course-card2__student'>352 ученика</div>
                                            <div className='course-card2__duration'>3 месяца</div>
                                        </div>
                                        <div className='course-card2__teacher'>Иван Иванов</div>
                                    </div>
                                </div>
                            </div>
                            <div className='courses__item'>
                                <div className='course-card2'>
                                    <div className='course-card2__img'>
                                        <img src='/assets/img/course2.jpg' alt='' />
                                    </div>
                                    <div className='course-card2__content'>
                                        <div className='course-card2__title truncate'>Название курса в нескольк Название курса в нескольк..</div>
                                        <div className='course-card2__info'>
                                            <div className='course-card2__student'>352 ученика</div>
                                            <div className='course-card2__duration'>3 месяца</div>
                                        </div>
                                        <div className='course-card2__teacher'>Иван Иванов</div>
                                    </div>
                                </div>
                            </div>
                            <div className='courses__item'>
                                <div className='course-card2'>
                                    <div className='course-card2__img'>
                                        <img src='/assets/img/course3.jpg' alt='' />
                                    </div>
                                    <div className='course-card2__content'>
                                        <div className='course-card2__title truncate'>Название курса в нескольк Название курса в нескольк..</div>
                                        <div className='course-card2__info'>
                                            <div className='course-card2__student'>352 ученика</div>
                                            <div className='course-card2__duration'>3 месяца</div>
                                        </div>
                                        <div className='course-card2__teacher'>Иван Иванов</div>
                                    </div>
                                </div>
                            </div>
                            <div className='courses__item'>
                                <div className='course-card2'>
                                    <div className='course-card2__img'>
                                        <img src='/assets/img/course.jpg' alt='' />
                                    </div>
                                    <div className='course-card2__content'>
                                        <div className='course-card2__title truncate'>Название курса в нескольк Название курса в нескольк..</div>
                                        <div className='course-card2__info'>
                                            <div className='course-card2__student'>352 ученика</div>
                                            <div className='course-card2__duration'>3 месяца</div>
                                        </div>
                                        <div className='course-card2__teacher'>Иван Иванов</div>
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

export default CoursesItemPopular
