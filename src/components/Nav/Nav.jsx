import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const Nav = ({ items = [], isActive }) => {
    const { themes = [] } = useSelector((state) => state.system.references)

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
