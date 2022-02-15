import SystemService from 'api/SystemService'
import { crateActionCreator, crateHandles } from 'utils'
import { systemTypes } from './types'

export const SystemActionCreators = {
   setReferences: (payload) => ({ type: systemTypes.SET_REFERENCES, payload }),
   setSocUrls: (payload) => ({ type: systemTypes.SET_SOC_URLS, payload }),
   setUserSettings: (payload) => ({ type: systemTypes.SET_USER_SETTINGS, payload }),
   ...crateActionCreator(SystemService),
}

export const defaultHandlers = crateHandles(SystemService)

export const systemHandlers = {
   ...defaultHandlers,
   fetchReferences: {
      ...defaultHandlers.fetchReferences,
      success: ({ dispatch, response, prevData, data }) => {
         const difficulty = data?.difficulty || []
         const event_types = data?.event_types || []
         const format = data?.format || []
         const themes = data?.themes || []
         const timings = data?.timings || []
         const type_study = data?.type_study || []

         dispatch(
            SystemActionCreators.setReferences({
               ...(data || {}),
               difficulty,
               event_types,
               format,
               themes,
               timings,
               type_study,
            }),
         )
      },
   },
   fetchSocUrls: {
      ...defaultHandlers.fetchSocUrls,
      success: ({ dispatch, response, prevData, data }) => dispatch(SystemActionCreators.setSocUrls(data || [])),
   },
   fetchUserSettings: {
      ...defaultHandlers.fetchUserSettings,
      success: ({ dispatch, response, prevData, data }) => {
         const user_file_types = data?.user_file_types || []
         const user_notify_sourses = data?.user_notify_sourses || []
         const user_notify_types = data?.user_notify_types || []

         dispatch(
            SystemActionCreators.setUserSettings({
               ...(data || {}),
               user_file_types,
               user_notify_sourses,
               user_notify_types,
            }),
         )
      },
   },
}
