import CoursesService from 'api/CoursesService'
import { coursesTypes } from './types'

export const CoursesActionCreators = {
    setCourses: (courses) => ({ type: coursesTypes.SET_COURSES, payload: courses }),
    fetchCourses: (data) => async (dispatch) => {
        try {
            const response = await CoursesService.fetchAll(data)

            if (response.status === 200) {
                const {
                    data: { data },
                } = response

                dispatch(CoursesActionCreators.setCourses(data))

                return
            }
        } catch (e) {}
    },
    addCourse: (data) => async (dispatch) => {
        try {
            const response = await CoursesService.add(data)

            if (response.status === 200) {
                alert('Урок добавлен')
                return
            }
            const { error } = response.data
            const errorText = []
            Object.values(error).forEach((err) => {
                err.forEach((e) => errorText.push(e))
            })
            alert(errorText)
        } catch (e) {
            console.log(e)
        }
    },
}
