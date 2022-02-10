import { ROLES } from 'constants'
import React from 'react'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/selectors'
import { getURL, hasAccess } from 'utils'

const CabinetSidebarUser = () => {
   const role = useSelector(authSelectors.getRole)

   return (
      <>
         <div className='cabinet-student__card card-bg'>
            <div className='cabinet-student__card-img'>
               <img src={getURL.avatar('', ROLES.TRAINER)} alt='' />
            </div>
            <div className='cabinet-student__card-name'>Олег Олегов</div>
            {hasAccess(role, [ROLES.EMPLOYEE]) && (
               <div className='cabinet-student__card-balls'>
                  <i></i>
                  <span>340 баллов</span>
               </div>
            )}
            <div className='cabinet-student__card-bottom'>
               <div className='cabinet-student__card-item'>
                  <span className='cabinet-student__card-item-title'>Email</span>
                  <a className='cabinet-student__card-item-link' href='mailto:olel83@gmail.com'>
                     olel83@gmail.com
                  </a>
               </div>
               {hasAccess(role, [ROLES.EMPLOYEE]) && (
                  <div className='cabinet-student__card-item'>
                     <span className='cabinet-student__card-item-title'>Телефон</span>
                     <a className='cabinet-student__card-item-link' href='tel:+7 777 777 77 77'>
                        +7 777 777 77 77
                     </a>
                  </div>
               )}
               {hasAccess(role, [ROLES.EMPLOYEE]) && (
                  <div className='cabinet-student__card-item'>
                     <span className='cabinet-student__card-item-title'>Отпуск</span>
                     <p className='cabinet-student__card-item-text'>с 13 мая до 25 мая</p>
                  </div>
               )}
            </div>
         </div>
      </>
   )
}

export default React.memo(CabinetSidebarUser)
