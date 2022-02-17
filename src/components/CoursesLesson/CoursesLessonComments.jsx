import { Comments } from 'components'
import { LIMIT } from 'constants'
import { useDispatch, useInput, useRequest } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { authSelectors, coursesSelectors } from 'store/selectors'

const CoursesLessonComments = () => {
   const { courseId, lessonId } = useParams()
   const { resetComments, fetchUserLessonComments, addComment, readComments } = useDispatch()
   const commentsData = useSelector(coursesSelectors.getCommentsData)
   const comments = useSelector(coursesSelectors.getComments)

   const { current_page, last_page, total } = commentsData || {}
   const isLastPage = current_page === last_page
   const limit = LIMIT.LESSON_COMMENTS
   const [page, setPage] = useState(1)

   const fetchUserLessonCommentsRequest = useRequest({
      request: fetchUserLessonComments,
      success: ({ response, prevData, data }) => {
         const comments_id = data.comments.data.filter(({ id, readed_at }) => !readed_at).map(({ id }) => id)
         comments_id.length && readCommentsRequest.call({ courseId, comments_id })
      },
   })
   const readCommentsRequest = useRequest({ request: readComments })
   const addCommentRequest = useRequest({ request: addComment })

   useEffect(() => fetchUserLessonCommentsRequest.call({ courseId, lessonId, page, _limit: limit }), [page])
   useEffect(() => () => resetComments(), [])

   const onAddHandle = (text) => {
      addCommentRequest.call({ courseId, lessonId, text })
   }

   const onShowMore = () => {
      setPage(page + 1)
   }

   return (
      <>{<Comments isLoading={fetchUserLessonCommentsRequest.isLoading} items={comments} limit={limit} total={total} isLastPage={isLastPage} onAddHandle={onAddHandle} onShowMore={onShowMore} />}</>
   )
}

export default CoursesLessonComments
