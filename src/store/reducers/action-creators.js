import { AuthActionCreators, authHandlers } from './auth/action-creators'
import { courseHandlers, CoursesActionCreators } from './courses/action-creators'
import { ModalsActionCreators } from './modals/action-creators'
import { SettingsActionCreators } from './settings/action-creators'
import { SystemActionCreators } from './system/action-creators'

export const allActionCreators = {
    ...AuthActionCreators,
    ...CoursesActionCreators,
    ...SystemActionCreators,
    ...ModalsActionCreators,
    ...SettingsActionCreators,
}

export const allActionHandlers = {
    ...authHandlers,
    ...courseHandlers,
}
