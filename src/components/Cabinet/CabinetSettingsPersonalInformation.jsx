import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useInput } from 'hooks'

const CabinetSettingsPersonalInformation = ({ onBlur }) => {
    const user = useSelector(({ auth }) => auth.user)
    const firstName = useInput({ bind: { className: 'account-settings__item-input' } })
    const lastName = useInput({ bind: { className: 'account-settings__item-input' } })
    const phone = useInput({ bind: { className: 'account-settings__item-input' }, is: { isDisabled: true } })

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
                <input className='account-settings__item-input' type='text' name='first_name' {...firstName.bind} onBlur={onBlur.bind(null, firstName)} />
            </div>
            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Фамилия</span>
                </div>
                <input className='account-settings__item-input' type='text' name='last_name' {...lastName.bind} onBlur={onBlur.bind(null, lastName)} />
            </div>
            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Номер телефона</span>
                    <button className='account-settings__item-btn' onClick={phone.onDisabledRemove}>
                        Изменить
                    </button>
                </div>
                <input className='account-settings__item-input' type='tel' name='phone' {...phone.bind} onBlur={onBlur.bind(null, phone)} />
            </div>
        </div>
    )
}

CabinetSettingsPersonalInformation.propTypes = {
    onBlur: PropTypes.func.isRequired,
}

export default CabinetSettingsPersonalInformation
