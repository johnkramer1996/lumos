import { ROLES } from 'constants'
import {
   Home,
   Contacts,
   Courses,
   CoursesItem,
   Events,
   EventsItem,
   //  News,
   //  NewsItem,
   Subscribe,
   Cabinet,
   CabinetCoursesEdit,
   Blog,
   Partners,
   Reviews,
   Faq,
   CabinetCoursesItem,
   Error,
   CabinetEventsAdd,
   CabinetEventsItem,
   CabinetCoursesLesson,
   CabinetCoursesLessonTest,
   CabinetCoursesLessons,
   Logout,
   PagesItem,
   BlogItem,
   UsersItem,
   CabinetCoursesLessonEdit,
} from 'pages/'

export const RouteNames = {
   BLOG: '/blog',
   BLOG_ITEM: '/blog/:blogId',
   CABINET: '/cabinet',
   CABINET_ITEM: '/cabinet/:cabinetItem',
   CABINET_ITEM_SUB: '/cabinet/:cabinetItem/:cabinetId',
   CABINET_COURSES: '/cabinet/courses',
   CABINET_COURSES_PLANNED: '/cabinet/courses/planned',
   CABINET_COURSES_MODERATION: '/cabinet/courses/moderation',
   CABINET_COURSES_COMPLETED: '/cabinet/courses/completed',
   CABINET_COURSES_ADD: '/cabinet/courses/add',
   CABINET_COURSES_ITEM: '/cabinet/courses/:courseId',
   CABINET_COURSES_LESSONS: '/cabinet/courses/:courseId/lessons',
   CABINET_COURSES_LESSON: '/cabinet/courses/:courseId/lessons/:lessonId',
   CABINET_COURSES_LESSON_TEST: '/cabinet/courses/:courseId/lessons/:lessonId/test',
   CABINET_COURSES_EDIT: '/cabinet/courses/:courseId/edit',
   CABINET_COURSES_LESSON_EDIT: '/cabinet/courses/:courseId/lessons/:lessonId/edit',
   CABINET_EVENTS: '/cabinet/events',
   CABINET_EVENTS_PLANNED: '/cabinet/events/planned',
   CABINET_EVENTS_MODERATION: '/cabinet/events/moderation',
   CABINET_EVENTS_COMPLETED: '/cabinet/events/completed',
   CABINET_EVENTS_ADD: '/cabinet/events/add',
   CABINET_EVENTS_ITEM: '/cabinet/events/:eventId',
   CABINET_EVENTS_EDIT: '/cabinet/events/:eventId/edit',
   CABINET_STATISTICS: '/cabinet/statistics',
   CABINET_SUPPORT: '/cabinet/support',
   CABINET_SETTINGS: '/cabinet/settings',
   CONTACTS: '/contacts',
   COURSES: '/courses',
   COURSES_ITEM: '/courses/:courseId',
   COURSES_LESSON: '/courses/:courseId/lessons/:lessonId',
   ERROR: '/error',
   FAQ: '/faq',
   EVENTS: '/events',
   EVENTS_ITEM: '/events/:eventId',
   HOME: '/',
   //  NEWS: '/news',
   //  NEWS_ITEM: '/news/:id',
   PARTNERS: '/partners',
   REVIEWS: '/reviews',
   SUBSCRIBE: '/subscribe',
   LOGOUT: '/logout',
   PAGES_ITEM: '/pages/:pageId',
   TRAINERS_ITEM: '/trainers/:userId',
   USERS_ITEM: '/users/:userId',
}
export const publicRoutes = [
   { path: RouteNames.PAGES_ITEM, element: <PagesItem /> },
   { path: RouteNames.BLOG, element: <Blog /> },
   { path: RouteNames.BLOG_ITEM, element: <BlogItem /> },
   { path: RouteNames.CONTACTS, element: <Contacts /> },
   { path: RouteNames.COURSES, element: <Courses /> },
   { path: RouteNames.COURSES_ITEM, element: <CoursesItem /> },
   { path: RouteNames.COURSES_LESSON, element: <CabinetCoursesLesson /> },
   { path: RouteNames.EVENTS, element: <Events /> },
   { path: RouteNames.EVENTS_ITEM, element: <EventsItem /> },
   { path: RouteNames.FAQ, element: <Faq /> },
   { path: RouteNames.HOME, element: <Home /> },
   //  { path: RouteNames.NEWS, element: <News /> },
   //  { path: RouteNames.NEWS_ITEM, element: <NewsItem /> },
   { path: RouteNames.PARTNERS, element: <Partners /> },
   { path: RouteNames.REVIEWS, element: <Reviews /> },
   { path: RouteNames.SUBSCRIBE, element: <Subscribe /> },
   { path: RouteNames.ERROR, element: <Error /> },
   { path: RouteNames.LOGOUT, element: <Logout /> },
   { path: RouteNames.TRAINERS_ITEM, element: <UsersItem /> },
   { path: RouteNames.USERS_ITEM, element: <UsersItem /> },
]
export const privateRoutes = [
   ...publicRoutes,
   { path: RouteNames.CABINET, element: <Cabinet /> },
   { path: RouteNames.CABINET_ITEM, element: <Cabinet /> },
   { path: RouteNames.CABINET_ITEM_SUB, element: <Cabinet /> },
   //  { path: RouteNames.CABINET_COURSES, element: <CabinetCourses /> },
   { path: RouteNames.CABINET_COURSES_PLANNED, element: <Cabinet /> },
   { path: RouteNames.CABINET_COURSES_MODERATION, element: <Cabinet /> },
   { path: RouteNames.CABINET_COURSES_COMPLETED, element: <Cabinet /> },
   { path: RouteNames.CABINET_COURSES_ADD, element: <CabinetCoursesEdit /> },
   { path: RouteNames.CABINET_COURSES_ITEM, element: <CabinetCoursesItem /> },
   { path: RouteNames.CABINET_COURSES_LESSONS, element: <CabinetCoursesLessons /> },
   { path: RouteNames.CABINET_COURSES_LESSON, element: <CabinetCoursesLesson /> },
   { path: RouteNames.CABINET_COURSES_LESSON_TEST, element: <CabinetCoursesLessonTest /> },
   { path: RouteNames.CABINET_COURSES_EDIT, element: <CabinetCoursesEdit /> },
   { path: RouteNames.CABINET_COURSES_LESSON_EDIT, element: <CabinetCoursesLessonEdit /> },
   { path: RouteNames.CABINET_EVENTS_PLANNED, element: <Cabinet /> },
   { path: RouteNames.CABINET_EVENTS_MODERATION, element: <Cabinet /> },
   { path: RouteNames.CABINET_EVENTS_COMPLETED, element: <Cabinet /> },
   { path: RouteNames.CABINET_EVENTS_ADD, element: <CabinetEventsAdd /> },
   { path: RouteNames.CABINET_EVENTS_ITEM, element: <CabinetEventsItem /> },
   { path: RouteNames.CABINET_EVENTS_EDIT, element: <CabinetEventsAdd /> },
]
export const cabinetLinks = [
   {
      title: '?????? ??????????',
      href: RouteNames.CABINET_COURSES,
      number: 0,
      list: [
         { title: '???? ??????????????????', search: 'nomoderated', hasAccess: [ROLES.TRAINER, ROLES.EMPLOYEE] },
         { title: '??????????????????????????', search: 'moderated', hasAccess: [ROLES.TRAINER, ROLES.EMPLOYEE] },
         { title: '??????????????????', search: 'favorite', hasAccess: [ROLES.USER, ROLES.TRAINER, ROLES.EMPLOYEE] },
      ],
   },
   {
      title: '?????? ??????????????????????',
      href: RouteNames.CABINET_EVENTS,
      number: 1,
      list: [
         { title: '??????????????????????????????', search: 'features', hasAccess: [ROLES.TRAINER, ROLES.EMPLOYEE] },
         { title: '??????????????????????????', search: 'ended', hasAccess: [ROLES.TRAINER, ROLES.EMPLOYEE] },
         { title: '???? ??????????????????', search: 'nomoderated', hasAccess: [ROLES.TRAINER, ROLES.EMPLOYEE] },
         { title: '??????????????????????????', search: 'moderated', hasAccess: [ROLES.TRAINER, ROLES.EMPLOYEE] },
      ],
   },
   { title: '????????????????????', href: RouteNames.CABINET_STATISTICS, number: 0 },
   { title: '???????????? ??????????????????', href: RouteNames.CABINET_SUPPORT, number: 0 },
   { title: '?????????????????? ????????????????', href: RouteNames.CABINET_SETTINGS, number: 0 },
]
export const navLinks = [
   { title: '??????????????????????', href: RouteNames.EVENTS },
   { title: '????????????????', href: RouteNames.SUBSCRIBE },
   //  { title: '?? ??????', href: RouteNames.ABOUT },
   //  { title: '??????????????', href: RouteNames.NEWS },
]
