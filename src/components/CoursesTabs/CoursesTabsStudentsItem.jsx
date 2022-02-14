import React from 'react'
import { getFullName, getURL } from 'utils'

const CoursesTabsStudentsItem = ({ avatar, first_name, last_name, name, email }) => {
   return (
      <div className='students-tab__item'>
         <div className='students-tab__item-img'>
            <img src={getURL.avatar(avatar)} alt='' />
         </div>
         <div className='students-tab__item-content'>
            <div className='students-tab__item-name'>{getFullName({ first_name, last_name, name })}</div>
            <div className='students-tab__item-title'>
               {/* <span>01</span>
               <span>Название урока</span> */}
               {email}
            </div>
         </div>
         <div className='students-tab__item-date'>13 сен</div>
      </div>
   )
}

export default CoursesTabsStudentsItem
