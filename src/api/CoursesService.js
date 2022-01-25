import axios from './axios'
import { coursesURL } from './urls'

export default class CoursesService {
    static async fetchAll({ page = 1, limit = 10 } = {}) {
        try {
            return await axios.get(coursesURL.FETCH_COURSES, {
                headers: {
                    'Content-Type': 'application/json',
                },
                params: { page, _limit: limit },
            })
        } catch (error) {
            return error.response
        }
    }
    static async add(body = {}) {
        for (const item of body.keys()) console.log(item)
        try {
            return await axios.post(coursesURL.ADD_LESSON, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch (error) {
            return error.response
        }
    }
}
