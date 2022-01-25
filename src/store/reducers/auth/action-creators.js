import AuthService from 'api/AuthService'
import { authTypes } from './types'

export const AuthActionCreators = {
    setShowModal: (show) => ({ type: authTypes.SET_SHOW_MODAL, payload: show }),
    setUser: (user) => ({ type: authTypes.SET_USER, payload: user }),
    setToken: (token) => ({ type: authTypes.SET_TOKEN, payload: token }),
    setIsAuth: (auth) => ({ type: authTypes.SET_AUTH, payload: auth }),
    setIsLoading: (payload) => ({ type: authTypes.SET_IS_LOADING, payload }),
    setError: (payload) => ({ type: authTypes.SET_ERROR, payload }),
    setStep: (step) => ({ type: authTypes.SET_STEP, payload: step }),
    changeStep: (step) => async (dispatch) => {
        dispatch(AuthActionCreators.setError(''))
        dispatch(AuthActionCreators.setStep(step))
    },
    checkEmail: (data) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setError(''))
            const response = await AuthService.checkEmail(data)
            if (response.data.exists) dispatch(AuthActionCreators.changeStep('LOGIN'))
            else dispatch(AuthActionCreators.changeStep('REGISTER'))
        } catch (e) {
            // dispatch(AuthActionCreators.setError('Произошла ошибка при проверке E-mail'))
        }
    },
    login:
        ({ cb, ...data }) =>
        async (dispatch) => {
            try {
                dispatch(AuthActionCreators.setError(''))
                const response = await AuthService.login(data)

                if (response.status === 200) {
                    const { user, token } = response.data
                    dispatch(AuthActionCreators.setShowModal(false))
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(user))
                    dispatch(AuthActionCreators.setToken(token))

                    localStorage.setItem('token', token)
                    // localStorage.setItem('token', '11|Z58sRgglIckxyFziYxJOjjFp0tRsejQUv2yQQ4Xu')
                    cb()

                    return
                }
                dispatch(AuthActionCreators.setError('Недействительные учетные данные'))
            } catch (e) {
                dispatch(AuthActionCreators.setError('Произошла ошибка при авторизации'))
            }
        },
    logout: () => async (dispatch) => {
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser())
        dispatch(AuthActionCreators.setToken())

        localStorage.removeItem('token')
    },
    register: (data) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setError(''))
            const response = await AuthService.register(data)

            if (response.status === 200) {
                dispatch(AuthActionCreators.changeStep('LOGIN'))

                return
            }

            const { error } = response.data
            const errorText = []
            Object.values(error).forEach((err) => {
                err.forEach((e) => errorText.push(e))
            })
            dispatch(AuthActionCreators.setError(errorText.join(' ')))
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при авторизации'))
        }
    },
    auth: () => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            dispatch(AuthActionCreators.setError(''))
            const response = await AuthService.auth(localStorage.getItem('token'))

            if (response.status === 200) {
                const { user, token } = response.data
                dispatch(AuthActionCreators.setIsAuth(true))
                dispatch(AuthActionCreators.setUser(user))
                dispatch(AuthActionCreators.setToken(token))

                localStorage.setItem('token', token)

                return
            }
            // dispatch(AuthActionCreators.setError('Недействительные учетные данные'))
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при авторизации'))
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false))
        }
    },
}
