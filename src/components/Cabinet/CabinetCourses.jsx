import React, { useEffect } from 'react'
import { CabinetCoursesEmployee, CabinetCoursesTrainer, CabinetCoursesUser, CabinetGreet } from 'components'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest } from 'hooks'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { getRequest } from 'utils'

const CabinetCourses = () => {
   const { fetchCourses, fetchUserCourses } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const courses = useSelector(coursesSelectors.getCourses)
   const data = useSelector(coursesSelectors.getData)
   const typeShow = useSelector(({ settings }) => settings.typeShow)

   const fetchUserCoursesRequest = useRequest({
      request: fetchUserCourses,
   })
   const fetchCoursesRequest = useRequest({
      request: fetchCourses,
   })
   const roleRequests = getRequest([fetchUserCoursesRequest, fetchCoursesRequest], rolesId)

   console.log(roleRequests)

   useEffect(() => {
      const body = [{}, { page: 1, limit: 3 }][rolesId - 1]
      roleRequests?.call(body)
   }, [])

   // TODO ???
   //  const ActivePage = [CabinetCoursesUser, CabinetCoursesTrainer, CabinetCoursesEmployee][rolesId - 1]

   return (
      <>
         <div className='lkt-courses'>
            {/* <CabinetGreet /> */}
            <CabinetTitle title={'Мои курсы'} isBtnAll={false} />
            <CabinetNav total={data.total} />
            <CoursesItemWrapper items={courses} isLoading={roleRequests.isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} numberComponent={2} />
         </div>
      </>
   )

   // return React.createElement(ActivePage, { isLoading: fetchCoursesRequest.isLoading }, null)
}

export default CabinetCourses
