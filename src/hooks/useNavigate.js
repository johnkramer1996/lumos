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
         toCoursesItem: (params) => navigate(getURL.coursesItem(params)),
         toEventssItem: (params) => navigate(getURL.eventsItem(params)),
         toCabinet: () => navigate(getURL.cabinet()),
         toCabinetCourses: () => navigate(getURL.cabinetCourses()),
         toCabinetEvents: () => navigate(getURL.cabinetEvents()),
         toCabinetCoursesAdd: () => navigate(getURL.cabinetCoursesAdd()),
         toCabinetEventsAdd: () => navigate(getURL.cabinetEventsAdd()),
         toCabinetCoursesEdit: (params) => navigate(getURL.cabinetCoursesEdit(params)),
         toCabinetEventsEdit: (params) => navigate(getURL.cabinetEventsEdit(params)),
      }),
      [],
   )
}

export default useDispatch
