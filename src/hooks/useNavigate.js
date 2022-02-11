import { useMemo } from 'react'
import { useNavigate as useNavigateRouterDom } from 'react-router-dom'
import { RouteNames } from 'routes'
import { getURL } from 'utils'

const useDispatch = () => {
   const navigate = useNavigateRouterDom()

   return useMemo(
      () => ({
         toError: () => navigate(RouteNames.ERROR),
         toItems: ({ courseId, eventId, type = 'courses' }) => navigate(getURL.parseURL([RouteNames.COURSES_ITEM, RouteNames.EVENTS_ITEM][type === 'courses' ? 0 : 1], { courseId, eventId })),
         toCabinet: () => navigate(RouteNames.CABINET),
         toCabinetItems: ({ type } = {}) => navigate(getTypeItems(type)),
         toCabinetItemsAdd: ({ type } = {}) => navigate(`${getTypeItems(type)}/add`),
         toCabinetItemsEdit: ({ id, type } = {}) => navigate(`${getTypeItems(type)}/${id}/edit`),
         toCabinetItemsItem: ({ id, type } = {}) => navigate(`${getTypeItems(type)}/${id}`),
      }),
      [],
   )
}

const getTypeItems = (type = 'courses') => (type === 'courses' ? RouteNames.CABINET_COURSES : RouteNames.CABINET_EVENTS)

export default useDispatch
