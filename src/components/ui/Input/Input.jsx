import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ className = '', label = '', placeholder = '', input, list = [], onChange = () => {}, withoutWrapper }) => {
    const onChangeHandle = (e) => {
        input.bind.onChange(e)
        onChange(e, input)
    }

    const getInner = () => {
        return (
            <>
                {label && <label>{label}</label>}
                {!list.length ? (
                    !input.isTextarea ? (
                        <input type='text' placeholder={placeholder || label} {...input.bind} onChange={onChangeHandle} />
                    ) : (
                        <textarea type='text' placeholder={placeholder || label} {...input.bind} onChange={onChangeHandle}></textarea>
                    )
                ) : (
                    <select {...input.bind} onChange={onChangeHandle}>
                        <option defaultValue hidden>
                            {placeholder || label}
                        </option>
                        {list.map(({ id, name }, index) => (
                            <option key={id || index} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                )}
                {input.error && <div className='input-error-text'>{input.error}</div>}
            </>
        )
    }

    return <>{withoutWrapper ? getInner() : <div className={`${className} form-group`}>{getInner()}</div>}</>
}

Input.propTypes = {
    input: PropTypes.object.isRequired,
}

export default Input
