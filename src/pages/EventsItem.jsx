import { Events } from 'components'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { authSelectors, frontEventsSelectors } from 'store/selectors'

const EventsItem = () => {
   const { eventId } = useParams()
   const { resetEvents, fetchFrontEvent, fetchFrontAuthEvent } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)
   const event = useSelector(frontEventsSelectors.getEvent)

   const authRequest = useRequest({
      request: isAuth ? fetchFrontAuthEvent : fetchFrontAuthEvent,
   })

   console.log(isAuth)

   useEffect(() => {
      authRequest.call({ eventId })
      return () => resetEvents()
   }, [])

   return <Events event={event} />
}

export default EventsItem
