import { Button } from 'components/ui'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FaqContacts = () => {
   const { toContacts } = useNavigate()

   return (
      <div className='faq__card'>
         <div className='faq__card-img'>
            <img src='/assets/img/faq.svg' alt='' />
         </div>
         <div className='faq__card-title'>Не нашли ответ на свой вопрос?</div>
         <div className='faq__card-desc'>Aliquam commodo dictum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit dictum hendrerit.</div>
         <Button className='faq__card-btn' onClick={toContacts}>
            Связаться с нами
         </Button>
      </div>
   )
}

export default FaqContacts
