export const SITE_URL = 'https://lumus.wistis.ru'
export const API_URL = `${SITE_URL}/api/v1`
export const IMG_URL = `${SITE_URL}/`
export const systemURL = {
   FETCH_REFERENCES: '/data/references',
   FETCH_SOC_URLS: '/data/soc_urls',
}
export const authURL = {
   LOGIN: '/auth/login',
   RESTORE: '/auth/password-restore',
   CHECK_EMAIL: '/auth/check-email',
   REGISTER: '/auth/register',
   AUTHORIZATION: '/cabinet/user',
   SETTINGS: '/cabinet/user/setting',
   CHANGE_EMAIL: '/cabinet/user/change_email',
}
export const trainerCoursesURL = {
   FETCH_COURSES: '/cabinet/courses',
   ADD_COURSE: '/cabinet/courses',
   FETCH_COURSE: ({ courseId }) => `/cabinet/courses/${courseId}`,
   PUT_COURSE: ({ courseId }) => `/cabinet/courses/${courseId}`,
   PATCH_COURSE: ({ courseId }) => `/cabinet/courses/${courseId}`,
   DELETE_COURSE: ({ courseId }) => `/cabinet/courses/${courseId}`,
   FETCH_INFO: ({ courseId }) => `/cabinet/courses/${courseId}/info`,
   EDIT_INFO: ({ courseId }) => `/cabinet/courses/${courseId}/info`,
   DELETE_INFO: ({ courseId }) => `/cabinet/courses/${courseId}/info/delete`,
   FETCH_COURSE_USER: ({ courseId }) => `/cabinet/courses/${courseId}/users`,
}
export const trainerCoursesModulesURL = {
   FETCH_MODULES: ({ courseId }) => `/cabinet/courses/${courseId}/moduls`,
   ADD_MODULES_MASS: ({ courseId }) => `/cabinet/courses/${courseId}/moduls/mass`,
   ADD_MODULE: ({ courseId }) => `/cabinet/courses/${courseId}/moduls`,
   FETCH_MODULE: ({ courseId, id }) => `/cabinet/courses/${courseId}/moduls/${id}`,
   PUT_MODULE: ({ courseId, id }) => `/cabinet/courses/${courseId}/moduls/${id}`,
   PATCH_MODULE: ({ courseId, id }) => `/cabinet/courses/${courseId}/moduls/${id}`,
   DELETE_MODULE: ({ courseId, id }) => `/cabinet/courses/${courseId}/moduls/${id}`,
}
export const trainerCoursesLessonsURL = {
   FETCH_LESSONS: ({ courseId }) => `/cabinet/courses/${courseId}/lessons`,
   DELETE_FILE: ({ courseId, lessonId }) => `/cabinet/courses/${courseId}/lessons/${lessonId}/delete_file`,
   FETCH_LESSON: ({ courseId, lessonId }) => `/cabinet/courses/${courseId}/lessons/${lessonId}`,
   DELETE_LESSON: ({ courseId, lessonId }) => `/cabinet/courses/${courseId}/lessons/${lessonId}`,
   UPLOAD_FILE: ({ courseId, lessonId }) => `/cabinet/courses/${courseId}/lessons/${lessonId}/upload_file`,
   PUT_LESSON: ({ courseId, lessonId }) => `/cabinet/courses/${courseId}/lessons/${lessonId}`,
   PATCH_LESSON: ({ courseId, lessonId }) => `/cabinet/courses/${courseId}/lessons/${lessonId}`,
}
export const trainerEventsURL = {
   FETCH_EVENTS: '/cabinet/events',
   ADD_EVENT: '/cabinet/events',
   FETCH_EVENT: ({ eventId }) => `/cabinet/events/${eventId}`,
   PUT_EVENT: ({ eventId }) => `/cabinet/events/${eventId}`,
   PATCH_EVENT: ({ eventId }) => `/cabinet/events/${eventId}`,
   DELETE_EVENT: ({ eventId }) => `/cabinet/events/${eventId}`,
}
export const userCoursesURL = {
   ADD_USER: '/users/courses/add_user',
   FETCH_COURSES: '/users/courses',
   FETCH_COURSE: ({ courseId }) => `/users/courses/${courseId}/lessons`,
   FETCH_LESSON: ({ courseId, lessonId }) => `/users/courses/${courseId}/lessons/${lessonId}`,
   FETCH_LESSON_TEST: ({ courseId, lessonId }) => `/users/courses/${courseId}/lessons/${lessonId}/test`,
   FETCH_COMMENTS: ({ courseId, lessonId }) => `/users/courses/${courseId}/lessons/${lessonId}/comments`,
   SEND_LESSON_TEST: ({ courseId, lessonId }) => `/users/courses/${courseId}/lessons/${lessonId}/test`,
   ADD_COMMENT: ({ courseId, lessonId }) => `/users/courses/${courseId}/lessons/${lessonId}/comments`,
   ADD_LIKE: ({ courseId }) => `/users/courses/${courseId}/like`,
   ADD_FAVORITE: ({ courseId }) => `/users/courses/${courseId}/favorite`,
}
export const userEventsURL = {
   ADD_USER: '/users/events/add_user',
   FETCH_EVENTS: '/users/events',
}
export const adminURL = {
   ADD_USER: '/admin/users/set_role',
}
export const frontCoursesURL = {
   FETCH_COURSES: '/front/courses',
   FETCH_COURSE: ({ courseId }) => `/front/courses/${courseId}`,
   FETCH_AUTH_COURSES: '/users/front/courses',
   FETCH_AUTH_COURSE: ({ courseId }) => `/users/front/courses/${courseId}`,
}
export const frontEventsURL = {
   FETCH_EVENTS: '/front/events',
   FETCH_EVENT: ({ eventId }) => `/front/events/${eventId}`,
   FETCH_AUTH_EVENTS: '/users/front/events',
   FETCH_AUTH_EVENT: ({ eventId }) => `/users/front/events/${eventId}`,
}
