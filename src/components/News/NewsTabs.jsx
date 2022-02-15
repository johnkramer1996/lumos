import React from 'react'
import NewsItem from './NewsItem'

const NewsTabs = ({ popularItems = [], newItems = [] }) => {
   return (
      <div className='blog__group'>
         <div className='blog__group-top'>
            <h2 className='blog__title display-3'>Популярные статьи</h2>
            <button className='blog__all btn btn-outline'>Показать все</button>
         </div>
         <div className='blog__items'>
            {popularItems.map((props) => (
               <NewsItem key={props.id} {...props} />
            ))}
         </div>
         <div className='blog__group'>
            <div className='blog__group-top'>
               <h2 className='blog__title display-3'>Новые статьи</h2>
               <button className='blog__all btn btn-outline'>Показать все</button>
            </div>
            <div className='blog__items'>
               {newItems.map((props) => (
                  <NewsItem key={props.id} {...props} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default NewsTabs
