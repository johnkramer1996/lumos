import { useMemo } from 'react'
import { useNavigate as useNavigateRouterDom } from 'react-router-dom'
import { RouteNames } from 'routes'
import { getURL } from 'utils'

const useDispatch = () => {
   const navigate = useNavigateRouterDom()

   return useMemo(
      () => ({
         toError: () => navigate(RouteNames.ERROR),
         toContacts: () => navigate(RouteNames.CONTACTS),
         toCourses: () => navigate(getURL.courses()),
         toCoursesItem: (params) => navigate(getURL.coursesItem(params)),
         toEventsItem: (params) => navigate(getURL.eventsItem(params)),
         toCabinet: () => navigate(getURL.cabinet()),
         toCabinetCourses: () => navigate(getURL.cabinetCourses()),
         toCabinetEvents: () => navigate(getURL.cabinetEvents()),
         toCabinetCoursesEdit: (params) => navigate(getURL.cabinetCoursesEdit(params)),
         toCabinetCoursesAdd: () => navigate(getURL.cabinetCoursesAdd()),
         toCabinetEventsAdd: () => navigate(getURL.cabinetEventsAdd()),
         toCabinetEventsEdit: (params) => navigate(getURL.cabinetEventsEdit(params)),
         navigate,
      }),
      [],
   )
}

export default useDispatch
