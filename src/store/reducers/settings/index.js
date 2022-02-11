import { settingsTypes } from './types'

const initialState = {
   typeShow: localStorage.getItem('typeShow') || 'col',
   filter: { themes: [], type_study: [], format_study: [], difficulty: [], _features: [], _ended: [], _nomoderated: [], _moderated: [] },
}

export default function settingsReducer(state = initialState, action) {
   switch (action.type) {
      case settingsTypes.SET_TYPE_SHOW:
         localStorage.setItem('typeShow', action.payload)
         return { ...state, typeShow: action.payload }
      case settingsTypes.SET_FILTER:
         return { ...state, filter: Object.keys(action.payload).length === 0 ? initialState.filter : action.payload }
      default:
         return state
   }
}
