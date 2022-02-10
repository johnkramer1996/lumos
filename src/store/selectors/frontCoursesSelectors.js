const frontCoursesSelectors = {
   getData: ({ frontCourses }) => frontCourses.data,
   getCourses: ({ frontCourses }) => frontCourses.courses,
   getCourse: ({ frontCourses }) => frontCourses.course,
}

export default frontCoursesSelectors
