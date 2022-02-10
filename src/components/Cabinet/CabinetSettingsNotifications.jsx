import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CabinetSettingsNotificationsItem from './CabinetSettingsNotificationsItem'
import { NOTIFICATIONS } from 'constants'

const CabinetSettingsNotifications = ({ onChange }) => {
   const user = useSelector(({ auth }) => auth.user)
   const [novifications, setNovifications] = useState([])

   const notificationsTypes = NOTIFICATIONS.TYPES
   const notificationsSource = NOTIFICATIONS.SOURCE

   const createNotifications = (notifications) =>
      new Array(notificationsTypes.length)
         .fill(0)
         .map((_) => new Array(notificationsSource.length).fill(0))
         .map((row, indexRow) => ({
            type: notificationsTypes[indexRow],
            sources: row.map((col, indexCol) => ({
               source: notificationsSource[indexCol],
               status: !!notifications?.find(({ type, source }) => type === indexRow && source === indexCol),
            })),
         }))

   useEffect(() => {
      user && setNovifications(createNotifications(user.notifications))
   }, [user])

   return (
      <div className='account-settings__group card-bg'>
         <h3 className='account-settings__subtitle display-4'>Уведомления</h3>
         <div className='account-settings__item'>
            <span className='account-settings__item-title'>Социальные сети</span>
            <span className='account-settings__item-desc'>Подключите Telegram к своему аккаунту, чтобы получать уведомления от бота в мессенджере</span>
            <div className='account-settings__item-socials'>
               <div className='account-settings__item-social account-settings__item-social--active'>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                     <path
                        d='M23.9998 2.36664L20.2039 21.5048C20.2039 21.5048 19.6732 22.8318 18.2131 22.1948L9.41417 15.4602C10.5968 14.3971 19.7717 6.14851 20.1729 5.77445C20.7931 5.19554 20.4082 4.85101 19.6873 5.28882L6.13526 13.8951L0.906828 12.1349C0.906828 12.1349 0.0837031 11.8429 0.00448434 11.2059C-0.0752032 10.5688 0.933547 10.2238 0.933547 10.2238L22.2481 1.86226C22.2481 1.86226 23.9998 1.09257 23.9998 2.36664Z'
                        fill='#2FA4DE'
                     />
                  </svg>
                  <span>Отключить</span>
               </div>
            </div>
         </div>
         {novifications.map((props, indexType) => (
            <CabinetSettingsNotificationsItem key={indexType} {...props} onChange={onChange} index={indexType} />
         ))}
      </div>
   )
}

CabinetSettingsNotifications.propTypes = {
   onChange: PropTypes.func.isRequired,
}

export default CabinetSettingsNotifications
