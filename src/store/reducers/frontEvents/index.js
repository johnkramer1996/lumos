import { frontEventsTypes } from './types'

const initialState = {
   data: {},
   events: [],
   event: {},
}

export default function frontEventsReducer(state = initialState, action) {
   switch (action.type) {
      case frontEventsTypes.SET_FRONT_EVENTS_DATA:
         return { ...state, data: action.payload }
      case frontEventsTypes.SET_FRONT_EVENTS:
         return { ...state, events: action.payload }
      case frontEventsTypes.SET_FRONT_EVENT:
         return { ...state, event: action.payload }
      default:
         return state
   }
}
