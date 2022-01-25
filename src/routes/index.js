import { About, Home, Courses, AddLesson, Events, News, Subscribe, Cabinet, AddCourse } from 'pages/'

export const RouteNames = {
    ABOUT: '/about',
    ADD_LESSON: '/add',
    EVENTS: '/events',
    HOME: '/',
    COURSES: '/courses',
    NEWS: '/news',
    SUBSCRIBE: '/subscribe',
    CABINET: '/cabinet',
    CABINET_COURSES: '/cabinet/courses',
    CABINET_EVENTS: '/cabinet/events',
    CABINET_STATISTICS: '/cabinet/statistics',
    CABINET_SUPPORT: '/cabinet/support',
    CABINET_SETTINGS: '/cabinet/settings',
    ADD_COURSE: '/add-courses',
}

export const publicRoutes = [
    { path: RouteNames.ABOUT, element: <About /> },
    { path: RouteNames.ADD_LESSON, element: <AddLesson /> },
    { path: RouteNames.EVENTS, element: <Events /> },
    { path: RouteNames.HOME, element: <Home /> },
    { path: RouteNames.COURSES, element: <Courses /> },
    { path: RouteNames.NEWS, element: <News /> },
    { path: RouteNames.SUBSCRIBE, element: <Subscribe /> },
]

export const privateRoutes = [
    ...publicRoutes,
    { path: RouteNames.CABINET, element: <Cabinet /> },
    { path: RouteNames.ADD_COURSE, element: <AddCourse /> },
    // { path: RouteNames.SETTINGS, element: <Cabinet /> },
    { path: RouteNames.CABINET + '/:menu', element: <Cabinet /> },
]
