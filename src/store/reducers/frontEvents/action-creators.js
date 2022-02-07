import FrontEventsService from 'api/FrontEventsService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontEventsTypes } from './types'

export const FrontEventsActionCreators = {
    setFrontEvents: (payload) => ({ type: frontEventsTypes.SET_FRONT_EVENTS, payload }),
    setFrontEvent: (payload) => ({ type: frontEventsTypes.SET_FRONT_EVENT, payload }),
    ...crateActionCreator(FrontEventsService),
}

export const defaultHandlers = crateHandles(FrontEventsService)

export const frontEventsHandlers = {
    ...defaultHandlers,
    fetchFrontEvents: {
        ...defaultHandlers.fetchFrontEvents,
        success: ({ dispatch, response, data }) => dispatch(FrontEventsActionCreators.setFrontEvents(data)),
    },
    fetchFrontEvent: {
        ...defaultHandlers.fetchFrontEvent,
        success: ({ dispatch, response, data }) => dispatch(FrontEventsActionCreators.setFrontEvent(data)),
    },
}
