import { eventsTypes } from './types'

const initialState = {
   data: {},
   events: [],
   event: {},
}

export default function eventsReducer(state = initialState, action) {
   switch (action.type) {
      case eventsTypes.RESET_EVENTS:
         return { ...initialState }
      case eventsTypes.SET_EVENTS_DATA:
         return { ...state, data: action.payload }
      case eventsTypes.SET_EVENTS:
         return { ...state, events: action.payload }
      case eventsTypes.SET_EVENT:
         return { ...state, event: action.payload }
      case eventsTypes.SET_USER_EVENTS:
         return { ...state, userEvents: action.payload }
      default:
         return state
   }
}
