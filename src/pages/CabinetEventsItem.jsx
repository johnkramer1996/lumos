import { useDispatch, useNavigate, useRequest } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Events } from 'components'
import { authSelectors, eventsSelectors } from 'store/selectors'

const CabinetEventsItem = () => {
   const { eventId } = useParams()
   const { toEventssItem } = useNavigate()
   const { resetEvents, fetchEvent } = useDispatch()
   const user = useSelector(authSelectors.getUser)
   const event = useSelector(eventsSelectors.getEvent)
   const { id: user_id } = user
   const { user_id: page_user_id } = event

   const fetchEventRequest = useRequest({
      request: fetchEvent,
   })

   useEffect(() => {
      fetchEventRequest.call({ eventId })
      return () => resetEvents()
   }, [])

   useEffect(() => {
      const isUserPage = user_id === page_user_id
      if (!fetchEventRequest.isLoading && !isUserPage) toEventssItem({ eventId, type: 'events' })
   }, [fetchEventRequest.isLoading])

   return <Events event={event} />
}

export default CabinetEventsItem
