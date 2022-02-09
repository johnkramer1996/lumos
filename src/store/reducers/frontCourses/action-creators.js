import FrontCoursesService from 'api/FrontCoursesService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontCoursesTypes } from './types'

export const FrontCoursesActionCreators = {
   setFrontCoursesData: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSES_DATA, payload }),
   setFrontCourses: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSES, payload }),
   setFrontCourse: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSE, payload }),
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
      success: ({ dispatch, response, prevData, data }) => dispatch(FrontCoursesActionCreators.setFrontCourse(data || {})),
   },
}
