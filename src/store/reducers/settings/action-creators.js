import { settingsTypes } from './types'

export const SettingsActionCreators = {
    setTypeShow: (payload) => ({ type: settingsTypes.SET_TYPE_SHOW, payload }),
}
