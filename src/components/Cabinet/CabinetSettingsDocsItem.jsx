import React from 'react'
import { isActiveClass } from 'utils'
import { ReactComponent as UploadSvg } from 'svg/upload.svg'

const CabinetSettingsDocsItem = ({ input, label, name, onDelete, onChange }) => {
    return (
        <div className={`account-settings__item ${isActiveClass(input.value, 'account-settings__item--active')}`}>
            <div className='account-settings__item-top'>
                <span className='account-settings__item-title'>{label}</span>
                {input.value && (
                    <button className='account-settings__item-btn' onClick={onDelete.bind(null, input)}>
                        Изменить
                    </button>
                )}
            </div>
            <div className='account-settings__item-doc' onClick={input.onOpen}>
                {input.value && <img src={input.value} alt='' />}
            </div>
            <div className='account-settings__upload'>
                <UploadSvg />
                <div className='account-settings__upload-title'>
                    <strong>Загрузите файл</strong>
                    <span>или перетащите его сюда</span>
                </div>
                <div className='account-settings__upload-hint'>PNG, JPG до 5 MБ</div>
                <input ref={input.ref} type='file' className='account-settings__upload-input' accept='image/png, image/gif, image/jpeg' onChange={onChange.bind(null, input)} name={name} />
            </div>
        </div>
    )
}

export default CabinetSettingsDocsItem
