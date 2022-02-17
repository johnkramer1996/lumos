import axios from './axios'
import { frontCoursesURL } from './URLS'

export default class FrontCoursesService {
   static async fetchFrontCourses({ body = {} } = {}) {
      return await axios.post(frontCoursesURL.FETCH_COURSES, body)
   }
   static async fetchFrontCourse({ courseId = 1 } = {}) {
      return await axios.get(frontCoursesURL.FETCH_COURSE({ courseId }))
   }
   static async fetchFrontAuthCourses({ body = {} } = {}) {
      return await axios.post(frontCoursesURL.FETCH_AUTH_COURSES, body)
   }
   static async fetchFrontAuthCourse({ courseId = 1 } = {}) {
      return await axios.get(frontCoursesURL.FETCH_AUTH_COURSE({ courseId }))
   }
}
