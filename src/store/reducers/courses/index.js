import { coursesTypes } from './types'

const initialState = {
    info: {},
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case coursesTypes.SET_COURSES:
            return { ...state, info: action.payload }
        default:
            return state
    }
}
