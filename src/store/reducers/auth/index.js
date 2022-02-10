import { authStepTypes, authTypes } from './types'

const initialState = {
   isAuth: false,
   user: {},
   token: '',
   roles: [],
   rolesId: [],
   notifications: [],
   step: authStepTypes.CHECK_EMAIL,
}

export default function authReducer(state = initialState, action) {
   switch (action.type) {
      case authTypes.SET_AUTH:
         return { ...state, isAuth: action.payload }
      case authTypes.SET_USER:
         return {
            ...state,
            user: action.payload,
            roles: action.payload?.roles || [],
            rolesId: action.payload?.roles.map(({ id }) => id) || [],
            notifications: action.payload?.notifications || [],
         }
      case authTypes.SET_TOKEN:
         return { ...state, token: action.payload }
      case authTypes.SET_STEP:
         return { ...state, step: action.payload }
      default:
         return state
   }
}
