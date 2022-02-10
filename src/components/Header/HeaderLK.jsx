import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cabinetLinks } from 'routes'
import { useDispatch, useEvent } from 'hooks/'
import { getURL } from 'utils'
import { useSelector } from 'react-redux'
import { ReactComponent as LogoutSvg } from 'svg/logout.svg'
import { authSelectors } from 'store/selectors'

const HeaderLK = () => {
   const { logout } = useDispatch()
   const user = useSelector(authSelectors.getUser)
   const role = useSelector(authSelectors.getRolesId)
   const [isActive, setIsActive] = useState(false)
   useEvent((e) => !e.target.closest('.header__lk') && setIsActive(false))

   return (
      <div className='header__lk'>
         <div className='header__lk-avatar' onClick={() => setIsActive(!isActive)}>
            <img src={getURL.avatar(user?.avatar, role)} alt='' />
         </div>
         <div className={`header__lk-dropdown${isActive ? ' header__lk-dropdown--active' : ''}`}>
            {cabinetLinks.map(({ title, href, number }, index) => (
               <Link key={index} to={href} className={`header__lk-item ${number ? 'header__lk-item--notification' : ''}`} onClick={() => setIsActive(false)}>
                  <span>{title}</span>
                  <i>{number}</i>
               </Link>
            ))}
            <button className='header__lk-item header__lk-item--logout' onClick={logout}>
               <span>Выйти из аккаунта</span>
               <LogoutSvg style={{ width: '16px' }} />
            </button>
         </div>
      </div>
   )
}

export default HeaderLK
