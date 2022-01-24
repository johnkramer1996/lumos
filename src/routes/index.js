import Login from '../pages/Login'
import Lessons from '../pages/Lessons'
import AddLesson from '../pages/AddLesson'

export const RouteNames = {
    LESSONS: '/',
    LOGIN: '/login',
    ADD_LESSON: '/add',
}

export const publicRoutes = [{ path: RouteNames.LOGIN, element: <Login /> }]

export const privateRoutes = [
    { path: RouteNames.LESSONS, element: <Lessons /> },
    { path: RouteNames.ADD_LESSON, element: <AddLesson /> },
]
