import React, { useState } from 'react'

import { HeaderBurger, HeaderLK, HeaderLogo, HeaderNotification, HeaderSearch } from './'
import { Nav } from 'components/'
import { Button } from 'components/ui/'
import { useDispatch, useSelector } from 'hooks/'

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false)
    const onToggleNav = () => setIsNavActive(!isNavActive)

    const { isAuth } = useSelector()

    const { onShowModal } = useDispatch({ onShowModalProps: true })

    return (
        <>
            <header className='header header--b0'>
                <div className='container'>
                    <div className='header__inner'>
                        <div className='header__left'>
                            <HeaderBurger onClick={onToggleNav} isActive={isNavActive} />
                            <HeaderLogo />
                            <Nav isActive={isNavActive} />
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
