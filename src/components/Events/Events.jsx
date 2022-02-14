import { Button } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RouteNames } from 'routes'
import { authSelectors } from 'store/selectors'
import { ReactComponent as ShareSvg } from 'svg/share.svg'
import { ReactComponent as EditSvg } from 'svg/edit.svg'
import { declOfNum, getDate, getDeclOfArray, getURL, hasAccess, isActiveClass } from 'utils'
import { ROLES } from 'constants'

const Events = ({ event }) => {
   const { eventId } = useParams()
   const { setIsShow, setContent, addUserToEvent } = useDispatch()
   const rolesId = useSelector(authSelectors.getRolesId)
   const user = useSelector(authSelectors.getUser)
   const { id: user_id } = user
   const { id, image, name, text, edate, etime, timing, All_Users, user_id: event_user_id } = event
   const users = event.users || {}
   const { name: typeName } = event.get_type || {}
   const isUserPage = user_id === event_user_id

   const [isEnrolledPage, setIsEnrolledPage] = useState(false)

   useEffect(() => {
      setIsEnrolledPage(+users.user_id === +user_id)
   }, [event])

   const addUserToEventRequest = useRequest({
      request: addUserToEvent,
      success: () => {
         setIsShow(true)
         setContent({ title: 'Успешно добавлен' })
      },
   })

   const onEnroll = () => {
      if (!rolesId.length) {
         setIsShow(true)
         setContent({ title: 'Авторизируйтесь!' })
         return
      }
      if (isEnrolledPage) {
         setIsShow(true)
         setContent({ title: 'Вы уже записаны на курс' })
         return
      }

      setIsEnrolledPage(true)
      addUserToEventRequest.call({ body: { user_id, event_id: id } })
   }

   return (
      <section className='event-page'>
         <div className='container'>
            <div className='event-page__inner'>
               <aside className='event-page__left'>
                  <div className='event-page__card'>
                     <div className='event-page__card-img img img--md img--cover'>
                        <img src={getURL.img(image)} alt='' />
                     </div>
                     {(!isUserPage || hasAccess(rolesId, [ROLES.USER])) && (
                        <>
                           <Button className={`event-page__card-btn${isActiveClass(isEnrolledPage, 'btn--disabled')}`} onClick={onEnroll}>
                              {!isEnrolledPage ? 'Записаться' : 'Вы уже записаны'}
                           </Button>
                           <div className='event-page__card-hint'>Запись бесплатна</div>
                        </>
                     )}
                     {isUserPage && hasAccess(rolesId, [ROLES.TRAINER]) && (
                        <>
                           <div className='event-page__card-num'>
                              {All_Users} {declOfNum(All_Users, getDeclOfArray['members'])}
                           </div>
                           <Button to={`${RouteNames.CABINET_EVENTS}/${eventId}/edit`} className='event-page__card-btn event-page__card-btn--edit btn' outline link>
                              <EditSvg />
                              <span>Редактировать</span>
                           </Button>
                        </>
                     )}
                  </div>
                  <Button className='event-page__share' outline>
                     <ShareSvg />
                     <span>Поделиться</span>
                  </Button>
               </aside>
               <div className='event-page__right'>
                  <div className='event-page__top'>
                     {isUserPage && hasAccess(rolesId, [ROLES.TRAINER]) && (
                        <div className='breadcrumbs'>
                           <Link to={RouteNames.CABINET_COURSES} className='breadcrumbs__item'>
                              Мои мероприятия
                           </Link>
                        </div>
                     )}
                     <h1 className='event-page__title display-3'>{name}</h1>
                  </div>
                  <div className='event-page__badges'>
                     <div className='event-page__badge'>
                        <span>Дата</span>
                        <strong>{getDate(edate, true)}</strong>
                     </div>
                     <div className='event-page__badge'>
                        <span>Тип</span>
                        <strong>{typeName}</strong>
                     </div>
                     <div className='event-page__badge'>
                        <span>Начало (по МСК)</span>
                        <strong>в {etime}</strong>
                     </div>
                     <div className='event-page__badge'>
                        <span>Длительность</span>
                        <strong>~{timing}</strong>
                     </div>
                  </div>
                  <div className='event-page__desc'>
                     <h3 className='event-page__desc-title'>Описание</h3>
                     <p className='event-page__desc-item'>{text}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Events
