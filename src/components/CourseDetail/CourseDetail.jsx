import React from 'react'
import CourseDetailItem from './CourseDetailItem'
import { Swiper } from 'components/ui/'

const CourseDetail = ({ items = [] }) => {
    return (
        <section className='course-detail'>
            <div className='container'>
                <div className='course-detail__inner'>
                    <Swiper items={items} className={'course-detail__item'} prefix={'course-detail'} bgImg>
                        {(props) => <CourseDetailItem {...props} />}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CourseDetail
