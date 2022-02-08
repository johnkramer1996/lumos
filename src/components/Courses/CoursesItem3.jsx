import { Link } from 'react-router-dom'
import React from 'react'
import { RouteNames } from 'routes'
import { getImgUrl } from 'utils'

const CoursesItem3 = ({ id = 1, image, name, user = {}, status, students, ...rest }) => {
    return (
        <Link to={`${RouteNames.CABINET_COURSES}/${id}`} className='course-card3'>
            <div className='course-card3__img img img--cover'>
                <img src={getImgUrl(image)} alt='' />
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
                {students && (
                    <div className='course-card3__bottom'>
                        <div className='course-card3__students'>
                            <div className='course-card3__students-title'>48 учеников</div>
                            <div className='course-card3__students-new'>8 новых</div>
                        </div>
                        <div className='course-card3__num'>2</div>
                    </div>
                )}
            </div>
        </Link>
    )
}

export default CoursesItem3
