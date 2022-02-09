import AuthService from 'api/AuthService'
import { crateActionCreator, crateHandles } from 'utils'
import { ModalsActionCreators } from '../modals/action-creators'
import { modalsContentTypes } from '../modals/types'
import { authTypes } from './types'

export const AuthActionCreators = {
   setIsAuth: (payload) => ({ type: authTypes.SET_AUTH, payload }),
   setUser: (payload) => ({ type: authTypes.SET_USER, payload }),
   setToken: (payload) => ({ type: authTypes.SET_TOKEN, payload }),
   setRoles: (payload) => ({ type: authTypes.SET_ROLES, payload }),
   setRole: (payload) => ({ type: authTypes.SET_ROLE, payload }),
   setNotifications: (payload) => ({ type: authTypes.SET_NOTIFICATIONS, payload }),
   setStep: (payload) => ({ type: authTypes.SET_STEP, payload }),
   logout: () => async (dispatch) => {
      dispatch(AuthActionCreators.setIsAuth(false))
      dispatch(AuthActionCreators.setUser({}))
      dispatch(AuthActionCreators.setToken(''))
      localStorage.removeItem('token')
   },
   ...crateActionCreator(AuthService),
}

export const defaultHandlers = crateHandles(AuthService)

export const authHandlers = {
   ...defaultHandlers,
   login: {
      ...defaultHandlers.login,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(ModalsActionCreators.setIsShow(false))
         dispatch(AuthActionCreators.setIsAuth(true))
         dispatch(AuthActionCreators.setUser(data?.user || {}))
         dispatch(AuthActionCreators.setToken(data?.token))
         localStorage.setItem('token', data?.token)
      },
      error: ({ dispatch, error }) => {
         dispatch(ModalsActionCreators.setBack(modalsContentTypes.LOGIN))
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'Недействительные учетные данные' }))
      },
   },
   restore: {
      ...defaultHandlers.restore,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(ModalsActionCreators.setBack(modalsContentTypes.LOGIN))
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'Мы отправили новый пароль на почту' }))
      },
      error: ({ dispatch, error }) => {
         dispatch(ModalsActionCreators.setBack(modalsContentTypes.LOGIN))
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'Недействительные учетные данные' }))
      },
   },
   register: {
      ...defaultHandlers.register,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(AuthActionCreators.setIsAuth(true))
         dispatch(AuthActionCreators.setUser(data?.user || {}))
         dispatch(AuthActionCreators.setToken(data?.token))
         localStorage.setItem('token', data?.token)
      },
      error: ({ dispatch, error }) => {
         dispatch(ModalsActionCreators.setBack(modalsContentTypes.LOGIN))
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'Произошла ошибка при регистрации' }))
      },
   },
   auth: {
      ...defaultHandlers.auth,
      success: ({ dispatch, response, prevData, data }) => {
         console.log(data)
         dispatch(AuthActionCreators.setIsAuth(true))
         dispatch(AuthActionCreators.setUser(data?.user || {}))
         dispatch(AuthActionCreators.setToken(data?.token))
         localStorage.setItem('token', data?.token)
      },
      error: ({ dispatch, error }) => {
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'Произошла ошибка при авторизации' }))
      },
   },
   settings: {
      ...defaultHandlers.settings,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(AuthActionCreators.setUser(data?.user || {}))
      },
      error: ({ dispatch, error }) => {
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'Произошла ошибка при сохранение данных' }))
      },
   },
   changeEmail: {
      ...defaultHandlers.changeEmail,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'E-mail успешно обновлен' }))
      },
      error: ({ dispatch, error }) => {
         dispatch(ModalsActionCreators.setIsShow(true))
         dispatch(ModalsActionCreators.setContent({ title: 'Произошла ошибка при изменении данных' }))
      },
   },
}
