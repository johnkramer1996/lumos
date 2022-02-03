import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FilterItem from './FilterItem'
import { isActiveClass } from 'utils'

const FilterItems = ({ title, items = [] }) => {
    const [active, setActive] = useState(false)
    const maxItems = 2

    return (
        <div className='filter__items'>
            <div className='filter__items-top'>
                <div className='filter__items-title'>{title}</div>
                <button className='filter__items-refresh'>Сбросить</button>
            </div>
            <div className={`filter__items-wrap${isActiveClass(active, 'filter__items-wrap--show')}`}>
                {items.map(({ id, name }, index) => (
                    <FilterItem key={id} name={name} hidden={index >= maxItems} />
                ))}

                {items.length > maxItems && (
                    <button className='filter__items-all' onClick={() => setActive(!active)}>
                        <i>
                            <svg width='16' height='9' viewBox='0 0 16 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M15 1L8 8L1 1' stroke='#9FADBF' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        </i>
                        <span className='filter__items-all-show'>Показать еще {items.length - maxItems}</span>
                        <span className='filter__items-all-hide'>Скрыть</span>
                    </button>
                )}
            </div>
        </div>
    )
}

FilterItems.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default FilterItems
