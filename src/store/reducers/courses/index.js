import { coursesTypes } from './types'

const initialState = {
    coursesInfo: {},
    course: {},
    modules: {},
    lessons: {},
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case coursesTypes.SET_COURSES:
            return { ...state, coursesInfo: action.payload }
        case coursesTypes.SET_COURSE:
            return { ...state, course: action.payload }
        case coursesTypes.SET_MODULES:
            return { ...state, modules: action.payload }
        case coursesTypes.SET_LESSONS:
            return { ...state, lessons: action.payload }
        default:
            return state
    }
}
