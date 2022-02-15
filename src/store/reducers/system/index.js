import { systemTypes } from './types'

const initialState = {
   references: { themes: [], type_study: [], difficulty: [], format: [], event_types: [] },
   socUrls: {},
   userSettings: { user_file_types: [], user_notify_sourses: [], user_notify_types: [] },
}

export default function systemReducer(state = initialState, action) {
   switch (action.type) {
      case systemTypes.SET_REFERENCES:
         return { ...state, references: action.payload }
      case systemTypes.SET_SOC_URLS:
         return { ...state, socUrls: action.payload }
      case systemTypes.SET_USER_SETTINGS:
         return { ...state, userSettings: action.payload }
      default:
         return state
   }
}
