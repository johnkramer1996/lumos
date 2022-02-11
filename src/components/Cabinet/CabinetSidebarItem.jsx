import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isActiveClass } from 'utils'

const CabinetSidebarItem = ({ title, href, number, dropdown, index, state }) => {
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
                  <Link to={{ pathname: href }} state={{ status: 'all' }} className={`sidebar__sublink${isActiveClass(state.status === 'all', 'sidebar__sublink--active')}`}>
                     <span>Все</span>
                     <i></i>
                  </Link>
                  <Link to={{ pathname: href }} state={{ status: 'planned' }} className={`sidebar__sublink${isActiveClass(state.status === 'planned', 'sidebar__sublink--active')}`}>
                     <span>Запланированные</span>
                     <i></i>
                  </Link>
                  <Link to={{ pathname: href }} state={{ status: 'moderation' }} className={`sidebar__sublink${isActiveClass(state.status === 'moderation', 'sidebar__sublink--active')}`}>
                     <span>На модерации</span>
                     <i>1</i>
                  </Link>
                  <Link to={{ pathname: href }} state={{ status: 'completed' }} className={`sidebar__sublink${isActiveClass(state.status === 'completed', 'sidebar__sublink--active')}`}>
                     <span>Завершенные</span>
                     <i></i>
                  </Link>
               </div>
            </div>
         )}
      </>
   )
}

export default CabinetSidebarItem
