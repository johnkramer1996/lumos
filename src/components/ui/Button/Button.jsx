import React from 'react'

const Button = ({ className, color = 'blue', light, isOutline, text, ...rest }) => {
    const classNames = [isOutline ? 'btn-outline' : light ? `btn-light-${color}` : `btn-${color}`, className]

    return (
        <button className={`btn ${classNames.join(' ')}`} {...rest}>
            {text}
        </button>
    )
}

export default Button
