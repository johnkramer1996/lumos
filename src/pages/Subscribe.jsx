import React from 'react'
import { Subscribe as SubscribeComponent } from 'components/'

const Subscribe = () => {
    const items = [
        { id: 1, title: 'Базовая', number: '80', price: '12 000 руб. в месяц', color: '' },
        { id: 2, title: 'Премиум', number: '120', price: '24 000 руб. в месяц', color: 'green' },
        { id: 3, title: 'ВИП', number: '160', price: '64 000 руб. в месяц', color: 'blue' },
    ]
    return <SubscribeComponent title={'Подписка на Люмос'} items={items} />
}

export default Subscribe
