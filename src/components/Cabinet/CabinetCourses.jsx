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
import { cabinetLinks } from 'routes'

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
      const favorite = query.getAll('favorite') ?? []
      fetchCoursesRequests.call({ page: 1, _limit: 9, _features, _ended, _nomoderated, _moderated, favorite })

      setFilter({ ...filter, _features, _ended, _nomoderated, _moderated, favorite })

      return () => {
         setFilter({})
         resetCourses()
      }
   }, [location])

   return (
      <>
         <div className='cabinet-page'>
            {/* {hasAccess(rolesId, [ROLES.USER]) && <CabinetGreet />} */}
            <CabinetTitle title={'Мои курсы'} isBtnAll={false} />
            {/* {title} */}
            {/* // TODO REMAKE TO HOC */}
            <CabinetNav total={data.total} />
            <CoursesItemWrapper
               isLoading={fetchCoursesRequests.isLoading}
               items={courses}
               rolesId={rolesId}
               numberComponent={2}
               isToCabinet={true}
               className={`cabinet-page__items cabinet-page__items--${typeShow}`}
            />
         </div>
      </>
   )
}

export default CabinetCourses
