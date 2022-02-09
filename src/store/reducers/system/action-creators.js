import SystemService from 'api/SystemService'
import { crateActionCreator, crateHandles } from 'utils'
import { systemTypes } from './types'

export const SystemActionCreators = {
    setReferences: (payload) => ({ type: systemTypes.SET_REFERENCES, payload }),
    setSocUrls: (payload) => ({ type: systemTypes.SET_SOC_URLS, payload }),
    ...crateActionCreator(SystemService),
}

export const defaultHandlers = crateHandles(SystemService)

export const systemHandlers = {
    ...defaultHandlers,
    fetchReferences: {
        ...defaultHandlers.fetchReferences,
        success: ({ dispatch, response, prevData, data }) => dispatch(SystemActionCreators.setReferences(data)),
    },
    fetchSocUrls: {
        ...defaultHandlers.fetchSocUrls,
        success: ({ dispatch, response, prevData, data }) => dispatch(SystemActionCreators.setSocUrls(data)),
    },
}
