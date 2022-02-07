import React, { useEffect } from 'react'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { CoursesItemFeedback, CoursesItemInfo, CoursesItemInfo2, CoursesItemPopular, CoursesItemSeo, CoursesItemTop, CoursesItemVariants } from 'components'
import { Loader } from 'components/ui'

const CoursesItem = () => {
    const { courseId } = useParams()
    const { setFrontCourse, fetchFrontCourse } = useDispatch()

    const fetchFrontCourseRequest = useRequest({
        request: fetchFrontCourse,
    })
    useEffect(() => {
        fetchFrontCourseRequest.call({ courseId })

        return () => {
            setFrontCourse({})
        }
    }, [])

    return (
        <>
            {fetchFrontCourseRequest.isLoading ? (
                <Loader />
            ) : (
                <>
                    <CoursesItemTop />
                    <CoursesItemInfo />
                    <CoursesItemInfo2 />
                    <CoursesItemPopular />
                    <CoursesItemFeedback />
                    <CoursesItemVariants />
                    <CoursesItemSeo />
                </>
            )}
        </>
    )
}

export default CoursesItem
