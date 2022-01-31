import { authTypes } from './types'

const initialState = {
    showModal: false,
    isAuth: false,
    isLoading: true,
    user: {},
    token: '',
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case authTypes.SET_SHOW_MODAL:
            return { ...state, showModal: action.payload }
        case authTypes.SET_AUTH:
            return { ...state, isAuth: action.payload }
        case authTypes.SET_USER:
            return { ...state, user: action.payload }
        case authTypes.SET_TOKEN:
            return { ...state, token: action.payload }
        case authTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}
