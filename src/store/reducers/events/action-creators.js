import EventsService from 'api/EventsService'
import { crateActionCreator, crateHandles } from 'utils'
import { eventsTypes } from './types'

export const EventsActionCreators = {
    setEvents: (payload) => ({ type: eventsTypes.SET_EVENTS, payload }),
    setEvent: (payload) => ({ type: eventsTypes.SET_EVENT, payload }),
    ...crateActionCreator(EventsService),
}

export const defaultHandlers = crateHandles(EventsService)

export const EventsHandlers = {
    ...defaultHandlers,
    fetchEvents: {
        ...defaultHandlers.fetchEvents,
        success: ({ dispatch, response, data }) => dispatch(EventsActionCreators.setEvents(data)),
    },
    addEvent: {
        ...defaultHandlers.addEvent,
        success: ({ dispatch, response, data }) => dispatch(EventsActionCreators.setEvent(data?.course || {})),
    },
    fetchEvent: {
        ...defaultHandlers.fetchEvent,
        success: ({ dispatch, response, data }) => dispatch(EventsActionCreators.setEvent(data || {})),
    },
    putEvent: {
        ...defaultHandlers.putEvent,
        success: ({ dispatch, response, data }) => dispatch(EventsActionCreators.setEvent(data?.course || {})),
    },
    deleteEvent: {
        ...defaultHandlers.deleteEvent,
        success: ({ dispatch, response, data }) => dispatch(EventsActionCreators.setEvent({})),
    },
}
