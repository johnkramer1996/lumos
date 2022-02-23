import React from 'react'
import { Button } from 'components/ui'
import { useNavigate } from 'hooks'
import { declOfNum, getDeclOfArray, getURL, hasAccess } from 'utils'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/selectors'
import { ROLES } from 'constants'

const CabinetTitle = ({ title, type = 'courses', isVisibleBtn = true, isBtnAll = true, btnHref = '', total = 0 }) => {
   const { toCabinetCoursesAdd, toCabinetEventsAdd } = useNavigate()
   const rolesId = useSelector(authSelectors.getRolesId)

   return (
      <div className='cabinet-page__top'>
         <h1 className='lkt-courses__title display-3'>{title}</h1>
         {isVisibleBtn ? (
            <>
               {isBtnAll ? (
                  <Button to={btnHref} className='courses__all' outline link>
                     Показать все
                  </Button>
               ) : (
                  <div>
                     {hasAccess(rolesId, [ROLES.TRAINER]) && (
                        <Button className='lkt-courses__add' to={getURL[type === 'course' ? 'cabinetCoursesAdd' : 'cabinetEventsAdd']()} outline link>
                           <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path d='M8.02858 2.66675V13.3334' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                              <path d='M13.3347 8.02548H2.66797' stroke='#1B2C3E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                           </svg>
                           <span>Добавить</span>
                        </Button>
                     )}
                  </div>
               )}
            </>
         ) : (
            <div className='cabinet-page__nav-title'>
               {total} {declOfNum(total, getDeclOfArray[type])}
            </div>
         )}
      </div>
   )
}

export default CabinetTitle
