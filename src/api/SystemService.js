import axios from './axios'
import { systemURL } from './URLS'

export default class SystemService {
    static async fetchReferences() {
        try {
            return await axios.get(systemURL.FETCH_REFERENCES, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } catch (error) {
            return error.response
        }
    }
    static async fetchSocUrls() {
        try {
            return await axios.get(systemURL.FETCH_SOC_URLS, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } catch (error) {
            return error.response
        }
    }
}
