import { IMG_URL } from 'api/URLS'
import React from 'react'

const CoursesItem3 = ({ image, name, user, status, students }) => {
    return (
        <div className='course-card3'>
            <div className='course-card3__img'>
                <img src={IMG_URL + image} alt='' />
            </div>
            <div className='course-card3__content'>
                <div className='course-card3__title'>{name}</div>
                {user && (
                    <div className='course-card3__user'>
                        <img src='/assets/img/avatar2.jpg' alt='' />
                        <span>Ольга Олеговна</span>
                    </div>
                )}
                {status && (
                    <div className='course-card3__status'>
                        <span>Новый</span>
                        <span>23 ч</span>
                    </div>
                )}
                <div className='course-card3__bottom'>
                    <div className='course-card3__students'>
                        <div className='course-card3__students-title'>48 учеников</div>
                        <div className='course-card3__students-new'>8 новых</div>
                    </div>
                    <div className='course-card3__num'>2</div>
                </div>
                {students && <div />}
            </div>
        </div>
    )
}

export default CoursesItem3
