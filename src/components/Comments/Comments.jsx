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
   const { fetchUserLessonComments, addComment, setIsShow, setContent } = useDispatch()
   const commentsData = useSelector(coursesSelectors.getCommentsData)
   const comments = useSelector(coursesSelectors.getComments)
   const user = useSelector(authSelectors.getUser)
   const { avatar } = user

   const comment = useInput({ is: { isTextarea: true } })
   const [countVisible, setCountVisible] = useState(5)
   const countShowAdd = 4

   const newestComments = [...comments].reverse().map((comment) => (!comment.user && comment.user_id === user.id ? { ...comment, user } : comment))

   const fetchUserLessonCommentsRequest = useRequest({
      request: fetchUserLessonComments,
   })
   const addCommentRequest = useRequest({
      request: addComment,
      success: () => {
         setIsShow(true)
         setContent({ title: 'Комментарий добавлен', descr: '' })
         comment.clear()
      },
   })

   useEffect(() => {
      fetchUserLessonCommentsRequest.call({ courseId, lessonId })
   }, [courseId, lessonId])

   const onAddComment = (e) => {
      e.preventDefault()

      const body = {
         text: comment.value,
      }

      if (!body.text) return
      if (body.text.length < 5) return

      addCommentRequest.call({ courseId, lessonId, body })
   }

   return (
      <div>
         {fetchUserLessonCommentsRequest.isLoading ? (
            <Loader />
         ) : (
            <div className='blog-comments'>
               <h2 className='blog-comments__title'>
                  {newestComments.length} {declOfNum(newestComments.length, getDeclOfArray['comments'])}
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
                        {newestComments.slice(0, countVisible).map((props, index) => (
                           <CommentsItem key={props.id || index} {...props} />
                        ))}
                     </div>
                     {/* <div className='blog-comments__sub'>
							 <CommentsItem />
							 <CommentsItem />
							 <CommentsItem />
						</div> */}
                     {newestComments.length > countVisible && (
                        <div className='blog-comments__sub'>
                           <button className='blog-comments__more' onClick={() => setCountVisible(countVisible + countShowAdd)}>
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
