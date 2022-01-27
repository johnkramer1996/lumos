import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cabinetLinks } from 'routes'
import { useDispatch, useSelector, useEvent } from 'hooks/'
import { IMG_URL } from 'api/URLS'

const HeaderLK = () => {
    const [isActive, setIsActive] = useState(false)
    const { user } = useSelector()

    const { logout } = useDispatch()

    useEvent('click', (e) => !e.target.closest('.header__lk') && setIsActive(false))

    return (
        <div className='header__lk'>
            <div className='header__lk-avatar' onClick={() => setIsActive(!isActive)}>
                <img src={IMG_URL + user.avatar} alt='' />
            </div>
            <div className={`header__lk-dropdown${isActive ? ' header__lk-dropdown--active' : ''}`}>
                {cabinetLinks.map(({ title, href, number }, index) => (
                    <Link key={index} to={href} className={`header__lk-item ${number ? 'header__lk-item--notification' : ''}`}>
                        <span>{title}</span>
                        <i>{number}</i>
                    </Link>
                ))}
                <button className='header__lk-item header__lk-item--logout' onClick={logout}>
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
