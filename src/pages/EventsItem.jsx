import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { authSelectors, frontEventsSelectors } from 'store/selectors'
import { EventsItem as EventsItemComponent } from 'components'

const EventsItem = () => {
   const { eventId } = useParams()
   const { resetFrontEvents, fetchFrontEvent, fetchFrontAuthEvent } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)
   const event = useSelector(frontEventsSelectors.getEvent)

   const authRequest = useRequest({
      request: isAuth ? fetchFrontAuthEvent : fetchFrontEvent,
      loading: true,
   })

   useEffect(() => {
      authRequest.call({ eventId })
      return () => resetFrontEvents()
   }, [])

   return <EventsItemComponent event={event} isLoading={authRequest.isLoading} />
}

export default EventsItem
