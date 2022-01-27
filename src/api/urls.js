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
    GET_COURSE: ({ id }) => `/cabinet/courses/${id}`,
    PUT_COURSE: ({ id }) => `/cabinet/courses/${id}`,
    PATCH_COURSE: ({ id }) => `/cabinet/courses/${id}`,
    DELETE_COURSE: ({ id }) => `/cabinet/courses/${id}`,
    GET_INFO: ({ course }) => `/cabinet/courses/${course}/info`,
    EDIT_INFO: '/cabinet/courses/{COURSE}/info',
    DELETE_INFO: '/cabinet/courses/{COURSE}/info',
    GET_COURSE_USER: '/cabinet/courses/{COURSE}/users',
}
export const trainerCoursesModulesURL = {
    FETCH_MODULES: ({ course }) => `/cabinet/courses/${course}/moduls`,
    ADD_MODULES_MASS: ({ course }) => `/cabinet/courses/${course}/moduls/mass`,
    ADD_MODULES: '/cabinet/courses/{COURSE}/moduls',
    GET_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
    PUT_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
    PATCH_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
    DELETE_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
}
export const trainerCoursesLessonsURL = {
    FETCH_LESSONS: ({ course }) => `/cabinet/courses/${course}/lessons`,
    DELETE_FILE: '/cabinet/courses/{COURSE}/lessons/{LESSON}/delete_file',
    FETCH_LESSON: '/cabinet/courses/{COURSE}/lessons/{ID}',
    DELETE_LESSON: '/cabinet/courses/{COURSE}/lessons/{ID}',
    ADD_FILE: '/cabinet/courses/{COURSE}/lessons/{LESSON}/upload_file',
    PUT_LESSON: '/cabinet/courses/{COURSE}/moduls/{ID}',
    PATCH_LESSON: '/cabinet/courses/{COURSE}/moduls/{ID}',
}
