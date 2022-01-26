import axios from './axios'
import { trainerCoursesURL } from './URLS'

export default class CoursesService {
    static async fetchAll({ page = 1, limit = 10 } = {}) {
        return await axios.get(trainerCoursesURL.FETCH_COURSES, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: { page, _limit: limit },
        })
    }
    static async add(body = {}) {
        return await axios.post(trainerCoursesURL.ADD_LESSON, body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
}
