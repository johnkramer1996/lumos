const getCourse = ({ courses }) => courses.course
const getModules = ({ courses }) => courses.modules
const getInfo = ({ courses }) => courses.info
const getLessons = ({ courses }) => courses.lessons
const getLesson = ({ courses }) => courses.lesson
const getLessonQuestions = ({ courses }) => courses.lessonQuestions
const getLessonFiles = ({ courses }) => courses.lessonFiles

export default {
    getCourse,
    getModules,
    getInfo,
    getLessons,
    getLesson,
    getLessonQuestions,
    getLessonFiles,
}
