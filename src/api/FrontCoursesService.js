import axios from './axios'
import { frontCoursesURL } from './URLS'

export default class FrontCoursesService {
   static async fetchFrontCourses({ body = {} } = {}) {
      return await axios.post(frontCoursesURL.FETCH_COURSES, body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchFrontCourse({ courseId = 1 } = {}) {
      return await axios.get(frontCoursesURL.FETCH_COURSE({ courseId }))
   }

   static async fetchFrontAuthCourses({ body = {} } = {}) {
      console.log(frontCoursesURL.FETCH_AUTH_COURSES)
      return await axios.post(frontCoursesURL.FETCH_AUTH_COURSES, body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchFrontAuthCourse({ courseId = 1 } = {}) {
      return await axios.get(frontCoursesURL.FETCH_AUTH_COURSE({ courseId }))
   }
}
