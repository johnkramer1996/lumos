import CoursesService from 'api/CoursesService'
import { asyncAction, crateActionCreator, crateHandles } from 'utils'
import { ModalsActionCreators } from '../modals/action-creators'
import { coursesTypes } from './types'

export const CoursesActionCreators = {
    setCourses: (payload) => ({ type: coursesTypes.SET_COURSES, payload }),
    setCourse: (payload) => ({ type: coursesTypes.SET_COURSE, payload }),
    setModules: (payload) => ({ type: coursesTypes.SET_MODULES, payload }),
    setLessons: (payload) => ({ type: coursesTypes.SET_LESSONS, payload }),
    setLesson: (payload) => ({ type: coursesTypes.SET_LESSON, payload }),
    setInfo: (payload) => ({ type: coursesTypes.SET_INFO, payload }),
    ...crateActionCreator(CoursesService),
}

const defaultHandlers = crateHandles(CoursesService)

export const courseHandlers = {
    ...defaultHandlers,
    fetchCourses: {
        ...defaultHandlers.fetchCourses,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setCourses(data)),
    },
    fetchCourse: {
        ...defaultHandlers.fetchCourse,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setCourse(data)),
    },
    addCourse: {
        ...defaultHandlers.addCourse,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setCourse(data?.course || {})),
    },
    putCourse: {
        ...defaultHandlers.putCourse,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setCourse(data?.course || {})),
    },
    // patchCourse
    deleteCourse: {
        ...defaultHandlers.deleteEvent,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setCourse({})),
    },
    fetchInfo: {
        ...defaultHandlers.fetchInfo,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setInfo(data)),
    },
    editInfo: {
        ...defaultHandlers.editInfo,
        success: ({ dispatch, response, data }) => {
            //TODO CHECK REQUEST
            console.log(data)
        },
    },
    deleteInfo: {
        ...defaultHandlers.deleteInfo,
    },
    // fetchCourseUser
    fetchModules: {
        ...defaultHandlers.fetchModules,
        success: ({ dispatch, response, data }) => {
            dispatch(CoursesActionCreators.setModules(data.data))
        },
    },
    addModulesMass: {
        ...defaultHandlers.addModulesMass,
        success: ({ dispatch, response, data }) => {
            //TODO CHECK REQUEST
            const newModules = data.moduls.map((m) => ({ ...m, lessonsshort: data.lessons.filter((l) => l.modul_id === m.id) })) || {}
            console.log(newModules, 'newModules')
            dispatch(CoursesActionCreators.setModules(newModules))
        },
    },
    // addModule
    // fetchModule
    // putModule
    // patchModule
    deleteModule: {
        ...defaultHandlers.deleteModule,
    },
    fetchLessons: {
        ...defaultHandlers.fetchLessons,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setLessons(data)),
    },
    // deleteFile
    fetchLesson: {
        ...defaultHandlers.fetchLesson,
        success: ({ dispatch, response, data }) => dispatch(CoursesActionCreators.setLesson(data)),
    },
    deleteLesson: {
        ...defaultHandlers.deleteLesson,
    },
    // addFile
    putLesson: {
        ...defaultHandlers.putLesson,
        success: ({ dispatch, response, data }) => {
            console.log(data, 'return')
        },
    },
    // putchLesson
}
