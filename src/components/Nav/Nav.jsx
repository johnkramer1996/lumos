import React from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import NavItem from './NavItem'

const Nav = ({ isActive }) => {
    const lessons = [
        { id: 1, title: 'Программирование', href: RouteNames.LESSONS },
        { id: 2, title: 'Дизайн', href: RouteNames.LESSONS },
        { id: 3, title: 'Маркетинг', href: RouteNames.LESSONS },
        { id: 4, title: 'Управление', href: RouteNames.LESSONS },
        { id: 5, title: 'Аналитика', href: RouteNames.LESSONS },
        { id: 6, title: 'Новости', href: RouteNames.LESSONS },
        { id: 7, title: 'Фото/Видео', href: RouteNames.LESSONS },
        { id: 8, title: 'Бизнес', href: RouteNames.LESSONS },
        { id: 9, title: 'Компаниям', href: RouteNames.LESSONS },
    ]
    const items = [
        { title: 'Мероприятия', href: RouteNames.EVENTS },
        { title: 'Подписка', href: RouteNames.SUBSCRIBE },
        { title: 'О нас', href: RouteNames.ABOUT },
        { title: 'Новости', href: RouteNames.NEWS },
    ]
    return (
        <nav className={`nav  ${isActive ? 'nav--active' : ''}`}>
            <div className='nav__wrap'>
                <div className='nav__dropdown'>
                    <div className='nav__dropdown-show'>
                        <span>Курсы</span>
                        <svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M1 1.5L6 6.5L11 1.5' stroke='#5E62DA' strokeWidth='2' />
                        </svg>
                    </div>
                    <div className='nav__dropdown-hidden'>
                        {lessons.map(({ id, title, href }) => (
                            <Link key={id} to={href} className='nav__dropdown-link'>
                                {title}
                            </Link>
                        ))}
                    </div>
                </div>
                {items.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </div>
        </nav>
    )
}

export default Nav
