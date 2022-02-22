import CoursesLessonTest from 'components/CoursesLessonTest/CoursesLessonTest'
import { Button, Loader } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { getRequest, getURL } from 'utils'

const CabinetCoursesLessonTest = () => {
   const { courseId, lessonId } = useParams()
   const { resetCourses, fetchLesson, fetchUserLessonTest } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const { name: courseName = '' } = useSelector(coursesSelectors.getCourse)
   const lesson = useSelector(coursesSelectors.getLesson)

   const roleRequest = useMemo(() => getRequest([fetchUserLessonTest, fetchLesson], rolesId), [])
   const fetchLessonRequests = useRequest({
      request: roleRequest,
      loading: true,
   })

   useEffect(() => {
      fetchLessonRequests.call({ courseId, lessonId })
      return () => resetCourses()
   }, [])

   return (
      <section className='test-page'>
         <div className='container'>
            <div className='breadcrumbs'>
               <Link to={getURL.cabinetCourses({}, rolesId)} className='breadcrumbs__item'>
                  Мои курсы
               </Link>
               <Link to={getURL.cabinetCoursesItem({ courseId }, rolesId)} className='breadcrumbs__item'>
                  {courseName}
               </Link>
            </div>
            <h1 className='test-page__title display-3'>Выберите правильные варианты</h1>
            <CoursesLessonTest isLoading={fetchLessonRequests.isLoading} />
         </div>
      </section>
   )
}

export default CabinetCoursesLessonTest
