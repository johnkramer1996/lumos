import LessonsService from '../../../api/LessonsService'
import { lessonsTypes } from './types'

export const LessonsActionCreators = {
    setLessons: (lessons) => ({ type: lessonsTypes.SET_LESSONS, payload: lessons }),
    fetchLessons: () => async (dispatch) => {
        try {
            const response = await LessonsService.fetchLessons()

            if (response.status === 200) {
                const {
                    data: {
                        data: { data: lessons },
                    },
                } = response
                dispatch(LessonsActionCreators.setLessons(lessons))

                return
            }
        } catch (e) {}
    },
    addLesson: (body) => async (dispatch) => {
        try {
            const response = await LessonsService.addLesson(body)

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
