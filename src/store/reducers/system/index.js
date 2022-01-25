import { systemTypes } from './types'

const initialState = {
    references: {},
}

export default function systemReducer(state = initialState, action) {
    switch (action.type) {
        case systemTypes.SET_REFERENCES:
            return { ...state, references: action.payload }
        default:
            return state
    }
}
