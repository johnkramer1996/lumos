import { About, Home, Contacts, Courses, Events, News, Subscribe, Cabinet, AddCourse, Blog, Partners, Reviews, Faq } from 'pages/'

export const RouteNames = {
    ABOUT: '/about',
    ADD_LESSON: '/add',
    ADD_COURSE: '/add-courses',
    BLOG: '/blog',
    CABINET: '/cabinet',
    CABINET_ITEM: '/cabinet/:item',
    CABINET_COURSES: '/cabinet/courses',
    CABINET_EVENTS: '/cabinet/events',
    CABINET_STATISTICS: '/cabinet/statistics',
    CABINET_SUPPORT: '/cabinet/support',
    CABINET_SETTINGS: '/cabinet/settings',
    CONTACTS: '/contacts',
    COURSES: '/courses',
    COURSES_ITEM: '/courses/:id',
    FAQ: '/faq',
    EVENTS: '/events',
    HOME: '/',
    NEWS: '/news',
    PARTNERS: '/partners',
    REVIEWS: '/reviews',
    SUBSCRIBE: '/subscribe',
}
export const publicRoutes = [
    { path: RouteNames.ABOUT, element: <About /> },
    { path: RouteNames.BLOG, element: <Blog /> },
    { path: RouteNames.CONTACTS, element: <Contacts /> },
    { path: RouteNames.COURSES, element: <Courses /> },
    { path: RouteNames.COURSES_ITEM, element: <Courses /> },
    { path: RouteNames.EVENTS, element: <Events /> },
    { path: RouteNames.FAQ, element: <Faq /> },
    { path: RouteNames.HOME, element: <Home /> },
    { path: RouteNames.NEWS, element: <News /> },
    { path: RouteNames.PARTNERS, element: <Partners /> },
    { path: RouteNames.REVIEWS, element: <Reviews /> },
    { path: RouteNames.SUBSCRIBE, element: <Subscribe /> },
]
export const privateRoutes = [
    ...publicRoutes,
    { path: RouteNames.ADD_COURSE, element: <AddCourse /> },
    { path: RouteNames.CABINET, element: <Cabinet /> },
    { path: RouteNames.CABINET_ITEM, element: <Cabinet /> },
    // { path: RouteNames.SETTINGS, element: <Cabinet /> },
]
export const cabinetLinks = [
    { title: 'Мои курсы', href: RouteNames.CABINET_COURSES, number: 0 },
    { title: 'Мои мероприятия', href: RouteNames.CABINET_EVENTS, number: 1 },
    { title: 'Статистика', href: RouteNames.CABINET_STATISTICS, number: 0 },
    { title: 'Служба поддержки', href: RouteNames.CABINET_SUPPORT, number: 0 },
    { title: 'Настройки аккаунта', href: RouteNames.CABINET_SETTINGS, number: 0 },
]
