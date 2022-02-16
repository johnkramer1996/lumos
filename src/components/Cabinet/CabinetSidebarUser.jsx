import { ROLES } from 'constants'
import React from 'react'
import { useSelector } from 'react-redux'
import { authSelectors, frontStaticSelectors } from 'store/selectors'
import { getDate, getFullName, getURL, hasAccess } from 'utils'
import CabinetSidebarLoader from './CabinetSidebarLoader'

const CabinetSidebarUser = ({ isLoading }) => {
   const rolesId = useSelector(authSelectors.getRolesId)
   const { user } = useSelector(frontStaticSelectors.getUser)
   const { email, phone, vacation_start, vacation_end } = user

   return (
      <>
         {isLoading ? (
            <CabinetSidebarLoader />
         ) : (
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
                  {hasAccess(rolesId, [ROLES.TRAINER, ROLES.EMPLOYEE]) && (
                     <div className='cabinet-student__card-item'>
                        <span className='cabinet-student__card-item-title'>Телефон</span>
                        <a className='cabinet-student__card-item-link' href={`tel:${phone}`}>
                           {phone}
                        </a>
                     </div>
                  )}
                  {hasAccess(rolesId, [ROLES.TRAINER, ROLES.EMPLOYEE]) && vacation_start && vacation_end && (
                     <div className='cabinet-student__card-item'>
                        <span className='cabinet-student__card-item-title'>Отпуск</span>
                        <p className='cabinet-student__card-item-text'>
                           с {getDate(vacation_start, { isYear: false })}
                           до {getDate(vacation_end, { isYear: false })}
                        </p>
                     </div>
                  )}
               </div>
            </div>
         )}
      </>
   )
}

export default React.memo(CabinetSidebarUser)
