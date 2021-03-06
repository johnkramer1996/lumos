import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { ReactComponent as PhoneSvg } from 'svg/phone.svg'
import { ReactComponent as EmailSvg } from 'svg/email.svg'
import { useDispatch, useInput, useRequest } from 'hooks'
import { Button, Input } from 'components/ui'

const Contacts = ({ title = 'Контакты' }) => {
   const { sendFrontContacts, setIsShow, setContent } = useDispatch()
   const contacts = useSelector(frontStaticSelectors.getContacts)

   const name = useInput({ is: { isName: true } })
   const email = useInput({ is: { isEmail: true } })
   const text = useInput()

   const inputs = useMemo(() => [name, email, text], [name, email, text])

   const sendFrontContactsRequest = useRequest({
      request: sendFrontContacts,
      success: () => {
         inputs.filter((i) => i.clear())
         setIsShow(true)
         setContent({ title: 'Заявка отправлена' })
      },
   })

   const onSubmit = (e) => {
      e.preventDefault()

      if (inputs.filter((i) => i.check(i.value)).length) return
      const body = {
         name: name.value,
         email: email.value,
         text: text.value,
      }

      sendFrontContactsRequest.call({ body })
   }

   return (
      <section className='contacts'>
         <div className='container'>
            <div className='contacts__inner'>
               <div className='contacts__left'>
                  <h1 className='contacts__title display-2'>{title}</h1>
                  <div className='contacts__items'>
                     <a href={`tel:${contacts.phone}`} className='contacts__item'>
                        <PhoneSvg />
                        <span>{contacts.phone}</span>
                     </a>
                     <a href={`mailto:${contacts.email}`} className='contacts__item'>
                        <EmailSvg />
                        <span>{contacts.email}</span>
                     </a>
                  </div>
                  <form className='contacts__form' onSubmit={onSubmit}>
                     <h3 className='contacts__form-title display-3'>Связаться с нами</h3>
                     <div className='contacts__form-grid'>
                        <Input classNameWrapper='contacts__form-group' name='name' input={name} label='Имя' />
                        <Input classNameWrapper='contacts__form-group' name='email' input={email} label='E-mail' />
                        <Input
                           classNameWrapper='contacts__form-group contacts__form-group--text'
                           name='text'
                           input={text}
                           label='Связаться с нами'
                           placeholder='Напишите свой вопрос или опишите проблему'
                           textarea
                        />
                     </div>
                     <Button className='contacts__form-btn'>Отправить</Button>
                  </form>
               </div>
               <div className='contacts__right'>
                  <div className='contacts__card'>
                     <div className='contacts__card-title'>Хотите разместить свои курсы?</div>
                     <div className='contacts__card-desc'>Aliquam commodo dictum hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit dictum hendrerit.</div>
                     <Button className='contacts__card-btn'>Стать тренером</Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contacts
