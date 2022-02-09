import { coursesTypes } from './types'

const initialState = {
   data: {},
   courses: [],
   course: {},
   modules: [],
   lessons: [],
   lesson: {},
   lessonQuestions: [],
   lessonFiles: [],
   info: {},
}

export default function coursesReducer(state = initialState, action) {
   switch (action.type) {
      case coursesTypes.SET_COURSES_DATA:
         return { ...state, data: action.payload }
      case coursesTypes.SET_COURSES:
         return { ...state, courses: action.payload }
      case coursesTypes.SET_COURSE:
         return { ...state, course: action.payload }
      case coursesTypes.SET_MODULES:
         return { ...state, modules: action.payload }
      case coursesTypes.SET_INFO:
         return { ...state, info: action.payload }
      case coursesTypes.SET_LESSONS:
         return { ...state, lessons: action.payload }
      case coursesTypes.SET_LESSON:
         return { ...state, lesson: action.payload }
      case coursesTypes.SET_LESSON_QUESTIONS:
         return { ...state, lessonQuestions: action.payload }
      case coursesTypes.SET_LESSON_FILES:
         return { ...state, lessonFiles: action.payload }
      case coursesTypes.ADD_LESSON_FILE:
         return { ...state, lessonFiles: [...state.lessonFiles, ...action.payload] }
      default:
         return state
   }
}
