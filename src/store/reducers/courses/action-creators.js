import CoursesService from 'api/CoursesService'
import { coursesTypes } from './types'

export const CoursesActionCreators = {
    setCourses: (payload) => ({ type: coursesTypes.SET_COURSES, payload }),
    setCourse: (payload) => ({ type: coursesTypes.SET_COURSE_FIELDS, payload }),
    fetchCourses: (data) => async (dispatch) => {
        try {
            const response = await CoursesService.fetchAll(data)

            if (response.status === 200) {
                dispatch(CoursesActionCreators.setCourses(response?.data?.data))
            }
        } catch (e) {
            console.log(e.response)
        }
    },
    addCourse: (data) => async (dispatch) => {
        try {
            const response = await CoursesService.add(data)

            if (response.status === 200) {
                console.log(response)
                dispatch(CoursesActionCreators.setCourse(response?.data?.course))
                alert(response?.data?.message)
            }
        } catch (e) {
            try {
                const { data } = e.response
                const errorText = []
                Object.values(data.error).forEach((err) => err.forEach((e) => errorText.push(e)))
                alert(errorText.join(' '))
            } catch (e) {
                alert('Произошла ошибка при добавление курса')
            }
        }
    },
}
