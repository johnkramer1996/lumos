import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { coursesSelectors } from 'store/selectors'
import CoursesTabsStudentsItem from './CoursesTabsStudentsItem'
import { ReactComponent as ArrowChangeSvg } from 'svg/arrow-change.svg'

const CoursesTabsStudents = () => {
   const course = useSelector(coursesSelectors.getCourse)
   const users = course.users || []
   const [sort, setSort] = useState(false)

   console.log(course)

   return (
      <div className='students-tab'>
         <div className='students-tab__top'>
            <div className='students-tab__title'>11 учеников</div>
            <button className='students-tab__btn'>
               <span>Сначала новые</span>
               <ArrowChangeSvg />
            </button>
         </div>
         <div className='students-tab__items'>
            {users.map((props, index) => (
               <CoursesTabsStudentsItem key={props.id} {...props} />
            ))}
         </div>
      </div>
   )
}

export default CoursesTabsStudents
