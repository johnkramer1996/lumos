import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import { declOfNum, getDeclOfArray, getImgUrl } from 'utils'

const CoursesItem2 = ({ id = 0, image, name, all_users }) => {
    return (
        <Link to={`${RouteNames.COURSES}/${id}`} className='course-card2'>
            <div className='course-card2__img'>
                <img src={getImgUrl(image)} alt='' />
            </div>
            <div className='course-card2__content'>
                <div className='course-card2__title truncate'>{name}</div>
                <div className='course-card2__info'>
                    <div className='course-card2__student'>
                        {all_users} {declOfNum(all_users, getDeclOfArray['users'])}
                    </div>
                    <div className='course-card2__duration'>3 месяца</div>
                </div>
                <div className='course-card2__teacher'>Иван Иванов</div>
            </div>
        </Link>
    )
}

CoursesItem2.propTypes = {
    id: PropTypes.number.isRequired,
}

export default CoursesItem2
