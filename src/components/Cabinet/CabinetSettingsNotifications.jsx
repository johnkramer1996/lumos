import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CabinetSettingsNotificationsItem from './CabinetSettingsNotificationsItem'
import { NOTIFICATIONS } from 'constants'
import { authSelectors } from 'store/selectors'
import CabinetSettingsNotificationsTelegram from './CabinetSettingsNotificationsTelegram'

const CabinetSettingsNotifications = ({ onChange }) => {
   const user = useSelector(authSelectors.getUser)

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
         <CabinetSettingsNotificationsTelegram />
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
