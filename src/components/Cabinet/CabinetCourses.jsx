import React, { useEffect } from 'react'
import { CabinetCoursesEmployee, CabinetCoursesTrainer, CabinetCoursesUser } from 'components'
import { useDispatch, useRequest } from 'hooks'
import { useSelector } from 'react-redux'

const CabinetCourses = () => {
    const { fetchCourses } = useDispatch()
    const roles = useSelector(({ auth }) => auth.user.roles)
    const fetchCoursesRequest = useRequest({
        request: fetchCourses,
    })
    useEffect(() => fetchCoursesRequest.call({ page: 1, limit: 1000 }), [])

    const ActivePage = [CabinetCoursesUser, CabinetCoursesTrainer, CabinetCoursesEmployee][(roles[0]?.pivot?.role_id || 1) - 1]

    return React.createElement(ActivePage, { isLoading: fetchCoursesRequest.isLoading }, null)
}

export default CabinetCourses
