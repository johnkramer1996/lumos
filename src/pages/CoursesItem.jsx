import React, { useEffect } from 'react'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { CoursesItemFeedback, CoursesItemInfo, CoursesItemInfo2, CoursesItemPopular, CoursesItemSeo, CoursesItemTop, CoursesItemVariants } from 'components'
import { Loader } from 'components/ui'
import { useSelector } from 'react-redux'

const CoursesItem = () => {
   const { courseId } = useParams()
   const { setFrontCourse, fetchFrontCourse, addUserToCourse } = useDispatch()
   const { id: user_id } = useSelector(({ auth }) => auth.user)
   const { id, ...rest } = useSelector(({ frontCourses }) => frontCourses.course)

   const fetchFrontCourseRequest = useRequest({
      request: fetchFrontCourse,
   })
   const addUserToCourseRequest = useRequest({
      request: addUserToCourse,
      success: (data) => {
         console.log(data)
      },
      error: (data) => {
         console.log(data)
      },
   })

   useEffect(() => {
      fetchFrontCourseRequest.call({ courseId })

      return () => {
         setFrontCourse({})
      }
   }, [])

   const onEnroll = () => {
      console.log(user_id, id)
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
