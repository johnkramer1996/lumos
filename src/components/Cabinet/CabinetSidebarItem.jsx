import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isActiveClass } from 'utils'

const CabinetSidebarItem = ({ title, href, number, dropdown, index, search, list = [], filter = [] }) => {
   const [isVisible, setIsVisible] = useState(false)

   return (
      <>
         {!dropdown ? (
            <Link key={index} to={href} className='sidebar__link'>
               <span>{title}</span>
               <i>{number}</i>
            </Link>
         ) : (
            <div key={index} className={`sidebar__item sidebar__item--notification${isActiveClass(isVisible, 'sidebar__item--open')}`}>
               <div className='sidebar__item-show' onClick={setIsVisible.bind(null, !isVisible)}>
                  <span>{title}</span>
                  {/* <i>1</i> */}
               </div>
               <div className='sidebar__item-hidden'>
                  <Link to={{ pathname: href, search: '' }} className={`sidebar__sublink${isActiveClass(search === 'all', 'sidebar__sublink--active')}`}>
                     <span>Все</span>
                     <i></i>
                  </Link>
                  {list.map(({ title, search }, index) => (
                     <Link key={index} to={{ pathname: href, search: `?${search}=1` }} className={`sidebar__sublink${isActiveClass(filter[`_${search}`]?.length, 'sidebar__sublink--active')}`}>
                        <span>{title}</span>
                        <i></i>
                     </Link>
                  ))}
                  {/* <Link to={{ pathname: href, search: '?features=1' }} className={`sidebar__sublink${isActiveClass(search === 'features', 'sidebar__sublink--active')}`}>
                     <span>Запланированные</span>
                     <i></i>
                  </Link>
                  <Link to={{ pathname: href, search: '?ended=1' }} className={`sidebar__sublink${isActiveClass(search === 'ended', 'sidebar__sublink--active')}`}>
                     <span>Закончившиеся</span>
                     <i></i>
                  </Link>
                  <Link to={{ pathname: href, search: '?nomoderated=1' }} className={`sidebar__sublink${isActiveClass(search === 'nomoderated', 'sidebar__sublink--active')}`}>
                     <span>На модерации</span>
                     <i>1</i>
                  </Link>
                  <Link to={{ pathname: href, search: '?moderated=1' }} className={`sidebar__sublink${isActiveClass(search === 'moderated', 'sidebar__sublink--active')}`}>
                     <span>Модерирование</span>
                     <i></i>
                  </Link> */}
               </div>
            </div>
         )}
      </>
   )
}

export default CabinetSidebarItem