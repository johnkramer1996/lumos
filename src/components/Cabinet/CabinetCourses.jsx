import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useQuery, useRequest } from 'hooks'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import { authSelectors, coursesSelectors, settingsSelectors } from 'store/selectors'
import { getRequest } from 'utils'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'

const CabinetCourses = () => {
   const location = useLocation()
   const query = useQuery()
   const { resetCourses, fetchCourses, fetchUserCourses } = useDispatch()
   const { setFilter } = useDispatch()
   const filter = useSelector(({ settings }) => settings.filter)
   const rolesId = useSelector(authSelectors.getRolesId)
   const courses = useSelector(coursesSelectors.getCourses)
   const data = useSelector(coursesSelectors.getData)
   const typeShow = useSelector(settingsSelectors.getTypeShow)

   const roleRequest = useMemo(() => getRequest([fetchUserCourses, fetchCourses], rolesId), [])
   const fetchCoursesRequests = useRequest({
      request: roleRequest,
   })

   useEffect(() => {
      const _features = query.getAll('features') ?? []
      const _ended = query.getAll('ended') ?? []
      const _nomoderated = query.getAll('nomoderated') ?? []
      const _moderated = query.getAll('moderated') ?? []
      fetchCoursesRequests.call({ page: 1, _limit: 30, _features, _ended, _nomoderated, _moderated })

      setFilter({ ...filter, _features, _ended, _nomoderated, _moderated })
      return () => {
         setFilter({})
         resetCourses()
      }
   }, [location])

   //  const ActivePage = [CabinetCoursesUser, CabinetCoursesTrainer, CabinetCoursesEmployee][rolesId - 1]
   // return React.createElement(ActivePage, { isLoading: fetchCoursesRequest.isLoading }, null)

   return (
      <>
         <div className='lkt-courses'>
            {/* {hasAccess(rolesId, [ROLES.USER]) && <CabinetGreet />} */}
            <CabinetTitle title={'Мои курсы'} isBtnAll={false} />
            {/* // TODO REMAKE TO HOC */}
            {!fetchCoursesRequests.isLoading && <CabinetNav total={data.total} />}
            <CoursesItemWrapper items={courses} isLoading={fetchCoursesRequests.isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} numberComponent={2} />
         </div>
      </>
   )
}

export default CabinetCourses
