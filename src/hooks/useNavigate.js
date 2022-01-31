import { useMemo } from 'react'
import { useNavigate as useNavigateRouterDom } from 'react-router-dom'
import { RouteNames } from 'routes'

const useDispatch = () => {
    const navigate = useNavigateRouterDom()

    return useMemo(
        () => ({
            toCourse: () => navigate(RouteNames.COURSES),
            toCabinet: () => navigate(RouteNames.CABINET),
            toCabinetCourses: () => navigate(RouteNames.CABINET_COURSES),
            toCabinetCoursesAdd: () => navigate(RouteNames.CABINET_COURSES_ADD),
            toCabinetCoursesEdit: ({ courseId }) => navigate(`${RouteNames.CABINET_COURSES}/${courseId}/edit`),
            toCabinetCoursesItem: ({ courseId }) => navigate(`${RouteNames.CABINET_COURSES}/${courseId}`),
            toError: () => navigate(RouteNames.ERROR),
        }),
        [],
    )
}

export default useDispatch
