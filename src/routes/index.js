import {
    About,
    Home,
    Contacts,
    Courses,
    CoursesItem,
    Events,
    EventsItem,
    News,
    NewsItem,
    Subscribe,
    Cabinet,
    CabinetCoursesAdd,
    Blog,
    Partners,
    Reviews,
    Faq,
    CabinetCoursesItem,
    Error,
    CabinetEventsAdd,
    CabinetEventsItem,
} from 'pages/'

export const RouteNames = {
    ABOUT: '/about',
    ADD_LESSON: '/add',
    BLOG: '/blog',
    CABINET: '/cabinet',
    CABINET_ITEM: '/cabinet/:cabinetId',
    CABINET_COURSES: '/cabinet/courses',
    ADD_COURSE: '/cabinet/courses/add',
    CABINET_COURSES_ITEM: '/cabinet/courses/:courseId',
    CABINET_COURSES_EDIT: '/cabinet/courses/:courseId/edit',
    CABINET_EVENTS: '/cabinet/events',
    CABINET_EVENTS_ADD: '/cabinet/events/add',
    CABINET_EVENTS_ITEM: '/cabinet/events/:eventId',
    CABINET_EVENTS_EDIT: '/cabinet/events/:eventId/edit',
    CABINET_STATISTICS: '/cabinet/statistics',
    CABINET_SUPPORT: '/cabinet/support',
    CABINET_SETTINGS: '/cabinet/settings',
    CONTACTS: '/contacts',
    COURSES: '/courses',
    COURSES_ITEM: '/courses/:courseId',
    ERROR: '/error',
    FAQ: '/faq',
    EVENTS: '/events',
    EVENTS_ITEM: '/events/:eventsId',
    HOME: '/',
    NEWS: '/news',
    NEWS_ITEM: '/news/:id',
    PARTNERS: '/partners',
    REVIEWS: '/reviews',
    SUBSCRIBE: '/subscribe',
}
export const publicRoutes = [
    { path: RouteNames.ABOUT, element: <About /> },
    { path: RouteNames.BLOG, element: <Blog /> },
    { path: RouteNames.CONTACTS, element: <Contacts /> },
    { path: RouteNames.COURSES, element: <Courses /> },
    { path: RouteNames.COURSES_ITEM, element: <CoursesItem /> },
    { path: RouteNames.EVENTS, element: <Events /> },
    { path: RouteNames.EVENTS_ITEM, element: <EventsItem /> },
    { path: RouteNames.FAQ, element: <Faq /> },
    { path: RouteNames.HOME, element: <Home /> },
    { path: RouteNames.NEWS, element: <News /> },
    { path: RouteNames.NEWS_ITEM, element: <NewsItem /> },
    { path: RouteNames.PARTNERS, element: <Partners /> },
    { path: RouteNames.REVIEWS, element: <Reviews /> },
    { path: RouteNames.SUBSCRIBE, element: <Subscribe /> },
    { path: RouteNames.ERROR, element: <Error /> },
]
export const privateRoutes = [
    ...publicRoutes,
    { path: RouteNames.CABINET, element: <Cabinet /> },
    { path: RouteNames.CABINET_ITEM, element: <Cabinet /> },
    { path: RouteNames.ADD_COURSE, element: <CabinetCoursesAdd /> },
    { path: RouteNames.CABINET_COURSES_ITEM, element: <CabinetCoursesItem /> },
    { path: RouteNames.CABINET_COURSES_EDIT, element: <CabinetCoursesAdd /> },
    { path: RouteNames.CABINET_EVENTS_ADD, element: <CabinetEventsAdd /> },
    { path: RouteNames.CABINET_EVENTS_ITEM, element: <CabinetEventsItem /> },
    { path: RouteNames.CABINET_EVENTS_EDIT, element: <CabinetEventsAdd /> },
]
export const cabinetLinks = [
    { title: 'Мои курсы', href: RouteNames.CABINET_COURSES, number: 0 },
    { title: 'Мои мероприятия', href: RouteNames.CABINET_EVENTS, number: 1 },
    { title: 'Статистика', href: RouteNames.CABINET_STATISTICS, number: 0 },
    { title: 'Служба поддержки', href: RouteNames.CABINET_SUPPORT, number: 0 },
    { title: 'Настройки аккаунта', href: RouteNames.CABINET_SETTINGS, number: 0 },
]
