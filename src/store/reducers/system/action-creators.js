import SystemService from 'api/SystemService'
import { systemTypes } from './types'

export const SystemActionCreators = {
    setReferences: (payload) => ({ type: systemTypes.SET_REFERENCES, payload }),
    setSocUrls: (payload) => ({ type: systemTypes.SET_SOC_URLS, payload }),
    fetchReferences: () => async (dispatch) => {
        try {
            const response = await SystemService.fetchReferences()

            if (response.status === 200) {
                const { data } = response

                dispatch(SystemActionCreators.setReferences(data))

                return
            }
        } catch (e) {
            console.log(e)
        }
    },
    fetchSocUrls: () => async (dispatch) => {
        try {
            const response = await SystemService.fetchSocUrls()

            if (response.status === 200) {
                const { data } = response

                dispatch(SystemActionCreators.setSocUrls(data))

                return
            }
        } catch (e) {
            console.log(e)
        }
    },
}
