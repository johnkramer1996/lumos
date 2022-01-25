export const API_URL = 'https://lumus.wistis.ru/api/v1'
export const systemURL = {
    FETCH_REFERENCES: '/data/references',
    FETCH_SOC_URLS: '/data/soc_urls',
}
export const authURL = {
    LOGIN_URL: '/auth/login',
    PASSWORD_RESTORE: '/auth/password-restore',
    CHECK_EMAIL: '/auth/check-email',
    REGISTER: '/auth/register',
    AUTHORIZATION: '/cabinet/user',
}
export const trainerCoursesURL = {
    FETCH_COURSES: '/cabinet/courses',
    ADD_COURSES: '/cabinet/courses',
    GET_COURSE: '/cabinet/courses',
    PUT_COURSE: '/cabinet/courses',
    PATCH_COURSE: '/cabinet/courses',
    DELETE_COURSE: '/cabinet/courses',
    GET_INFO: '/cabinet/courses/{COURSE}/info',
    EDIT_INFO: '/cabinet/courses/{COURSE}/info',
    DELETE_INFO: '/cabinet/courses/{COURSE}/info',
    GET_COURSE_USER: '/cabinet/courses/{COURSE}/users',
}
export const trainerCoursesModulesURL = {
    FETCH_MODULES: '/cabinet/courses/{COURSE}/moduls',
    ADD_MODULES_MAS: '/cabinet/courses/{COURSE}/moduls/mass',
    ADD_MODULES: '/cabinet/courses/{COURSE}/moduls',
    GET_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
    PUT_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
    PATCH_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
    DELETE_MODULE: '/cabinet/courses/{COURSE}/moduls/{ID}',
}
export const trainerCoursesLessonsURL = {
    FETCH_LESSONS: '/cabinet/courses/{COURSE}/lessons',
    DELETE_FILE: '/cabinet/courses/{COURSE}/lessons/{LESSON}/delete_file',
    FETCH_LESSON: '/cabinet/courses/{COURSE}/lessons/{ID}',
    DELETE_LESSON: '/cabinet/courses/{COURSE}/lessons/{ID}',
    ADD_FILE: '/cabinet/courses/{COURSE}/lessons/{LESSON}/upload_file',
    PUT_LESSON: '/cabinet/courses/{COURSE}/moduls/{ID}',
    PATCH_LESSON: '/cabinet/courses/{COURSE}/moduls/{ID}',
}
