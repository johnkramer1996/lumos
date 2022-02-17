import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Button, Loader } from 'components/ui'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { RouteNames } from 'routes'
import { Tabs } from 'components'
import CoursesItemTabLessons from 'components/CoursesItemTabLessons/CoursesItemTabLessons'
import CoursesItemTabStudents from 'components/CoursesItemTabStudents/CoursesItemTabStudents'
import CoursesItemTabReport from 'components/CoursesItemTabReport/CoursesItemTabReport'
import CoursesItemTabNotifications from 'components/CoursesItemTabNotifications/CoursesItemTabNotifications'
import { useMemo } from 'react'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { getURL, hasAccess } from 'utils'
import { ROLES } from 'constants'

const CabinetCoursesItem = () => {
   const { courseId } = useParams()
   const { toCoursesItem } = useNavigate()
   const { resetCourses, fetchInfo } = useDispatch()
   const role = useSelector(authSelectors.getRolesId)
   const user = useSelector(authSelectors.getUser)
   const { id: user_id } = user
   const course = useSelector(coursesSelectors.getCourse)
   const { name, user_id: page_user_id } = course

   const fetchInfoRequest = useRequest({
      request: fetchInfo,
   })

   useEffect(() => {
      fetchInfoRequest.call({ courseId })
      return () => resetCourses()
   }, [])

   useEffect(() => {
      const isUserPage = user_id === page_user_id
      if (!fetchInfoRequest.isLoading && !isUserPage) toCoursesItem({ courseId })
   }, [fetchInfoRequest.isLoading])

   const tabItems = useMemo(
      () => [
         { title: 'Уроки', notifications: 0, component: <CoursesItemTabLessons /> },
         { title: 'Ученики', notifications: 0, component: <CoursesItemTabStudents /> },
         { title: 'Статистика', notifications: 0, component: <CoursesItemTabReport /> },
         { title: 'Уведомления', notifications: 1, component: <CoursesItemTabNotifications />, hasAccess: hasAccess(role, [ROLES.TRAINER]) },
      ],
      [],
   )

   return (
      <>
         {/* // TODO EACH  BLOCKS LOADER  */}
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
                        <h1 className='lkt-course__title display-3'>{name}</h1>
                        <div className='lkt-course__nav'>
                           <button className='lkt-course__history'>История редактирования</button>
                           <Button to={getURL.parseURL(RouteNames.CABINET_COURSES_EDIT, { courseId })} className='lkt-course__edit' outline link>
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

export default CabinetCoursesItem
