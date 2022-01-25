import React from 'react'

const CoursesItem = ({ img, name, created_at }) => {
    return (
        <div className='cabinet-page__item'>
            <div className='course-card3'>
                <div className='course-card3__img'>
                    <img src='./assets/img/course.jpg' alt='' />
                </div>
                <div className='course-card3__content'>
                    <div className='course-card3__title'>{name}</div>
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
    )
}

export default CoursesItem
