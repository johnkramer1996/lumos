import React from 'react'
import PropTypes from 'prop-types'
import { isActiveClass, uid } from 'utils'

const FilterItem = ({ name, hidden = false }) => {
    const id = uid()
    return (
        <div className={`filter__item checkbox ${isActiveClass(hidden, 'filter__item--hidden')}`}>
            <input type='checkbox' className='checkbox' id={id} />
            <label htmlFor={id}>{name}</label>
        </div>
    )
}

FilterItem.propTypes = {
    name: PropTypes.string.isRequired,
    hidden: PropTypes.bool,
}

export default FilterItem
