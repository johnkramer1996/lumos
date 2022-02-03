import { frontCoursesTypes } from './types'

const initialState = {
    courses: [],
    course: {},
}

export default function frontCoursesReducer(state = initialState, action) {
    switch (action.type) {
        case frontCoursesTypes.SET_COURSES:
            return { ...state, courses: action.payload }
        case frontCoursesTypes.SET_COURSE:
            return { ...state, course: action.payload }
        default:
            return state
    }
}
