import React from 'react'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/selectors'
import { hasAccess } from 'utils'
import { ROLES } from 'constants'

import { CoursesLessonNav, CoursesLessonTest, CoursesLessonText, CoursesLessonTop, CoursesLesssonFiles } from '.'

const CabinetCoursesLesson = () => {
   const rolesId = useSelector(authSelectors.getRolesId)

   return (
      <>
         <div className='lesson-page__top'>
            <CoursesLessonTop />
         </div>
         <div className='lesson-page__wrap'>
            <div className='lesson-page__left'>
               <CoursesLessonText />
            </div>
            <div className='lesson-page__right'>
               {hasAccess(rolesId, [ROLES.TRAINER, ROLES.EMPLOYEE]) && <CoursesLessonNav />}
               <CoursesLesssonFiles />
               {hasAccess(rolesId, [ROLES.USER]) && <CoursesLessonTest />}
            </div>
         </div>
      </>
   )
}

export default CabinetCoursesLesson
