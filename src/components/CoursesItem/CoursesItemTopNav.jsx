import React from 'react'
import { ReactComponent as LikeSvg } from 'svg/like.svg'
import { ReactComponent as ShareSvg } from 'svg/share.svg'
import { ReactComponent as FavoriteSvg } from 'svg/favorite.svg'
import { useSelector } from 'react-redux'

const CoursesItemTopNav = () => {
   const { count_likes = 0 } = useSelector(({ frontCourses }) => frontCourses.course)

   return (
      <div className='course-top__nav'>
         <button className='course-top__nav-item course-top__like'>
            <LikeSvg />
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
