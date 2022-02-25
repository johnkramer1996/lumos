import React, { useEffect, useState } from 'react'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { CoursesItemFeedback, CoursesItemInfo, CoursesItemInfo2, CoursesItemPopular, CoursesItemSeo, CoursesItemTop, CoursesItemVariants } from 'components'
import { Loader, LoaderWrapper } from 'components/ui'
import { useSelector } from 'react-redux'
import { authSelectors, frontCoursesSelectors } from 'store/selectors'

const CoursesItem = () => {
   const { courseId } = useParams()
   const { resetFrontCourses, fetchFrontCourse, fetchFrontAuthCourse, addUserToCourse, setIsShow, setContent } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)
   const rolesId = useSelector(authSelectors.getRolesId)
   const { id: user_id } = useSelector(authSelectors.getUser)
   const course = useSelector(frontCoursesSelectors.getCourse)
   const { id } = course
   const users = course.is_user || {}

   const [isEnrolledPage, setIsEnrolledPage] = useState(false)

   useEffect(() => {
      setIsEnrolledPage(+users.user_id === +user_id)
   }, [course])

   const fetchFrontCourseRequest = useRequest({
      request: isAuth ? fetchFrontAuthCourse : fetchFrontCourse,
      loading: true,
   })
   const addUserToCourseRequest = useRequest({
      request: addUserToCourse,
      success: () => {
         setIsShow(true)
         setContent({ title: 'Успешно добавлен' })
      },
   })

   useEffect(() => {
      fetchFrontCourseRequest.call({ courseId })
      return () => resetFrontCourses()
   }, [])

   const onEnroll = () => {
      if (!rolesId.length) {
         setIsShow(true)
         setContent({ title: 'Авторизируйтесь!' })
         return
      }
      if (isEnrolledPage) {
         setIsShow(true)
         setContent({ title: 'Вы уже записаны на курс' })
         return
      }
      setIsEnrolledPage(true)

      addUserToCourseRequest.call({ body: { user_id, course_id: id } })
   }

   console.log('update')

   return (
      <>
         <LoaderWrapper isLoading={fetchFrontCourseRequest.isLoading}>
            <>
               <CoursesItemTop />
               <CoursesItemInfo onEnroll={onEnroll} isEnrolledPage={isEnrolledPage} />
               <CoursesItemInfo2 onEnroll={onEnroll} isEnrolledPage={isEnrolledPage} />
               <CoursesItemPopular />
               <CoursesItemFeedback />
               <CoursesItemVariants />
               <CoursesItemSeo />
            </>
         </LoaderWrapper>
      </>
   )
}

export default CoursesItem
