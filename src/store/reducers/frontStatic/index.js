import { frontStaticTypes } from './types'

const initialState = {
   data: {},
   list: [],
}

export default function frontEventsReducer(state = initialState, action) {
   switch (action.type) {
      case frontStaticTypes.RESET_FRONT_STATIC:
         return { ...initialState }
      case frontStaticTypes.SET_FRONT_STATIC_DATA:
         return { ...state, data: action.payload }
      case frontStaticTypes.SET_FRONT_STATIC_LIST:
         return { ...state, list: action.payload }
      default:
         return state
   }
}
