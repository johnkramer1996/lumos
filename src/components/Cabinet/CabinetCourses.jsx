import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useQuery, useRequest } from 'hooks'
import CabinetTitle from './CabinetTitle'
import CabinetNav from './CabinetNav'
import CoursesItemWrapper from 'components/Courses/CoursesItemWrapper'
import { authSelectors, coursesSelectors, settingsSelectors } from 'store/selectors'
import { getRequest } from 'utils'
import { useLocation } from 'react-router-dom'
import { CoursesCardCabinet, CoursesCardsWrapper } from 'components'

const CabinetCourses = () => {
   const location = useLocation()
   const query = useQuery()
   const { resetCourses, fetchCourses, fetchUserCourses, setFilter } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const filter = useSelector(settingsSelectors.getFilter)
   const typeShow = useSelector(settingsSelectors.getTypeShow)
   const courses = useSelector(coursesSelectors.getCourses)
   const data = useSelector(coursesSelectors.getData)

   const routeName = getRequest(['cabinetCoursesLessons', 'cabinetCoursesItem'], rolesId)

   const roleRequest = useMemo(() => getRequest([fetchUserCourses, fetchCourses], rolesId), [])
   const fetchCoursesRequests = useRequest({
      request: roleRequest,
      loading: true,
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
            <CabinetNav total={data.total} />
            <CoursesCardsWrapper isLoading={fetchCoursesRequests.isLoading} className={`cabinet-page__items cabinet-page__items--${typeShow}`} items={courses}>
               {courses.map((props, index) => (
                  <CoursesCardCabinet key={props.id || index} {...props} rolesId={rolesId} routeName={routeName} />
               ))}
            </CoursesCardsWrapper>
         </div>
      </>
   )
}

export default CabinetCourses
