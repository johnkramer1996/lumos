import { AuthService } from 'api'
import { crateHandles } from 'utils'

const authHandlers = crateHandles(AuthService)

// authHandlers.fetchCourses.stateDefault = []

export default authHandlers
