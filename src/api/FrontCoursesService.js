import axios from './axios'
import { frontCoursesURL } from './URLS'

export default class FrontCoursesService {
    static async fetchFrontCourses({ body = {} } = {}) {
        body._limit = 100
        return await axios.post(frontCoursesURL.FETCH_COURSES, body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async fetchFrontCourse({ courseId = 1 } = {}) {
        return await axios.get(frontCoursesURL.FETCH_COURSE({ courseId }))
    }
}
