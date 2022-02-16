import { ROLES } from 'constants'
import React from 'react'
import { useSelector } from 'react-redux'
import { authSelectors, frontStaticSelectors } from 'store/selectors'
import { getFullName, getURL, hasAccess } from 'utils'

const CabinetSidebarUser = () => {
   const rolesId = useSelector(authSelectors.getRolesId)
   const { user } = useSelector(frontStaticSelectors.getUser)
   const { email, phone, vacation_start, vacation_end } = user

   return (
      <>
         <div className='cabinet-student__card card-bg'>
            <div className='cabinet-student__card-img'>
               <img src={getURL.avatar(user.avatar)} alt='' />
            </div>
            <div className='cabinet-student__card-name'>{getFullName(user)}</div>
            {hasAccess(rolesId, [ROLES.EMPLOYEE]) && (
               <div className='cabinet-student__card-balls'>
                  <i></i>
                  <span>340 баллов</span>
               </div>
            )}
            <div className='cabinet-student__card-bottom'>
               <div className='cabinet-student__card-item'>
                  <span className='cabinet-student__card-item-title'>Email</span>
                  <a className='cabinet-student__card-item-link' href={`mailto:${email}`}>
                     {email}
                  </a>
               </div>
               {hasAccess(rolesId, [ROLES.EMPLOYEE]) && (
                  <div className='cabinet-student__card-item'>
                     <span className='cabinet-student__card-item-title'>Телефон</span>
                     <a className='cabinet-student__card-item-link' href={`tel:${phone}`}>
                        {phone}
                     </a>
                  </div>
               )}
               {hasAccess(rolesId, [ROLES.TRAINER, ROLES.EMPLOYEE]) && (
                  <div className='cabinet-student__card-item'>
                     <span className='cabinet-student__card-item-title'>Отпуск</span>
                     <p className='cabinet-student__card-item-text'>
                        с {vacation_start}
                        до {vacation_end}
                     </p>
                  </div>
               )}
            </div>
         </div>
      </>
   )
}

export default React.memo(CabinetSidebarUser)
