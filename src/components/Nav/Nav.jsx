import React from 'react'
import { RouteNames } from 'routes'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'
import { useSelector } from 'hooks'

const Nav = ({ items = [], isActive }) => {
    const { themes } = useSelector()

    return (
        <nav className={`nav${isActive ? ' nav--active' : ''}`}>
            <div className='nav__wrap'>
                <NavDropdown items={themes} />
                {items.map((item, index) => (
                    <NavItem key={index} {...item} />
                ))}
            </div>
        </nav>
    )
}

export default Nav
