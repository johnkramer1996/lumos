import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const Nav = ({ isActive }) => {
    const { system: { references: { themes: courses = [] } = {} } = {} } = useSelector((state) => state)

    const items = [
        { title: 'Мероприятия', href: RouteNames.EVENTS },
        { title: 'Подписка', href: RouteNames.SUBSCRIBE },
        { title: 'О нас', href: RouteNames.ABOUT },
        { title: 'Новости', href: RouteNames.NEWS },
    ]

    return (
        <nav className={`nav${isActive ? ' nav--active' : ''}`}>
            <div className='nav__wrap'>
                <NavDropdown items={courses} />
                {items.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </div>
        </nav>
    )
}

export default Nav
