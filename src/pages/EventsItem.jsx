import { Events } from 'components'
import { Loader } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { authSelectors, frontEventsSelectors } from 'store/selectors'

const EventsItem = () => {
   const { eventId } = useParams()
   const { resetFrontEvents, fetchFrontEvent, fetchFrontAuthEvent } = useDispatch()
   const isAuth = useSelector(authSelectors.getIsAuth)
   const event = useSelector(frontEventsSelectors.getEvent)

   const authRequest = useRequest({
      request: isAuth ? fetchFrontAuthEvent : fetchFrontEvent,
   })

   useEffect(() => {
      authRequest.call({ eventId })
      return () => resetFrontEvents()
   }, [])

   return <div>{authRequest.isLoading ? <Loader /> : <Events event={event} />}</div>
}

export default EventsItem
