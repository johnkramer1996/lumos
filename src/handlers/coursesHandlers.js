import { CoursesService } from 'api'
import { crateHandles } from 'utils'

const courseHandlers = crateHandles(CoursesService)

courseHandlers.fetchCourses.stateDefault = []

export default courseHandlers
