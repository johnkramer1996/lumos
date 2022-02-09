import React, { useEffect } from 'react'
import { CabinetCoursesEmployee, CabinetCoursesTrainer, CabinetCoursesUser, CabinetGreet } from 'components'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest } from 'hooks'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'

const CabinetCourses = () => {
   const { fetchCourses, fetchUserCourses } = useDispatch()
   const role = useSelector(({ auth }) => auth.role)
   const courses = useSelector(({ courses }) => courses.courses)
   const data = useSelector(({ courses }) => courses.data)
   const typeShow = useSelector(({ settings }) => settings.typeShow)
   const fetchUserCoursesRequest = useRequest({
      request: fetchUserCourses,
   })
   const fetchCoursesRequest = useRequest({
      request: fetchCourses,
   })
   useEffect(() => {
      const roleRequests = [fetchUserCoursesRequest, fetchCoursesRequest][role - 1]
      const body = [{}, { page: 1, limit: 1000 }][role - 1]
      roleRequests?.call(body)
   }, [])
   const isLoading = fetchUserCoursesRequest.isLoading && fetchCoursesRequest.isLoading

   console.log(isLoading, courses)

   const ActivePage = [CabinetCoursesUser, CabinetCoursesTrainer, CabinetCoursesEmployee][role - 1]

   return (
      <>
         <div className='lkt-courses'>
            {/* <CabinetGreet /> */}
            <CabinetTitle title={'Мои курсы'} isBtnAll={false} />
            <CabinetNav total={data.total} />
            <CoursesItemWrapper items={courses} isLoading={isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} numberComponent={2} />
         </div>
      </>
   )

   // return React.createElement(ActivePage, { isLoading: fetchCoursesRequest.isLoading }, null)
}

export default CabinetCourses
