import BlogCard from 'components/Blog/BlogCard'
import { Button } from 'components/ui'
import React from 'react'

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
               <BlogCard key={props.id} {...props} />
            ))}
         </div>
      </div>
   )
}

export default BlogGroup
