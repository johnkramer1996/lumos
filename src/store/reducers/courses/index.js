import { coursesTypes } from './types'

const initialState = {
    coursesInfo: {},
    course: {},
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case coursesTypes.SET_COURSES:
            return { ...state, coursesInfo: action.payload }
        case coursesTypes.SET_COURSE_FIELDS:
            return { ...state, course: { ...state.course, ...action.payload } }
        default:
            return state
    }
}
