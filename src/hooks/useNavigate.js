import { useMemo } from 'react'
import { useNavigate as useNavigateRouterDom } from 'react-router-dom'
import { RouteNames } from 'routes'

const useDispatch = () => {
    const navigate = useNavigateRouterDom()

    return useMemo(
        () => ({
            toItems: ({ type } = {}) => navigate(getTypeItems(type)),
            toCabinet: () => navigate(RouteNames.CABINET),
            toCabinetItems: ({ type } = {}) => navigate(getTypeItems(type)),
            toCabinetItemsAdd: ({ type } = {}) => navigate(`${getTypeItems(type)}/add`),
            toCabinetItemsEdit: ({ courseId, type } = {}) => navigate(`${getTypeItems(type)}/${courseId}/edit`),
            toCabinetItemsItem: ({ courseId, type } = {}) => navigate(`${getTypeItems(type)}/${courseId}`),
            toError: () => navigate(RouteNames.ERROR),
        }),
        [],
    )
}

const getTypeItems = (type = 'courses') => (type === 'courses' ? RouteNames.CABINET_COURSES : RouteNames.CABINET_EVENTS)

export default useDispatch
