import FrontCoursesService from 'api/FrontCoursesService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontCoursesTypes } from './types'

export const FrontCoursesActionCreators = {
    setCourses: (payload) => ({ type: frontCoursesTypes.SET_COURSES, payload }),
    setCourse: (payload) => ({ type: frontCoursesTypes.SET_COURSE, payload }),
    ...crateActionCreator(FrontCoursesService),
}

export const defaultHandlers = crateHandles(FrontCoursesService)

export const frontCoursesHandlers = {
    ...defaultHandlers,
    fetchFrontCourses: {
        ...defaultHandlers.fetchFrontCourses,
        success: ({ dispatch, response, data }) => dispatch(FrontCoursesActionCreators.setCourses(data)),
    },
    fetchFrontCourse: {
        ...defaultHandlers.fetchFrontCourse,
        success: ({ dispatch, response, data }) => dispatch(FrontCoursesActionCreators.setCourse(data)),
        error: (data) => console.log('data'),
    },
}
