import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useInput } from 'hooks'
import { Input } from 'components/ui'
import { authSelectors } from 'store/selectors'

const CabinetSettingsPersonalInformation = ({ onBlur }) => {
   const user = useSelector(authSelectors.getUser)
   const firstName = useInput({ is: { isName: true } })
   const lastName = useInput({ is: { isName: true } })
   const phone = useInput({ is: { isDisabled: true, isNumbers: true } })

   useEffect(() => {
      user.first_name && firstName.setValue(user.first_name)
      user.last_name && lastName.setValue(user.last_name)
      user.phone && phone.setValue(user.phone)
   }, [user])

   return (
      <div className='account-settings__group card-bg'>
         <h3 className='account-settings__subtitle display-4'>Личная информация</h3>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Имя</span>
            </div>
            <Input className='account-settings__item-input' input={firstName} onBlur={onBlur.bind(null, 'first_name')} withoutWrapper />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Фамилия</span>
            </div>
            <Input className='account-settings__item-input' input={lastName} onBlur={onBlur.bind(null, 'last_name')} withoutWrapper />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Номер телефона</span>
               <button className='account-settings__item-btn' onClick={phone.onDisabledRemove}>
                  Изменить
               </button>
            </div>
            <Input className='account-settings__item-input' input={phone} onBlur={onBlur.bind(null, 'phone')} withoutWrapper />
         </div>
      </div>
   )
}

CabinetSettingsPersonalInformation.propTypes = {
   onBlur: PropTypes.func.isRequired,
}

export default CabinetSettingsPersonalInformation
