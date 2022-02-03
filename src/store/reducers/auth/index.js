import { authStepTypes, authTypes } from './types'

const initialState = {
    isAuth: false,
    user: {},
    token: '',
    step: authStepTypes.CHECK_EMAIL,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authTypes.SET_AUTH:
            return { ...state, isAuth: action.payload }
        case authTypes.SET_USER:
            return { ...state, user: action.payload }
        case authTypes.SET_TOKEN:
            return { ...state, token: action.payload }
        case authTypes.SET_STEP:
            return { ...state, step: action.payload }
        default:
            return state
    }
}
