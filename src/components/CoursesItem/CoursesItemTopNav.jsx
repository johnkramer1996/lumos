import React, { useState } from 'react'
// import { ReactComponent as LikeSvg } from 'svg/like.svg'
import { ReactComponent as ShareSvg } from 'svg/share.svg'
import Like from 'svg/Like'
import Favorite from 'svg/Favorite'
import { THEME_COLORS } from 'constants'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'

const CoursesItemTopNav = ({ course = {} }) => {
   const { courseId } = useParams()
   const { addLike, addFavorite } = useDispatch()
   const { count_likes = 0, is_liked, isfavorite } = course
   const [isLike, setIsLike] = useState(is_liked)
   const [countLikes, setCountLikes] = useState(count_likes)
   const [isFavorite, setIsFavorite] = useState(isfavorite)

   const addLikeRequest = useRequest({ request: addLike })
   const addFavoriteRequest = useRequest({ request: addFavorite })

   const onLike = () => {
      setCountLikes(isLike ? countLikes - 1 : countLikes + 1)
      setIsLike(!isLike)
      addLikeRequest.call({ courseId })
   }
   const onFavorite = () => {
      setIsFavorite(!isFavorite)
      addFavoriteRequest.call({ courseId })
   }

   console.log(course)

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
         <button className='course-top__nav-item' onClick={onFavorite}>
            {isFavorite ? <Favorite color={THEME_COLORS.ACCENT} fill /> : <Favorite />}
            <span>{isFavorite ? 'В избранном' : 'В избранное'}</span>
         </button>
      </div>
   )
}

export default CoursesItemTopNav
