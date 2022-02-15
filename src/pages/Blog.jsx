import React, { useEffect } from 'react'
import { News as NewsComponent } from 'components/'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { useDispatch, useQuery, useRequest } from 'hooks'
import { useLocation } from 'react-router-dom'

const Blog = () => {
   const location = useLocation()
   const query = useQuery()
   const { fetchFrontBlogCategory } = useDispatch()
   const { allBlogs, popularBlogs, newBlogs } = useSelector(frontStaticSelectors.getBlogs)

   const fetchFrontBlogCategoryRequest = useRequest({ request: fetchFrontBlogCategory })
   useEffect(() => {
      const _limit = 100
      const _limit_popular = 100
      const _limit_new = 100
      const category_id = query.getAll('category_id') ?? []
      fetchFrontBlogCategoryRequest.call({
         _limit,
         _limit_popular,
         _limit_new,
         category_id,
      })
   }, [location])

   console.log(allBlogs)

   return <NewsComponent title={'Блог'} popularItems={popularBlogs} newItems={newBlogs} />
}

export default Blog
