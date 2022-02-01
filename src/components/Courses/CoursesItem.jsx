import { IMG_URL } from 'api/URLS'
import React from 'react'
import { getImgUrl } from 'utils'

const CourseItem = ({ image = '', title, descr, student }) => {
    return (
        <div className='course-card'>
            <div className='course-card__img'>
                <img src={getImgUrl(image)} alt='' />
            </div>
            <div className='course-card__content'>
                <div className='course-card__student'>{student}</div>
                <div className='course-card__title'>{title}</div>
                <div className='course-card__desc'>{descr}</div>
            </div>
        </div>
    )
}

export default CourseItem
