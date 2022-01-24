import axios, { lessonsURL } from './axios'

export default class LessonsService {
    static async fetchLessons() {
        try {
            return await axios.get(lessonsURL.FETCH_LESSONS, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } catch (error) {
            return error.response
        }
    }
    static async addLesson(body) {
        for (const item of body.keys()) console.log(item)
        try {
            return await axios.post(lessonsURL.ADD_LESSON, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch (error) {
            return error.response
        }
    }
}
