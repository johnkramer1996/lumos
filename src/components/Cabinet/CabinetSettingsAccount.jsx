import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button, DatePicker } from 'components/ui'
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
   const rolesId = useSelector(authSelectors.getRolesId)
   const avatar = useInputFile({ initialValue: getURL.avatar(user.avatar, rolesId) })
   const email = useInput({ bind: { className: 'account-settings__item-input' }, is: { isDisabled: true } })
   const createdAt = useInput({ bind: { className: 'account-settings__item-input' } })
   const password = useInput({ initialValue: 'password', bind: { className: 'account-settings__item-input' }, is: { isDisabled: true } })
   const vacationStart = useInput({ bind: { className: 'account-settings__item-input' } })
   const vacationEnd = useInput({ bind: { className: 'account-settings__item-input' } })

   useEffect(() => {
      avatar.setValue(getURL.avatar(user.avatar, rolesId))
      user.email && email.setValue(user.email)
      user.created_at && createdAt.setValue(getDate(user.created_at))
      user.vacation[0] && vacationStart.setValue(user.vacation[0])
      user.vacation[1] && vacationEnd.setValue(user.vacation[1])
   }, [user])

   useEffect(() => {}, [])

   return (
      <div className='account-settings__group card-bg'>
         <h3 className='account-settings__subtitle display-4'>Аккаунт</h3>
         <div className='account-settings__photo'>
            <div className='account-settings__photo-title'>Фото</div>
            <div className='account-settings__photo-wrap'>
               <div className='account-settings__photo-img' onClick={avatar.onOpen}>
                  {avatar.value && <img src={avatar.value} alt='' />}
               </div>
               <div className='account-settings__photo-buttons'>
                  <Button className='account-settings__photo-save btn--uploadfile'>
                     <input ref={avatar.ref} type='file' accept='image/png, image/gif, image/jpeg' onChange={onChange.bind(null, avatar)} name='avatar' />
                     Загрузить {user.avatar ? 'новое' : 'изображение'}
                  </Button>
                  {user.avatar && (
                     <Button className='account-settings__photo-delete' onClick={onDelete.bind(null, avatar, false)} outline>
                        Удалить
                     </Button>
                  )}
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
            <input type='email' name='new_email' {...email.bind} onBlur={onBlur.bind(null, email)} />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Пароль</span>
               <button className='account-settings__item-btn' onClick={password.onDisabledRemove}>
                  Изменить пароль
               </button>
            </div>
            <input type='password' name='password' {...password.bind} onBlur={onBlur.bind(null, password)} />
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
            <DatePicker name='vacation_start' input={vacationStart} onBlur={onBlur} />
            {/* <input type='text' {...vacationStart.bind} onBlur={onBlur.bind(null, vacationStart)} name='vacation_start' maxLength='10' /> */}
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Отпуск до</span>
            </div>
            <DatePicker name='vacation_end' input={vacationEnd} onBlur={onBlur} />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Дата регистрации</span>
            </div>
            <input type='text' {...createdAt.bind} onBlur={onBlur.bind(null, createdAt)} disabled />
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
