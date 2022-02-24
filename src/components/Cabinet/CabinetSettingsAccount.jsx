import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button, Input } from 'components/ui'
import { getDate, getURL } from 'utils'
import { useDispatch, useInput, useInputFile } from 'hooks'
import { authSelectors } from 'store/selectors'
import { ReactComponent as SocialGoogleSvg } from 'svg/social-google.svg'
import { ReactComponent as SocialAppleSvg } from 'svg/social-apple.svg'
import { ReactComponent as SocialVkSvg } from 'svg/social-vk.svg'
import { ReactComponent as SocialFbSvg } from 'svg/social-fb.svg'
import { ReactComponent as LogoutSvg } from 'svg/logout.svg'
import { useForm } from 'react-hook-form'

const CabinetSettingsAccount = ({ onBlur, onChange, onDelete }) => {
   const { logout } = useDispatch()
   const user = useSelector(authSelectors.getUser)
   const rolesId = useSelector(authSelectors.getRolesId)

   const avatar = useInputFile({ initialValue: getURL.avatar(user.avatar, rolesId) })
   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         email: '',
         created_at: '',
         vacation_start: '',
         vacation_end: '',
      },
   })

   useEffect(() => {
      avatar.setValue(getURL.avatar(user.avatar, rolesId))
      form.setValue('email', user.email)
      form.setValue('created_at', getDate(user.created_at))
      form.setValue('vacation_start', user.vacation[0])
      form.setValue('vacation_end', user.vacation[1])
   }, [user])

   //  TODO COMPARE PASSWORD
   // https://codesandbox.io/s/react-hook-form-getvalues-compare-field-values-orf0p?file=/src/index.js:842-865

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
               <button className='account-settings__item-btn'>
                  Изменить
                  <input type='checkbox' {...form.register('email-change')} />
               </button>
            </div>
            <Input form={form} name='email' className='account-settings__item-input' onBlur={onBlur} disabled={!form.watch('email-change')} withoutWrapper />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Пароль</span>
               <button className='account-settings__item-btn'>
                  Изменить пароль
                  <input type='checkbox' {...form.register('password-change')} />
               </button>
            </div>
            <Input form={form} name='password' className='account-settings__item-input' onBlur={onBlur} disabled={!form.watch('password-change')} withoutWrapper />
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
                  <SocialFbSvg />
                  <span>Подключить</span>
               </div>
            </div>
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Отпуск от</span>
            </div>
            <Input form={form} name='vacation_start' className='account-settings__item-input' onBlur={onBlur} withoutWrapper datepicker />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Отпуск до</span>
            </div>
            <Input form={form} name='vacation_end' className='account-settings__item-input' onBlur={onBlur} withoutWrapper datepicker />
         </div>
         <div className='account-settings__item'>
            <div className='account-settings__item-top'>
               <span className='account-settings__item-title'>Дата регистрации</span>
            </div>
            <Input form={form} name='created_at' className='account-settings__item-input' onBlur={onBlur} withoutWrapper />
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
