import { AuthActionCreators, authHandlers } from './auth/action-creators'
import { courseHandlers, CoursesActionCreators } from './courses/action-creators'
import { EventsActionCreators, EventsHandlers } from './events/action-creators'
import { FrontCoursesActionCreators, frontCoursesHandlers } from './frontCourses/action-creators'
import { FrontEventsActionCreators, frontEventsHandlers } from './frontEvents/action-creators'
import { FrontStaticActionCreators, frontStaticHandlers } from './frontStatic/action-creators'
import { MockActionCreators, mockHandlers } from './mock/action-creators'
import { ModalsActionCreators } from './modals/action-creators'
import { SettingsActionCreators } from './settings/action-creators'
import { SystemActionCreators, systemHandlers } from './system/action-creators'

export const allActionCreators = {
   ...AuthActionCreators,
   ...CoursesActionCreators,
   ...EventsActionCreators,
   ...SystemActionCreators,
   ...ModalsActionCreators,
   ...SettingsActionCreators,
   ...FrontCoursesActionCreators,
   ...FrontEventsActionCreators,
   ...FrontStaticActionCreators,
   ...MockActionCreators,
}

export const allActionHandlers = {
   ...authHandlers,
   ...courseHandlers,
   ...EventsHandlers,
   ...systemHandlers,
   ...frontCoursesHandlers,
   ...frontEventsHandlers,
   ...frontStaticHandlers,
   ...mockHandlers,
}
