import { Button, Input } from 'components/ui'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { authStepTypes } from 'store/reducers/auth/types'
import { authSelectors } from 'store/selectors'

const ModalLoginForm = ({ steps = {} }) => {
   const step = useSelector(authSelectors.getStep)

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         email: 'trainer@test.com',
         password: '123456789',
      },
   })

   const _email = { name: 'email', placeholder: 'E-mail', email: true }
   const _password = { name: 'password', placeholder: 'Пароль', password: true }
   const _name = { name: 'name', placeholder: 'Имя Фамилия' }
   const _phone = { name: 'phone', placeholder: 'Номер телефона' }

   const inputs = {
      [authStepTypes.CHECK_EMAIL]: [_email],
      [authStepTypes.LOGIN]: [_email, _password],
      [authStepTypes.RESTORE]: [_email, _password],
      [authStepTypes.REGISTER]: [_email, _password, _name, _phone],
   }

   const onSubmitForm = (data) => {
      steps[step].onNext(data)
   }

   return (
      <form className='modal__form' onSubmit={form.handleSubmit(onSubmitForm)}>
         {inputs[step].map(({ name, placeholder, ...props }, index) => (
            <Input key={index} form={form} name={name} placeholder={placeholder} type={`${name === 'password' ? 'password' : 'text'}`} classNameWrapper='modal__form-group' {...props} />
         ))}
         <Button className='modal__form-btn'>{steps[step]?.btn}</Button>
      </form>
   )
}

export default ModalLoginForm
