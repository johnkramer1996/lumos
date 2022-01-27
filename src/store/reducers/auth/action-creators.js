import AuthService from 'api/AuthService'
import { authTypes } from './types'

export const AuthActionCreators = {
    setShowModal: (payload) => ({ type: authTypes.SET_SHOW_MODAL, payload }),
    setUser: (payload) => ({ type: authTypes.SET_USER, payload }),
    setToken: (payload) => ({ type: authTypes.SET_TOKEN, payload }),
    setIsAuth: (payload) => ({ type: authTypes.SET_AUTH, payload }),
    setIsLoading: (payload) => ({ type: authTypes.SET_IS_LOADING, payload }),
    setError: (payload) => ({ type: authTypes.SET_ERROR, payload }),
    setStep: (payload) => ({ type: authTypes.SET_STEP, payload }),
    logout: () => async (dispatch) => {
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser())
        dispatch(AuthActionCreators.setToken())

        localStorage.removeItem('token')
    },
    login:
        ({ cb, ...data }) =>
        async (dispatch) => {
            try {
                console.log(data)
                dispatch(AuthActionCreators.setError(''))
                const response = await AuthService.login(data)

                console.log(response, 'response')

                if (response.status === 200) {
                    dispatch(AuthActionCreators.setShowModal(false))
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(response.data?.user))
                    dispatch(AuthActionCreators.setToken(response.data?.token))
                    localStorage.setItem('token', response.data?.token)
                    cb()
                }
            } catch (e) {
                dispatch(AuthActionCreators.setError('Недействительные учетные данные'))
            }
        },
    restore:
        ({ cb, ...data }) =>
        async (dispatch) => {
            try {
                dispatch(AuthActionCreators.setError(''))
                const response = await AuthService.restore(data)

                console.log(response)

                if (response.status === 200) {
                    dispatch(AuthActionCreators.setShowModal(false))
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(response.data?.user))
                    dispatch(AuthActionCreators.setToken(response.data?.token))
                    localStorage.setItem('token', response.data?.token)
                }
            } catch (e) {
                dispatch(AuthActionCreators.setError('Недействительные учетные данные'))
            }
        },
    checkEmail: (data) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setError(''))
            const response = await AuthService.checkEmail(data)

            if (response.status === 200) {
                dispatch(response.data.exists ? AuthActionCreators.setStep('LOGIN') : AuthActionCreators.setStep('REGISTER'))
            }
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при проверке E-mail'))
        }
    },
    register: (data) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setError(''))
            const response = await AuthService.register(data)

            if (response.status === 200) {
                dispatch(AuthActionCreators.setStep('LOGIN'))
            }
        } catch (e) {
            try {
                const errorText = []
                Object.values(e.response.data.error).forEach((err) => err.forEach((e) => errorText.push(e)))
                dispatch(AuthActionCreators.setError(errorText.join(' ')))
            } catch (e) {
                dispatch(AuthActionCreators.setError('Произошла ошибка при регистрации'))
            }
        }
    },
    auth: () => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            dispatch(AuthActionCreators.setError(''))
            const response = await AuthService.auth()

            if (response.status === 200) {
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(response.data?.user))
                dispatch(AuthActionCreators.setToken(response.data?.token))
                localStorage.setItem('token', response.data?.token)
            }
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при авторизации'))
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false))
        }
    },
}
