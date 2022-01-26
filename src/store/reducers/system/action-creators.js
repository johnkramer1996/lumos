import SystemService from 'api/SystemService'
import { systemTypes } from './types'

export const SystemActionCreators = {
    setReferences: (payload) => ({ type: systemTypes.SET_REFERENCES, payload }),
    setSocUrls: (payload) => ({ type: systemTypes.SET_SOC_URLS, payload }),
    fetchReferences: () => async (dispatch) => {
        try {
            const response = await SystemService.fetchReferences()

            if (response.status === 200) {
                dispatch(SystemActionCreators.setReferences(response.data))
            }
        } catch (e) {
            console.log(e.response)
        }
    },
    fetchSocUrls: () => async (dispatch) => {
        try {
            const response = await SystemService.fetchSocUrls()

            if (response.status === 200) {
                dispatch(SystemActionCreators.setSocUrls(response.data))
            }
        } catch (e) {
            console.log(e.response)
        }
    },
}
