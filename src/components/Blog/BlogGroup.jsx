import NewsItem from 'components/News/NewsItem'
import { Button } from 'components/ui'
import React from 'react'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'

const BlogGroup = ({ items = [], title = '' }) => {
   return (
      <div className='blog__group'>
         <div className='blog__group-top'>
            <h2 className='blog__title display-3'>{title}</h2>
            <Button className='blog__all' outline>
               Показать все
            </Button>
         </div>

         <div className='blog__items'>
            {items.map(({ category, ...props }) => (
               <NewsItem key={props.id} {...props} />
            ))}
         </div>
      </div>
   )
}

export default BlogGroup
