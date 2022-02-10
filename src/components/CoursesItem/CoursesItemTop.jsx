import { ROLES } from 'constants'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { frontCoursesSelectors, systemSelectors } from 'store/selectors'
import { declOfNum, getDeclOfArray, getURL } from 'utils'
import CoursesItemTopNav from './CoursesItemTopNav'

const CoursesItemTop = ({ className }) => {
   const {
      name,
      category_id,
      trainer: { id: trainerId, avatar, last_name, name: trainerName, first_name, all_users = 0 },
   } = useSelector(frontCoursesSelectors.getCourse)
   const all = useSelector(frontCoursesSelectors.getCourse)
   const { themes } = useSelector(systemSelectors.getReferences)
   const { name: categoryName } = themes[category_id] || {}
   console.log(all)

   return (
      <section className={`course-top ${className}`}>
         <div className='container'>
            <div className='course-top__title display-3'>{name}</div>
            <div className='course-top__bottom'>
               <div className='course-top__left'>
                  <Link to={`/cabinet/trainers/${trainerId}`} className='course-top__user'>
                     <img src={getURL.avatar(avatar, ROLES.TRAINER)} alt='' />
                     <span>
                        {first_name || trainerName} {last_name}
                     </span>
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
