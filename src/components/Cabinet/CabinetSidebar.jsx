import React from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'

const CabinetSidebar = () => {
    const items = [
        { title: 'Мои курсы', href: RouteNames.CABINET_COURSES, number: 0 },
        { title: 'Мои мероприятия', href: RouteNames.CABINET_EVENTS, number: 1 },
        { title: 'Статистика', href: RouteNames.CABINET_STATISTICS, number: 0 },
        { title: 'Служба поддержки', href: RouteNames.CABINET_SUPPORT, number: 0 },
        { title: 'Настройки аккаунта', href: RouteNames.CABINET_SETTINGS, number: 0 },
    ]
    return (
        <aside className='cabinet-page__sidebar'>
            <div className='sidebar'>
                {/* <div className='sidebar__item sidebar__item--notification'>
                    <div className='sidebar__item-show'>
                        <span>Мои мероприятия</span>
                        <i>1</i>
                    </div>
                    <div className='sidebar__item-hidden'>
                        <a href='' className='sidebar__sublink sidebar__sublink--active'>
                            <span>Все</span>
                            <i></i>
                        </a>
                        <a href='' className='sidebar__sublink'>
                            <span>Запланированные</span>
                            <i></i>
                        </a>
                        <a href='' className='sidebar__sublink sidebar__sublink--notification'>
                            <span>На модерации</span>
                            <i>1</i>
                        </a>
                        <a href='' className='sidebar__sublink'>
                            <span>Завершенные</span>
                            <i></i>
                        </a>
                    </div>
                </div> */}
                {items.map(({ title, href, number }, index) => (
                    <Link key={index} to={href} className='sidebar__link'>
                        <span>{title}</span>
                        <i>{number}</i>
                    </Link>
                ))}
            </div>
        </aside>
    )
}

export default CabinetSidebar
