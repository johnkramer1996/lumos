import { useDispatch, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Events } from 'components'
import { eventsSelectors } from 'store/selectors'

const CabinetEventsItem = () => {
   const { eventId } = useParams()
   const { resetEvents, fetchEvent } = useDispatch()
   const event = useSelector(eventsSelectors.getEvent)

   const fetchEventRequest = useRequest({
      request: fetchEvent,
   })

   useEffect(() => {
      fetchEventRequest.call({ eventId })
      return () => resetEvents()
   }, [])

   return <Events event={event} />
}

export default CabinetEventsItem
