import { useNavigate as useNavigateRouterDom } from 'react-router-dom'
import { RouteNames } from 'routes'

const useDispatch = () => {
    const navigate = useNavigateRouterDom()
    return {
        toAddCourse: () => navigate(RouteNames.ADD_COURSE),
        toAddCourseById: (id) => navigate(`${RouteNames.ADD_COURSE}/${id}`),
        toCourse: () => navigate(RouteNames.COURSES),
    }
}

export default useDispatch
