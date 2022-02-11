import { Button } from 'components/ui'
import { useInput } from 'hooks'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { authStepTypes } from 'store/reducers/auth/types'

const ModalLoginForm = ({ steps = {} }) => {
   const step = useSelector(({ auth }) => auth.step)

   const email = useInput({ initialValue: 'user@test.com' })
   const password = useInput({ initialValue: 123456789 })
   const name = useInput()
   const phone = useInput()

   const onSubmitForm = (e) => {
      e.preventDefault()
      steps[step].onNext({ email: email.value, password: password.value, name: name.value, phone: phone.value })
   }

   return (
      <form className='modal__form' onSubmit={onSubmitForm}>
         <div className='modal__form-group form-group'>
            <label>E-mail</label>
            <input type='text' placeholder='E-mail' {...email.bind} />
         </div>
         {step !== authStepTypes.CHECK_EMAIL && step !== authStepTypes.RESTORE && (
            <div className='modal__form-group form-group'>
               <label>Пароль</label>
               <input type='password' placeholder='Пароль' {...password.bind} />
            </div>
         )}
         {step === authStepTypes.REGISTER && (
            <>
               <div className='modal__form-group form-group'>
                  <label>Имя Фамилия</label>
                  <input type='text' placeholder='Имя Фамилия' {...name.bind} />
               </div>
               <div className='modal__form-group form-group'>
                  <label>Телефон</label>
                  <input type='tel' placeholder='Телефон' {...phone.bind} />
               </div>
            </>
         )}
         <Button className='modal__form-btn'>{steps[step]?.btn}</Button>
      </form>
   )
}

export default ModalLoginForm
