import { lessonsTypes } from './types'

const initialState = {
    lessons: [],
}

export default function lessonsReducer(state = initialState, action) {
    switch (action.type) {
        case lessonsTypes.SET_LESSONS:
            return { ...state, lessons: action.payload }
        default:
            return state
    }
}
