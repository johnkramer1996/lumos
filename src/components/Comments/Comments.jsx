import { Button, Input, Loader } from 'components/ui'
import { useDispatch, useInput, useRequest } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { ReactComponent as ArrowDownSvg } from 'svg/edit.svg'
import { declOfNum, getDeclOfArray, getURL } from 'utils'
import CommentsItem from './CommentsItem'

const Comments = () => {
   const { courseId, lessonId } = useParams()
   const { resetComments, fetchUserLessonComments, addComment, readComments, setIsShow, setContent } = useDispatch()
   const commentsData = useSelector(coursesSelectors.getCommentsData)
   const comments = useSelector(coursesSelectors.getComments)
   const user = useSelector(authSelectors.getUser)

   const { avatar } = user
   const { current_page, last_page, total } = commentsData || {}
   const isLastPage = current_page === last_page
   const limit = 4
   const countShowAdd = comments.length + limit < total ? 4 : total - comments.length
   comments[0]?.user_id === user.id && (comments[0].user = user) // added comment

   const comment = useInput({ is: { isTextarea: true } })
   const [page, setPage] = useState(1)

   const fetchUserLessonCommentsRequest = useRequest({
      request: fetchUserLessonComments,
      success: ({ response, prevData, data }) => {
         const comments_id = data.comments.data.filter(({ id, readed_at }) => !readed_at).map(({ id }) => id)
         comments_id.length && readCommentsRequest.call({ courseId, comments_id })
      },
   })
   const readCommentsRequest = useRequest({
      request: readComments,
      success: (data) => {
         console.log(data)
      },
   })
   const addCommentRequest = useRequest({
      request: addComment,
      success: () => {
         comment.clear()
      },
   })

   useEffect(
      () => () => {
         console.log('unmount')
         resetComments()
      },
      [],
   )

   useEffect(() => {
      console.log('call')
      fetchUserLessonCommentsRequest.call({ courseId, lessonId, page, _limit: limit })
   }, [page])

   const onAddComment = (e) => {
      e.preventDefault()
      const text = comment.value
      if (!text) return
      if (text.length < 5) return
      addCommentRequest.call({ courseId, lessonId, text })
   }

   const onShowMoreComments = () => {
      setPage(page + 1)
   }

   return (
      <div>
         {!comments.length && fetchUserLessonCommentsRequest.isLoading ? (
            <Loader />
         ) : (
            <div className='blog-comments'>
               <h2 className='blog-comments__title'>
                  {total} {declOfNum(total, getDeclOfArray['comments'])}
               </h2>
               <div className='blog-comments__inner'>
                  <form className='blog-comments__top' onSubmit={onAddComment}>
                     <div className='blog-comments__avatar'>
                        <img src={getURL.avatar(avatar)} alt='' />
                     </div>
                     <Input input={comment} placeholder='Написать комментарий или задать вопрос...' onBlur={onAddComment} withoutWrapper />
                  </form>
                  <div className='blog-comments__group'>
                     <div className='blog-comments__main'>
                        {comments.map((props, index) => (
                           <CommentsItem key={props.id || index} {...props} />
                        ))}
                     </div>
                     {fetchUserLessonCommentsRequest.isLoading && <Loader />}
                     {/* <div className='blog-comments__sub'>
							 <CommentsItem />
							 <CommentsItem />
							 <CommentsItem />
						</div> */}
                     {!isLastPage && (
                        <div className='blog-comments__sub'>
                           <button className='blog-comments__more' onClick={onShowMoreComments}>
                              <ArrowDownSvg />
                              <span>Показать еще {countShowAdd} комментария</span>
                           </button>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default Comments
