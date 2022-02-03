import React, { useCallback, useMemo, useState } from 'react'
import { HeaderBurger, HeaderLK, HeaderLogo, HeaderNotification, HeaderSearch } from './'
import { Nav } from 'components/'
import { Button } from 'components/ui/'
import { RouteNames } from 'routes'
import { useSelector } from 'react-redux'
import { useDispatch } from 'hooks/'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation()
    const { setShowModal, setIsShow, setContent, setType } = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const [isNavActive, setIsNavActive] = useState(false)

    const onToggleNav = useCallback(() => setIsNavActive((prev) => !prev), [])
    const onShowModal = useCallback(() => {
        setIsShow(true)
        setType('LOGIN')
        // setContent({ title: 'Недействительные учетные данные' })
    }, [setIsShow, setType])

    const itemsNav = useMemo(
        () => [
            { title: 'Мероприятия', href: RouteNames.EVENTS },
            { title: 'Подписка', href: RouteNames.SUBSCRIBE },
            { title: 'О нас', href: RouteNames.ABOUT },
            { title: 'Новости', href: RouteNames.NEWS },
        ],
        [],
    )

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
