import React from 'react'
import FaqItem from './FaqItem'
import { Button } from 'components/ui'

const Faq = ({ title = 'Часто задаваемые вопросы', items = [] }) => {
   return (
      <section className='faq'>
         <div className='container'>
            <div className='faq__inner'>
               <div className='faq__left'>
                  <h1 className='faq__title'>{title}</h1>
                  <div className='faq__items'>
                     {items.map((props) => (
                        <FaqItem key={props.id} {...props} />
                     ))}
                  </div>
               </div>
               <aside className='faq__right'>
                  <div className='faq__card'>
                     <div className='faq__card-img'>
                        <img src='/assets/img/faq.svg' alt='' />
                     </div>
                     <div className='faq__card-title'>Не нашли ответ на свой вопрос?</div>
                     <div className='faq__card-desc'>Aliquam commodo dictum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit dictum hendrerit.</div>
                     <Button className='faq__card-btn' onClick={() => {}}>
                        Связаться с нами
                     </Button>
                  </div>
               </aside>
            </div>
         </div>
      </section>
   )
}

export default Faq
