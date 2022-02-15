import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { useDispatch, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { BlogItem as BlogItemComponent } from 'components'

const BlogItem = () => {
   const { blogId } = useParams()
   const { fetchFrontBlog } = useDispatch()
   const blog = useSelector(frontStaticSelectors.getBlog)
   const interested = useSelector(frontStaticSelectors.getInterested)

   const fetchFrontBlogRequest = useRequest({ request: fetchFrontBlog })

   useEffect(() => {
      console.log(blogId)
      fetchFrontBlogRequest.call({ blogId })
   }, [blogId])

   return (
      <div>
         <BlogItemComponent isLoading={fetchFrontBlogRequest.isLoading} {...blog} interested={interested} />
      </div>
   )
}

export default BlogItem
