import CommentsItem from 'components/Comments/CommentsItem'
import CommentsBoard from 'components/CommentsBoard/CommentsBoard'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RouteNames } from 'routes'
import { authSelectors, coursesSelectors } from 'store/selectors'
import { declOfNum, getDeclOfArray, getURL } from 'utils'

const CoursesTabsLessons = () => {
   const { courseId } = useParams()
   const { resetComments, fetchComments } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const commentsData = useSelector(coursesSelectors.getCommentsData)
   const comments = useSelector(coursesSelectors.getComments)

   const { current_page, last_page, total } = commentsData

   const [page, setPage] = useState(1)

   const fetchCommentsRequest = useRequest({ request: fetchComments })

   useEffect(() => {
      return () => {
         console.log('unmount')
         resetComments()
      }
   }, [])

   useEffect(() => {
      // TODO ADD LIMIT AND PAGE!!!
      fetchCommentsRequest.call({ courseId, page, _limit: 4 })
   }, [page])

   const onShowMoreComments = () => {
      setPage(page + 1)
   }

   console.log(commentsData)

   return (
      <div className='lessons-tab'>
         <div className='lessons-tab__left'>
            {modules.map(({ name, lessons }, index) => (
               <div key={index} className='lessons-tab__module'>
                  <div className='lessons-tab__module-top'>
                     <div className='lessons-tab__module-title'>{name}</div>
                     <div className='lessons-tab__module-num'>
                        {lessons?.length} {declOfNum(lessons?.length, getDeclOfArray['lessons'])}
                     </div>
                  </div>
                  <div className='lessons-tab__module-items'>
                     {lessons.map(({ id, name }) => (
                        <Link key={id} to={getURL.parseURL(RouteNames.CABINET_COURSES_LESSON, { courseId, lessonId: id })} className='lessons-tab__module-item'>
                           <span className='lessons-tab__module-item-num'>01</span>
                           <span className='lessons-tab__module-item-title'>{name}</span>
                           {/* <span className='lessons-tab__module-item-notification'>1</span> */}
                        </Link>
                     ))}
                  </div>
               </div>
            ))}
         </div>
         <div className='lessons-tab__right'>
            <CommentsBoard isLoading={fetchCommentsRequest.isLoading} items={comments} newTotal={total} isShowBtn={last_page !== current_page} onShowMore={onShowMoreComments} />
         </div>
      </div>
   )
}

export default CoursesTabsLessons
