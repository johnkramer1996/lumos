import CoursesService from 'api/CoursesService'
import { crateActionCreator, crateHandles, joinData } from 'utils'
import { coursesTypes } from './types'

export const CoursesActionCreators = {
   resetCourses: (payload) => ({ type: coursesTypes.RESET_COURSES, payload }),
   setCoursesData: (payload) => ({ type: coursesTypes.SET_COURSES_DATA, payload }),
   setCourses: (payload) => ({ type: coursesTypes.SET_COURSES, payload }),
   setCourse: (payload) => ({ type: coursesTypes.SET_COURSE, payload }),
   setModules: (payload) => ({ type: coursesTypes.SET_MODULES, payload }),
   setDescriptions: (payload) => ({ type: coursesTypes.SET_DESCRIPTIONS, payload }),
   setPrices: (payload) => ({ type: coursesTypes.SET_PRICES, payload }),
   setLessons: (payload) => ({ type: coursesTypes.SET_LESSONS, payload }),
   setLesson: (payload) => ({ type: coursesTypes.SET_LESSON, payload }),
   setLessonQuestions: (payload) => ({ type: coursesTypes.SET_LESSON_QUESTIONS, payload }),
   setLessonFiles: (payload) => ({ type: coursesTypes.SET_LESSON_FILES, payload }),
   addLessonFile: (payload) => ({ type: coursesTypes.ADD_LESSON_FILE, payload }),
   ...crateActionCreator(CoursesService),
}

const defaultHandlers = crateHandles(CoursesService)

export const courseHandlers = {
   ...defaultHandlers,
   fetchCourses: {
      ...defaultHandlers.fetchCourses,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(CoursesActionCreators.setCoursesData(prevData || {}))
         dispatch(CoursesActionCreators.setCourses(data || []))
      },
   },
   fetchCourse: {
      ...defaultHandlers.fetchCourse,
      success: ({ dispatch, response, prevData, data }) => dispatch(CoursesActionCreators.setCourse(data || {})),
   },
   addCourse: {
      ...defaultHandlers.addCourse,
      success: ({ dispatch, response, prevData, data }) => dispatch(CoursesActionCreators.setCourse(data?.course || {})),
   },
   putCourse: {
      ...defaultHandlers.putCourse,
      success: ({ dispatch, response, prevData, data }) => dispatch(CoursesActionCreators.setCourse(data?.course || {})),
   },
   // patchCourse
   deleteCourse: {
      ...defaultHandlers.deleteCourse,
      success: ({ dispatch, response, prevData, data }) => dispatch(CoursesActionCreators.setCourse({})),
   },
   fetchInfo: {
      ...defaultHandlers.fetchInfo,
      success: ({ dispatch, response, prevData, data }) => {
         joinData(data?.course.moduls, data?.course.lessons, 'id', 'modul_id', 'lessons', 'module')
         dispatch(CoursesActionCreators.setCourse(data?.course || []))
         dispatch(CoursesActionCreators.setModules(data?.course?.moduls || []))
         dispatch(CoursesActionCreators.setLessons(data?.course?.lessons || []))
         dispatch(CoursesActionCreators.setDescriptions(data?.descriptions || []))
         dispatch(CoursesActionCreators.setPrices(data?.prices || []))
      },
   },
   editInfo: {
      ...defaultHandlers.editInfo,
      success: ({ dispatch, response, prevData, data }) => {
         //TODO CHECK REQUEST
         console.log(data)
      },
   },
   deleteInfo: {
      ...defaultHandlers.deleteInfo,
   },
   // fetchCourseUser
   fetchModules: {
      ...defaultHandlers.fetchModules,
      success: ({ dispatch, response, prevData, data }) => {
         console.log(data)
         dispatch(CoursesActionCreators.setModules(data || []))
      },
   },
   addModulesMass: {
      ...defaultHandlers.addModulesMass,
      success: ({ dispatch, response, prevData, data }) => {
         //TODO CHECK REQUEST
         const newModules = data.moduls.map((m) => ({ ...m, lessons: data.lessons.filter((l) => l.modul_id === m.id) })) || {}
         console.log(newModules, 'newModules')
         dispatch(CoursesActionCreators.setModules(newModules))
      },
   },
   // addModule
   // fetchModule
   // putModule
   // patchModule
   deleteModule: {
      ...defaultHandlers.deleteModule,
   },
   fetchLessons: {
      ...defaultHandlers.fetchLessons,
      success: ({ dispatch, response, prevData, data }) => dispatch(CoursesActionCreators.setLessons(data || [])),
   },
   // deleteFile
   fetchLesson: {
      ...defaultHandlers.fetchLesson,
      success: ({ dispatch, response, prevData, data }) => {
         // TODO CHECK IT
         prevData.prev_lesson = prevData.prev_lesson ? prevData.prev_lesson : {}
         prevData.next_lesson = prevData.next_lesson ? prevData.next_lesson : {}
         dispatch(CoursesActionCreators.setCoursesData(prevData || {}))
         dispatch(CoursesActionCreators.setLessonQuestions(response.data?.questions || []))
         dispatch(CoursesActionCreators.setLessonFiles(data?.files || []))
         dispatch(CoursesActionCreators.setLesson(data || {}))
      },
   },
   deleteLesson: {
      ...defaultHandlers.deleteLesson,
   },
   uploadFile: {
      ...defaultHandlers.uploadFile,
      success: ({ dispatch, response, prevData, data }) => dispatch(CoursesActionCreators.addLessonFile(data.files || {})),
   },
   putLesson: {
      ...defaultHandlers.putLesson,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(CoursesActionCreators.setLesson(data?.lessons[0] || {}))
         dispatch(CoursesActionCreators.setLessonFiles(data?.lessons[0]?.files || []))
         dispatch(CoursesActionCreators.setLessonQuestions(data?.lessons[0]?.questions || []))
      },
   },
   // putchLesson
   // addUserToCourse
   fetchUserCourses: {
      ...defaultHandlers.fetchUserCourses,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(CoursesActionCreators.setCoursesData(prevData || {}))
         dispatch(CoursesActionCreators.setCourses(data || []))
      },
   },
   fetchUserCourse: {
      ...defaultHandlers.fetchUserCourse,
      success: ({ dispatch, response, prevData, data }) => {
         joinData(data?.course.moduls, data?.lessons, 'id', 'modul_id', 'lessons', 'module')
         dispatch(CoursesActionCreators.setCourse(data?.course || {}))
         dispatch(CoursesActionCreators.setModules(data?.course?.moduls || []))
         dispatch(CoursesActionCreators.setDescriptions(data?.descriptions || []))
         dispatch(CoursesActionCreators.setPrices(data?.prices || []))
         dispatch(CoursesActionCreators.setLessons(data?.lessons || []))
      },
   },
   fetchUserLesson: {
      ...defaultHandlers.fetchUserLesson,
      success: ({ dispatch, response, prevData, data }) => {
         prevData.prev_lesson = prevData.prev_lesson ? prevData.prev_lesson : {}
         prevData.next_lesson = prevData.next_lesson ? prevData.next_lesson : {}
         dispatch(CoursesActionCreators.setCoursesData(prevData || {}))
         dispatch(CoursesActionCreators.setCourse(data?.course || {}))
         dispatch(CoursesActionCreators.setLessons(data?.course?.lessons || []))
         dispatch(CoursesActionCreators.setLesson(data?.lessons || {}))
         dispatch(CoursesActionCreators.setLessonFiles(data?.lessons?.files || []))
      },
   },
   fetchUserLessonTest: {
      ...defaultHandlers.fetchUserLessonTest,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(CoursesActionCreators.setCourse(data?.course || {}))
         dispatch(CoursesActionCreators.setLesson(data?.lessons || {}))
         dispatch(CoursesActionCreators.setLessonFiles(data?.lessons?.files || []))
         dispatch(CoursesActionCreators.setLessonQuestions(data?.questions || []))
      },
   },
   // fetchUserLessonComments
   // sendLessonTest
   // addComment
   addLike: {
      ...defaultHandlers.addLike,
   },
   // addFavorite
}
