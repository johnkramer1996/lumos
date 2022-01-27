import React, { useState } from 'react'
import HeaderNotificationItem from './HeaderNotificationItem'

import './HeaderNotification.css'
import { useEvent } from 'hooks'

const HeaderNotification = () => {
    const [isActive, setIsActive] = useState(false)

    const items = [
        {
            icon: {
                color: 'yellow',
                type: 0,
            },
            text: 'Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem.',
            date: '12 сен в 12:40',
        },
        {
            icon: {
                color: 'green',
                type: 1,
            },
            text: 'Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id.',
            date: '12 сен в 12:40',
        },
        {
            icon: {
                color: '',
                type: 0,
            },
            text: 'Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem.',
            date: '12 сен в 12:40',
        },
    ]

    const isNotifications = items.length > 0

    useEvent('click', (e) => !e.target.closest('.header__notification') && setIsActive(false))

    return (
        <div className={`header__notification${isActive ? ' header__notification--active' : ''}`}>
            <div className='header__notification-show' onClick={() => setIsActive(!isActive)}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z'
                        stroke='#1B2C3E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path
                        d='M9.55518 20.8518C10.0545 21.4785 10.7876 21.884 11.5925 21.9788C12.3973 22.0735 13.2074 21.8495 13.8435 21.3564C14.0391 21.2106 14.2152 21.041 14.3674 20.8518'
                        stroke='#1B2C3E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
                {isNotifications && <i>{items.length}</i>}
            </div>
            <div className='header__notification-dropdown'>
                <div className='header__notification-top'>
                    <div className='header__notification-title'>Уведомления</div>
                    <div className='header__notification-new'>{items.length} новых</div>
                </div>
                <div className='header__notification-items'>
                    {items.map((item, index) => (
                        <HeaderNotificationItem key={index} {...item} />
                    ))}
                </div>
                {isNotifications && (
                    <div className='header__notification-bottom'>
                        <button className='header__notification-all'>Показать все</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderNotification
