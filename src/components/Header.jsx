import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allActionCreators } from '../store/reducers/action-creators'

const Header = () => {
    const dispatch = useDispatch()
    const { setShowModal, changeStep, logout } = allActionCreators
    const { isAuth, user } = useSelector((state) => state.auth)

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='header__inner'>
                        {isAuth ? (
                            <>
                                <div className='header__left'>
                                    <div className='header__btn'>
                                        <button className='modal-target btn btn-blue' onClick={() => dispatch(logout())}>
                                            Выйти
                                        </button>
                                    </div>
                                </div>
                                <div className='header__right'>
                                    <ul>
                                        <li>
                                            <b>Имя</b> {user?.name}
                                        </li>
                                        <li>
                                            {' '}
                                            <b>Email</b> {user?.email}
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <button className='modal-target btn btn-blue' onClick={() => (dispatch(changeStep('CHECK_EMAIL')), dispatch(setShowModal(true)))}>
                                Войти
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
