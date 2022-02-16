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

   const { current_page, last_page, total } = commentsData.data || {}
   const { count_new, lesson_new = [] } = commentsData

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

   modules.forEach(({ lessons }) => lessons.forEach((lesson) => (lesson.countNewComments = lesson_new.find(({ course_lesson_id }) => course_lesson_id === lesson.id)?.new_count || 0)))

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
                     {lessons.map(({ id, name, countNewComments }) => (
                        <Link key={id} to={getURL.cabinetCoursesLesson({ courseId, lessonId: id })} className='lessons-tab__module-item'>
                           <span className='lessons-tab__module-item-num'>01</span>
                           <span className='lessons-tab__module-item-title'>{name}</span>
                           {!!countNewComments && <span className='lessons-tab__module-item-notification'>{countNewComments}</span>}
                        </Link>
                     ))}
                  </div>
               </div>
            ))}
         </div>
         <div className='lessons-tab__right'>
            <CommentsBoard isLoading={fetchCommentsRequest.isLoading} items={comments} newTotal={count_new} isShowBtn={last_page !== current_page} onShowMore={onShowMoreComments} />
         </div>
      </div>
   )
}

export default CoursesTabsLessons
