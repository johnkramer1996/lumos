import axios from './axios'
import { trainerCoursesLessonsURL, trainerCoursesModulesURL, trainerCoursesURL, userCoursesURL } from './URLS'

export default class CoursesService {
   static async fetchCourses(params = {}) {
      return await axios.get(trainerCoursesURL.FETCH_COURSES, {
         params,
      })
   }
   static async fetchCourse({ courseId = 0 } = {}) {
      return await axios.get(trainerCoursesURL.FETCH_COURSE({ courseId }))
   }
   static async addCourse({ body = {} } = {}) {
      return await axios.post(trainerCoursesURL.ADD_COURSE, body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async putCourse({ courseId = 0, body = {} } = {}) {
      body.append('_method', 'PUT')
      return await axios.post(trainerCoursesURL.PUT_COURSE({ courseId }), body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async patchCourse({ courseId = 0, body = {} } = {}) {
      body.append('_method', 'PATCH')
      return await axios.post(trainerCoursesURL.PATCH_COURSE({ courseId }), body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async deleteCourse({ courseId = 0 } = {}) {
      return await axios.delete(trainerCoursesURL.DELETE_COURSE({ courseId }))
   }
   static async fetchInfo({ courseId = 0 } = {}) {
      return await axios.get(trainerCoursesURL.FETCH_INFO({ courseId }))
   }
   static async editInfo({ courseId = 0, body = {} } = {}) {
      return await axios.post(trainerCoursesURL.EDIT_INFO({ courseId }), body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async deleteInfo({ courseId = 0, ...body } = {}) {
      return await axios.post(trainerCoursesURL.DELETE_INFO({ courseId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchCourseUser({ courseId = 0 } = {}) {
      return await axios.get(trainerCoursesURL.FETCH_COURSE_USER({ courseId }))
   }
   static async fetchModules({ courseId = 0 } = {}) {
      return await axios.get(trainerCoursesModulesURL.FETCH_MODULES({ courseId }))
   }
   static async addModulesMass({ courseId = 0, body = {} } = {}) {
      return await axios.post(trainerCoursesModulesURL.ADD_MODULES_MASS({ courseId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async addModule({ courseId = 0, body = {} } = {}) {
      return await axios.post(trainerCoursesModulesURL.ADD_MODULE({ courseId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchModule({ courseId = 0, body = {} } = {}) {
      return await axios.post(trainerCoursesModulesURL.FETCH_MODULE({ courseId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async putModule({ courseId = 0, body = {} } = {}) {
      return await axios.put(trainerCoursesModulesURL.PUT_MODULE({ courseId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async patchModule({ courseId = 0, body = {} } = {}) {
      return await axios.put(trainerCoursesModulesURL.PATCH_MODULE({ courseId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async deleteModule({ courseId = 0, id = 1 } = {}) {
      return await axios.delete(trainerCoursesModulesURL.DELETE_MODULE({ courseId, id }), {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchLessons({ courseId = 0 } = {}) {
      return await axios.get(trainerCoursesLessonsURL.FETCH_LESSONS({ courseId }))
   }
   static async deleteFile({ courseId = 0, lessonId = 0, body = {} } = {}) {
      return await axios.post(trainerCoursesLessonsURL.DELETE_FILE({ courseId, lessonId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchLesson({ courseId = 0, lessonId = 0 } = {}) {
      return await axios.get(trainerCoursesLessonsURL.FETCH_LESSON({ courseId, lessonId }))
   }
   static async deleteLesson({ courseId = 0, lessonId = 0 } = {}) {
      return await axios.delete(trainerCoursesLessonsURL.DELETE_LESSON({ courseId, lessonId }))
   }
   static async uploadFile({ courseId = 0, lessonId = 0, body = {} } = {}) {
      console.log(body)
      return await axios.post(trainerCoursesLessonsURL.UPLOAD_FILE({ courseId, lessonId }), body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async putLesson({ courseId = 0, lessonId = 0, body = {} } = {}) {
      return await axios.put(trainerCoursesLessonsURL.PUT_LESSON({ courseId, lessonId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async putchLesson({ courseId = 0, lessonId = 0, body = {} } = {}) {
      return await axios.patch(trainerCoursesLessonsURL.PATCH_LESSON({ courseId, lessonId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   // USER
   static async addUserToCourse({ body = {} } = {}) {
      return await axios.post(userCoursesURL.ADD_USER, body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchUserCourses() {
      return await axios.get(userCoursesURL.FETCH_COURSES)
   }
   static async fetchUserCourse({ courseId = 0 } = {}) {
      return await axios.get(userCoursesURL.FETCH_COURSE({ courseId }))
   }
   static async fetchUserLesson({ courseId = 0, lessonId = 0 } = {}) {
      return await axios.get(userCoursesURL.FETCH_LESSON({ courseId, lessonId }))
   }
   static async fetchUserLessonTest({ courseId = 0, lessonId = 0 } = {}) {
      return await axios.get(userCoursesURL.FETCH_LESSON_TEST({ courseId, lessonId }))
   }
   static async fetchUserLessonComments({ courseId = 0, lessonId = 0 } = {}) {
      return await axios.get(userCoursesURL.FETCH_LESSON_TEST({ courseId, lessonId }))
   }
   static async sendLessonTest({ body = {} } = {}) {
      return await axios.post(userCoursesURL.SEND_LESSON_TEST, body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async addComment({ courseId = 0, body = {} } = {}) {
      return await axios.post(userCoursesURL.ADD_COMMENT({ courseId }), body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async addLike({ courseId = 0 }) {
      console.log(userCoursesURL.ADD_LIKE({ courseId }))
      return await axios.post(userCoursesURL.ADD_LIKE({ courseId }))
   }
   static async addFavorite({ courseId = 0 }) {
      return await axios.post(userCoursesURL.ADD_FAVORITE({ courseId }))
   }
}
