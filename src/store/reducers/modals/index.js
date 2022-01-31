import { modalsTypes } from './types'

const initialState = {
    isShow: false,
    content: {},
}

export default function modalsReducer(state = initialState, action) {
    switch (action.type) {
        case modalsTypes.SET_IS_SHOW:
            return { ...state, isShow: action.payload }
        case modalsTypes.SET_CONTENT:
            return { ...state, content: action.payload }
        default:
            return state
    }
}
