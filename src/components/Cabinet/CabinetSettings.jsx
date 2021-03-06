import React, { useEffect } from 'react'
import { useDispatch, useRequest } from 'hooks/'
import CabinetSettingsDocs from './CabinetSettingsDocs'
import CabinetSettingsAccount from './CabinetSettingsAccount'
import CabinetSettingsPersonalInformation from './CabinetSettingsPersonalInformation'
import CabinetSettingsNotifications from './CabinetSettingsNotifications'

const CabinetSettings = () => {
   const { settings, fetchUserSettings } = useDispatch()

   const fetchUserSettingsRequest = useRequest({ request: fetchUserSettings })
   const settingsRequest = useRequest({ request: settings })

   useEffect(() => {
      fetchUserSettingsRequest.call()
   }, [])

   const createRequest = (name, value) => {
      if (!name || !value) return
      const body = new FormData()
      body.append(name, value)
      if (name === 'password') body.append('password_confirmation', value)
      settingsRequest.call({ body })
   }
   const onBlurInput = (e) => {
      console.log(e)
      const { name, value } = e.target

      console.log(name, value)

      createRequest(name, value)
   }
   const onChangeNovifications = (type, source, status) => {
      const body = new FormData()
      body.append(`notifications[0][type]`, type)
      body.append(`notifications[0][source]`, source)
      body.append(`notifications[0][status]`, +status)
      settingsRequest.call({ body })
   }
   const onChangeInputImg = (input) => {
      input.onChange()
      // TODO CHECK NAME
      input.ref.current.files[0] && createRequest(input.ref.current.name, input.ref.current.files[0])
   }
   const onDeleteInputImg = (input, open) => {
      input.onDelete(open)
      createRequest(`delete_${input.ref.current.name}`, '1')
   }

   return (
      <div className='account-settings'>
         <h1 className='account-settings__title display-3'>Настройки аккаунта</h1>
         <CabinetSettingsAccount onBlur={onBlurInput} onChange={onChangeInputImg} onDelete={onDeleteInputImg} />
         <CabinetSettingsPersonalInformation onBlur={onBlurInput} />
         <CabinetSettingsNotifications onChange={onChangeNovifications} />
         <CabinetSettingsDocs onChange={onChangeInputImg} onDelete={onDeleteInputImg} />
      </div>
   )
}

export default CabinetSettings
