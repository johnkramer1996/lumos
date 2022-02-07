import { eventsTypes } from './types'

const initialState = {
    events: [],
    event: {},
}

export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case eventsTypes.SET_EVENTS:
            return { ...state, events: action.payload }
        case eventsTypes.SET_EVENT:
            return { ...state, event: action.payload }
        default:
            return state
    }
}
