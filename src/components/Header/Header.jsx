import React, { useCallback, useMemo, useState } from 'react'
import { HeaderBurger, HeaderLK, HeaderLogo, HeaderNotification, HeaderSearch } from './'
import { Nav } from 'components/'
import { Button } from 'components/ui/'
import { navLinks } from 'routes'
import { useSelector } from 'react-redux'
import { useDispatch } from 'hooks/'
import { useLocation } from 'react-router-dom'
import { authStepTypes } from 'store/reducers/auth/types'

const Header = () => {
   const { pathname } = useLocation()
   const { setIsShow, setType } = useDispatch()
   const isAuth = useSelector((state) => state.auth.isAuth)
   const [isNavActive, setIsNavActive] = useState(false)

   const onToggleNav = useCallback(() => setIsNavActive((prev) => !prev), [])
   const onShowModal = useCallback(() => {
      setIsShow(true)
      setType(authStepTypes.LOGIN)
   }, [setIsShow, setType])

   const itemsNav = useMemo(() => navLinks, [])

   return (
      <header className={`header${pathname === '/' ? ' header--b0' : ''}`}>
         <div className='container'>
            <div className='header__inner'>
               <div className='header__left'>
                  <HeaderBurger onClick={onToggleNav} isActive={isNavActive} />
                  <HeaderLogo />
                  <Nav items={itemsNav} isActive={isNavActive} />
               </div>
               <div className='header__right'>
                  <HeaderSearch isActive={isNavActive} />
                  {isAuth ? (
                     <div className='header__authed'>
                        <HeaderNotification />
                        <HeaderLK />
                     </div>
                  ) : (
                     <Button className='header__btn' onClick={onShowModal} light>
                        Войти
                     </Button>
                  )}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
