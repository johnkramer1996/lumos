import { Button, Input } from 'components/ui'
import { useInput } from 'hooks'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { authStepTypes } from 'store/reducers/auth/types'

const ModalLoginForm = ({ steps = {} }) => {
   const step = useSelector(({ auth }) => auth.step)

   //  const email = useInput({ initialValue: 'user@test.com' })
   const email = useInput({ initialValue: 'trainer@test.com', is: { isRequired: true, isEmail: true } })
   const password = useInput({ initialValue: '123456789', is: { isRequired: true, isPassword: true } })
   const name = useInput({ is: { isRequired: true, isName: true } })
   const phone = useInput({ is: { isRequired: true, isNumbers: true } })

   const _email = { input: email, label: 'E-mail' }
   const _password = { input: password, label: 'Пароль' }
   const _name = { input: name, label: 'Имя Фамилия' }
   const _phone = { input: phone, label: 'Номер телефона' }

   const inputs = {
      [authStepTypes.CHECK_EMAIL]: [_email],
      [authStepTypes.LOGIN]: [_email, _password],
      [authStepTypes.RESTORE]: [_email, _password],
      [authStepTypes.REGISTER]: [_email, _password, _name, _phone],
   }

   const onSubmitForm = (e) => {
      e.preventDefault()

      if (inputs[step].filter(({ input: i }) => i.check(i.value)).length) return

      steps[step].onNext({ email: email.value, password: password.value, name: name.value, phone: phone.value })
   }

   return (
      <form className='modal__form' onSubmit={onSubmitForm}>
         {inputs[step].map(({ input, label }, index) => (
            <Input key={index} classNameWrapper='modal__form-group' input={input} label={label} />
         ))}
         <Button className='modal__form-btn'>{steps[step]?.btn}</Button>
      </form>
   )
}

export default ModalLoginForm
