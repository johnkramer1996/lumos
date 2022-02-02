import React from 'react'

const CabinetSettingsNotificationsItem = () => {
    return (
        <div className='account-settings__switch'>
            <div className='account-settings__switch-title'>Электронная почта</div>
            <div className='account-settings__switch-input switch'>
                <input type='checkbox' className='checkbox' id='switch1' defaultChecked={checkbox1.value} {...checkbox1.bind} onChange={(e) => {}} />
                <label htmlFor='switch1'></label>
            </div>
        </div>
    )
}

export default CabinetSettingsNotificationsItem
