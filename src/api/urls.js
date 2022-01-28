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
}
export const trainerCoursesURL = {
    FETCH_COURSES: '/cabinet/courses',
    ADD_COURSE: '/cabinet/courses',
    FETCH_COURSE: ({ course }) => `/cabinet/courses/${course}`,
    PUT_COURSE: ({ course }) => `/cabinet/courses/${course}`,
    PATCH_COURSE: ({ course }) => `/cabinet/courses/${course}`,
    DELETE_COURSE: ({ course }) => `/cabinet/courses/${course}`,
    GET_INFO: ({ course }) => `/cabinet/courses/${course}/info`,
    EDIT_INFO: ({ course }) => `/cabinet/courses/${course}/info`,
    DELETE_INFO: ({ course }) => `/cabinet/courses/${course}/info`,
    GET_COURSE_USER: ({ course }) => `/cabinet/courses/${course}/users`,
}
export const trainerCoursesModulesURL = {
    FETCH_MODULES: ({ course }) => `/cabinet/courses/${course}/moduls`,
    ADD_MODULES_MASS: ({ course }) => `/cabinet/courses/${course}/moduls/mass`,
    ADD_MODULE: ({ course }) => `/cabinet/courses/${course}/moduls`,
    GET_MODULE: ({ course }) => `/cabinet/courses/${course}/moduls`,
    PUT_MODULE: ({ course }) => `/cabinet/courses/${course}/moduls`,
    PATCH_MODULE: ({ course }) => `/cabinet/courses/${course}/moduls`,
    DELETE_MODULE: ({ course }) => `/cabinet/courses/${course}/moduls`,
}
export const trainerCoursesLessonsURL = {
    FETCH_LESSONS: ({ course }) => `/cabinet/courses/${course}/lessons`,
    DELETE_FILE: ({ course, lesson }) => `/cabinet/courses/${course}/lessons/${lesson}/delete_file`,
    FETCH_LESSON: ({ course, lesson }) => `/cabinet/courses/${course}/lessons/${lesson}`,
    DELETE_LESSON: ({ course, lesson }) => `/cabinet/courses/${course}/lessons/${lesson}`,
    UPLOAD_FILE: ({ course, lesson }) => `/cabinet/courses/${course}/lessons/${lesson}/upload_file`,
    PUT_LESSON: ({ course }) => `/cabinet/courses/${course}/lessons`,
    PATCH_LESSON: ({ course }) => `/cabinet/courses/${course}/lessons`,
}
