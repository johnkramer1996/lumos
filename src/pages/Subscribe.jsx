import React from 'react'
import { SubscribeCard } from 'components'

const Subscribe = () => {
   const items = [
      { id: 1, title: 'Базовая', number: '80', price: '12 000 руб. в месяц', color: '' },
      { id: 2, title: 'Премиум', number: '120', price: '24 000 руб. в месяц', color: 'green' },
      { id: 3, title: 'ВИП', number: '160', price: '64 000 руб. в месяц', color: 'blue' },
   ]

   return (
      <section className='sub'>
         <div className='container'>
            <h1 className='sub__title display-2'>Подписка на Люмос</h1>
            <div className='sub__desc'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente illo repellat, blanditiis perspiciatis quas, odit aspernatur sequi dicta aut vel omnis vero cumque quos quidem.
               Eius unde ipsam vitae?
            </div>
            <div className='sub__items'>
               {items.map(({ id, ...props }) => (
                  <SubscribeCard key={id} {...props} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default Subscribe
