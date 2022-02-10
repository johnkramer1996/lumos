import { systemTypes } from './types'

const initialState = {
   references: { themes: [], type_study: [], difficulty: [], format: [], event_types: [] },
   socUrls: {},
}

export default function systemReducer(state = initialState, action) {
   switch (action.type) {
      case systemTypes.SET_REFERENCES:
         return { ...state, references: action.payload }
      case systemTypes.SET_SOC_URLS:
         return { ...state, socUrls: action.payload }
      default:
         return state
   }
}
