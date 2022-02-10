import React, { useState } from 'react'
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
   const course = useSelector(frontCoursesSelectors.getCourse)
   const { addLike } = useDispatch()
   const [isLike, setIsLike] = useState(is_liked)
   const [countLikes, setCountLikes] = useState(count_likes)

   const addLikeRequest = useRequest({
      request: addLike,
   })

   const onLike = () => {
      setCountLikes(isLike ? countLikes - 1 : countLikes + 1)
      setIsLike(!isLike)
      addLikeRequest.call({ courseId })
   }

   return (
      <div className='course-top__nav'>
         <button className='course-top__nav-item course-top__like' onClick={onLike}>
            {isLike ? <Like color={THEME_COLORS.ACCENT} fill /> : <Like />}
            <span>{countLikes}</span>
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
