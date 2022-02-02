import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch, useRequest, useInput } from 'hooks/'
import { getDate, getImgUrl } from 'utils'
import CabinetSettingsDocs from './CabinetSettingsDocs'
import CabinetSettingsAccount from './CabinetSettingsAccount'
import CabinetSettingsPersonalInformation from './CabinetSettingsPersonalInformation'
import CabinetSettingsNotifications from './CabinetSettingsNotifications'

const CabinetSettings = () => {
    const { settings } = useDispatch()
    const settingsRequest = useRequest({
        request: settings,
    })
    const createRequest = (name, value) => {
        const body = new FormData()
        body.append(name, value)
        if (name === 'password') body.append('password_confirmation', value)
        settingsRequest.call({ body })
    }
    const onBlurInput = (input) => {
        input.onBlur()
        if (input.prevValue === input.value) return
        const { name, value } = input.ref.current
        createRequest(name, value)
    }
    const onChangeInputImg = (input) => {
        input.onChange()
        createRequest(input.ref.current.name, input.ref.current.files[0])
    }
    const onDeleteInputImg = (input) => {
        input.onDelete()
        input.ref.current.click()
        createRequest(`delete_${input.ref.current.name}`, '1')
    }
    const onChangeNovifications = (type, source, status) => {
        const body = new FormData()
        body.append(`notifications[0][type]`, type)
        body.append(`notifications[0][source]`, source)
        body.append(`notifications[0][status]`, +status)
        settingsRequest.call({ body })
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
