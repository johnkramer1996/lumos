import React, { useEffect } from 'react'
import { Courses as CoursesComponent, CoursesEmpty } from 'components/'
import { useDispatch, useNavigate, useSelector } from 'hooks'
import { useParams } from 'react-router-dom'

const Courses = () => {
    const { id } = useParams()
    const { fetchCourses } = useDispatch()
    const { courses: allCourses, themes } = useSelector()

    const isCourseId = id !== undefined
    const courses = isCourseId ? allCourses.filter((item) => item.format_study === +id) : allCourses
    const title = themes[isCourseId && +id - 1]?.name
    useEffect(() => fetchCourses(), [])

    return (
        <>
            <CoursesComponent title={title} items={courses} />
        </>
    )
}

export default Courses
