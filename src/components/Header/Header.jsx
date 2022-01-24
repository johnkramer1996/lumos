import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { allActionCreators } from 'store/reducers/action-creators'
import { LoginModal } from 'components/modals'
import HeaderLogo from './HeaderLogo'

import Nav from 'components/Nav/Nav'
import { Button } from 'components/ui/'
import HeaderSearch from './HeaderSearch'
import HeaderBurger from './HeaderBurger'
import HeaderLK from './HeaderLK'
import HeaderNotification from './HeaderNotification'

const Header = () => {
    const dispatch = useDispatch()
    const { setShowModal, changeStep, logout } = allActionCreators
    const { isAuth } = useSelector((state) => state.auth)

    const [isNavActive, setIsNavActive] = useState(false)
    const onToggleNav = () => {
        console.log(isNavActive)
        setIsNavActive(!isNavActive)
    }

    const onShowModal = () => (dispatch(changeStep('CHECK_EMAIL')), dispatch(setShowModal(true)))

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
                                    <Button text={'Войти'} className='header__btn' onClick={onShowModal} light />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <LoginModal />
        </>
    )
}

export default Header
