import AuthService from 'api/AuthService'
import { asyncAction, crateActionCreator, crateHandles } from 'utils'
import { ModalsActionCreators } from '../modals/action-creators'
import { authTypes } from './types'

export const AuthActionCreators = {
    setShowModal: (payload) => ({ type: authTypes.SET_SHOW_MODAL, payload }),
    setUser: (payload) => ({ type: authTypes.SET_USER, payload }),
    setToken: (payload) => ({ type: authTypes.SET_TOKEN, payload }),
    setIsAuth: (payload) => ({ type: authTypes.SET_AUTH, payload }),
    setIsLoading: (payload) => ({ type: authTypes.SET_IS_LOADING, payload }),
    setError: (payload) => ({ type: authTypes.SET_ERROR, payload }),
    setStep: (payload) => ({ type: authTypes.SET_STEP, payload }),
    logout: (data) => async (dispatch) => {
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser())
        dispatch(AuthActionCreators.setToken())
        localStorage.removeItem('token')
    },
    ...crateActionCreator(AuthService),
}

export const defaultHandlers = crateHandles(AuthService)

export const authHandlers = {
    ...defaultHandlers,
    login: {
        ...defaultHandlers.login,
        success: ({ dispatch, response, data }) => {
            dispatch(AuthActionCreators.setShowModal(false))
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setUser(data?.user))
            dispatch(AuthActionCreators.setToken(data?.token))
            localStorage.setItem('token', data?.token)
        },
        error: ({ dispatch, error }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Недействительные учетные данные' }))
        },
    },
    restore: {
        ...defaultHandlers.restore,
        // before: ({ dispatch }) => {
        //     dispatch(AuthActionCreators.setError(''))
        // },
        success: ({ dispatch, response, data }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Мы отправили новый пароль на почту' }))
        },
        error: ({ dispatch, error }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Недействительные учетные данные' }))
        },
    },
    register: {
        ...defaultHandlers.register,
        // before: ({ dispatch }) => {
        //     dispatch(AuthActionCreators.setError(''))
        // },
        success: ({ dispatch, response, data }) => {
            dispatch(AuthActionCreators.setUser(data?.user))
            dispatch(AuthActionCreators.setToken(data?.token))
            dispatch(AuthActionCreators.setIsAuth(true))
            localStorage.setItem('token', data?.token)
        },
        error: ({ dispatch, error }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Произошла ошибка при регистрации' }))
        },
    },
    auth: {
        ...defaultHandlers.auth,
        before: ({ dispatch }) => {
            dispatch(AuthActionCreators.setIsLoading(true))
            // dispatch(AuthActionCreators.setError(''))
        },
        success: ({ dispatch, response, data }) => {
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setUser(data?.user))
            dispatch(AuthActionCreators.setToken(data?.token))
            localStorage.setItem('token', data?.token)
        },
        error: ({ dispatch, error }) => {
            dispatch(ModalsActionCreators.setIsShow(true))
            dispatch(ModalsActionCreators.setContent({ title: 'Произошла ошибка при авторизации' }))
        },
        after: ({ dispatch }) => {
            dispatch(AuthActionCreators.setIsLoading(false))
        },
    },
}
