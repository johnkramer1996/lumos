import React from 'react'
import { uid } from 'utils'

const Checkbox = ({ className = '', input, label = '', onChange = () => {}, type = 'checkbox' }) => {
    const onChangeHandle = (e) => {
        input.bind.onChange(e)
        onChange(e, input)
    }
    const id = uid()
    return (
        <>
            <div className={`${className} ${type}`}>
                <input type='checkbox' className='checkbox' id={id} {...input.bind} onChange={onChangeHandle} />
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    )
}

export default Checkbox
