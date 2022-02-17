import React, { useEffect, useState } from 'react'
import HeaderNotificationItem from './HeaderNotificationItem'
import { useDispatch, useEvent, useRequest } from 'hooks'
import { isActiveClass } from 'utils'
import { ReactComponent as NotificationSvg } from 'svg/notification.svg'
import { useSelector } from 'react-redux'
import { Loader } from 'components/ui'

const HeaderNotification = () => {
   const { fetchUserNotifications, readUserNotifications } = useDispatch()
   const notifications = useSelector(({ courses }) => courses.notifications)
   const notificationsNew = useSelector(({ courses }) => courses.notificationsNew)
   const notificationsData = useSelector(({ courses }) => courses.notificationsData)

   const { new_count } = notificationsData
   const [isActive, setIsActive] = useState(false)

   const fetchUserNotificationsRequest = useRequest({ request: fetchUserNotifications })
   const readUserNotificationsRequest = useRequest({ request: readUserNotifications })

   useEffect(() => {
      !notificationsNew.length && fetchUserNotificationsRequest.call({ page: 1, _limit: 3, _all: 1, _all_new: 1 })
   }, [isActive])

   useEffect(() => {
      if (isActive) {
         const notification_ids = notificationsNew.filter(({ id, readed_at }) => !readed_at).map(({ id }) => id)
         notification_ids.length && readUserNotificationsRequest.call({ notification_ids })
      }
   }, [isActive])

   useEvent((e) => !e.target.closest('.header__notification') && setIsActive(false))

   return (
      <div className={`header__notification${isActiveClass(isActive, 'header__notification--active')}`}>
         <div className='header__notification-show' onClick={() => setIsActive(!isActive)}>
            <NotificationSvg />
            {!!new_count && <i>{new_count}</i>}
         </div>
         <div className='header__notification-dropdown'>
            {fetchUserNotificationsRequest.isLoading ? (
               <Loader />
            ) : (
               <>
                  <div className='header__notification-top'>
                     <div className='header__notification-title'>{new_count ? 'Уведомления' : 'Нет новых уведомлений'}</div>
                     {!!new_count && <div className='header__notification-new'>{new_count} новых</div>}
                  </div>
                  {!!new_count && (
                     <div className='header__notification-items'>
                        {notificationsNew
                           .filter((_, index) => index < 3)
                           .map((item, index) => (
                              <HeaderNotificationItem key={index} {...item} />
                           ))}
                     </div>
                  )}
                  <div className='header__notification-bottom'>
                     <button className='header__notification-all'>Показать все</button>
                  </div>
               </>
            )}
         </div>
      </div>
   )
}

export default HeaderNotification
