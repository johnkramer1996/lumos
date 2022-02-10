import { Events } from 'components'
import { Button } from 'components/ui'
import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { authSelectors, frontEventsSelectors } from 'store/selectors'

const EventsItem = () => {
   const { eventId } = useParams()
   const { resetEvents, fetchFrontEvent } = useDispatch()
   const event = useSelector(frontEventsSelectors.getEvent)

   const fetchFrontEventRequest = useRequest({
      request: fetchFrontEvent,
   })
   useEffect(() => {
      fetchFrontEventRequest.call({ eventId })
      return () => (resetEvents(), resetEvents())
   }, [])

   return <Events event={event} />
}

export default EventsItem
