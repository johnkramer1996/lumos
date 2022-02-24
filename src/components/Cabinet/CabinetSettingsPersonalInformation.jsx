import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useInput } from 'hooks'
import { Input } from 'components/ui'
import { authSelectors } from 'store/selectors'
import { useForm } from 'react-hook-form'

const CabinetSettingsPersonalInformation = ({ onBlur }) => {
   const user = useSelector(authSelectors.getUser)

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         first_name: '',
         last_name: '',
         phone: '',
      },
   })

   const firstName = useInput({ is: { isName: true } })
   const lastName = useInput({ is: { isName: true } })
   const phone = useInput({ is: { isDisabled: true, isNumbers: true } })

   useEffect(() => {
      form.setValue('first_name', user.first_name)
      form.setValue('last_name', user.last_name)
      form.setValue('phone', user.phone)
   }, [user])

   return (
      <div className='account-settings__group card-bg'>
         <h3 className='account-settings__subtitle display-4'>Личная информация</h3>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Имя</span>
            </div>
            <Input form={form} name='first_name' className='account-settings__item-input' onBlur={onBlur} withoutWrapper />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Фамилия</span>
            </div>
            <Input form={form} name='last_name' className='account-settings__item-input' onBlur={onBlur} withoutWrapper />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Номер телефона</span>
               <button className='account-settings__item-btn'>
                  Изменить
                  <input type='checkbox' {...form.register('phone-change')} />
               </button>
            </div>
            <Input form={form} name='phone' className='account-settings__item-input' onBlur={onBlur} disabled={!form.watch('email-change')} withoutWrapper />
         </div>
      </div>
   )
}

CabinetSettingsPersonalInformation.propTypes = {
   onBlur: PropTypes.func.isRequired,
}

export default CabinetSettingsPersonalInformation
