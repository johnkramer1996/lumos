import React, { useEffect } from 'react'
import { useDispatch, useRequest } from 'hooks'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CoursesItemFeedback, CoursesItemInfo, CoursesItemInfo2, CoursesItemPopular, CoursesItemSeo, CoursesItemTop, CoursesItemVariants } from 'components'
import { Loader } from 'components/ui'

const CoursesItem = () => {
    const { courseId } = useParams()
    const { fetchFrontCourse } = useDispatch()

    const fetchFrontCourseRequest = useRequest({
        request: fetchFrontCourse,
    })
    useEffect(() => fetchFrontCourseRequest.call({ courseId }), [])

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
