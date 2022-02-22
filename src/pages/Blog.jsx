import React, { useEffect, useMemo } from 'react'
import { Blog as BlogComponent, Tabs } from 'components/'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { useDispatch, useQuery, useRequest } from 'hooks'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import BlogGroup from 'components/Blog/BlogGroup'

const Blog = () => {
   const location = useLocation()
   const navigate = useNavigate()
   const query = useQuery()
   const { fetchFrontBlogCategory } = useDispatch()
   const { allBlogs, popularBlogs, newBlogs } = useSelector(frontStaticSelectors.getBlogs)
   const blogCategory = useSelector(frontStaticSelectors.getBlogCategory)

   const fetchFrontBlogCategoryRequest = useRequest({ request: fetchFrontBlogCategory, loading: true })

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
   }, [location.search])

   const onChangeTabs = (index) => {
      const id = blogCategory.find((_, i) => +i === +index - 1)?.id
      const params = {
         category_id: id ? [id] : [],
      }

      navigate({
         pathname: location.pathname,
         search: `?${createSearchParams(params)}`,
      })
   }

   const tabItems = useMemo(
      () => [
         {
            title: 'Все',
            component: (
               <>
                  <BlogGroup items={popularBlogs} title='Популярные статьи' />
                  <BlogGroup items={newBlogs} title='Новые статьи' />
               </>
            ),
         },
         ...blogCategory.map(({ name, id }) => ({
            title: name,
            component: (
               <>
                  <BlogGroup items={popularBlogs} title='Популярные статьи' />
                  <BlogGroup items={newBlogs} title='Новые статьи' />
               </>
            ),
         })),
      ],
      [blogCategory, popularBlogs, newBlogs],
   )

   return (
      <section className='blog'>
         <div className='container'>
            <h1 className='blog__title display-2'>Блог</h1>
            <Tabs items={tabItems} classPrefix='blog' setIndex={onChangeTabs} isLoading={fetchFrontBlogCategoryRequest.isLoading} />
         </div>
      </section>
   )
}

export default Blog
