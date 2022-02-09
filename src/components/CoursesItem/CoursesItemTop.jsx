import React from 'react'
import { useSelector } from 'react-redux'
import { declOfNum, getDeclOfArray, getURL } from 'utils'
import CoursesItemTopNav from './CoursesItemTopNav'

const CoursesItemTop = ({ className }) => {
   const { name, category_id, trainer: { avatar, last_name, name: trainerName, first_name, all_users = 0 } = {} } = useSelector(({ frontCourses }) => frontCourses.course)
   const { themes = [] } = useSelector(({ system }) => system.references)
   const { name: categoryName } = themes[category_id] || {}

   return (
      <section className={`course-top ${className}`}>
         <div className='container'>
            <div className='course-top__title display-3'>{name}</div>
            <div className='course-top__bottom'>
               <div className='course-top__left'>
                  <div className='course-top__user'>
                     <img src={getURL.img(avatar)} alt='' />
                     <span>
                        {first_name || trainerName} {last_name}
                     </span>
                  </div>
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
