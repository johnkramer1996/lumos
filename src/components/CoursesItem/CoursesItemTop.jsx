import React from 'react'
import { useSelector } from 'react-redux'

const CoursesItemTop = () => {
    const course = useSelector(({ frontCourses }) => frontCourses.course)

    return (
        <section className='course-top'>
            <div className='container'>
                <div className='course-top__title display-3'>{course.name}</div>
                <div className='course-top__bottom'>
                    <div className='course-top__left'>
                        <div className='course-top__user'>
                            <img src='/assets/img/avatar.jpg' alt='' />
                            <span>Иван Иванов</span>
                        </div>
                        <div className='course-top__category'>Категория курса</div>
                        <div className='course-top__student'>352 ученика</div>
                    </div>
                    <div className='course-top__right'>
                        <div className='course-top__nav'>
                            <button className='course-top__nav-item course-top__like'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M11.761 20.8544C9.5904 19.5185 7.57111 17.9463 5.73929 16.1658C4.45144 14.8836 3.47101 13.3204 2.8731 11.596C1.79714 8.25091 3.05393 4.42143 6.57112 3.28812C8.41961 2.69304 10.4384 3.83167 11.9961 5.0006C13.5543 3.8331 15.5725 2.69458 17.4211 3.28812C20.9383 4.42143 22.2041 8.25091 21.1281 11.596C20.5302 13.3204 19.5498 14.8836 18.2619 16.1658C16.4301 17.9463 14.4108 19.5185 12.2402 20.8544L12.0051 21.0006L11.761 20.8544Z'
                                        stroke='#74869C'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <span>129</span>
                            </button>
                            <button className='course-top__nav-item'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M21.7558 11.1378L14.2602 4.70927C14.022 4.50569 13.6647 4.44354 13.3524 4.55428C13.0409 4.66428 12.8385 4.92572 12.8385 5.21429V8.07429C8.04632 8.24286 3.86545 11.0179 2.52623 14.9943C1.94657 16.7186 1.99155 18.1193 2.00818 18.6471L2.01152 18.7857C2.01152 19.1071 2.26218 19.3893 2.62281 19.4743C2.69695 19.4915 2.77104 19.5 2.84436 19.5C3.13252 19.5 3.40735 19.3707 3.55976 19.1514C6.85866 14.3957 11.2294 14.2607 12.8385 14.395V18.0715C12.8385 18.36 13.0409 18.6215 13.3524 18.7315C13.6647 18.8429 14.022 18.7808 14.2602 18.5765L21.7558 12.1479C22.0814 11.8686 22.0814 11.4171 21.7558 11.1378Z'
                                        stroke='#74869C'
                                        strokeWidth='1.5'
                                    />
                                </svg>
                                <span>Поделиться</span>
                            </button>
                            <button className='course-top__nav-item'>
                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M11.6568 17.5076L6.29829 20.4316C5.87045 20.653 5.34336 20.4963 5.1075 20.0774V20.0774C5.03926 19.9476 5.00245 19.8038 5 19.6573V6.70148C5 4.23056 6.69522 3.24219 9.13467 3.24219H14.8653C17.2304 3.24219 19 4.16466 19 6.53675V19.6573C19 19.8911 18.9068 20.1152 18.7408 20.2805C18.5749 20.4458 18.3498 20.5386 18.1152 20.5386C17.9655 20.5363 17.8184 20.4996 17.6852 20.4316L12.2936 17.5076C12.0949 17.4007 11.8555 17.4007 11.6568 17.5076Z'
                                        stroke='#74869C'
                                        strokeWidth='1.5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <span>В избранное</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesItemTop
