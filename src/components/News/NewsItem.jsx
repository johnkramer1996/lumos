import React from 'react'
import { RouteNames } from 'routes'
import { getFullName, getURL } from 'utils'
import { ReactComponent as CommentsSvg } from 'svg/comments.svg'
import { Link } from 'react-router-dom'

const NewsItem = ({ id, image, category, title, description, user, views }) => {
   return (
      <div className='blog__item'>
         <div className='blog-card'>
            <div className='blog-card__img img img--cover'>
               <img src={getURL.img(image)} alt='' />
            </div>
            <div className='blog-card__content'>
               <div className='blog-card__category'>{category}</div>
               <Link to={getURL.blogItem({ blogId: id })} className='blog-card__title'>
                  {title}
               </Link>
               <div className='blog-card__desc'>{description}</div>
               <div className='blog-card__bottom'>
                  <div className='blog-card__name'>
                     <img src='/assets/img/avatar5.jpg' alt='' />
                     {/* <span>{getFullName(user)}</span> */}
                  </div>
                  <div className='blog-card__comments'>
                     <CommentsSvg />
                     <span>{views}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NewsItem
