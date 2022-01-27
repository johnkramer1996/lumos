import CoursesService from 'api/CoursesService'
import { coursesTypes } from './types'

export const CoursesActionCreators = {
    setCourses: (payload) => ({ type: coursesTypes.SET_COURSES, payload }),
    setCourse: (payload) => ({ type: coursesTypes.SET_COURSE, payload }),
    setModules: (payload) => ({ type: coursesTypes.SET_MODULES, payload }),
    setLessons: (payload) => ({ type: coursesTypes.SET_LESSONS, payload }),
    fetchCourses: (data) => async (dispatch) => {
        try {
            const response = await CoursesService.fetchCourses(data)

            if (response.status === 200) {
                dispatch(CoursesActionCreators.setCourses(response.data?.data))
            }
        } catch (e) {
            console.log(e.response)
        }
    },
    addCourse: (data, cb) => async (dispatch) => {
        try {
            const response = await CoursesService.addCourse(data)

            console.log(response, 'response')
            if (response.status === 200) {
                dispatch(CoursesActionCreators.setCourse(response.data?.course))
                cb(response.data?.course?.id)
            }
        } catch (e) {
            try {
                const response = e.response || e.message
                console.log(response)
            } catch (e) {
                const response = e.response || e.message
                console.log(response)
            }
        }
    },
    getCourse: (data, cb) => async (dispatch) => {
        try {
            const response = await CoursesService.getCourse(data)

            if (response.status === 200) {
                dispatch(CoursesActionCreators.setCourse(response?.data.data))
                cb()
            }
        } catch (e) {
            try {
                const response = e.response || e.message
                console.log(response)
            } catch (e) {
                const response = e.response || e.message
                console.log(response)
            }
        }
    },
    putCourse: (data, cb) => async (dispatch) => {
        try {
            const response = await CoursesService.putCourse(data)
            console.log(response)

            if (response.status === 200) {
                alert('Успех')
                // dispatch(CoursesActionCreators.setCourse(response?.data.data))
                // cb()
            }
        } catch (e) {
            try {
                const response = e.response || e.message
                console.log(response)
            } catch (e) {
                const response = e.response || e.message
                console.log(response)
            }
        }
    },
    addModulesMass: (data) => async (dispatch) => {
        try {
            console.log(data)
            const response = await CoursesService.addModulesMass(data)
            console.log(response)

            if (response.status === 200) {
                alert('Успех')
            }
        } catch (e) {
            try {
                const response = e.response || e.message
                console.log(response)
            } catch (e) {
                const response = e.response || e.message
                console.log(response)
            }
        }
    },
    fetchModules: (data, cb) => async (dispatch) => {
        try {
            console.log(data, 'response')
            const response = await CoursesService.fetchModules(data)
            console.log(response, 'response')

            if (response.status === 200) {
                dispatch(CoursesActionCreators.setModules(response.data.data.data))
                cb()
            }
        } catch (e) {
            try {
                const response = e.response || e.message
                console.log(response)
            } catch (e) {
                const response = e.response || e.message
                console.log(response)
            }
        }
    },
    fetchLessons: (data) => async (dispatch) => {
        try {
            const response = await CoursesService.fetchLessons(data)

            if (response.status === 200) {
                dispatch(CoursesActionCreators.setLessons(response.data.data.data))
            }
        } catch (e) {
            try {
                const response = e.response || e.message
                console.log(response)
            } catch (e) {
                const response = e.response || e.message
                console.log(response)
            }
        }
    },
}
