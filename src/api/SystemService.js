import axios from './axios'
import { systemURL } from './URLS'

export default class SystemService {
    static async fetchReferences() {
        return await axios.get(systemURL.FETCH_REFERENCES, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async fetchSocUrls() {
        return await axios.get(systemURL.FETCH_SOC_URLS, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
