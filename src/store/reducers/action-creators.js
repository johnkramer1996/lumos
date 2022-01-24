import { AuthActionCreators } from './auth/action-creators'
import { LessonsActionCreators } from './lessons/action-creators'

export const allActionCreators = {
    ...AuthActionCreators,
    ...LessonsActionCreators,
}
