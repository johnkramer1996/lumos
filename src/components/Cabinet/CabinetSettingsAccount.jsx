import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button } from 'components/ui'
import { getDate, getImgUrl } from 'utils'
import { useDispatch, useInput, useInputFile } from 'hooks'

const CabinetSettingsAccount = ({ onBlur, onChange, onDelete }) => {
    const { logout } = useDispatch()
    const user = useSelector(({ auth }) => auth.user)
    const avatar = useInputFile()
    const email = useInput({ isDisabled: true })
    const createdAt = useInput()
    const password = useInput({ initialValue: 'password', isDisabled: true })
    const vacationStart = useInput()
    const vacationEnd = useInput()

    useEffect(() => {
        user.avatar && avatar.setImg(getImgUrl(user.avatar))
        user.email && email.setValue(user.email)
        user.created_at && createdAt.setValue(getDate(user.created_at))
        user.vacation[0] && vacationStart.setValue(user.vacation[0])
        user.vacation[1] && vacationEnd.setValue(user.vacation[1])
    }, [user])

    useEffect(() => {
        const maskDate = (e) => {
            if (e.keyCode < 47 || e.keyCode > 57) e.preventDefault()
            const len = e.target.value.length
            if (len !== 1 || len !== 3) if (e.keyCode === 47) e.preventDefault()
            if (len === 4) e.target.value += '-'
            if (len === 7) e.target.value += '-'
        }

        vacationStart.ref.current?.addEventListener('keypress', maskDate)
        vacationEnd.ref.current?.addEventListener('keypress', maskDate)

        return () => {
            vacationStart.ref.current?.removeEventListener('keypress', maskDate)
            vacationEnd.ref.current?.removeEventListener('keypress', maskDate)
        }
    }, [])

    return (
        <div className='account-settings__group card-bg'>
            <h3 className='account-settings__subtitle display-4'>Аккаунт</h3>
            <div className='account-settings__photo'>
                <div className='account-settings__photo-title'>Фото</div>
                <div className='account-settings__photo-wrap'>
                    <div className='account-settings__photo-img'>
                        <img src={avatar.img} alt='' />
                    </div>
                    <div className='account-settings__photo-buttons'>
                        <Button className='account-settings__photo-save btn--uploadfile'>
                            <input ref={avatar.ref} type='file' accept='image/png, image/gif, image/jpeg' onChange={onChange.bind(null, avatar)} name='avatar' />
                            Загрузить {avatar.img ? 'новое' : 'изображение'}
                        </Button>
                        <Button className='account-settings__photo-delete' onClick={onDelete.bind(null, avatar)} outline>
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>

            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>E-mail</span>
                    <button className='account-settings__item-btn' onClick={email.onDisabledRemove}>
                        Изменить
                    </button>
                </div>
                <input className='account-settings__item-input' type='email' name='new_email' {...email.bind} onBlur={onBlur.bind(null, email)} />
            </div>
            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Пароль</span>
                    <button className='account-settings__item-btn' onClick={password.onDisabledRemove}>
                        Изменить пароль
                    </button>
                </div>
                <input className='account-settings__item-input' type='password' name='password' {...password.bind} onBlur={onBlur.bind(null, password)} />
            </div>
            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settizngs__item-title'>Социальные сети</span>
                </div>
                <div className='account-settings__item-socials'>
                    <div className='account-settings__item-social account-settings__item-social--active'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M5.625 11.9999C5.625 10.8109 5.95261 9.69696 6.52177 8.7432V4.69751H2.47608C0.870375 6.78288 0 9.3244 0 11.9999C0 14.6755 0.870375 17.217 2.47608 19.3024H6.52177V15.2567C5.95261 14.3029 5.625 13.189 5.625 11.9999Z'
                                fill='#FBBD01'
                            />
                            <path d='M12 18.3751L9.1875 21.1876L12 24.0001C14.6756 24.0001 17.217 23.1297 19.3024 21.524V17.4827H15.261C14.2989 18.0539 13.1804 18.3751 12 18.3751Z' fill='#30A952' />
                            <path
                                d='M6.52225 15.2568L2.47656 19.3025C2.79447 19.7154 3.14064 20.1108 3.51522 20.4854C5.78172 22.7519 8.79517 24.0001 12.0005 24.0001V18.3751C9.67436 18.3751 7.63562 17.1226 6.52225 15.2568Z'
                                fill='#30A952'
                            />
                            <path
                                d='M24 11.9999C24 11.2699 23.9339 10.5384 23.8035 9.82603L23.698 9.24951H12V14.8745H17.6931C17.1402 15.9742 16.2902 16.8715 15.261 17.4825L19.3024 21.5239C19.7153 21.206 20.1106 20.8598 20.4853 20.4853C22.7518 18.2187 24 15.2053 24 11.9999Z'
                                fill='#4086F4'
                            />
                            <path
                                d='M16.5078 7.49217L17.005 7.98933L20.9825 4.01189L20.4853 3.51473C18.2188 1.24823 15.2054 0 12 0L9.1875 2.8125L12 5.625C13.7028 5.625 15.3037 6.28809 16.5078 7.49217Z'
                                fill='#EB4132'
                            />
                            <path
                                d='M11.9996 5.625V0C8.79424 0 5.78079 1.24823 3.51424 3.51469C3.13966 3.88927 2.79349 4.28466 2.47559 4.69758L6.52127 8.74327C7.6347 6.8775 9.67343 5.625 11.9996 5.625Z'
                                fill='#EB4132'
                            />
                        </svg>
                        <span>Отключить</span>
                    </div>
                    <div className='account-settings__item-social'>
                        <svg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M8.68377 24C5.11185 23.9794 2.15723 16.6879 2.15723 12.9745C2.15723 6.90873 6.70762 5.58077 8.4613 5.58077C9.25162 5.58077 10.0955 5.89112 10.8398 6.16577C11.3603 6.35734 11.8986 6.55511 12.198 6.55511C12.3772 6.55511 12.7995 6.38688 13.1724 6.23927C13.9675 5.92272 14.957 5.5293 16.1091 5.5293C16.1112 5.5293 16.114 5.5293 16.116 5.5293C16.9763 5.5293 19.5849 5.71811 21.1532 8.0733L21.5206 8.62534L20.9919 9.0243C20.2366 9.5942 18.8585 10.6338 18.8585 12.6931C18.8585 15.132 20.4192 16.07 21.169 16.5211C21.5 16.7202 21.8426 16.9255 21.8426 17.3746C21.8426 17.6678 19.5025 23.9636 16.1043 23.9636C15.2728 23.9636 14.685 23.7137 14.1666 23.4933C13.642 23.2701 13.1895 23.0779 12.4417 23.0779C12.0627 23.0779 11.5834 23.2571 11.076 23.4473C10.3826 23.7061 9.5977 24 8.70712 24H8.68377Z'
                                fill='#1B2C3E'
                            />
                            <path d='M16.4688 0C16.5573 3.19106 14.2752 5.40488 11.9958 5.26603C11.6201 2.71945 14.2749 0 16.4688 0Z' fill='#1B2C3E' />
                        </svg>
                        <span>Подключить</span>
                    </div>
                    <div className='account-settings__item-social'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M23.7861 17.3671C23.7216 17.2591 23.3225 16.392 21.4024 14.6099C19.3923 12.7438 19.6623 13.0468 22.0835 9.82005C23.5581 7.8549 24.1476 6.65481 23.9631 6.14178C23.7876 5.65274 22.703 5.78175 22.703 5.78175L19.0967 5.80275C19.0967 5.80275 18.8297 5.76675 18.6302 5.88526C18.4367 6.00227 18.3122 6.27229 18.3122 6.27229C18.3122 6.27229 17.7406 7.7934 16.9786 9.08649C15.372 11.8152 14.7284 11.9592 14.4659 11.7897C13.8553 11.3952 14.0084 10.2026 14.0084 9.35651C14.0084 6.71182 14.4089 5.60924 13.2268 5.32422C12.8338 5.22971 12.5458 5.1667 11.5422 5.1562C10.2551 5.1427 9.16451 5.1607 8.54796 5.46223C8.13693 5.66324 7.82041 6.11177 8.01392 6.13728C8.25244 6.16878 8.79248 6.28279 9.079 6.67282C9.44953 7.17535 9.43602 8.30644 9.43602 8.30644C9.43602 8.30644 9.64904 11.4192 8.93949 11.8062C8.45195 12.0717 7.7844 11.5302 6.3518 9.05349C5.61825 7.7859 5.06321 6.38329 5.06321 6.38329C5.06321 6.38329 4.9567 6.12228 4.76618 5.98276C4.53517 5.81325 4.21114 5.75925 4.21114 5.75925L0.781892 5.78025C0.781892 5.78025 0.267354 5.79525 0.0783406 6.01877C-0.0896717 6.21828 0.0648396 6.62931 0.0648396 6.62931C0.0648396 6.62931 2.75004 12.9103 5.78926 16.077C8.57796 18.9797 11.7432 18.7892 11.7432 18.7892H13.1773C13.1773 18.7892 13.6108 18.7412 13.8313 18.5027C14.0354 18.2837 14.0279 17.8726 14.0279 17.8726C14.0279 17.8726 13.9994 15.948 14.8934 15.6645C15.774 15.3855 16.9051 17.5246 18.1037 18.3482C19.0097 18.9707 19.6983 18.8342 19.6983 18.8342L22.904 18.7892C22.904 18.7892 24.5811 18.6857 23.7861 17.3671Z'
                                fill='#1B2C3E'
                            />
                        </svg>
                        <span>Подключить</span>
                    </div>
                    <div className='account-settings__item-social'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M15.1743 5.32056H17V2.14082C16.685 2.09749 15.6018 2 14.3402 2C11.7079 2 9.90476 3.6557 9.90476 6.69878V9.49938H7V13.0541H9.90476V21.9983H13.4661V13.0549H16.2534L16.6959 9.50021H13.4653V7.05125C13.4661 6.02383 13.7428 5.32056 15.1743 5.32056Z'
                                fill='#1B2C3E'
                            />
                        </svg>
                        <span>Подключить</span>
                    </div>
                </div>
            </div>
            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Отпуск от</span>
                </div>
                <input className='account-settings__item-input' type='text' {...vacationStart.bind} onBlur={onBlur.bind(null, vacationStart)} maxLength='10' name='vacation_start' />
            </div>
            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Отпуск до</span>
                </div>
                <input className='account-settings__item-input' type='text' {...vacationEnd.bind} onBlur={onBlur.bind(null, vacationEnd)} maxLength='10' name='vacation_end' />
            </div>
            <div className='account-settings__item'>
                <div className='account-settings__item-top'>
                    <span className='account-settings__item-title'>Дата регистрации</span>
                </div>
                <input className='account-settings__item-input' type='text' name='created_at' {...createdAt.bind} onBlur={onBlur.bind(null, createdAt)} disabled />
            </div>
            <button className='account-settings__logout btn btn-light-red' onClick={logout}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M15.0165 7.38948V6.45648C15.0165 4.42148 13.3665 2.77148 11.3315 2.77148H6.45646C4.42246 2.77148 2.77246 4.42148 2.77246 6.45648V17.5865C2.77246 19.6215 4.42246 21.2715 6.45646 21.2715H11.3415C13.3705 21.2715 15.0165 19.6265 15.0165 17.5975V16.6545'
                        stroke='#E15A5A'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <path d='M21.8096 12.0215H9.76855' stroke='#E15A5A' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M18.8818 9.1062L21.8098 12.0212L18.8818 14.9372' stroke='#E15A5A' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                <span>Выйти из аккаунта</span>
            </button>
        </div>
    )
}

CabinetSettingsAccount.propTypes = {
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default CabinetSettingsAccount
