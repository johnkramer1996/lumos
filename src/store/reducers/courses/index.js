import { coursesTypes } from './types'

const initialState = {
    coursesInfo: {},
    couseFields: {},
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case coursesTypes.SET_COURSES:
            return { ...state, coursesInfo: action.payload }
        case coursesTypes.SET_COURSE_FIELDS:
            return { ...state, couseFields: { ...state.couseFields, ...action.payload } }
        default:
            return state
    }
}
