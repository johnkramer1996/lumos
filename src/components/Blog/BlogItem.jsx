import { Share } from 'components'
import { Loader } from 'components/ui'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { frontStaticSelectors } from 'store/selectors'
import { getURL } from 'utils'
import BlogComments from './BlogComments'
import BlogGroup from './BlogGroup'

const BlogItem = ({ isLoading, title, image, text, interested = [] }) => {
   return (
      <section className='blog-page'>
         {isLoading ? (
            <Loader />
         ) : (
            <div className='container'>
               <div className='breadcrumbs'>
                  <Link to='/' className='breadcrumbs__item'>
                     Главная
                  </Link>
                  <span className='breadcrumbs__item'>{title}</span>
               </div>
               <h1 className='blog-page__title display-3'>{title}</h1>
               {image && (
                  <div className='blog-page__img'>
                     <img src={getURL.img(image)} alt='' />
                  </div>
               )}
               <div className='blog-page__wrap'>
                  <div className='blog-page__left' dangerouslySetInnerHTML={{ __html: text }} />
                  <div className='blog-page__right'>
                     <Share />
                  </div>
               </div>

               <BlogGroup items={interested} title='Вам может быть интересно' />

               <BlogComments />
            </div>
         )}
      </section>
   )
}

export default BlogItem
