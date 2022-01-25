import { useLogout } from 'hooks/useLogout'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import { allActionCreators } from 'store/reducers/action-creators'

const HeaderLK = () => {
    const [isActive, setIsActive] = useState(false)
    const {
        auth: { user = {} },
    } = useSelector((state) => state)
    user.img = './assets/img/avatar2.jpg'

    const [onLogout] = useLogout()

    const items = [
        { title: user?.name || 'Имя', href: RouteNames.CABINET, number: 0 },
        { title: 'Мои курсы', href: '/', number: 0 },
        { title: 'Мои мероприятия', href: '/', number: 1 },
        { title: 'Служба поддержки', href: '/', number: 0 },
        { title: 'Настройки аккаунта', href: '/', number: 0 },
    ]

    return (
        <div className='header__lk'>
            <div className='header__lk-avatar' onClick={() => setIsActive(!isActive)}>
                <img src={user.img} alt='' />
            </div>
            <div className={`header__lk-dropdown${isActive ? ' header__lk-dropdown--active' : ''}`}>
                {items.map(({ title, href, number }, index) => (
                    <Link key={index} to={href} className={`header__lk-item ${number ? 'header__lk-item--notification' : ''}`}>
                        <span>{title}</span>
                        <i>{number}</i>
                    </Link>
                ))}
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
