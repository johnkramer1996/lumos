import React from 'react'

const Button = ({ children, className, color = 'blue', light, outline, text, ...rest }) => {
    const classNames = [outline ? 'btn-outline' : light ? `btn-light-${color}` : `btn-${color}`, className]

    return (
        <button className={`btn ${classNames.join(' ')}`} {...rest}>
            {children}
        </button>
    )
}

export default Button
