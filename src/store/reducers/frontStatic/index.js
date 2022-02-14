import { frontStaticTypes } from './types'

const initialState = {
   data: {},
   faq: [],
   contacts: {},
}

export default function frontEventsReducer(state = initialState, action) {
   switch (action.type) {
      case frontStaticTypes.RESET_FRONT_STATIC:
         return { ...initialState }
      case frontStaticTypes.SET_FRONT_STATIC_DATA:
         return { ...state, data: action.payload }
      case frontStaticTypes.SET_FRONT_STATIC_FAQ:
         return { ...state, faq: action.payload }
      case frontStaticTypes.SET_FRONT_STATIC_CONTACTS:
         return { ...state, contacts: action.payload }
      default:
         return state
   }
}
