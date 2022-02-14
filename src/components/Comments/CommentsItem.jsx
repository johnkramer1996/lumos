import React from 'react'
import { getDate, getFullName, getURL } from 'utils'

const CommentsItem = ({ text, user = {}, updated_at }) => {
   const { avatar, first_name, last_name, name } = user || {}

   return (
      <div className='blog-comments__item'>
         <div className='blog-comments__avatar'>
            <img src={getURL.avatar(avatar)} alt='' />
         </div>
         <div className='blog-comments__item-content'>
            <div className='blog-comments__item-top'>
               <div className='blog-comments__item-name'>{getFullName({ first_name, last_name, name })}</div>
            </div>
            <div className='blog-comments__item-text'>{text}</div>
            <div className='blog-comments__item-bottom'>
               <div className='blog-comments__item-date'>{getDate(updated_at)}</div>
               <button className='blog-comments__item-btn'>Ответить</button>
            </div>
         </div>
      </div>
   )
}

export default CommentsItem
