import React from 'react'
import SubscribeItem from './SubscribeItem'

const Subscribe = ({ title, descr, items = [] }) => {
    return (
        <section className='sub'>
            <div className='container'>
                <h1 className='sub__title display-2'>{title} </h1>
                <div className='sub__desc'>{descr}</div>
                <div className='sub__items'>
                    {items.map(({ id, ...props }) => (
                        <SubscribeItem key={id} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Subscribe
