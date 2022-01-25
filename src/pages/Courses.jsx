import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allActionCreators } from 'store/reducers/action-creators'
import { Courses as CoursesComponent } from 'components/'

const Courses = () => {
    const dispatch = useDispatch()
    const { fetchCourses } = allActionCreators
    const { courses } = useSelector((state) => state)

    useEffect(() => {
        dispatch(fetchCourses())
    }, [])

    console.log(courses)

    return (
        <>
            <CoursesComponent items={courses.info?.data?.data} />
        </>
    )
}

export default Courses
