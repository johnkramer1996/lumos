import axios from './axios'
import { frontCoursesURL } from './URLS'

export default class FrontCoursesService {
   static async fetchFrontCourses(params = {}) {
      return await axios.post(frontCoursesURL.FETCH_COURSES, params)
   }
   static async fetchFrontCourse({ courseId = 1 } = {}) {
      return await axios.get(frontCoursesURL.FETCH_COURSE({ courseId }))
   }
   static async fetchFrontAuthCourses(params = {}) {
      console.log(params)
      return await axios.post(frontCoursesURL.FETCH_AUTH_COURSES, params)
   }
   static async fetchFrontAuthCourse({ courseId = 1 } = {}) {
      return await axios.get(frontCoursesURL.FETCH_AUTH_COURSE({ courseId }))
   }
}
