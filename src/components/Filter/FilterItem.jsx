import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { isActiveClass, uid } from 'utils'

const FilterItem = ({ id = 1, paramName, onChange, name, isChecked = false, isHidden = false }) => {
    // const id = uid()
    const [checked, setChecked] = useState(false)

    useEffect(() => setChecked(isChecked), [isChecked])

    const onChangeFilter = ({ target }) => {
        const newValue = !checked
        setChecked(newValue)
        onChange(target.name, target.value, newValue)
    }

    return (
        <div className={`filter__item checkbox ${isActiveClass(isHidden, 'filter__item--hidden')}`}>
            <input type='checkbox' className='checkbox' id={`checkbox-${paramName}-${id}`} name={paramName} checked={checked} value={id} onChange={onChangeFilter} />
            <label htmlFor={`checkbox-${paramName}-${id}`}>{name}</label>
        </div>
    )
}

FilterItem.propTypes = {
    id: PropTypes.number.isRequired,
    paramName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isHidden: PropTypes.bool,
    isChecked: PropTypes.bool,
}

export default FilterItem
