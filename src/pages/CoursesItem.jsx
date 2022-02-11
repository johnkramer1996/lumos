import React, { useEffect, useRef } from 'react'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { CoursesItemFeedback, CoursesItemInfo, CoursesItemInfo2, CoursesItemPopular, CoursesItemSeo, CoursesItemTop, CoursesItemVariants } from 'components'
import { Loader } from 'components/ui'
import { useSelector } from 'react-redux'
import { authSelectors, frontCoursesSelectors } from 'store/selectors'

const CoursesItem = () => {
   const { courseId } = useParams()
   const { resetFrontCourses, fetchFrontCourse, addUserToCourse, setIsShow, setContent } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const { id: user_id } = useSelector(authSelectors.getUser)
   const course = useSelector(frontCoursesSelectors.getCourse)
   const { id, users = [] } = course
   const enrolledCourse = !!users.find(({ id }) => +id === +user_id)

   const fetchFrontCourseRequest = useRequest({
      request: fetchFrontCourse,
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
      return () => resetFrontCourses({})
   }, [])

   const onEnroll = () => {
      if (!rolesId.length) {
         setIsShow(true)
         setContent({ title: 'Авторизируйтесь!' })
         return
      }
      if (enrolledCourse) {
         setIsShow(true)
         setContent({ title: 'Вы уже записаны на курс' })
         return
      }

      addUserToCourseRequest.call({ body: { user_id, course_id: id } })
   }

   return (
      <>
         {fetchFrontCourseRequest.isLoading ? (
            <Loader />
         ) : (
            <>
               <CoursesItemTop />
               <CoursesItemInfo onEnroll={onEnroll} />
               <CoursesItemInfo2 onEnroll={onEnroll} />
               <CoursesItemPopular />
               <CoursesItemFeedback />
               <CoursesItemVariants />
               <CoursesItemSeo />
            </>
         )}
      </>
   )
}

export default CoursesItem
