import { frontCoursesTypes } from './types'

const initialState = {
   data: {},
   courses: [],
   course: {},
}

export default function frontCoursesReducer(state = initialState, action) {
   switch (action.type) {
      case frontCoursesTypes.SET_FRONT_COURSES_DATA:
         return { ...state, data: action.payload }
      case frontCoursesTypes.SET_FRONT_COURSES:
         return { ...state, courses: action.payload }
      case frontCoursesTypes.SET_FRONT_COURSE:
         return { ...state, course: action.payload }
      default:
         return state
   }
}
