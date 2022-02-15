import { Tabs } from 'components'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { frontCoursesSelectors, frontStaticSelectors } from 'store/selectors'
import NewsItem from './NewsItem'
import NewsTabs from './NewsTabs'

const News = ({ title, popularItems = [], newItems = [] }) => {
   const blogCategory = useSelector(frontStaticSelectors.getBlogCategory)

   const tabItems = useMemo(
      () => [...blogCategory.map(({ name, id }) => ({ title: name, component: <NewsTabs popularItems={popularItems} newItems={newItems} /> }))],
      [blogCategory, popularItems, newItems],
   )

   console.log(tabItems)

   return (
      <section className='blog'>
         <div className='container'>
            <h1 className='blog__title display-2'>{title}</h1>
            <Tabs items={tabItems} classPrefix='blog' all />
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
