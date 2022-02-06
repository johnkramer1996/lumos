import FrontCoursesService from 'api/FrontCoursesService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontCoursesTypes } from './types'

export const FrontCoursesActionCreators = {
    setFrontCourses: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSES, payload }),
    setFrontCourse: (payload) => ({ type: frontCoursesTypes.SET_FRONT_COURSE, payload }),
    ...crateActionCreator(FrontCoursesService),
}

export const defaultHandlers = crateHandles(FrontCoursesService)

export const frontCoursesHandlers = {
    ...defaultHandlers,
    fetchFrontCourses: {
        ...defaultHandlers.fetchFrontCourses,
        success: ({ dispatch, response, data }) => dispatch(FrontCoursesActionCreators.setFrontCourses(data)),
    },
    fetchFrontCourse: {
        ...defaultHandlers.fetchFrontCourse,
        success: ({ dispatch, response, data }) => dispatch(FrontCoursesActionCreators.setFrontCourse(data)),
    },
}
