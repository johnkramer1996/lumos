import { Tabs } from 'components'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { frontCoursesSelectors, frontStaticSelectors } from 'store/selectors'
import NewsTabs from './NewsTabs'

const News = ({ title, popularItems = [], newItems = [] }) => {
   const location = useLocation()
   const navigate = useNavigate()
   const blogCategory = useSelector(frontStaticSelectors.getBlogCategory)

   const tabItems = useMemo(
      () => [
         { title: 'Все', component: <NewsTabs popularItems={popularItems} newItems={newItems} /> },
         ...blogCategory.map(({ name, id }) => ({ title: name, component: <NewsTabs popularItems={popularItems} newItems={newItems} /> })),
      ],
      [blogCategory, popularItems, newItems],
   )

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

   return (
      <section className='blog'>
         <div className='container'>
            <h1 className='blog__title display-2'>{title}</h1>
            <Tabs items={tabItems} classPrefix='blog' onChangeListener={onChangeTabs} />

            {/* <div className='blog__tabs'>
               <div className='blog__tab blog__tab--active'>Все</div>
               {blogCategory.map(({ name, id }, index) => (
                  <div key={id || index} className='blog__tab'>
                     {name}
                  </div>
               ))}
            </div> */}
            {/* <NewsTabs popularItems={popularItems} newItems={newItems} /> */}
         </div>
      </section>
   )
}

export default News
