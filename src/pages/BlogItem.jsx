import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { useDispatch, useRequest } from 'hooks'
import { Link, useParams } from 'react-router-dom'
import { BlogItem as BlogItemComponent, Comments } from 'components'
import BlogItemComments from 'components/BlogItem/BlogItemComments'

const BlogItem = () => {
   const { blogId } = useParams()
   const { fetchFrontBlog } = useDispatch()
   const blog = useSelector(frontStaticSelectors.getBlog)
   const interested = useSelector(frontStaticSelectors.getInterested)

   const { title } = blog

   const fetchFrontBlogRequest = useRequest({ request: fetchFrontBlog })

   useEffect(() => {
      console.log(blogId)
      fetchFrontBlogRequest.call({ blogId })
   }, [blogId])

   return (
      <section className='blog-page'>
         <div className='container'>
            // TODO UI COMPONENT
            <div className='breadcrumbs'>
               <Link to='/' className='breadcrumbs__item'>
                  Главная
               </Link>
               <span className='breadcrumbs__item'>{title}</span>
            </div>
            <BlogItemComponent isLoading={fetchFrontBlogRequest.isLoading} {...blog} interested={interested} />
            <BlogItemComments />
         </div>
      </section>
   )
}

export default BlogItem
