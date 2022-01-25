import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, className, color = 'blue', light, outline, text, link, to = '', ...rest }) => {
    const classNames = [outline ? 'btn-outline' : light ? `btn-light-${color}` : `btn-${color}`, className]

    console.log(link)

    return (
        <>
            {link ? (
                <Link to={to} className={`btn ${classNames.join(' ')}`}>
                    {children}
                </Link>
            ) : (
                <button className={`btn ${classNames.join(' ')}`} {...rest}>
                    {children}
                </button>
            )}
        </>
    )
}

export default Button
