import React from 'react'
import { uid } from 'utils'

const Checkbox = ({ className = '', input, label = '', onChange = () => {}, radio }) => {
    const onChangeHandle = (e) => {
        input.bind.onChange(e)
        onChange(e, input)
    }
    const id = uid()
    return (
        <>
            {radio ? (
                <div className={`${className} switch`}>
                    <input type='checkbox' className='checkbox' id={id} {...input.bind} onChange={onChangeHandle} />
                    <label htmlFor={id}>{label}</label>
                </div>
            ) : (
                <div className={`${className} checkbox`}>
                    <input type='checkbox' className='checkbox' id={id} {...input.bind} onChange={onChangeHandle} />
                    <label htmlFor={id}>{label}</label>
                </div>
            )}
        </>
    )
}

export default Checkbox
