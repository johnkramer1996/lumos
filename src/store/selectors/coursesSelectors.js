const coursesSelectors = {
   getData: ({ courses }) => courses.data,
   getCourses: ({ courses }) => courses.courses,
   getCourse: ({ courses }) => courses.course,
   getModules: ({ courses }) => courses.modules,
   getInfo: ({ courses }) => courses.info,
   getDescriptions: ({ courses }) => courses.descriptions,
   getPrices: ({ courses }) => courses.prices,
   getLessons: ({ courses }) => courses.lessons,
   getLesson: ({ courses }) => courses.lesson,
   getLessonQuestions: ({ courses }) => courses.lessonQuestions,
   getLessonFiles: ({ courses }) => courses.lessonFiles,
   getCommentsData: ({ courses }) => courses.commentsData,
   getComments: ({ courses }) => courses.comments,
}

export default coursesSelectors
