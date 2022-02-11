import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { declOfNum, getDeclOfArray, getFullName, getURL } from 'utils'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/selectors'

const CoursesItem2 = ({ id = 0, image = '', name = '', all_users = 0, width = '', trainer = {}, rolesId }) => {
   return (
      // <Link to={getURL.cabinetCoursesItem({ courseId: id }, rolesId)} className='course-card2'>
      <Link to={getURL.coursesItem({ courseId: id })} className='course-card2'>
         <div className='course-card2__img img img--cover'>
            <img src={getURL.img(image)} alt='' />
         </div>
         <div className='course-card2__content'>
            <div className='course-card2__title truncate'>{name}</div>
            <div className='course-card2__info'>
               <div className='course-card2__student'>
                  {all_users} {declOfNum(all_users, getDeclOfArray['users'])}
               </div>
               <div className='course-card2__duration'>{width}</div>
            </div>
            <div className='course-card2__teacher'>{getFullName(trainer)}</div>
         </div>
      </Link>
   )
}

CoursesItem2.propTypes = {
   id: PropTypes.number.isRequired,
}

export default CoursesItem2
