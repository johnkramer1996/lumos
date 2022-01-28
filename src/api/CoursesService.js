import axios from './axios'
import { trainerCoursesLessonsURL, trainerCoursesModulesURL, trainerCoursesURL } from './URLS'

export default class CoursesService {
    static async fetchCourses({ page = 1, limit = 10 } = {}) {
        return await axios.get(trainerCoursesURL.FETCH_COURSES, {
            params: { page, _limit: limit },
        })
    }
    static async addCourse({ body = {} } = {}) {
        return await axios.post(trainerCoursesURL.ADD_COURSE, body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async fetchCourse({ course = 1 } = {}) {
        return await axios.get(trainerCoursesURL.FETCH_COURSE({ course }))
    }
    static async putCourse({ course = 1, body = {} } = {}) {
        body.append('_method', 'PUT')
        return await axios.post(trainerCoursesURL.PUT_COURSE({ course }), body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async patchCourse({ course = 1, body = {} } = {}) {
        body.append('_method', 'PATCH')
        return await axios.post(trainerCoursesURL.PATCH_COURSE({ course }), body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async deleteCourse({ course = 1 } = {}) {
        return await axios.delete(trainerCoursesURL.DELETE_COURSE({ course }))
    }
    static async getInfo({ course = 1 } = {}) {
        return await axios.get(trainerCoursesURL.GET_INFO({ course }))
    }
    static async editInfo({ course = 1, body = {} } = {}) {
        return await axios.post(trainerCoursesURL.EDIT_INFO({ course }), body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async deleteInfo({ course = 1 } = {}) {
        return await axios.delete(trainerCoursesURL.DELETE_INFO({ course }))
    }
    static async getCourseUser({ course = 1 } = {}) {
        return await axios.get(trainerCoursesURL.GET_COURSE_USER({ course }))
    }
    static async fetchModules({ course = 1 } = {}) {
        return await axios.get(trainerCoursesModulesURL.FETCH_MODULES({ course }))
    }
    static async addModulesMass({ course = 1, body = {} } = {}) {
        return await axios.post(trainerCoursesModulesURL.ADD_MODULES_MASS({ course }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async addModule({ course = 1, body = {} } = {}) {
        return await axios.post(trainerCoursesModulesURL.ADD_MODULES({ course }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async getModule({ course = 1, body = {} } = {}) {
        return await axios.post(trainerCoursesModulesURL.GET_MODULE({ course }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async putModule({ course = 1, body = {} } = {}) {
        return await axios.put(trainerCoursesModulesURL.PUT_MODULE({ course }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async patchModule({ course = 1, body = {} } = {}) {
        return await axios.put(trainerCoursesModulesURL.PATCH_MODULE({ course }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async deleteModule({ course = 1, body = {} } = {}) {
        return await axios.put(trainerCoursesModulesURL.DELETE_MODULE({ course }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async fetchLessons({ course = 1 } = {}) {
        return await axios.get(trainerCoursesLessonsURL.FETCH_LESSONS({ course }))
    }
    static async deleteFile({ course = 1, lesson = 1 } = {}) {
        return await axios.delete(trainerCoursesLessonsURL.FETCH_LESSONS({ course, lesson }))
    }
    static async fetchLesson({ course = 1, lesson = 1 } = {}) {
        return await axios.get(trainerCoursesLessonsURL.FETCH_LESSON({ course, lesson }))
    }
    static async deleteLesson({ course = 1, lesson = 1 } = {}) {
        return await axios.get(trainerCoursesLessonsURL.DELETE_LESSON({ course, lesson }))
    }
    static async addFile({ course = 1, lesson = 1, body = {} } = {}) {
        return await axios.post(trainerCoursesLessonsURL.FETCH_LESSONS({ course, lesson }), body, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }
    static async putLesson({ course = 1, lesson = 1, body = {} } = {}) {
        return await axios.get(trainerCoursesLessonsURL.PUT_LESSON({ course, lesson }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async putchLesson({ course = 1, lesson = 1, body = {} } = {}) {
        return await axios.get(trainerCoursesLessonsURL.PATCH_LESSON({ course, lesson }), body, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
