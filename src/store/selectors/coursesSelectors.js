const coursesSelectors = {
   getData: ({ courses }) => courses.data,
   getCourses: ({ courses }) => courses.courses,
   getCourse: ({ courses }) => courses.course,
   getModules: ({ courses }) => courses.modules,
   getInfo: ({ courses }) => courses.info,
   getLessons: ({ courses }) => courses.lessons,
   getLesson: ({ courses }) => courses.lesson,
   getLessonQuestions: ({ courses }) => courses.lessonQuestions,
   getLessonFiles: ({ courses }) => courses.lessonFiles,
}

export default coursesSelectors
