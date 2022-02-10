import React from 'react'
import { Link } from 'react-router-dom'
import { cabinetLinks } from 'routes'
import { getURL } from 'utils'

const CabinetSidebar = () => {
   return (
      <>
         <div className='sidebar'>
            {cabinetLinks.map(({ title, href, number }, index) => (
               <Link key={index} to={href} className='sidebar__link'>
                  <span>{title}</span>
                  <i>{number}</i>
               </Link>
            ))}
            {/* <div className='sidebar__item sidebar__item--notification'>
									<div className='sidebar__item-show'>
											<span>Мои мероприятия</span>
											<i>1</i>
									</div>
									<div className='sidebar__item-hidden'>
											<a href='' className='sidebar__sublink sidebar__sublink--active'>
													<span>Все</span>
													<i></i>
											</a>
											<a href='' className='sidebar__sublink'>
													<span>Запланированные</span>
													<i></i>
											</a>
											<a href='' className='sidebar__sublink sidebar__sublink--notification'>
													<span>На модерации</span>
													<i>1</i>
											</a>
											<a href='' className='sidebar__sublink'>
													<span>Завершенные</span>
													<i></i>
											</a>
									</div>
							</div> */}
         </div>
      </>
   )
}

export default React.memo(CabinetSidebar)
