import { AuthActionCreators } from './auth/action-creators'
import { CoursesActionCreators } from './courses/action-creators'
import { SystemActionCreators } from './system/action-creators'

export const allActionCreators = {
    ...AuthActionCreators,
    ...CoursesActionCreators,
    ...SystemActionCreators,
}
