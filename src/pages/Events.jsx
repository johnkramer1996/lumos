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
            img: '/assets/img/event1.jpg',
            title: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
        {
            id: 2,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: '/assets/img/event1.jpg',
            title: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
        {
            id: 3,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: '/assets/img/event1.jpg',
            title: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
        {
            id: 4,
            day: '18',
            month: 'декабря',
            year: '2021',
            time: 'в 20:00',
            img: '/assets/img/event1.jpg',
            title: 'Длинное название мероприятия минимум в две строки текста',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo dictum hendrerit. Suspendisse diam libero, blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta quam aliquet vel. Ut eleifend nulla tortor, ut porta quam aliquet Integer ero. Aliquam commodo dictum hendrerit. Suspendisse diam libero,	blandit sit amet lacinia at, scelerisque sed est. Ut eleifend nulla tortor, ut porta.',
        },
    ]
    return <EventsComponent title='Мероприятия' items={items} />
}

export default Events
