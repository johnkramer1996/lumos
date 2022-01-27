import axios from './axios'
import { trainerCoursesLessonsURL, trainerCoursesModulesURL, trainerCoursesURL } from './URLS'

export default class CoursesService {
    static async fetchCourses({ page = 1, limit = 10 } = {}) {
        return await axios.get(trainerCoursesURL.FETCH_COURSES, {
            params: { page, _limit: limit },
        })
    }
    static async addCourse(body = {}) {
        console.log(trainerCoursesURL)
        return await axios.post(trainerCoursesURL.ADD_COURSE, body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async getCourse({ id = 1 } = {}) {
        return await axios.get(trainerCoursesURL.GET_COURSE({ id }))
    }
    static async putCourse({ id = 1, body = {} } = {}) {
        body.append('_method', 'PUT')
        return await axios.post(trainerCoursesURL.PUT_COURSE({ id }), body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async patchCourse({ id = 1, body = {} } = {}) {
        body.append('_method', 'PATCH')
        return await axios.post(trainerCoursesURL.PATCH_COURSE({ id }), body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async addModulesMass({ course = 1, body = {} } = {}) {
        return await axios.post(trainerCoursesModulesURL.ADD_MODULES_MASS({ course }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async fetchModules({ course = 1 } = {}) {
        return await axios.get(trainerCoursesModulesURL.FETCH_MODULES({ course }))
    }
    static async fetchLessons({ course = 1 } = {}) {
        return await axios.get(trainerCoursesLessonsURL.FETCH_LESSONS({ course }))
    }
}
