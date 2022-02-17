import { Loader } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React, { useMemo } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { getRequest, getURL } from 'utils'
import { Comments, CoursesLesson } from 'components'
import CoursesLessonComments from 'components/CoursesLesson/CoursesLessonComments'

const CabinetCoursesLesson = () => {
   const { courseId, lessonId } = useParams()
   const { fetchLesson, resetCourses, fetchUserLesson } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const course = useSelector(coursesSelectors.getCourse)
   const lesson = useSelector(coursesSelectors.getLesson)

   const { name: courseName } = course

   const roleRequest = useMemo(() => getRequest([fetchUserLesson, fetchLesson], rolesId), [])
   const fetchLessonRequest = useRequest({
      request: roleRequest,
   })

   useEffect(() => {
      fetchLessonRequest.call({ courseId, lessonId })
      return () => resetCourses()
   }, [courseId, lessonId])

   return (
      <section className='lesson-page'>
         <div className='container'>
            <div className='breadcrumbs'>
               <Link to={getURL.cabinetCourses(null, rolesId)} className='breadcrumbs__item'>
                  Мои курсы
               </Link>
               <Link to={getURL.cabinetCoursesItem({ courseId }, rolesId)} className='breadcrumbs__item'>
                  {/* // TODO REMOVE HARDCODE */}
                  {courseName || 'Название курса HARDCODE'}
               </Link>
            </div>

            <CoursesLesson isLoading={fetchLessonRequest.isLoading} />
            <CoursesLessonComments />
         </div>
      </section>
   )
}

export default CabinetCoursesLesson
