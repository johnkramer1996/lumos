import { useNavigate as useNavigateRouterDom } from 'react-router-dom'
import { RouteNames } from 'routes'

const useDispatch = () => {
    const navigate = useNavigateRouterDom()
    return {
        toAddCourse: () => navigate(RouteNames.ADD_COURSE),
    }
}

export default useDispatch
