import React from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import { getDate, getFullName, getURL } from 'utils'

const CommentsBoardItem = ({ id, text, user = {}, user_id, updated_at }) => {
   console.log(user)

   return (
      <div className='lessons-tab__comments-item lessons-tab__comments-item--new'>
         <div className='lessons-tab__comments-item-top'>
            <Link to={getURL.usersItem({ userId: user_id })} className='lessons-tab__comments-item-user'>
               <img src={getURL.avatar(user.avatar)} alt='' />
               <span>{getFullName(user)}</span>
            </Link>
            <div className='lessons-tab__comments-item-date'>{getDate(updated_at)}</div>
         </div>
         <div className='lessons-tab__comments-item-text'>{text}</div>
         <div className='lessons-tab__comments-item-title'>
            <span>01</span>
            <span>Название урока</span>
         </div>
      </div>
   )
}

export default CommentsBoardItem
