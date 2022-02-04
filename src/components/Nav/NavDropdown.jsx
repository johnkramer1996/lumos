import { useEvent } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'

const NavDropdown = ({ items = [] }) => {
    const [isActive, setIsActive] = useState(false)
    useEvent((e) => !e.target.closest('.nav__dropdown') && setIsActive(false))

    return (
        <div className='nav__dropdown'>
            <div className={`nav__dropdown-show${isActive ? ' nav__dropdown-show--active' : ''}`} onClick={() => setIsActive(!isActive)}>
                <span>Курсы</span>
                <svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1 1.5L6 6.5L11 1.5' stroke='#5E62DA' strokeWidth='2' />
                </svg>
            </div>
            <div className='nav__dropdown-hidden'>
                {items.map(({ id, name }) => (
                    <Link key={id} to={`${RouteNames.COURSES}?themes=${id}`} className='nav__dropdown-link' onClick={() => setIsActive(false)}>
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NavDropdown
