import React from 'react'
import CourseDetailItem from './CourseDetailItem'
import { Swiper } from 'components/ui/'

const CourseDetail = () => {
    const items = [
        {
            id: 1,
            img: 'assets/img/course4.jpg',
            title: 'Название курса',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id sem sem vitae, ac in vulputate enim elementum.',
            btn: 'Пройти пробный урок',
            stock: '-35%',
            date: 'до 16 сентября',
            price: '4 800 руб.',
            priceOld: '6 000 руб.',
        },
        {
            id: 2,
            img: 'assets/img/course4.jpg',
            title: 'Название курса',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa id sem sem vitae, ac in vulputate enim elementum.',
            btn: 'Пройти пробный урок',
            stock: '-35%',
            date: 'до 16 сентября',
            price: '4 800 руб.',
            priceOld: '6 000 руб.',
        },
    ]

    return (
        <section className='course-detail'>
            <div className='container'>
                <div className='course-detail__inner'>
                    <Swiper items={items} className={'course-detail__item'} prefix={'course-detail'} bgImg>
                        {(rest) => <CourseDetailItem {...rest} />}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CourseDetail
