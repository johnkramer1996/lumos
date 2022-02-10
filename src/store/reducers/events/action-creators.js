import EventsService from 'api/EventsService'
import { crateActionCreator, crateHandles } from 'utils'
import { eventsTypes } from './types'

export const EventsActionCreators = {
   resetEvents: (payload) => ({ type: eventsTypes.RESET_EVENTS, payload }),
   setEventsData: (payload) => ({ type: eventsTypes.SET_EVENTS_DATA, payload }),
   setEvents: (payload) => ({ type: eventsTypes.SET_EVENTS, payload }),
   setEvent: (payload) => ({ type: eventsTypes.SET_EVENT, payload }),
   ...crateActionCreator(EventsService),
}

export const defaultHandlers = crateHandles(EventsService)

export const EventsHandlers = {
   ...defaultHandlers,
   fetchEvents: {
      ...defaultHandlers.fetchEvents,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(EventsActionCreators.setEventsData(prevData))
         dispatch(EventsActionCreators.setEvents(data))
      },
   },
   addEvent: {
      ...defaultHandlers.addEvent,
      success: ({ dispatch, response, prevData, data }) => dispatch(EventsActionCreators.setEvent(data?.course || {})),
   },
   fetchEvent: {
      ...defaultHandlers.fetchEvent,
      success: ({ dispatch, response, prevData, data }) => dispatch(EventsActionCreators.setEvent(data || {})),
   },
   putEvent: {
      ...defaultHandlers.putEvent,
      success: ({ dispatch, response, prevData, data }) => dispatch(EventsActionCreators.setEvent(data?.course || {})),
   },
   deleteEvent: {
      ...defaultHandlers.deleteEvent,
      success: ({ dispatch, response, prevData, data }) => dispatch(EventsActionCreators.setEvent({})),
   },
   addUser: {
      ...defaultHandlers.addUser,
   },
   fetchUserEvents: {
      ...defaultHandlers.fetchUserEvents,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(EventsActionCreators.setEventsData(prevData))
         dispatch(EventsActionCreators.setEvents(data))
      },
   },
}
