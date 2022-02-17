import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CabinetSettingsNotificationsItem from './CabinetSettingsNotificationsItem'
import { authSelectors, systemSelectors } from 'store/selectors'
import CabinetSettingsNotificationsTelegram from './CabinetSettingsNotificationsTelegram'

const CabinetSettingsNotifications = ({ onChange }) => {
   const user = useSelector(authSelectors.getUser)
   const { user_notify_sourses, user_notify_types } = useSelector(systemSelectors.getUserSettings)

   const [novifications, setNovifications] = useState([])

   const createNotifications = (notifications) =>
      new Array(user_notify_types.length)
         .fill(0)
         .map((_) => new Array(user_notify_sourses.length).fill(0))
         .map((row, indexRow) => ({
            type: user_notify_types[indexRow].name,
            sources: row.map((_, indexCol) => ({
               source: user_notify_sourses[indexCol].name,
               status: !!notifications?.find(({ type, source }) => type === indexRow && source === indexCol),
            })),
         }))

   useEffect(() => {
      user && setNovifications(createNotifications(user.notifications))
   }, [user, user_notify_sourses, user_notify_types])

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
