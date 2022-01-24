import { About, Home, Lessons, AddLesson, Events, News, Subscribe } from 'pages/'

export const RouteNames = {
    ABOUT: '/about',
    ADD_LESSON: '/add',
    EVENTS: '/events',
    HOME: '/',
    LESSONS: '/lessons',
    NEWS: '/news',
    SUBSCRIBE: '/subscribe',
}

export const publicRoutes = [
    { path: RouteNames.ABOUT, element: <About /> },
    { path: RouteNames.ADD_LESSON, element: <AddLesson /> },
    { path: RouteNames.EVENTS, element: <Events /> },
    { path: RouteNames.HOME, element: <Home /> },
    { path: RouteNames.LESSONS, element: <Lessons /> },
    { path: RouteNames.NEWS, element: <News /> },
    { path: RouteNames.SUBSCRIBE, element: <Subscribe /> },
]

export const privateRoutes = publicRoutes
