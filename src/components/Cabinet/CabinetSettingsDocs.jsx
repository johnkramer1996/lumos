import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useInputFile } from 'hooks'
import { getImgUrl } from 'utils'

const CabinetSettingsDocs = ({ onChange, onDelete }) => {
    const user = useSelector(({ auth }) => auth.user)
    const passportFirst = useInputFile()
    const passportSecond = useInputFile()
    const diplom = useInputFile()
    const treaty = useInputFile()

    useEffect(() => {
        user.docs.file_passport_1 && passportFirst.setImg(getImgUrl(user.docs.file_passport_1))
        user.docs.file_passport_2 && passportSecond.setImg(getImgUrl(user.docs.file_passport_2))
        user.docs.file_diplom && diplom.setImg(getImgUrl(user.docs.file_diplom))
        user.docs.file_treaty && treaty.setImg(getImgUrl(user.docs.file_treaty))
    }, [user])

    return (
        <div className='account-settings__group card-bg'>
            <h3 className='account-settings__subtitle display-4'>Документы</h3>
            <div className='account-settings__desc'>Фото должны быть четкими, а текст на документах хорошо считываться</div>

            <div className={`account-settings__item ${passportFirst.img ? 'account-settings__item--active' : ''}`}>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Файл паспорта 1</span>
                    {passportFirst.img && (
                        <button className='account-settings__item-btn' onClick={onDelete.bind(null, passportFirst)}>
                            Изменить
                        </button>
                    )}
                </div>
                <div className='account-settings__item-doc'>{passportFirst.img && <img src={passportFirst.img} alt='' />}</div>
                <div className='account-settings__upload'>
                    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M5.33325 21.3333L11.4479 15.2186C11.948 14.7187 12.6261 14.4378 13.3333 14.4378C14.0404 14.4378 14.7185 14.7187 15.2186 15.2186L21.3333 21.3333M18.6666 18.6666L20.7813 16.5519C21.2813 16.052 21.9595 15.7712 22.6666 15.7712C23.3737 15.7712 24.0518 16.052 24.5519 16.5519L26.6666 18.6666M18.6666 10.6666H18.6799M7.99992 26.6666H23.9999C24.7072 26.6666 25.3854 26.3856 25.8855 25.8855C26.3856 25.3854 26.6666 24.7072 26.6666 23.9999V7.99992C26.6666 7.29267 26.3856 6.6144 25.8855 6.1143C25.3854 5.6142 24.7072 5.33325 23.9999 5.33325H7.99992C7.29267 5.33325 6.6144 5.6142 6.1143 6.1143C5.6142 6.6144 5.33325 7.29267 5.33325 7.99992V23.9999C5.33325 24.7072 5.6142 25.3854 6.1143 25.8855C6.6144 26.3856 7.29267 26.6666 7.99992 26.6666Z'
                            stroke='#C5D6F1'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        ></path>
                    </svg>
                    <div className='account-settings__upload-title'>
                        <strong>Загрузите файл</strong>
                        <span>или перетащите его сюда</span>
                    </div>
                    <div className='account-settings__upload-hint'>PNG, JPG до 5 MБ</div>
                    <input
                        ref={passportFirst.ref}
                        type='file'
                        className='account-settings__upload-input'
                        accept='image/png, image/gif, image/jpeg'
                        name='file_passport_1'
                        onChange={onChange.bind(null, passportFirst)}
                    />
                </div>
            </div>

            <div className={`account-settings__item ${passportSecond.img ? 'account-settings__item--active' : ''}`}>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Файл паспорта 2</span>
                    {passportFirst.img && (
                        <button className='account-settings__item-btn' onClick={onDelete.bind(null, passportSecond)}>
                            Изменить
                        </button>
                    )}
                </div>
                <div className='account-settings__item-doc'>{passportSecond.img && <img src={passportSecond.img} alt='' />}</div>
                <div className='account-settings__upload'>
                    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M5.33325 21.3333L11.4479 15.2186C11.948 14.7187 12.6261 14.4378 13.3333 14.4378C14.0404 14.4378 14.7185 14.7187 15.2186 15.2186L21.3333 21.3333M18.6666 18.6666L20.7813 16.5519C21.2813 16.052 21.9595 15.7712 22.6666 15.7712C23.3737 15.7712 24.0518 16.052 24.5519 16.5519L26.6666 18.6666M18.6666 10.6666H18.6799M7.99992 26.6666H23.9999C24.7072 26.6666 25.3854 26.3856 25.8855 25.8855C26.3856 25.3854 26.6666 24.7072 26.6666 23.9999V7.99992C26.6666 7.29267 26.3856 6.6144 25.8855 6.1143C25.3854 5.6142 24.7072 5.33325 23.9999 5.33325H7.99992C7.29267 5.33325 6.6144 5.6142 6.1143 6.1143C5.6142 6.6144 5.33325 7.29267 5.33325 7.99992V23.9999C5.33325 24.7072 5.6142 25.3854 6.1143 25.8855C6.6144 26.3856 7.29267 26.6666 7.99992 26.6666Z'
                            stroke='#C5D6F1'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        ></path>
                    </svg>
                    <div className='account-settings__upload-title'>
                        <strong>Загрузите файл</strong>
                        <span>или перетащите его сюда</span>
                    </div>
                    <div className='account-settings__upload-hint'>PNG, JPG до 5 MБ</div>
                    <input
                        ref={passportSecond.ref}
                        type='file'
                        className='account-settings__upload-input'
                        accept='image/png, image/gif, image/jpeg'
                        name='file_passport_2'
                        onChange={onChange.bind(null, passportSecond)}
                    />
                </div>
            </div>

            <div className={`account-settings__item ${diplom.img ? 'account-settings__item--active' : ''}`}>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Файл диплома</span>
                    {passportFirst.img && (
                        <button className='account-settings__item-btn' onClick={onDelete.bind(null, diplom)}>
                            Изменить
                        </button>
                    )}
                </div>
                <div className='account-settings__item-doc'>{diplom.img && <img src={diplom.img} alt='' />}</div>
                <div className='account-settings__upload'>
                    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M5.33325 21.3333L11.4479 15.2186C11.948 14.7187 12.6261 14.4378 13.3333 14.4378C14.0404 14.4378 14.7185 14.7187 15.2186 15.2186L21.3333 21.3333M18.6666 18.6666L20.7813 16.5519C21.2813 16.052 21.9595 15.7712 22.6666 15.7712C23.3737 15.7712 24.0518 16.052 24.5519 16.5519L26.6666 18.6666M18.6666 10.6666H18.6799M7.99992 26.6666H23.9999C24.7072 26.6666 25.3854 26.3856 25.8855 25.8855C26.3856 25.3854 26.6666 24.7072 26.6666 23.9999V7.99992C26.6666 7.29267 26.3856 6.6144 25.8855 6.1143C25.3854 5.6142 24.7072 5.33325 23.9999 5.33325H7.99992C7.29267 5.33325 6.6144 5.6142 6.1143 6.1143C5.6142 6.6144 5.33325 7.29267 5.33325 7.99992V23.9999C5.33325 24.7072 5.6142 25.3854 6.1143 25.8855C6.6144 26.3856 7.29267 26.6666 7.99992 26.6666Z'
                            stroke='#C5D6F1'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        ></path>
                    </svg>
                    <div className='account-settings__upload-title'>
                        <strong>Загрузите файл</strong>
                        <span>или перетащите его сюда</span>
                    </div>
                    <div className='account-settings__upload-hint'>PNG, JPG до 5 MБ</div>
                    <input
                        ref={diplom.ref}
                        type='file'
                        className='account-settings__upload-input'
                        accept='image/png, image/gif, image/jpeg'
                        name='file_diplom'
                        onChange={onChange.bind(null, diplom)}
                    />
                </div>
            </div>

            <div className={`account-settings__item ${treaty.img ? 'account-settings__item--active' : ''}`}>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Файл договора</span>
                    {passportFirst.img && (
                        <button className='account-settings__item-btn' onClick={onDelete.bind(null, treaty)}>
                            Изменить
                        </button>
                    )}
                </div>
                <div className='account-settings__item-doc'>{treaty.img && <img src={treaty.img} alt='' />}</div>
                <div className='account-settings__upload'>
                    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M5.33325 21.3333L11.4479 15.2186C11.948 14.7187 12.6261 14.4378 13.3333 14.4378C14.0404 14.4378 14.7185 14.7187 15.2186 15.2186L21.3333 21.3333M18.6666 18.6666L20.7813 16.5519C21.2813 16.052 21.9595 15.7712 22.6666 15.7712C23.3737 15.7712 24.0518 16.052 24.5519 16.5519L26.6666 18.6666M18.6666 10.6666H18.6799M7.99992 26.6666H23.9999C24.7072 26.6666 25.3854 26.3856 25.8855 25.8855C26.3856 25.3854 26.6666 24.7072 26.6666 23.9999V7.99992C26.6666 7.29267 26.3856 6.6144 25.8855 6.1143C25.3854 5.6142 24.7072 5.33325 23.9999 5.33325H7.99992C7.29267 5.33325 6.6144 5.6142 6.1143 6.1143C5.6142 6.6144 5.33325 7.29267 5.33325 7.99992V23.9999C5.33325 24.7072 5.6142 25.3854 6.1143 25.8855C6.6144 26.3856 7.29267 26.6666 7.99992 26.6666Z'
                            stroke='#C5D6F1'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        ></path>
                    </svg>
                    <div className='account-settings__upload-title'>
                        <strong>Загрузите файл</strong>
                        <span>или перетащите его сюда</span>
                    </div>
                    <div className='account-settings__upload-hint'>PNG, JPG до 5 MБ</div>
                    <input
                        ref={treaty.ref}
                        type='file'
                        className='account-settings__upload-input'
                        accept='image/png, image/gif, image/jpeg'
                        name='file_treaty'
                        onChange={onChange.bind(null, treaty)}
                    />
                </div>
            </div>
        </div>
    )
}

CabinetSettingsDocs.propTypes = {
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default CabinetSettingsDocs
