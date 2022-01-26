import React, { useEffect } from 'react'
import { Courses as CoursesComponent } from 'components/'
import { useDispatch, useSelector } from 'hooks'
import { useParams } from 'react-router-dom'

const Courses = () => {
    const { id } = useParams()
    const { fetchCourses } = useDispatch()
    const { courses } = useSelector()

    useEffect(() => fetchCourses({ page: 1, limit: 100 }), [])

    return (
        <>
            <CoursesComponent items={courses} />
        </>
    )
}

export default Courses
