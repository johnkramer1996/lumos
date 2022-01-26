import React, { useState } from 'react'

import { HeaderBurger, HeaderLK, HeaderLogo, HeaderNotification, HeaderSearch } from './'
import { Nav } from 'components/'
import { Button } from 'components/ui/'
import { useDispatch, useSelector } from 'hooks/'
import { RouteNames } from 'routes'

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false)
    const onToggleNav = () => setIsNavActive(!isNavActive)

    const { isAuth } = useSelector()

    const { setShowModal } = useDispatch({ onShowModalProps: true })

    const onShowModal = () => setShowModal(true)

    const itemsNav = [
        { title: 'Мероприятия', href: RouteNames.EVENTS },
        { title: 'Подписка', href: RouteNames.SUBSCRIBE },
        { title: 'О нас', href: RouteNames.ABOUT },
        { title: 'Новости', href: RouteNames.NEWS },
    ]

    return (
        <>
            <header className='header header--b0'>
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
                                <>
                                    <Button className='header__btn' onClick={onShowModal} light>
                                        Войти
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
