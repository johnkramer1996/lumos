import React from 'react'
import SubscribeItem from './SubscribeItem'

const Subscribe = ({ title, items = [] }) => {
    return (
        <section className='sub'>
            <div className='container'>
                <h1 className='sub__title display-2'>{title} </h1>
                <div className='sub__desc'>
                    Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis. Gravida
                    dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.{' '}
                </div>
                <div className='sub__items'>
                    {items.map(({ id, ...rest }) => (
                        <SubscribeItem key={id} {...rest} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Subscribe
