import { settingsTypes } from './types'

const initialState = {
    typeShow: localStorage.getItem('typeShow') || 'col',
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case settingsTypes.SET_TYPE_SHOW:
            localStorage.setItem('typeShow', action.payload)
            return { ...state, typeShow: action.payload }
        default:
            return state
    }
}
