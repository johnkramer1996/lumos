import React from 'react'
import { Events as EventsComponent } from 'components/'

const Events = () => {
    const items = [
        {
            id: 1,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: './assets/img/event1.jpg',
            title: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
    ]
    items.push({ ...items[0] })
    items.push({ ...items[0] })
    items.push({ ...items[0] })
    items[1].id = 2
    items[2].id = 3
    items[3].id = 4
    items[1].img = './assets/img/event2.jpg'
    items[2].img = './assets/img/event3.jpg'
    items[3].img = './assets/img/event4.jpg'
    return <EventsComponent title='Мероприятия' items={items} />
}

export default Events
