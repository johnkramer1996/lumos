import CoursesService from 'api/CoursesService'
import { asyncAction, crateActionCreator, crateHandles } from 'utils'
import { ModalsActionCreators } from '../modals/action-creators'
import { coursesTypes } from './types'

export const CoursesActionCreators = {
    setCourses: (payload) => ({ type: coursesTypes.SET_COURSES, payload }),
    setCourse: (payload) => ({ type: coursesTypes.SET_COURSE, payload }),
    setModules: (payload) => ({ type: coursesTypes.SET_MODULES, payload }),
    setLessons: (payload) => ({ type: coursesTypes.SET_LESSONS, payload }),
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
        success: ({ dispatch, response, data }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Основная информация о курсе  - добавлена,', descr: 'теперь заполните Уроки' }))
        },
    },
    putCourse: {
        ...defaultHandlers.putCourse,
        success: ({ dispatch, response, data }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Курс Обновлен' }))
        },
    },
    // patchCourse
    // deleteCourse
    fetchInfo: {
        ...defaultHandlers.fetchInfo,
        success: ({ dispatch, response, data }) => {
            dispatch(CoursesActionCreators.setInfo(data))
        },
    },
    editInfo: {
        ...defaultHandlers.editInfo,
        success: ({ dispatch, response, data }) => {
            console.log(data)
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Информация добавлена', descr: 'Ваш курс отправлен на модерацию.' }))
        },
    },
    // deleteInfo
    // fetchCourseUser
    fetchModules: {
        ...defaultHandlers.fetchModules,
        success: ({ dispatch, response, data }) => {
            dispatch(CoursesActionCreators.setModules(data))
        },
    },
    addModulesMass: {
        ...defaultHandlers.addModulesMass,
        success: ({ dispatch, response, data }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Уроки добавлены,', descr: 'Заполните описание курса и его стоимость.' }))
        },
    },
    // addModule
    // fetchModule
    // putModule
    // patchModule
    // deleteModule
    // fetchLessons
}
