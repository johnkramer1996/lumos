import SystemService from 'api/SystemService'
import { systemTypes } from './types'

export const SystemActionCreators = {
    setReferences: (references) => ({ type: systemTypes.SET_REFERENCES, payload: references }),
    fetchReferences: () => async (dispatch) => {
        try {
            const response = await SystemService.fetchReferences()

            if (response.status === 200) {
                const { data: references = {} } = response

                dispatch(SystemActionCreators.setReferences(references))

                return
            }
        } catch (e) {}
    },
}
