import { coursesTypes } from './types'

const initialState = {
    courses: {},
    course: {},
    modules: [],
    lessons: [],
    lesson: {},
    info: {},
}

export default function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case coursesTypes.SET_COURSES:
            return { ...state, courses: action.payload }
        case coursesTypes.SET_COURSE:
            return { ...state, course: action.payload }
        case coursesTypes.SET_MODULES:
            return { ...state, modules: action.payload }
        case coursesTypes.SET_LESSONS:
            return { ...state, lessons: action.payload }
        case coursesTypes.SET_LESSON:
            return { ...state, lesson: action.payload }
        case coursesTypes.SET_INFO:
            return { ...state, info: action.payload }
        default:
            return state
    }
}
