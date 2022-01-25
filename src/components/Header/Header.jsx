import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { allActionCreators } from 'store/reducers/action-creators'
import { HeaderBurger, HeaderLK, HeaderLogo, HeaderNotification, HeaderSearch } from './'
import { Nav } from 'components/'
import { Button } from 'components/ui/'

const Header = () => {
    const dispatch = useDispatch()
    const { setShowModal } = allActionCreators
    const {
        auth: { isAuth },
        system: { references: { theme } = {} } = {},
    } = useSelector((state) => state)

    const [isNavActive, setIsNavActive] = useState(false)

    const onToggleNav = () => setIsNavActive(!isNavActive)

    const onShowModal = () => dispatch(setShowModal(true))

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
