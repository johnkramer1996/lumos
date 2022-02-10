import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button } from 'components/ui'
import { getDate, getURL } from 'utils'
import { useDispatch, useInput, useInputFile } from 'hooks'
import { authSelectors } from 'store/selectors'
import { ReactComponent as SocialGoogleSvg } from 'svg/social-google.svg'
import { ReactComponent as SocialAppleSvg } from 'svg/social-apple.svg'
import { ReactComponent as SocialVkSvg } from 'svg/social-vk.svg'
import { ReactComponent as SocialFBSvg } from 'svg/social-fb.svg'
import { ReactComponent as LogoutSvg } from 'svg/logout.svg'

const CabinetSettingsAccount = ({ onBlur, onChange, onDelete }) => {
   const { logout } = useDispatch()
   const user = useSelector(authSelectors.getUser)
   const role = useSelector(authSelectors.getRole)
   const avatar = useInputFile({ initialValue: getURL.avatar('', role) })
   const email = useInput({ bind: { className: 'account-settings__item-input' }, is: { isDisabled: true } })
   const createdAt = useInput({ bind: { className: 'account-settings__item-input' } })
   const password = useInput({ initialValue: 'password', bind: { className: 'account-settings__item-input' }, is: { isDisabled: true } })
   const vacationStart = useInput({ bind: { className: 'account-settings__item-input' }, is: { isDate: true } })
   const vacationEnd = useInput({ bind: { className: 'account-settings__item-input' }, is: { isDate: true } })

   useEffect(() => {
      user.avatar && avatar.setValue(getURL.avatar(user.avatar, role))
      user.email && email.setValue(user.email)
      user.created_at && createdAt.setValue(getDate(user.created_at))
      user.vacation[0] && vacationStart.setValue(user.vacation[0])
      user.vacation[1] && vacationEnd.setValue(user.vacation[1])
   }, [user])

   return (
      <div className='account-settings__group card-bg'>
         <h3 className='account-settings__subtitle display-4'>Аккаунт</h3>
         <div className='account-settings__photo'>
            <div className='account-settings__photo-title'>Фото</div>
            <div className='account-settings__photo-wrap'>
               <div className='account-settings__photo-img'>
                  <img src={avatar.value} alt='' />
               </div>
               <div className='account-settings__photo-buttons'>
                  <Button className='account-settings__photo-save btn--uploadfile'>
                     <input ref={avatar.ref} type='file' accept='image/png, image/gif, image/jpeg' onChange={onChange.bind(null, avatar)} name='avatar' />
                     Загрузить {avatar.value ? 'новое' : 'изображение'}
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
                  <SocialGoogleSvg />
                  <span>Отключить</span>
               </div>
               <div className='account-settings__item-social'>
                  <SocialAppleSvg />
                  <span>Подключить</span>
               </div>
               <div className='account-settings__item-social'>
                  <SocialVkSvg />
                  <span>Подключить</span>
               </div>
               <div className='account-settings__item-social'>
                  <SocialFBSvg />
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
            <input className='account-settings__item-input' type='text' {...createdAt.bind} onBlur={onBlur.bind(null, createdAt)} disabled />
         </div>
         <button className='account-settings__logout btn btn-light-red' onClick={logout}>
            <LogoutSvg />
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
