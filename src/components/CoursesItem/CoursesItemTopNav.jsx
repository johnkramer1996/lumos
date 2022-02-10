import React from 'react'
// import { ReactComponent as LikeSvg } from 'svg/like.svg'
import { ReactComponent as ShareSvg } from 'svg/share.svg'
import { ReactComponent as FavoriteSvg } from 'svg/favorite.svg'
import { useSelector } from 'react-redux'
import { frontCoursesSelectors } from 'store/selectors'
import Like from 'svg/Like'
import { THEME_COLORS } from 'constants'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'

const CoursesItemTopNav = () => {
   const { courseId } = useParams()
   const { count_likes = 0, likes = [], isfavorite, is_liked, ...rest } = useSelector(frontCoursesSelectors.getCourse)
   const { addLike } = useDispatch()

   const addLikeRequest = useRequest({
      request: addLike,
      success: (data) => console.log(data),
   })

   const onLike = () => {
      console.log(123)
      addLikeRequest.call({ courseId })
   }

   return (
      <div className='course-top__nav'>
         <button className='course-top__nav-item course-top__like' onClick={onLike}>
            {is_liked ? <Like color={THEME_COLORS.ACCENT} fill /> : <Like />}
            <span>{count_likes}</span>
         </button>
         <button className='course-top__nav-item'>
            <ShareSvg />
            <span>Поделиться</span>
         </button>
         <button className='course-top__nav-item'>
            <FavoriteSvg />
            <span>В избранное</span>
         </button>
      </div>
   )
}

export default CoursesItemTopNav
