import { AuthActionCreators, authHandlers } from './auth/action-creators'
import { courseHandlers, CoursesActionCreators } from './courses/action-creators'
import { FrontCoursesActionCreators, frontCoursesHandlers } from './frontCourses/action-creators'
import { MockActionCreators, mockHandlers } from './mock/action-creators'
import { ModalsActionCreators } from './modals/action-creators'
import { SettingsActionCreators } from './settings/action-creators'
import { SystemActionCreators, systemHandlers } from './system/action-creators'

export const allActionCreators = {
    ...AuthActionCreators,
    ...CoursesActionCreators,
    ...SystemActionCreators,
    ...ModalsActionCreators,
    ...SettingsActionCreators,
    ...FrontCoursesActionCreators,
    ...MockActionCreators,
}

export const allActionHandlers = {
    ...authHandlers,
    ...courseHandlers,
    ...systemHandlers,
    ...frontCoursesHandlers,
    ...mockHandlers,
}
