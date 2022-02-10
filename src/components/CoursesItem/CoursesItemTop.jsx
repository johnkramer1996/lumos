import { ROLES } from 'constants'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { frontCoursesSelectors, systemSelectors } from 'store/selectors'
import { declOfNum, getDeclOfArray, getFullName, getURL } from 'utils'
import CoursesItemTopNav from './CoursesItemTopNav'

const CoursesItemTop = ({ className }) => {
   const { name, category_id, all_users } = useSelector(frontCoursesSelectors.getCourse)
   const trainer = useSelector(frontCoursesSelectors.getTrainer)
   const { id: trainerId, avatar } = trainer
   const { themes } = useSelector(systemSelectors.getReferences)
   const { name: categoryName } = themes[category_id] || {}

   return (
      <section className={`course-top ${className}`}>
         <div className='container'>
            <div className='course-top__title display-3'>{name}</div>
            <div className='course-top__bottom'>
               <div className='course-top__left'>
                  <Link to={`/cabinet/trainers/${trainerId}`} className='course-top__user'>
                     <img src={getURL.avatar(avatar, ROLES.TRAINER)} alt='' />
                     <span>{getFullName(trainer)}</span>
                  </Link>
                  <div className='course-top__category'>{categoryName}</div>
                  <div className='course-top__student'>
                     {all_users} {declOfNum(all_users, getDeclOfArray['users'])}
                  </div>
               </div>
               <div className='course-top__right'>
                  <CoursesItemTopNav />
               </div>
            </div>
         </div>
      </section>
   )
}

export default CoursesItemTop
