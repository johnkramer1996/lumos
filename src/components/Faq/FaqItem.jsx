import React, { useState } from 'react'

const FaqItem = ({ title, descr }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={`faq__item${isActive ? ' faq__item--open' : ''}`}>
            <div className='faq__item-show' onClick={() => setIsActive(!isActive)}>
                <span>{title}</span>
                <button className='faq__item-btn'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M19 8.5L12 15.5L5 8.5' stroke='#C6D0DD' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                </button>
            </div>
            <div className='faq__item-hidden'>{descr}</div>
        </div>
    )
}

export default FaqItem
