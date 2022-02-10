import { frontCoursesTypes } from './types'

const initialState = {
   data: {},
   courses: [],
   course: {},
   descriptions: [],
   prices: [],
   modules: [],
   lessons: [],
   interestes: [],
   trainer: [],
   whoms: [],
}

export default function frontCoursesReducer(state = initialState, action) {
   switch (action.type) {
      case frontCoursesTypes.RESET_FRONT_COURSES:
         return { ...initialState }
      case frontCoursesTypes.SET_FRONT_COURSES_DATA:
         return { ...state, data: action.payload }
      case frontCoursesTypes.SET_FRONT_COURSES:
         return { ...state, courses: action.payload }
      case frontCoursesTypes.SET_FRONT_COURSE:
         return { ...state, course: action.payload }
      case frontCoursesTypes.SET_FRONT_DESCRIPTIONS:
         return { ...state, descriptions: action.payload }
      case frontCoursesTypes.SET_FRONT_PRICES:
         return { ...state, prices: action.payload }
      case frontCoursesTypes.SET_FRONT_MODULES:
         return { ...state, modules: action.payload }
      case frontCoursesTypes.SET_FRONT_LESSONS:
         return { ...state, lessons: action.payload }
      case frontCoursesTypes.SET_FRONT_INTERESTES:
         return { ...state, interestes: action.payload }
      case frontCoursesTypes.SET_FRONT_TRAINER:
         return { ...state, trainer: action.payload }
      case frontCoursesTypes.SET_FRONT_WHOMS:
         return { ...state, whoms: action.payload }
      default:
         return state
   }
}
