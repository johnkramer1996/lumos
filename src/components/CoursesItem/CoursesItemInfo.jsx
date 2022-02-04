import React from 'react'
import { useSelector } from 'react-redux'

const CoursesItemInfo = () => {
    const course = useSelector(({ frontCourses }) => frontCourses.course)

    return (
        <section className='course-info'>
            <div className='container'>
                <div className='course-info__inner'>
                    <div className='course-info__left'>
                        <div className='course-info__img'>
                            <img src='/assets/img/course4.jpg' alt='' />
                        </div>
                    </div>

                    <div className='course-info__right'>
                        <h1 className='course-info__title display-2'>Заголовок уровня Бог</h1>
                        <div className='course-info__desc'>Подзаголовок, гениальный офер, который жаждет ЦА.</div>
                        <div className='course-info__badges'>
                            <div className='course-info__badge'>
                                <span>Длительность</span>
                                <strong>4 месяца</strong>
                            </div>
                            <div className='course-info__badge'>
                                <span>Тип обучения</span>
                                <strong>Тип обучения</strong>
                            </div>
                            <div className='course-info__badge'>
                                <span>Формат</span>
                                <strong>Онлайн</strong>
                            </div>
                            <div className='course-info__badge'>
                                <span>Когда</span>
                                <strong>В любое время</strong>
                            </div>
                        </div>
                        <button className='course-info__btn btn btn-outline'>
                            <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12.5 2C18.0228 2 22.5 6.47716 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97716 22 2.5 17.5228 2.5 12C2.5 6.47716 6.97716 2 12.5 2Z'
                                    stroke='#1B2C3E'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M15.5506 12.4673C14.8216 13.2533 12.8376 14.5833 11.8226 15.0103C11.6606 15.0783 11.2476 15.2223 11.1586 15.2243C10.9696 15.2303 10.7876 15.1243 10.6996 14.9543C10.6656 14.8883 10.5656 14.4573 10.5336 14.2653C10.4386 13.6813 10.3896 12.7743 10.3906 11.8623C10.3896 10.9053 10.4426 9.95532 10.5486 9.37732C10.5766 9.22132 10.6586 8.86232 10.6826 8.80432C10.7276 8.69632 10.8096 8.61132 10.9086 8.55832C10.9846 8.51732 11.0716 8.49532 11.1586 8.49832C11.2476 8.50032 11.6096 8.62732 11.7336 8.67632C12.7116 9.05632 14.7806 10.4343 15.5406 11.2443C15.6086 11.3173 15.7956 11.5133 15.8266 11.5533C15.8976 11.6433 15.9326 11.7523 15.9326 11.8623C15.9326 11.9643 15.9016 12.0683 15.8376 12.1553C15.8046 12.2003 15.6136 12.4003 15.5506 12.4673Z'
                                    stroke='#1B2C3E'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            <span>Смотреть трейлер курса</span>
                        </button>
                        <div className='course-info__cart'>
                            <div className='course-info__cart-top'>
                                <div className='course-info__cart-prices'>
                                    <div className='course-info__cart-prices-new'>4 970 руб.</div>
                                    <div className='course-info__cart-prices-old'>9 970 руб.</div>
                                </div>
                                <div className='course-info__cart-right'>
                                    <button className='course-info__cart-btn btn btn-blue'>Записаться</button>
                                    <div className='course-info__cart-places'>Осталось 12 мест</div>
                                </div>
                            </div>
                            <div className='course-info__timer'>
                                <div className='course-info__timer-title'>Скидка исчезнет через</div>
                                <div className='course-info__timer-wrap'>
                                    <div className='course-info__timer-item'>11</div>
                                    <div className='course-info__timer-separate'>:</div>
                                    <div className='course-info__timer-item'>29</div>
                                    <div className='course-info__timer-separate'>:</div>
                                    <div className='course-info__timer-item course-info__timer-item--sek'>59</div>
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