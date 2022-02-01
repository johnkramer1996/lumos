import React from 'react'
import { Subscribe as SubscribeComponent } from 'components/'

const Subscribe = () => {
    const items = [
        { id: 1, title: 'Базовая', number: '80', price: '12 000 руб. в месяц', color: '' },
        { id: 2, title: 'Премиум', number: '120', price: '24 000 руб. в месяц', color: 'green' },
        { id: 3, title: 'ВИП', number: '160', price: '64 000 руб. в месяц', color: 'blue' },
    ]
    return (
        <SubscribeComponent
            title={'Подписка на Люмос'}
            descr={
                'Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis. Gravida dictum faucibus duis in odio tempus amet. Malesuada purus elit nunc senectus porta tortor molestie.'
            }
            items={items}
        />
    )
}

export default Subscribe
