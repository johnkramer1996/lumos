import React, { useEffect } from 'react'
import { Courses as CoursesComponent } from 'components/'
import { useDispatch } from 'hooks'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useRequest from 'hooks/useRequest'

const Courses = () => {
    const { courseId } = useParams()
    const { fetchCourses } = useDispatch()
    const { themes = [] } = useSelector(({ system }) => system.references)
    const { data: allCourses = [] } = useSelector(({ courses }) => courses.courses)
    const fetchCoursesRequest = useRequest({
        request: fetchCourses,
    })
    useEffect(() => fetchCoursesRequest.call(), [])

    const isCourseId = courseId !== undefined
    const courses = isCourseId ? allCourses.filter((item) => item.format_study === +courseId) : allCourses
    const title = themes[isCourseId && +courseId - 1]?.name

    return (
        <>
            <CoursesComponent title={title} items={courses} isLoading={fetchCoursesRequest.isLoading} />
        </>
    )
}

export default Courses
