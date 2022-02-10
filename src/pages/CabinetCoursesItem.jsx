import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button, Loader } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { RouteNames } from 'routes'
import { Tabs } from 'components'
import CoursesTabsLessons from 'components/CoursesTabs/CoursesTabsLessons'
import CoursesTabsStudents from 'components/CoursesTabs/CoursesTabsStudents'
import CoursesTabsReport from 'components/CoursesTabs/CoursesTabsReport'
import CoursesTabsNotifications from 'components/CoursesTabs/CoursesTabsNotifications'
import { useMemo } from 'react'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { hasAccess } from 'utils'
import { ROLES } from 'constants'

const CoursesItem = () => {
   const { courseId } = useParams()
   const { resetCourses, fetchInfo } = useDispatch()
   const role = useSelector(authSelectors.getRolesId)
   const course = useSelector(coursesSelectors.getCourse)
   // const modules = useSelector(({ courses }) => courses.modules)
   // const info = useSelector(({ courses }) => courses.info)

   const fetchInfoRequest = useRequest({
      request: fetchInfo,
   })
   useEffect(() => {
      fetchInfoRequest.call({ courseId })
      return () => {
         resetCourses({})
      }
   }, [])

   const tabItems = useMemo(
      () => [
         { title: 'Уроки', notifications: 0, component: <CoursesTabsLessons /> },
         { title: 'Ученики', notifications: 0, component: <CoursesTabsStudents /> },
         { title: 'Статистика', notifications: 0, component: <CoursesTabsReport /> },
         { title: 'Уведомления', notifications: 1, component: <CoursesTabsNotifications />, hasAccess: hasAccess(role, [ROLES.TRAINER]) },
      ],
      [],
   )

   return (
      <>
         {fetchInfoRequest.isLoading ? (
            <Loader />
         ) : (
            <section className='lkt-course'>
               <div className='container'>
                  <div className='lkt-course__inner'>
                     <div className='breadcrumbs'>
                        <Link to={RouteNames.CABINET_COURSES} className='breadcrumbs__item'>
                           Мои курсы
                        </Link>
                     </div>
                     <div className='lkt-course__top'>
                        <h1 className='lkt-course__title display-3'>{course.name}</h1>
                        <div className='lkt-course__nav'>
                           <button className='lkt-course__history'>История редактирования</button>
                           <Button to={`${RouteNames.CABINET_COURSES}/${courseId}/edit`} className='lkt-course__edit' outline link>
                              <EditSvg />
                              <span>Редактировать курс</span>
                           </Button>
                        </div>
                     </div>
                     <Tabs items={tabItems} classPrefix='lkt-course' />
                  </div>
               </div>
            </section>
         )}
      </>
   )
}

export default CoursesItem
