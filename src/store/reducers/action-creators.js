import { AuthActionCreators, authHandlers } from './auth/action-creators'
import { courseHandlers, CoursesActionCreators } from './courses/action-creators'
import { ModalsActionCreators } from './modals/action-creators'
import { SystemActionCreators } from './system/action-creators'

export const allActionCreators = {
    ...AuthActionCreators,
    ...CoursesActionCreators,
    ...SystemActionCreators,
    ...ModalsActionCreators,
}

export const allActionHandlers = {
    ...authHandlers,
    ...courseHandlers,
}
