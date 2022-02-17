import { coursesTypes } from './types'

const initialLessonQuestionsData = {
   questions_to_delete: [],
   ansvers_to_delete: [],
   questionsInputs: {},
   answerInputs: {},
   count_answers: {},
}

const initialState = {
   data: {},
   courses: [],
   course: {},
   descriptions: [],
   prices: [],
   whoms: [],
   modules: [],
   lessons: [],
   lesson: {},
   lessonQuestionsData: initialLessonQuestionsData,
   lessonQuestions: [],
   lessonFiles: [],
   commentsData: {},
   comments: [],
}

export default function coursesReducer(state = initialState, action) {
   switch (action.type) {
      case coursesTypes.RESET_COURSES:
         return { ...initialState }
      case coursesTypes.SET_COURSES_DATA:
         return { ...state, data: action.payload }
      case coursesTypes.SET_COURSES:
         return { ...state, courses: action.payload }
      case coursesTypes.SET_COURSE:
         return { ...state, course: action.payload }
      case coursesTypes.SET_DESCRIPTIONS:
         return { ...state, descriptions: action.payload }
      case coursesTypes.SET_PRICES:
         return { ...state, prices: action.payload }
      case coursesTypes.SET_WHOMS:
         return { ...state, whoms: action.payload }
      case coursesTypes.SET_MODULES:
         return { ...state, modules: action.payload }
      case coursesTypes.SET_LESSONS:
         return { ...state, lessons: action.payload }
      case coursesTypes.SET_LESSON:
         return { ...state, lesson: action.payload }
      case coursesTypes.RESET_LESSON_QUESTIONS_DATA:
         return { ...state, lessonQuestionsData: { ...initialLessonQuestionsData } }
      case coursesTypes.SET_LESSON_QUESTIONS:
         return { ...state, lessonQuestions: action.payload }
      case coursesTypes.SET_LESSON_FILES:
         return { ...state, lessonFiles: action.payload }
      case coursesTypes.ADD_LESSON_FILE:
         return { ...state, lessonFiles: [...state.lessonFiles, ...action.payload] }
      case coursesTypes.RESET_COMMENTS:
         return { ...state, commentsData: {}, comments: [] }
      case coursesTypes.SET_COMMENTS_DATA:
         return { ...state, commentsData: action.payload }
      case coursesTypes.SET_COMMENTS:
         return { ...state, comments: [...state.comments, ...action.payload] }
      case coursesTypes.SET_COMMENT_ADDED:
         return { ...state, comments: [action.payload, ...state.comments] }
      default:
         return state
   }
}
