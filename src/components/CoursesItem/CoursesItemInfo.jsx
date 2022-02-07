import React from 'react'
import { useSelector } from 'react-redux'
import { getImgUrl } from 'utils'
import { ReactComponent as PlaySvg } from 'svg/play.svg'

const CoursesItemInfo = () => {
    const { image, name, short_desc, width, type_study: typeStudy, format_study, anytime } = useSelector(({ frontCourses }) => frontCourses.course)
    const { type_study = [], format = [] } = useSelector(({ system }) => system.references)
    const { name: typeName } = type_study[typeStudy] || {}
    const { name: foramtName } = format[format_study] || {}

    return (
        <section className='course-info'>
            <div className='container'>
                <div className='course-info__inner'>
                    <div className='course-info__left'>
                        <div className='course-info__img img img--lg'>
                            <img src={getImgUrl(image)} alt='' />
                        </div>
                    </div>

                    <div className='course-info__right'>
                        <h1 className='course-info__title display-2'>{name}</h1>
                        <div className='course-info__desc'>{short_desc}</div>
                        <div className='course-info__badges'>
                            <div className='course-info__badge'>
                                <span>Длительность</span>
                                <strong>{width}</strong>
                            </div>
                            <div className='course-info__badge'>
                                <span>Тип обучения</span>
                                <strong>{typeName}</strong>
                            </div>
                            <div className='course-info__badge'>
                                <span>Формат</span>
                                <strong>{foramtName}</strong>
                            </div>
                            <div className='course-info__badge'>
                                <span>Когда</span>
                                <strong>{anytime === 1 ? 'В любое время' : '01.01.2001'}</strong>
                            </div>
                        </div>
                        <button className='course-info__btn btn btn-outline'>
                            <PlaySvg />
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
