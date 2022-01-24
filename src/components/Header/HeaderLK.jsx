import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { allActionCreators } from 'store/reducers/action-creators'

const HeaderLK = () => {
    const [isActive, setIsActive] = useState(false)
    const { logout } = allActionCreators
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => dispatch(logout())

    console.log(user)

    return (
        <div className='header__lk'>
            <div className='header__lk-avatar' onClick={() => setIsActive(!isActive)}>
                <img src='./assets/img/avatar2.jpg' alt='' />
            </div>
            <div className={`header__lk-dropdown ${isActive ? 'header__lk-dropdown--active' : ''}`}>
                <a href='' className='header__lk-item'>
                    <span>{user?.name}</span>
                    <i></i>
                </a>
                <a href='' className='header__lk-item'>
                    <span>Мои курсы</span>
                    <i></i>
                </a>
                <a href='' className='header__lk-item header__lk-item--notification'>
                    <span>Мои мероприятия</span>
                    <i>1</i>
                </a>
                <a href='' className='header__lk-item'>
                    <span>Служба поддержки</span>
                    <i></i>
                </a>
                <a href='' className='header__lk-item'>
                    <span>Настройки аккаунта</span>
                    <i></i>
                </a>
                <button className='header__lk-item header__lk-item--logout' onClick={onLogout}>
                    <span>Выйти из аккаунта</span>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M10.0108 4.92632V4.30432C10.0108 2.94766 8.91081 1.84766 7.55414 1.84766H4.30414C2.94814 1.84766 1.84814 2.94766 1.84814 4.30432V11.7243C1.84814 13.081 2.94814 14.181 4.30414 14.181H7.56081C8.91348 14.181 10.0108 13.0843 10.0108 11.7317V11.103'
                            stroke='#E15A5A'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path d='M14.54 8.01427H6.5127' stroke='#E15A5A' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M12.5874 6.07086L14.5394 8.0142L12.5874 9.9582' stroke='#E15A5A' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default HeaderLK
