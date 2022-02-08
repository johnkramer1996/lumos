const getCourse = ({ courses }) => courses.course

const getModules = ({ courses }) => courses.modules

const getInfo = ({ courses }) => courses.info

const getLessons = ({ courses }) => courses.lessons

const getLesson = ({ courses }) => courses.lesson

export default {
    getCourse,
    getModules,
    getInfo,
    getLessons,
    getLesson,
}
