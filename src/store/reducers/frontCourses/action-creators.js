import FrontCoursesService from 'api/FrontCoursesService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontCoursesTypes } from './types'

export const FrontCoursesActionCreators = {
   setFrontCoursesData: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSES_DATA, payload }),
   setFrontCourses: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSES, payload }),
   setFrontCourse: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSE, payload }),
   setFrontInterestes: (payload) => ({ type: frontCoursesTypes.SET_FRONT_INTERESTES, payload }),
   setFrontDescriptions: (payload) => ({ type: frontCoursesTypes.SET_FRONT_DESCRIPTIONS, payload }),
   setFrontPrices: (payload) => ({ type: frontCoursesTypes.SET_FRONT_PRICES, payload }),
   setFrontTrainer: (payload) => ({ type: frontCoursesTypes.SET_FRONT_TRAINER, payload }),
   setFrontModules: (payload) => ({ type: frontCoursesTypes.SET_FRONT_MODULES, payload }),
   setFrontLessons: (payload) => ({ type: frontCoursesTypes.SET_FRONT_LESSONS, payload }),
   setFrontWhoms: (payload) => ({ type: frontCoursesTypes.SET_FRONT_WHOMS, payload }),
   ...crateActionCreator(FrontCoursesService),
}

export const defaultHandlers = crateHandles(FrontCoursesService)

export const frontCoursesHandlers = {
   ...defaultHandlers,
   fetchFrontCourses: {
      ...defaultHandlers.fetchFrontCourses,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontCoursesActionCreators.setFrontCoursesData(prevData || {}))
         dispatch(FrontCoursesActionCreators.setFrontCourses(data || []))
      },
   },
   fetchFrontCourse: {
      ...defaultHandlers.fetchFrontCourse,
      success: ({ dispatch, response, prevData, data }) => {
         console.log(data)
         const { interestes = [] } = prevData || {}
         const { descriptions = [], prices = [], trainer = [], moduls = [], lessons = [], whoms = [] } = data || {}

         dispatch(FrontCoursesActionCreators.setFrontCourse(data || {}))
         dispatch(FrontCoursesActionCreators.setFrontInterestes(interestes))
         dispatch(FrontCoursesActionCreators.setFrontDescriptions(descriptions))
         dispatch(FrontCoursesActionCreators.setFrontPrices(prices))
         dispatch(FrontCoursesActionCreators.setFrontTrainer(trainer))
         dispatch(FrontCoursesActionCreators.setFrontModules(moduls))
         dispatch(FrontCoursesActionCreators.setFrontLessons(lessons))
         dispatch(FrontCoursesActionCreators.setFrontWhoms(whoms))
      },
   },
}
